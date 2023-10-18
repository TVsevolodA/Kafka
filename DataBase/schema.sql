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
  date_admission    DATE NOT NULL DEFAULT CURRENT_DATE,
  cabinet_number    smallint,
  doctor            varchar (100),
  policy_number     smallint
);