function RoomCard({ room, onSelect }) {

    return (
        <div className="room-card">
            <img className="room-card__image" src={room.image} alt={room.name} />
            <div className="room-card__body">
                <h3>{room.name}</h3>
                <p>{room.description}</p>
            </div>
            <button className="button" onClick={() => onSelect(room.type)}>Choose</button>
        </div>
    )
}

export default RoomCard