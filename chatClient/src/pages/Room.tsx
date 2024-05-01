import React, { useEffect } from 'react'
import ChatCanvas from '../components/ChatCanvas'
import SideBar from '../components/SideBar'
import { useRecoilValue } from 'recoil'
import { roomState } from '../recoil/store/roomState'
import { useParams } from 'react-router-dom'

export default function Room() {
  const {roomName,roomId} = useRecoilValue(roomState)
  // const roomId = useParams() - you can do this also to get roomId
  

  return (
    <div className="grid grid-cols-6">
      <div className='col-span-2'>
        <SideBar />
      </div>
      <div className='col-span-4'>
        <div className='flex'>
          <img />
          <div>{roomName}</div>
        </div>
        <ChatCanvas roomId={roomId}/>
      </div>
     
    </div>
  )
}
