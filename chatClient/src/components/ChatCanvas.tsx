import React, { useEffect, useState } from 'react'

const STATUS = {
    pending:"PENDING",
    deliverd:"DELIVERED",
    sent:"SENT"
}

const QUEUE = {
    sending:"SENDING",
    receiving:"RECEIVING"
}

function Message({text,status,timeStamp}:{text:string,status:string,timeStamp:number}){
    return (
        <div className=''>
            <h2>{text}</h2>
            <div className='flex justify-end'>
                <h5>{timeStamp}</h5>
                {
                   (status == STATUS.deliverd) && <div>..</div>
                }
                {
                   (status == STATUS.pending) && <div>.</div>
                }
                {
                   (status == STATUS.sent) && <div>...</div>
                }
                
            </div>
        </div>
    )
}

export default function ChatCanvas({roomId}:{roomId:string}) {
    // receiving queue
    const [recvMessageQueue,setRecvMessages] = useState<{messageText:string, messageTimeStamp:number, messageType:string, status:string}[]>([])
    // sending queue
    const [sendMessagesQueue,setISendMessage] = useState<{messageText:string,messageTimeStamp:number,messageType:string, status:string}[]>([{messageText:"",messageTimeStamp:0,messageType:"",status:""}])
    // central queue - sync with both sending and receiving queue
    const [centralMessageQueue, setCentralMessage] = useState<{messageText:string, messageTimeStamp:number, messageType:string, status:string, queueType:string}[]>([])
    const [userMessaging,setUserMessaging] = useState<boolean>()
    
  

   

    const getMessages = () =>{
        // websocket code
    }

    const sendMessages = () =>{
        //websocket code
    }

    return (
    <div>
      <div>
        {
            centralMessageQueue.map(message =>{
                return (
                    <div className={`flex ${(message.queueType == QUEUE.sending) ? "justify-end" : "justify-start"} `}>
                        <Message 
                          text={message.messageText} 
                          status={message.status} 
                          timeStamp={message.messageTimeStamp}/>
                    </div>
                )
            })
        }
      </div>
      <input 
        placeholder='Type a message'
        onChange={(e)=>{
            const timeStamp = new Date().getTime()
            setISendMessage((prev)=>[...prev,{messageText:e.target.value,messageTimeStamp:timeStamp,messageType:"text",status:STATUS.pending}])
            setCentralMessage((prev)=>[...prev,{messageText:e.target.value,messageTimeStamp:timeStamp,messageType:"text",status:STATUS.pending,queueType:QUEUE.sending}])
        }}/>
    </div>
  )
}
