INSERT INTO doctors (surname, specialization)
    VALUES ('Иванов', 'Лор');
INSERT INTO doctors (surname, specialization)
    VALUES ('Сидоров', 'Хирург');

INSERT INTO patients (surname, card_number)
    VALUES ('Петров', 651782);
INSERT INTO patients (surname, card_number)
    VALUES ('Попов', 310804);
INSERT INTO patients (surname, card_number)
    VALUES ('Сухов', 617852);

INSERT INTO records (date_admission, cabinet_number, doctor, policy_number)
    VALUES ('2020-01-01', 1, 'Иванов', 12345);
INSERT INTO records (date_admission, cabinet_number, doctor, policy_number)
    VALUES ('2020-01-02', 1, 'Иванов', 20549);
INSERT INTO records (date_admission, cabinet_number, doctor, policy_number)
    VALUES ('2020-01-01', 2, 'Сидоров', 12347);
INSERT INTO records (date_admission, cabinet_number, doctor, policy_number)
    VALUES ('2020-01-03', 1, 'Иванов', 20548);
INSERT INTO records (date_admission, cabinet_number, doctor, policy_number)
    VALUES ('2020-01-01', 2, 'Сидоров', 20544);
INSERT INTO records (date_admission, cabinet_number, doctor, policy_number)
    VALUES ('2020-01-02', 2, 'Сидоров', 20541);
INSERT INTO records (date_admission, cabinet_number, doctor, policy_number)
    VALUES ('2020-01-01', 1, 'Иванов', 20542);
INSERT INTO records (date_admission, cabinet_number, doctor, policy_number)
    VALUES ('2020-01-02', 2, 'Сидоров', 20549);
INSERT INTO records (date_admission, cabinet_number, doctor, policy_number)
    VALUES ('2020-01-03', 2, 'Сидоров', 10549);
INSERT INTO records (date_admission, cabinet_number, doctor, policy_number)
    VALUES ('2020-01-02', 5, 'Иванов', 12348);
INSERT INTO records (date_admission, cabinet_number, doctor, policy_number)
    VALUES ('2020-01-03', 5, 'Иванов', 12349);
INSERT INTO records (date_admission, cabinet_number, doctor, policy_number)
    VALUES ('2020-01-03', 2, 'Сидоров', 12009);
INSERT INTO records (date_admission, cabinet_number, doctor, policy_number)
    VALUES ('2020-01-02', 1, 'Иванов', 11001);
INSERT INTO records (date_admission, cabinet_number, doctor, policy_number)
    VALUES ('2020-01-03', 2, 'Сидоров', 11011);
INSERT INTO records (date_admission, cabinet_number, doctor, policy_number)
    VALUES ('2020-01-01', 2, 'Сидоров', 11000);