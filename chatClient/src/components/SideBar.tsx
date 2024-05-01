
import { useState,useEffect } from 'react'
import SmRoomCard from './SmRoomCard'
import SearchBar from './SearchBar'
import { roomCardType } from '../types/room'
import axios from 'axios'


export const getRooms =  () =>{
    return new Promise(async (res,rej)=>{
        try{
            const ress = await axios.get()
            if(res){
                res(ress.data)
            }
        }
        catch(err){
            rej(err)
        }
    })
   
}

export default function SideBar() {
   
    const [searchRooms, setSearchRooms] = useState<roomCardType[]>([])

    useEffect(()=>{
        const fetchData = async () =>{
                const data = await getRooms();
                if(data){
                    setSearchRooms(data)
                }    
        }
         fetchData()
    },[])

  

  return (
    <div>
        <SearchBar
            allRooms={searchRooms} 
            setRooms={(rooms)=>{
                setSearchRooms(rooms)
            }}
             />
      {
        searchRooms.map(room =>{
            return (
                <div>
                    <SmRoomCard {...room} />
                    <hr/>
                </div>
            )
        })
      }
    </div>
  )
}
