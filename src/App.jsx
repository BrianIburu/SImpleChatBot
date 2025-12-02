import React,{useState} from "react"
import Chatinput from "./chatInput.jsx"
import ChatMessage from "./chatMessage.jsx"
import Userlogo from './assets/user.png'
import Botlogo from './assets/chatbot.png'
import ChatMessCompo from "./ChatMessagescomponents.jsx"

function App() {

  const[chatMess, setChatMess] = useState([])

  return(
    <>
      <Chatinput 
        chatMess={chatMess}
        setChatMess={setChatMess}
      />
      <ChatMessCompo
        chatMess={chatMess}
      />
    </>
  )
}

export default App
