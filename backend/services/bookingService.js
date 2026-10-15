const {
    getBookings: daoGetBookings,
    createBooking: daoCreateBooking,
    updateBooking: daoUpdateBooking,
    deleteBooking: daoDeleteBooking
} = require("../dao/bookingDao");


function badRequest(message) {
    const error = new Error(message);
    error.status = 400;
    return error;
}

function validateBooking(booking) {

    if(!booking) {
        throw badRequest("Request body is missing"); 
    }

    const requiredFields = ["room_type", "guest_name", "guest_email", "guest_phone", "check_in_date", "check_out_date"];

    const missingFields = requiredFields.filter((field) => !booking[field]);

    if (missingFields.length > 0) {
        throw badRequest(`Missing fields: ${missingFields.join(", ")}`);
    }

    const allowedRoomTypes = ["Single", "Double"];

    if (!allowedRoomTypes.includes(booking.room_type)) {
        throw badRequest("Room type must be Single or Double");
    }

    if (booking.check_out_date <= booking.check_in_date) {
        throw badRequest("check_out_date must be after check_in_date");
    }
    
}

async function getBookings() {
    return await daoGetBookings();
}

async function createBooking(newBooking) {
    validateBooking(newBooking);
    return await daoCreateBooking(newBooking);
}

async function updateBooking(id, updatedBooking) {
    validateBooking(updatedBooking);
    return await daoUpdateBooking(id, updatedBooking);
}

async function deleteBooking(id) {
    return await daoDeleteBooking(id);
}

module.exports = { getBookings, createBooking, updateBooking, deleteBooking };

