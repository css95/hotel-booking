const express = require('express');
const cors = require('cors');
const { getBookings, getBooking, createBooking, updateBooking, deleteBooking } = require("./services/bookingService");

const app = express();

app.use(express.json());
app.use(cors());

app.get('/bookings', async (req, res) => {

    try {
        const bookings = await getBookings();
        res.json(bookings);

    } catch(error) {
        console.log(`Something went wrong: ${error}`);
        res.status(error.status || 500).json({ message: error.message });
    }
});

app.get('/bookings/:id', async (req, res) => {

    try {
        const booking = await getBooking(req.params.id);
        res.json(booking);

    } catch(error) {
        console.log(`Something went wrong: ${error}`);
        res.status(error.status || 500).json({ message: error.message });
    }
});

app.post('/bookings', async (req, res) => {

    try {
        const bookingId = await createBooking(req.body);
        res.status(201).json({ id: bookingId });

    } catch(error) {
        console.log(`Something went wrong: ${error}`);
        res.status(error.status || 500).json({ message: error.message })
    }
});

app.put('/bookings/:id', async (req, res) => {

    try {
        await updateBooking(req.params.id, req.body);
        res.status(200).json({ "message" : "Booking updated" });

    } catch(error) {
        console.log(`Something went wrong: ${error}`);
        res.status(error.status || 500).json({ message: error.message })
    }
});

app.delete('/bookings/:id', async (req, res) => {

    try {
        await deleteBooking(req.params.id);
        res.status(200).json({ "message" : "Booking deleted" });

    } catch(error) {
        console.log(`Something went wrong: ${error}`);
        res.status(error.status || 500).json({ message: error.message })
    }
});

app.listen(3000, () => {
    console.log('API is running at http://localhost:3000');
});
