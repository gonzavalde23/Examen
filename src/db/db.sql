create database if not exists userlogin;

use userlogin;

create table users(
    id int auto_increment primary key,
    nameuser varchar(255) not null,
    password varchar(255) not null
);
  
describe users;

-- Insertar datos en la tabla users
INSERT INTO users (nameuser, password) VALUES ('javi',1234);
