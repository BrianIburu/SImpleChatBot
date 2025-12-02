import Userlogo from './assets/user.png'
import Botlogo from './assets/chatbot.png'
import ChatMessage from "./chatMessage.jsx"

function ChatMessCompo({chatMess}){
    
    return(
        <>
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
        </>
    )

}

export default ChatMessCompo;