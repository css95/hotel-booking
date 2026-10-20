import { useState } from 'react'
import RoomCard from '../components/RoomCard'
import BookingForm from '../components/BookingForm'

const rooms = [
    {type: 'Single', name: 'Single Room', description: 'Single Room with Beach View', image: '/images/single.png'},
    {type: 'Double', name: 'Double Room', description: 'Double Room with Beach View', image: '/images/double.png'}
]

function BookingPage() {
    const [selectedRoom, setSelectedRoom] = useState(null)

    function handleSelect(roomType) {
        setSelectedRoom(roomType)
    }

    return (
        <>
            <h1>Available rooms</h1>
            {selectedRoom === null ? (
                <div className="room-list">
                    {rooms.map((room) => {
                        return <RoomCard key={room.type} room={room} onSelect={handleSelect} />
                    })}
                </div>
            ) : ( 
                <BookingForm roomType={selectedRoom} onBack={() => setSelectedRoom(null)} />
            )}
        </>
    )
}

export default BookingPage