const { createBooking } = require("./dao/bookingDao");

const sampleBookings = [
    {
        room_type: 'Single',
        guest_name: 'Linnea Sample',
        guest_email: 'linnea.sample@example.com',
        guest_phone: '0700000001',
        check_in_date: '2026-11-03',
        check_out_date: '2026-11-05'
    },
    {
        room_type: 'Double',
        guest_name: 'Oskar Testman',
        guest_email: 'oskar.testman@example.com',
        guest_phone: '0700000002',
        check_in_date: '2026-11-10',
        check_out_date: '2026-11-14'
    },
    {
        room_type: 'Double',
        guest_name: 'Maria Sample',
        guest_email: 'maria.sample@example.com',
        guest_phone: '0700000003',
        check_in_date: '2026-12-20',
        check_out_date: '2026-12-23'
    },
    {
        room_type: 'Single',
        guest_name: 'Johan Demo',
        guest_email: 'johan.demo@example.com',
        guest_phone: '0700000004',
        check_in_date: '2027-01-05',
        check_out_date: '2027-01-08'
    }

];

async function seed() {
    try {
        for(let i = 0; i < sampleBookings.length; i++) {
        await createBooking(sampleBookings[i]);
        }
        console.log("Sample bookings added");
    } catch(error) {
        console.log("Could not add sample bookings:", error.message);
    }

}

seed();