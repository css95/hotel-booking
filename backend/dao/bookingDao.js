const database = require("../db");

function convertDateToNumber(dateString) {
    const dateNumber = Date.parse(dateString);
    return dateNumber;
}

function convertDateToString(dateNumber) {
    const dateString = new Date(dateNumber).toISOString().slice(0, 10);
    return dateString;
}

function convertBookingDatesToStrings(booking) {
    return { 
        ...booking, 
        check_in_date: convertDateToString(booking.check_in_date), 
        check_out_date: convertDateToString(booking.check_out_date) 
    };
}

async function getBookings() {

    const db = await database;
    const bookingRows = await db.all("SELECT * FROM booking");
    const bookings = bookingRows.map(convertBookingDatesToStrings);
    return bookings;
}

async function getBookingById(id) {

    const db = await database;
    const bookingRow = await db.get("SELECT * FROM booking WHERE id = ?", id);

    if (!bookingRow) {
        return undefined;
    } else {
        const booking = convertBookingDatesToStrings(bookingRow);
        return booking;
    }
}

async function createBooking(newBooking) {
    
    const db = await database;
    const result = await db.run(
        "INSERT INTO booking (room_type, guest_name, guest_email, guest_phone, check_in_date, check_out_date) VALUES (?, ?, ?, ?, ?, ?)", 
        newBooking.room_type,
        newBooking.guest_name,
        newBooking.guest_email,
        newBooking.guest_phone,
        convertDateToNumber(newBooking.check_in_date),
        convertDateToNumber(newBooking.check_out_date)
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
        convertDateToNumber(updatedBooking.check_in_date),
        convertDateToNumber(updatedBooking.check_out_date),
        id
    );

}

async function deleteBooking(id) {

    const db = await database;
    await db.run("DELETE FROM booking WHERE id = ?", id);

}


module.exports = { getBookings, getBookingById, createBooking, updateBooking, deleteBooking }

