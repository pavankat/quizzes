-- users
-- id name gender

-- pets
-- id user_id name type age birthday

	-- 14. 
		-- return the difference of the birthdays of the oldest pet and youngest pet of
		-- users that have 3 to 5 pets 
	
	WITH user_pet_count AS (
		SELECT p.user_id, COUNT(*) AS pet_count
		FROM users u
		LEFT JOIN pets p 
		ON u.id = p.user_id
		GROUP BY p.user_id
	), pets_in_question AS (
		SELECT * 
		FROM pets
		WHERE user_id IN (
			SELECT user_id
			FROM user_pet_count
			WHERE pet_count BETWEEN 2 AND 6
		)
	)
	SELECT (SELECT MAX(birthday) FROM pets_in_question) - (SELECT MIN(birthday) FROM pets_in_question);


	-- 7. get the average age of all the pets
		SELECT AVG(age) FROM pets;
	-- 8. get the max age of all the pets
		SELECT MAX(age) FROM pets;
	-- 9. get the min age of all the pets
		SELECT MIN(age) FROM pets;
	-- 10. who owns the youngest pet?
		SELECT users.id, users.name AS user_name, 
			pets.name AS pet_name 
		FROM users
		LEFT JOIN pets 
		ON users.id = pets.user_id
		WHERE pets.age = (SELECT MIN(age) FROM pets)

		--this is better:
			SELECT users.id, users.name AS user_name, 
				pets.name AS pet_name 
			FROM users
			INNER JOIN pets 
			ON users.id = pets.user_id
			WHERE pets.age = (SELECT MIN(age) FROM pets)

			-- probably won't work
				WITH minn AS (SELECT MIN(age) FROM pets)
				SELECT users.id, users.name AS user_name, 
					pets.name AS pet_name 
				FROM users
				INNER JOIN pets 
				ON users.id = pets.user_id
				WHERE pets.age = minn;
	-- 11. show the min pet age per user gender
		SELECT gender, MIN(p.age)
		FROM users u
		LEFT JOIN pets p 
		ON u.id = p.user_id 
		GROUP BY gender

	-- 12. show all the types of pets
		SELECT DISTINCT(type) FROM pets;
	-- 13. show the average age per pet type
		SELECT p.type, AVG(p.age)
		FROM pets p
		GROUP BY p.type

	-- 5. show all the users and their pets
		SELECT users.id, users.name AS user_name, 
			pets.name AS pet_name 
		FROM users
		LEFT JOIN pets 
		ON users.id = pets.user_id;
	-- 6. show all the pets and their users
		SELECT users.id, users.name AS user_name, 
			pets.name AS pet_name 
		FROM pets
		LEFT JOIN users 
		ON users.id = pets.user_id;
-- 2:37

	-- 1. write the query to grab all the users
		SELECT * FROM users;
	-- 2. write the query to grab all the pets
		SELECT * FROM pets;
	-- 3. write the query to grab all the users with a gender of 'female'
		SELECT * FROM users WHERE gender = 'female';
	-- 4. write the query to grab all the pets with a type of 'cat', 'dog', 'parrot', 'lizard', 'iguana', 'robin' with an age of 3 to 9 (inclusive)
		SELECT * 
		FROM pets
		WHERE type IN ('cat', 'dog', 'parrot', 'lizard', 'iguana', 'robin') AND age BETWEEN 2 AND 10;

		SELECT * 
		FROM pets
		WHERE lower(type) IN ('cat', 'dog', 'parrot', 'lizard', 'iguana', 'robin') AND (age >= 3 AND age <= 9)	
2:29