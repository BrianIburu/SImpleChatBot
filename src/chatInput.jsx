import React,{useState} from "react";
import ChatMessCompo from "./ChatMessagescomponents.jsx";
import Userlogo from './assets/user.png'
import Botlogo from './assets/chatbot.png'
import Chatbot from './Response.js';

function Chatinput({chatMess,setChatMess}){

    const [text,setText] = useState("")

    function saveInput(e){
        setText(e.target.value);
    } 
    
    function sendMessage(){

        const userMessages = [
            ...chatMess,
            {
                message: text,
                pic:Userlogo,
                sender: "user",
                id:crypto.randomUUID()
            }
        ]

        setChatMess(userMessages)

        const resp = Chatbot.getResponse(text)
        const robotMessages = [
            ...userMessages,
            {
                message: resp,
                pic:Botlogo,
                sender: "robot",
                id:crypto.randomUUID()
            }
        ]
        setChatMess(robotMessages)

        setText("")

    }

    return(

        <div>
            <input 
                type="text"
                placeholder="Send a message to the chat box"
                size={25}
                onChange={saveInput}
                value={text}
            />
            <button
                onClick={sendMessage}
            >
                Send
            </button>
        </div>

    );

}

export default Chatinput;