import { useState } from 'react'
import { updateBooking } from '../api/bookingApi'

function EditBookingForm({ booking, onSaved, onCancel }) {
    const [formData, setFormData] = useState(booking)
    const [errorMessage, setErrorMessage] = useState('')

    function handleChange(event) {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    async function handleSubmit(event) {
        event.preventDefault()
        setErrorMessage('')

        try {
            await updateBooking(booking.id, formData)
            onSaved(formData)
        } catch (error) {
            setErrorMessage(error.response?.data?.message || 'Could not reach the server')
        }
    }

    return (
        <form className="booking-form" onSubmit={handleSubmit}>
            <h2>Edit booking {booking.id}</h2>

            <label>
                Room type
                <select name="room_type" value={formData.room_type} onChange={handleChange}>
                    <option value="Single">Single</option>
                    <option value="Double">Double</option>
                </select>
            </label>

            <label>
                Name
                <input type="text" name="guest_name" value={formData.guest_name} onChange={handleChange} required />
            </label>

            <label>
                Email
                <input type="email" name="guest_email" value={formData.guest_email} onChange={handleChange} required />
            </label>

            <label>
                Phone
                <input type="tel" name="guest_phone" value={formData.guest_phone} onChange={handleChange} required />
            </label>

            <label>
                Check-in
                <input type="date" name="check_in_date" value={formData.check_in_date} onChange={handleChange} required />
            </label>

            <label>
                Check-out
                <input type="date" name="check_out_date" value={formData.check_out_date} min={formData.check_in_date} onChange={handleChange} required />
            </label>

            <div className="form-actions">
                <button className="button" type="submit">Save changes</button>
                <button className="button button--secondary" type="button" onClick={onCancel}>Cancel</button>
            </div>

            {errorMessage && <p className="message message--error">{errorMessage}</p>}
        </form>
    )
}

export default EditBookingForm