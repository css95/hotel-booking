import axios from 'axios'

const API_URL = 'http://localhost:3000/bookings'

export async function getBookings() {

    try {
        const response = await axios.get(API_URL)
        return response.data

    } catch(error) {
        console.log(error)
        throw error

    }

}