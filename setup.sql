DROP TABLE IF EXISTS wrongs;
DROP TABLE IF EXISTS people;

CREATE TABLE people (
    person_id INT GENERATED ALWAYS AS IDENTITY,
    person_name VARCHAR(50) NOT NULL,
    PRIMARY KEY(person_id)
    );

INSERT INTO people (person_name)
VALUES ('Peter'), ('Susan'), ('Edmund'), ('Lucy');

CREATE TABLE wrongs (
    wrong_id INT GENERATED ALWAYS AS IDENTITY,
    perpetrator_id INT NOT NULL,
    victim_id INT NOT NULL,
    description VARCHAR(200),
    forgiven BOOLEAN DEFAULT FALSE,
    forgotten BOOLEAN DEFAULT FALSE,
    revenged BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (wrong_id),
    FOREIGN KEY (perpetrator_id) REFERENCES people(person_id),
    FOREIGN KEY (victim_id) REFERENCES people(person_id)
);

INSERT INTO wrongs
    (perpetrator_id, victim_id, description)
VALUES
    (3, 2, 'Ate his pet chicken.');
