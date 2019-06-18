CREATE TABLE register (username VARCHAR(20), encrypted_password VARCHAR(100), role VARCHAR(20));
--;;
CREATE TABLE nests (id SERIAL, street VARCHAR(64), house_number_name VARCHAR(32), gps POINT, species VARCHAR(64), height INT, facing VARCHAR(32), type VARCHAR(100), date DATE, destroyed BOOLEAN, destroyed_date DATE, author VARCHAR(64));

