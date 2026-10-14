const {
    getBookings: daoGetBookings,
    createBooking: daoCreateBooking,
    updateBooking: daoUpdateBooking,
    deleteBooking: daoDeleteBooking
} = require("./dao/bookingDao");


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
    
}