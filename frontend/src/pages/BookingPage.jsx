import RoomCard from "../components/RoomCard"

const rooms = [
    {type: 'Single', name: 'Single Room', description: 'Single Room with Garden View', image: '/images/single.png'},
    {type: 'Double', name: 'Double Room', description: 'Double Room with Beach View', image: '/images/double.png'}
]


function BookingPage() {

    function handleSelect(roomType) {
        console.log(roomType)
    }

    return (
        <>
            <h1>Book a room</h1>
            {rooms.map((room) => {
                return <RoomCard key={room.type} room={room} onSelect={handleSelect} />
            })}
        </>
    )
}

export default BookingPage