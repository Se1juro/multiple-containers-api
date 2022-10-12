CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name varchar(250) NOT NULL,
  lastname varchar(250) NOT NULL,
  address varchar(250) NOT NULL,
  email varchar(250) NOT NULL,
  phone varchar(250) NOT NULL
);
