-- Requires PostgreSQL on your local system.
-- Run: `$ psql < Fundraising.sql`

DROP DATABASE donors;
CREATE DATABASE donors;
\connect donors;

-- TABLE SCHEMAS

CREATE TABLE people
(
    id INT PRIMARY KEY,
    name TEXT NOT NULL,
    address_street TEXT,
    address_zip TEXT
);

CREATE TABLE donations
(
    id SERIAL PRIMARY KEY,
    people_ID SERIAL REFERENCES people(id),
    donation_date TIMESTAMP
    WITH TIME ZONE NOT NULL,
    party INT NOT NULL DEFAULT 0 
        -- (1 = Republican, -1 = Democrat)
);

-- SEED DATA

INSERT INTO people
    (id, name, address_street, address_zip)
VALUES
    (11, 'A A', 'A Street', '1111'),
    (22, 'B B', 'B Street', '22222'),
    (33, 'C C', 'C Street', '33333');

INSERT INTO donations
    (people_ID, donation_date, party)
VALUES
    (22, '2020-09-19 10:23:54-08', 1),
    (11, '2020-09-19 10:22:54-08', -1),
    (11, '2020-09-19 10:21:54-08', 1),
    (11, '2020-09-19 10:20:54-08', -1),
    (11, '2020-09-19 10:20:54-08', -1);


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
    CASE 
    WHEN AVG(party)<0 THEN 'D'
    WHEN AVG(party)>0 THEN 'R'
    ELSE 'U'
END party,
    p.address_zip
FROM People AS p
    LEFT JOIN donations AS d
    ON p.id=d.people_ID
GROUP BY p.id
ORDER BY 
CASE 
    WHEN MAX(d.donation_date) IS NULL THEN 1 
    ELSE 0
END, 
MAX(d.donation_date) DESC;



