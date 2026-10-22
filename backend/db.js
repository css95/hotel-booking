const sqlite3 = require("sqlite3");
const { open } = require("sqlite");

async function connectDatabase() {

    try {
        const database = await open({
            filename: "./hotel.db",
            driver: sqlite3.Database
        });

        await database.run (`
            CREATE TABLE IF NOT EXISTS booking (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                room_type TEXT NOT NULL,
                guest_name TEXT NOT NULL,
                guest_email TEXT NOT NULL,
                guest_phone TEXT NOT NULL,
                check_in_date INTEGER NOT NULL,
                check_out_date INTEGER NOT NULL
            )
        `);

        console.log("Connected to database");

        return database;

    } catch(err) {
        console.error("Error connecting to the database or creating the table", err.message);

        throw err;
    }
}

module.exports = connectDatabase();