CREATE DATABASE IF NOT EXISTS hotel;
USE hotel;

CREATE TABLE booking (
	id INT AUTO_INCREMENT PRIMARY KEY,
    room_type VARCHAR(10) NOT NULL,
    guest_name VARCHAR(100) NOT NULL,
    guest_email VARCHAR(100) NOT NULL,
    guest_phone VARCHAR(30) NOT NULL,
    check_in_date DATE NOT NULL,
    check_out_date DATE NOT NULL
);