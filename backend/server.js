const express = require('express');
const cors = require('cors');
const { getBookings, createBooking } = require("./dao/bookingDao");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/bookings", async (req, res) => {

    try {
        const bookings = await getBookings();
        res.json(bookings);

    } catch(error) {
        console.log(`Something went wrong: ${error}`);
        res.status(500).json({ "message" : "Something went wrong" });
    }

})

app.post("/bookings", async (req, res) => {

    try {
        const bookingId = await createBooking(req.body);
        res.status(201).json({ id: bookingId });

    } catch(error) {
        console.log(`Something went wrong: ${error}`);
        res.status(500).json({ "message" : "Something went wrong" });
        
    }

})





app.listen(3000, () => {
    console.log('API is running at http://localhost:3000');
})
