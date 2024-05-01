import {atom } from 'recoil'

const room:{roomName:string,roomId:string} = {roomName:"",roomId:""} 

export const roomState = atom({
    key:"room",
    default:room
})