function RoomCard({ room, onSelect }) {

    return (
        <div>
            <img src={room.image} alt={room.name} />
            <h3>{room.name}</h3>
            <p>{room.description}</p>
            <button onClick={() => onSelect(room.type)}>Choose</button>
        </div>
    )
}

export default RoomCard