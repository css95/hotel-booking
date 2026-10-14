const database = require("../db");

async function getBookings() {

    const db = await database;
    const bookings = await db.all("SELECT * FROM booking");
    return bookings;

}

async function createBooking(newBooking) {
    
    const db = await database;
    const result = await db.run(
        "INSERT INTO booking (room_type, guest_name, guest_email, guest_phone, check_in_date, check_out_date) VALUES (?, ?, ?, ?, ?, ?)", 
        newBooking.room_type,
        newBooking.guest_name,
        newBooking.guest_email,
        newBooking.guest_phone,
        newBooking.check_in_date,
        newBooking.check_out_date
    );

    return result.lastID;

}

async function updateBooking(id, updatedBooking) {

    const db = await database;

    await db.run(
        "UPDATE booking SET room_type = ?, guest_name = ?, guest_email = ?, guest_phone = ?, check_in_date = ?, check_out_date = ? WHERE id = ?",
        updatedBooking.room_type,
        updatedBooking.guest_name,
        updatedBooking.guest_email,
        updatedBooking.guest_phone,
        updatedBooking.check_in_date,
        updatedBooking.check_out_date,
        id
    );

}

module.exports = { getBookings, createBooking, updateBooking }

