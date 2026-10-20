import { useEffect, useState } from 'react'
import { getBookings, deleteBooking } from '../api/bookingApi'
import EditBookingForm from '../components/EditBookingForm'

function AdminPage() {
    const [bookings, setBookings] = useState([])
    const [errorMessage, setErrorMessage] = useState('')
    const [editingBooking, setEditingBooking] = useState(null)

    useEffect(() => {
        async function loadBookings() {
            try {
                const data = await getBookings()
                setBookings(data)

            } catch(error) {
                console.log(error)
                setErrorMessage('Could not load bookings')
            }
        }

        loadBookings()
    }, [])

    async function handleDelete(id) {
        try {
            await deleteBooking(id)
            setBookings(bookings.filter((booking) => booking.id !== id))
            
            if(editingBooking && editingBooking.id === id) {
                setEditingBooking(null)
            }
        } catch(error) {
            console.log(error)
            setErrorMessage('Could not delete booking')
        }
    }

    function handleSaved(updatedBooking) {
        setBookings(bookings.map((booking) => booking.id === updatedBooking.id ? updatedBooking : booking))
        setEditingBooking(null)
    }

    return (
        <>
            <h1>Admin: all bookings</h1>
            {errorMessage && <p className="message message--error">{errorMessage}</p>}
            {editingBooking && (
                <EditBookingForm
                    key={editingBooking.id}
                    booking={editingBooking}
                    onSaved={handleSaved}
                    onCancel={() => setEditingBooking(null)}
                />
            )}

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Room</th>
                        <th>Guest Name</th>
                        <th>Guest Email</th>
                        <th>Guest Phone</th>
                        <th>Check-in</th>
                        <th>Check-out</th>
                        <th>Manage booking</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map((booking) => (
                        <tr key={booking.id}>
                            <td>{booking.id}</td>
                            <td>{booking.room_type}</td>
                            <td>{booking.guest_name}</td>
                            <td>{booking.guest_email}</td>
                            <td>{booking.guest_phone}</td>
                            <td>{booking.check_in_date}</td>
                            <td>{booking.check_out_date}</td>
                            <td>
                                <button className="button button--secondary" onClick={() => setEditingBooking(booking)}>Edit</button>
                                <button className="button" onClick={() => handleDelete(booking.id)}>Delete</button>
                            </td>
                        </tr>
                    ) )}
                </tbody>
            </table>
        
        </>
    )
}

export default AdminPage
