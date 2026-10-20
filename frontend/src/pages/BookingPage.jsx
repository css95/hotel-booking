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
                <>
                    <p>
                        Welcome to Hotel Sjöaryd. A quiet hotel right by the sea, where you can wake up to the sound of the waves. Our rooms are bright and simply furnished, with a view of the beach and everything you need for a calm stay. Choose your room below and book in a minute.
                    </p>
                    <div className="room-list">
                        {rooms.map((room) => {
                            return <RoomCard key={room.type} room={room} onSelect={handleSelect} />
                        })}
                    </div>
                </>
            ) : ( 
                <BookingForm roomType={selectedRoom} onBack={() => setSelectedRoom(null)} />
            )}
        </>
    )
}

export default BookingPage