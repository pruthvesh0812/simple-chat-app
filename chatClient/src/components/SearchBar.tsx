import { useMemo, useState } from "react"


export default function SearchBar({allRooms,setRooms}:{allRooms:any,setRooms:(rooms:any) =>void}) {
    const [initRooms, setInitRooms] = useState([])
    useMemo(()=>{
        setInitRooms(allRooms)
    },[allRooms])
    return (
    <div>
      <input 
        type="text" 
        placeholder="search rooms..." 
        onChange={(e)=>{
            if(e.target.value.length == 0){
                setRooms(initRooms)
            }
            else{
                {
                    const fiteredRooms = allRooms.filter(room => room.roomName.toLowerCase().includes(e.target.value.toLowerCase))
                    setRooms(fiteredRooms)
                }
            }
        }}/>
      <img alt="search svg"/>
    </div>
  )
}
