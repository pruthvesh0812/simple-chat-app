import { roomCardType } from "../types/room"

export default function RoomCard(props:roomCardType) {
  return (
    <div >
      {
        (props.roomCardImg) ?  
          <div>
            <img src={props.roomCardImg} alt="room profile"/>
          </div>:
          <div>
          </div>
      }
      <div></div>
      <div>{props.roomName}</div>
    </div>
  )
}
