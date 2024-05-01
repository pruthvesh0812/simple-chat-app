import { roomCardType } from "../types/room";


export default function SmRoomCard(props:roomCardType) {
  return (
    <div className="flex justify-between">
      <div className="flex justify-around">
        <img src={props.roomCardImg}/>
        <h2>{props.roomName}</h2>
      </div>
      <div>
        {/* number of members */}
        {props.roomMembers}
      </div>
    </div>
  )
}
