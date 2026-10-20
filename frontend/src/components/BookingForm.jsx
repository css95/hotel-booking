import { useState } from 'react'
import { createBooking } from '../api/bookingApi'

function BookingForm({ roomType, onBack }) {
    const [formData, setFormData] = useState({
        room_type: roomType,
        guest_name: '',
        guest_email: '',
        guest_phone: '',
        check_in_date: '',
        check_out_date: ''
    })

    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')

    function handleChange(event) {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    async function handleSubmit(event) {
        event.preventDefault()
        setErrorMessage('')
        setSuccessMessage('')

        try {
            await createBooking(formData)
            setSuccessMessage('Your booking is confirmed!')
            setFormData({
                room_type: roomType,
                guest_name: '',
                guest_email: '',
                guest_phone: '',
                check_in_date: '',
                check_out_date: ''
            })
        } catch(error) {
            setErrorMessage(error.response?.data?.message || 'Could not reach the server')
        }
    }

    const today = new Date().toLocaleDateString('sv-SE')

    return (
        <form className="booking-form" onSubmit={handleSubmit}>
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
                <input type="date" name="check_in_date" value={formData.check_in_date} min={today} onChange={handleChange} required />
            </label>

            <label>
                Check-out 
                <input type="date" name="check_out_date" value={formData.check_out_date} min={formData.check_in_date} onChange={handleChange} required />
            </label>

            <div className="form-actions">
                <button className="button" type="submit">Confirm booking</button>
                <button className="button button--secondary" type="button" onClick={onBack}>Back to rooms</button>
            </div>

            {errorMessage && <p className="message message--error">{errorMessage}</p>}
            {successMessage && <p className="message message--success">{successMessage}</p>}

        </form>
    )

}

export default BookingForm