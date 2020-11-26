-- Requires PostgreSQL on your local system.
-- Run: `$ psql < Fundraising.sql`

DROP DATABASE donors;
CREATE DATABASE donors;
\connect donors;

-- TABLE

CREATE TABLE people(
    id INT PRIMARY KEY,
    name TEXT NOT NULL,
    address_street TEXT,
    address_zip TEXT,
    phone_number TEXT,
    phone_extension TEXT,
    email TEXT UNIQUE 
);

CREATE TABLE donations(
    id SERIAL PRIMARY KEY,
    people_ID SERIAL REFERENCES people(id),
    donation_date DATE NOT NULL,
    donation_amt NUMERIC NOT NULL,
    party INT NOT NULL DEFAULT 0 
);

CREATE TABLE engagements(
    id SERIAL PRIMARY KEY,
    people_ID SERIAL REFERENCES people(id),
    event_name TEXT,
    date DATE NOT NULL,
    event_type TEXT NOT NULL
);

-- SEED DATA

INSERT INTO people
    (id, name, address_street, address_zip)
VALUES
    (11, 'A A', 'A Street', '1111'),
    (22, 'B B', 'B Street', '22222'),
    (33, 'C C', 'C Street', '33333'),
    (44, 'D D', 'D Street', '33333');

INSERT INTO donations
    (people_ID, donation_date, donation_amt, party)
VALUES
    (22, '2020-09-19', 22, 1),
    (11, '2020-09-19', 11, -1),
    (11, '2020-09-18', 11, 1),
    (11, '2020-08-17', 11, -1),
    (11, '2020-06-16', 11, -1);

INSERT INTO engagements
    (people_ID, date, event_type)
VALUES
    (44, '2020-09-18', ''),
    (44, '2020-09-17', ''),
    (11, '2020-09-16', ''),
    (11, '2020-09-16', ''),
    (44, '2020-08-16', ''),
    (11, '2020-07-16', ''),
    (44, '2020-04-16', ''),
    (11, '2020-04-16', ''),
    (11, '2020-04-19', '');


-- QUERIES

-- Identify donors who are actively engaged 
-- returns: 
-- name
-- most recent donation
-- political party
-- zip code

SELECT
    p.name,
    MAX(d.donation_date) AS most_recent_donation,
    MAX(e.date) AS most_recent_engagement,
--     CASE 
--     WHEN AVG(party)<0 THEN 'D'
--     WHEN AVG(party)>0 THEN 'R'
--     ELSE 'U'
-- END party_preference,
    p.address_zip
FROM people AS p
    LEFT JOIN donations AS d
    ON p.id=d.people_ID
    LEFT JOIN engagements AS e 
    ON p.id=e.people_ID
GROUP BY p.id
ORDER BY 
CASE 
    WHEN MAX(d.donation_date) IS NULL THEN 1 
    ELSE 0
END, 
MAX(d.donation_date) DESC;



