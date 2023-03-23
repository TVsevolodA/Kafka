CREATE DATABASE polyclinic;

CREATE TABLE doctors (
  id                serial,
  surname           varchar (100),
  specialization    varchar (100)
);

CREATE TABLE patients (
  id            serial,
  surname       varchar (100),
  card_number   bigint
);

CREATE TABLE records (
  id                bigserial,
  cabinet_number    smallint,
  policy_number     smallint
);