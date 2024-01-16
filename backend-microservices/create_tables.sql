CREATE TABLE IF NOT EXISTS customer ( id SERIAL PRIMARY KEY,
                                        username VARCHAR(255) NOT NULL,
                                        email VARCHAR(255) NOT NULL,
                                        password VARCHAR(255) NOT NULL,
                                        role VARCHAR(255) NOT NULL);

-- Inserting three rows of data
INSERT INTO customer (username, email, password, role) VALUES
                                                           ('john_doe', 'john@example.com', 'password123', 'user'),
                                                           ('jane_smith', 'jane@example.com', 'securepass', 'admin'),
                                                           ('bob_jackson', 'bob@example.com', 'pass1234', 'user');