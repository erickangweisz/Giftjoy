CREATE DATABASE IF NOT EXISTS giftjoy
USE giftjoy

CREATE TABLE products(
id       int(255) auto_increment not null,
title   varchar(255),
description TEXT,
location TEXT,
image   varchar(255),
category  varchar(255),
telephone   varchar(255),
CONSTRAINT pk_restaurantes PRIMARY KEY(id)
)ENGINE=InnoDb;