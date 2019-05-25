{"version":3,"file":"bundle.js","sources":["../node_modules/vega-spec-injector/es/index.js","../src/VegaLayer.js"],"sourcesContent":["function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar _class = function () {\n  function _class(onWarning) {\n    _classCallCheck(this, _class);\n\n    this.onWarning = onWarning || (console ? console.log : function () {});\n  }\n\n  /**\n   * Add values like signals to a vega spec, or ignore if the they are already defined.\n   * @param {object} spec vega spec to modify and return\n   * @param {string} field name of the vega spec branch, e.g. `signals`\n   * @param {<object|string>[]} values to add\n   * @return {object} returns the same spec object as passed in\n   */\n\n\n  _class.prototype.addToList = function addToList(spec, field, values) {\n    var newSigs = new Map(values.map(function (v) {\n      return typeof v === \"string\" ? [v, { name: v }] : [v.name, v];\n    }));\n\n    for (var _iterator = this.findUndefined(spec, field, newSigs.keys()), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {\n      var _ref;\n\n      if (_isArray) {\n        if (_i >= _iterator.length) break;\n        _ref = _iterator[_i++];\n      } else {\n        _i = _iterator.next();\n        if (_i.done) break;\n        _ref = _i.value;\n      }\n\n      var sig = _ref;\n\n      spec[field].push(newSigs.get(sig));\n    }\n\n    return spec;\n  };\n\n  /**\n   * Set a spec field, and warn if overriding an existing value in that field\n   * @param {object} spec vega spec to modify and return\n   * @param {string} field\n   * @param {*} value\n   * @return {object} returns the same spec object as passed in\n   */\n\n\n  _class.prototype.overrideField = function overrideField(spec, field, value) {\n    if (spec[field] && spec[field] !== value) {\n      this.onWarning(\"Overriding \" + field + \": \" + spec[field] + \" \\uD800\\uDCD8 \" + value);\n    }\n    spec[field] = value;\n    return spec;\n  };\n\n  /**\n   * Find all names that are not defined in the spec's section. Creates section if missing.\n   * @param {object} spec\n   * @param {string} section\n   * @param {Iterable.<string>} names\n   * @return {Iterable.<string>}\n   */\n\n\n  _class.prototype.findUndefined = function findUndefined(spec, section, names) {\n    if (!spec.hasOwnProperty(section)) {\n      spec[section] = [];\n      return names;\n    } else if (!Array.isArray(spec[section])) {\n      throw new Error(\"spec.\" + section + \" must be an array\");\n    }\n\n    var nameStrings = new Set(names);\n    for (var _iterator2 = spec[section], _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {\n      var _ref2;\n\n      if (_isArray2) {\n        if (_i2 >= _iterator2.length) break;\n        _ref2 = _iterator2[_i2++];\n      } else {\n        _i2 = _iterator2.next();\n        if (_i2.done) break;\n        _ref2 = _i2.value;\n      }\n\n      var obj = _ref2;\n\n      // If obj has a name field, delete that name from the names\n      // Set will silently ignore delete() for undefined names\n      if (obj.name) nameStrings.delete(obj.name);\n    }\n\n    return nameStrings;\n  };\n\n  return _class;\n}();\n\nexport default _class;","import Vsi from 'vega-spec-injector';\n// eslint-disable-next-line import/extensions,import/no-unresolved\nimport L from 'leaflet';\nimport { version } from '../package.json';\n\nL.vega = function vega(spec, options) {\n  return new L.VegaLayer(spec, options);\n};\n\nL.VegaLayer = (L.Layer ? L.Layer : L.Class).extend({\n\n  options: {\n    // FIXME: uses window.vega\n    // eslint-disable-next-line no-undef\n    vega: window && window.vega,\n\n    // If Vega spec creates controls (inputs), put them all into this container\n    bindingsContainer: undefined,\n\n    // Options to be passed to the Vega`s parse method\n    parseConfig: undefined,\n\n    // Options to be passed ot the Vega`s View constructor\n    viewConfig: undefined,\n\n    // If true, graph will be repainted only after the map has finished moving (faster)\n    delayRepaint: true,\n\n    // optional warning handler:   (warning) => { ... }\n    onWarning: false,\n\n    // optional error handler:   (err) => { ...; throw err; }\n    onError: false,\n  },\n\n  initialize(spec, options) {\n    L.Util.setOptions(this, options);\n\n    // expression parsing in Vega is global,\n    // ensure it hasn't been intialized before,\n    // and make sure calls to setMapView() only happen\n    // when the View instance was created by us\n    const { vega } = this.options;\n    if (!vega.expressionFunction('setMapView')) {\n      vega.expressionFunction(\n        'setMapView',\n        function setMapView(...args) {\n          const view = this.context.dataflow;\n          const handler = view.Leaflet_setMapViewHandler;\n          if (!handler) throw new Error('setMapView() is not defined for this graph');\n          view.runAfter(() => handler(...args));\n        }\n      );\n    }\n    this._ignoreSignals = 0;\n    this.disableSignals = () => {\n      this._ignoreSignals++;\n    };\n    this.enableSignals = () => {\n      this._ignoreSignals--;\n      if (this._ignoreSignals < 0) {\n        this._ignoreSignals = 0;\n        throw new Error('Too many calls to enableSignals()');\n      }\n    };\n\n    // Inject signals into the spec\n    const vsi = new Vsi(options.onWarning);\n\n    vsi.overrideField(spec, 'padding', 0);\n    vsi.overrideField(spec, 'autosize', 'none');\n    vsi.addToList(spec, 'signals', ['zoom', 'latitude', 'longitude']);\n    vsi.addToList(spec, 'projections', [this.defaultProjection]);\n\n    this._spec = spec;\n  },\n\n  /**\n   * @param {L.Map} map\n   * @return {L.VegaLayer}\n   */\n  addTo(map) {\n    map.addLayer(this);\n    return this;\n  },\n\n  onAdd(map) {\n    this._onAddAsync(map);\n    return this;\n  },\n\n  async _onAddAsync(map) {\n    this.disableSignals();\n\n    try {\n      this._map = map;\n      this._vegaContainer = L.DomUtil.create('div', 'leaflet-vega-container');\n      map._panes.overlayPane.appendChild(this._vegaContainer);\n\n      const { vega, viewConfig } = this.options;\n\n      const dataflow = vega.parse(this._spec, this.options.parseConfig);\n\n      if (viewConfig && viewConfig.loader) {\n        const oldLoad = viewConfig.loader.load.bind(viewConfig.loader);\n        viewConfig.loader.load = (uri, opt) => oldLoad(uri, opt);\n      }\n      this._view = new vega.View(dataflow, viewConfig);\n\n      if (!viewConfig || viewConfig.logLevel === undefined) {\n        this._view.logLevel(vega.Warn);\n      }\n      if (this.options.onWarning) {\n        this._view.warn = this.options.onWarning;\n      }\n      if (this.options.onError) {\n        this._view.error = this.options.onError;\n      }\n\n      this._view\n        .padding({\n          left: 0, right: 0, top: 0, bottom: 0,\n        })\n        .initialize(this._vegaContainer, this.options.bindingsContainer)\n        .hover();\n\n      const onSignal = (sig, value) => this._onSignalChange(sig, value);\n\n      this._view\n        .addSignalListener('latitude', onSignal)\n        .addSignalListener('longitude', onSignal)\n        .addSignalListener('zoom', onSignal);\n\n      map.on(this.options.delayRepaint ? 'moveend' : 'move', () => this._resetAsync());\n      map.on('zoomend', () => this._resetAsync());\n\n      /**\n       * Given longitude/latitude/zoom or bounding box, position the map to those coordinates\n       * The function can be called in one of the following ways:\n       *  setMapView(latitude, longitude)\n       *  setMapView(latitude, longitude, zoom)\n       *  setMapView([longitude, latitude])\n       *  setMapView([longitude, latitude], zoom)\n       *  setMapView([[lng1,lat1],[lng2,lat2]])\n       */\n      this._view.Leaflet_setMapViewHandler = (...args) => {\n        function throwError() {\n          throw new Error('Unexpected setMapView() parameters. It could be called with a bounding box setMapView([[longitude1,latitude1],[longitude2,latitude2]]), or it could be the center point setMapView([longitude, latitude], optional_zoom), or it can be used as setMapView(latitude, longitude, optional_zoom)');\n        }\n\n        function checkArray(val) {\n          if (!Array.isArray(val) || val.length !== 2 ||\n            typeof val[0] !== 'number' || typeof val[1] !== 'number'\n          ) {\n            throwError();\n          }\n          return val;\n        }\n\n        let lng;\n        let lat;\n        let zoom;\n        switch (args.length) {\n          default:\n            throwError();\n            break;\n          case 1: {\n            const arg = args[0];\n            if (Array.isArray(arg) && arg.length === 2 &&\n              Array.isArray(arg[0]) && Array.isArray(arg[1])\n            ) {\n              // called with a bounding box, need to reverse order\n              const [lng1, lat1] = checkArray(arg[0]);\n              const [lng2, lat2] = checkArray(arg[1]);\n              map.fitBounds(L.latLngBounds(L.latLng(lat1, lng1), L.latLng(lat2, lng2)));\n            } else {\n              // called with a center point and no zoom\n              [lng, lat] = checkArray(arg);\n            }\n            break;\n          }\n          case 2:\n            if (Array.isArray(args[0])) {\n              [lng, lat] = checkArray(args[0]);\n              // eslint-disable-next-line prefer-destructuring\n              zoom = args[1];\n            } else {\n              [lat, lng] = args;\n            }\n            break;\n          case 3:\n            [lat, lng, zoom] = args;\n            break;\n        }\n\n        if (lat !== undefined && lng !== undefined) {\n          if (typeof lat !== 'number' || typeof lng !== 'number') {\n            throwError();\n          }\n          if (zoom === undefined) {\n            zoom = map.getZoom();\n          } else if (typeof zoom !== 'number') {\n            throwError();\n          }\n          map.setView({ lat, lng }, zoom);\n        }\n      };\n      await this._resetAsync(true);\n    } catch (err) {\n      this._reportError(err);\n    } finally {\n      this.enableSignals();\n    }\n  },\n\n  onRemove() {\n    if (this._view) {\n      this._view.finalize();\n      this._view = null;\n    }\n\n    // TODO: once Leaflet 0.7 is fully out of the picture, replace this with L.DomUtil.empty()\n    const el = this._vegaContainer;\n    while (el.firstChild) {\n      el.removeChild(el.firstChild);\n    }\n  },\n\n  _reportError(err) {\n    /* eslint-disable no-console */\n    if (this.options.onError) {\n      this.options.onError(err);\n    } else if (console && console.error) {\n      console.error(err);\n    }\n    /* eslint-enable */\n  },\n\n  _onSignalChange(sig, value) {\n    if (this._ignoreSignals) {\n      return;\n    }\n\n    try {\n      const map = this._map;\n      const center = map.getCenter();\n      let zoom = map.getZoom();\n\n      switch (sig) {\n        case 'latitude':\n          center.lat = value;\n          break;\n        case 'longitude':\n          center.lng = value;\n          break;\n        case 'zoom':\n          zoom = value;\n          break;\n        default:\n          return; // ignore\n      }\n\n      map.setView(center, zoom);\n    } catch (err) {\n      this._reportError(err);\n    }\n  },\n\n  async _resetAsync(force) {\n    if (!this._view) return;\n\n    this.disableSignals();\n    try {\n      const map = this._map;\n      const view = this._view;\n      const topLeft = map.containerPointToLayerPoint([0, 0]);\n      L.DomUtil.setPosition(this._vegaContainer, topLeft);\n\n      const size = map.getSize();\n      const center = map.getCenter();\n      const zoom = map.getZoom();\n\n      // Only send changed signals to Vega.\n      // Detect if any of the signals have changed before calling run()\n      const sendSignal = (sig, value) => {\n        if (view.signal(sig) !== value) {\n          view.signal(sig, value);\n          return 1;\n        }\n        return 0;\n      };\n\n      // update if any of the signal's values have changed\n      const changed =\n        sendSignal('width', size.x) +\n        sendSignal('height', size.y) +\n        sendSignal('latitude', center.lat) +\n        sendSignal('longitude', center.lng) +\n        sendSignal('zoom', zoom);\n\n      if (changed > 0 || force) {\n        await view.runAsync();\n      }\n    } catch (err) {\n      this._reportError(err);\n    } finally {\n      this.enableSignals();\n    }\n  },\n\n  defaultProjection: {\n    name: 'projection',\n    type: 'mercator',\n    scale: { signal: '256*pow(2,zoom)/2/PI' },\n    rotate: [{ signal: '-longitude' }, 0, 0],\n    center: [0, { signal: 'latitude' }],\n    translate: [{ signal: 'width/2' }, { signal: 'height/2' }],\n    fit: false,\n  },\n\n});\n\nL.VegaLayer.version = version;\n"],"names":["L","vega","spec","options","VegaLayer","Layer","Class","extend","window","undefined","Util","setOptions","expressionFunction","setMapView","args","view","context","dataflow","handler","Leaflet_setMapViewHandler","Error","runAfter","_ignoreSignals","disableSignals","enableSignals","vsi","Vsi","onWarning","overrideField","addToList","defaultProjection","_spec","map","addLayer","_onAddAsync","_map","_vegaContainer","DomUtil","create","_panes","overlayPane","appendChild","viewConfig","parse","parseConfig","loader","load","bind","uri","opt","oldLoad","_view","View","logLevel","Warn","warn","onError","error","padding","right","top","bottom","initialize","bindingsContainer","hover","onSignal","sig","value","_onSignalChange","addSignalListener","on","delayRepaint","_resetAsync","throwError","checkArray","val","Array","isArray","length","lng","lat","zoom","arg","lng1","lat1","lng2","lat2","fitBounds","latLngBounds","latLng","getZoom","setView","_reportError","finalize","el","firstChild","removeChild","err","console","center","getCenter","force","containerPointToLayerPoint","setPosition","topLeft","getSize","sendSignal","signal","size","x","y","changed","runAsync","version"],"mappings":"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"}