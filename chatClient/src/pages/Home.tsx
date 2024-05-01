import { useState } from "react";
import SideBar from "../components/SideBar";
import {useNavigate} from "react-router-dom"
import { roomState } from "../recoil/store/roomState";
import { useSetRecoilState } from "recoil";

export default function Home() {
  const [room,setRoom] = useState<{roomName:string,roomId:string}>({roomName:"",roomId:""})
  const navigate = useNavigate()
  const setRoomState = useSetRecoilState(roomState)

  const handleCreate= async ()=>{
    try{
      const response = await axios.post()
      if(response.status == 200){
        navigate(`/room/${room.roomId}`)
        setRoomState(room)
      }
    }
  }
  return (
    <div className="grid grid-cols-6">
      <div className="col-span-2">
        <SideBar />
      </div>
        <div className="col-span-4">
          <input
            type="text"
            className="" 
            placeholder="Enter Room Name"
            onChange={(e)=>{
              setRoom({
                roomName:e.target.value,
                roomId:Date.now()+e.target.value
              })
            }}
            />   
          <button 
            className=""
            onClick={handleCreate}>Create Room</button>
        </div>
    </div>
  )
}
