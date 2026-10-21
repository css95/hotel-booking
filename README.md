# Hotel Strandvik
A hotel website with a public booking form and a hidden admin page.

## Tech stack
- Backend: Node.js, Express, SQLite (DAO pattern, service layer for validation)
- Frontend: React (Vite), Axios, React Router

## How to run
Requires Node.js (developed with v24).
Start the backend and the frontend in two separate terminals.

### Backend
```bash
cd backend
npm install
node server.js
```
(runs on http://localhost:3000, run it inside the backend folder)

The SQLite database (`hotel.db`) is created automatically in the `backend` folder the first time the server starts, so no database setup is needed.

To add a few sample bookings, run `node seed.js` once (inside the `backend` folder).


### Frontend
```bash
cd frontend
npm install
npm run dev
```
(runs on http://localhost:5173)


## Pages
- Public booking page: /
- Admin page (hidden, not linked from the public site): /admin-secret-page

## API endpoints
- GET /bookings
- GET /bookings/:id
- POST /bookings
- PUT /bookings/:id
- DELETE /bookings/:id

## Backend structure
- `server.js`: the routes (GET, POST, PUT, DELETE). It receives the requests and sends back the answers. There is no SQL in this file.
- `services/bookingService.js`: checks that the booking data is correct before it is saved (for example that all fields are filled in and that check-out is after check-in).
- `dao/bookingDao.js`: the only file that talks to the database. It has the functions to create, get, update and delete bookings.
- `db.js`: connects to the SQLite database and creates the booking table if it does not exist.
- `seed.js`: adds a few sample bookings 