import React, { useState, useEffect } from "react";
import { getTransitData } from "../api.js";

const Overview = () => {
  const [totalNests, setTotalNests] = useState(10);
  const [count, setCount] = useState({
    swallowNests: 0,
    martinNests: 0,
    swiftNests: 0,
    pallidSwiftNests: 0,
    redrumpedSwallowNests: 0,
    destroyedNests: 0
  });

  useEffect(() => {
    getTransitData().then(response => {
      if (response) {
        const data = response.data ? response.data : "boo";
        setTotalNests(data.length);
        setCount({
          swallowNests: data.filter(e => e.species === "swallow").length,
          martinNests: data.filter(e => e.species === "martin").length,
          swiftNests: data.filter(e => e.species === "swift").length,
          pallidSwiftNests: data.filter(e => e.species === "pallid_swift")
            .length,
          redrumpedSwallowNests: data.filter(
            e => e.species === "red_rumped_swallow"
          ).length,
          destroyedNests: data.filter(e => e.destroyed === true).length
        });
      }
    });
  }, []);

  return (
    <div>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Key</th>
            <th scope="col">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>total nests in db:</td>
            <td>{totalNests}</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
      <div>
        <span>total nests in db:</span>
        <span>{totalNests}</span>
      </div>
      <div>
        <span>of which destroyed:</span>
        <span>{count.destroyedNests}</span>
      </div>
      <div>
        <span>current nests then:</span>
        <span>{totalNests - count.destroyedNests}</span>
      </div>
      <div>
        <span>swallow nests:</span>
        <span>{count.swallowNests}</span>
      </div>
      <div>
        <span>swift nests:</span>
        <span>{count.swiftNests}</span>
      </div>
      <div>
        <span>martin nests:</span>
        <span>{count.martinNests}</span>
      </div>
      <div>
        <span>red rumped swallow nests:</span>
        <span>{count.redrumpedSwallowNests}</span>
      </div>
      <div>
        <span>pallid swift nests:</span>
        <span>{count.pallidSwiftNests}</span>
      </div>
    </div>
  );
};

export default Overview;
