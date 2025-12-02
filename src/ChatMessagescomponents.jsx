import Userlogo from './assets/user.png'
import Botlogo from './assets/chatbot.png'
import ChatMessage from "./chatMessage.jsx"
import React,{useEffect, useRef} from 'react'

function ChatMessCompo({chatMess}){
    
    const messRef = useRef(null)

    useEffect(() => {
        const contRef = messRef.current
        if(contRef){
            contRef.scrollTop = contRef.scrollHeight
        }
    },[chatMess])

    return(
        <div 
            className='message-container'
            ref={messRef}
        >
            {chatMess.map((c) => {
                return(
                    <ChatMessage
                        key = {c.id}
                        message = {c.message}
                        pic = {c.pic}
                        sender = {c.sender}
                    />
                )
            })}
        </div>
    )

}

export default ChatMessCompo;