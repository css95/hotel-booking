const express = require('express');
const cors = require('cors');
const pool = require('./db');

const app = express();

app.use(express.json());
app.use(cors());

app.get("/test", async (req, res) => {
    const [rows] = await pool.query("SELECT * FROM booking");
    res.json(rows);
});

app.listen(3000, () => {
    console.log('API is running at http://localhost:3000');
})
