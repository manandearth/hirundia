CREATE TABLE register (username VARCHAR(20), encrypted_password VARCHAR(100), role VARCHAR(20));
--;;
CREATE TABLE nests (id SERIAL, street VARCHAR(64), number INT, gps POINT, species VARCHAR(64), height INT, facing VARCHAR(32), type VARCHAR(100), date DATE, destroyed BOOLEAN, destroyed_date DATE, author VARCHAR(64));

