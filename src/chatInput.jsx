import React,{useState} from "react";
import dayjs from "dayjs";
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
                id:crypto.randomUUID(),
                time: dayjs().valueOf()
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
                id:crypto.randomUUID(),
                time:dayjs().valueOf()
            }
        ]
        setChatMess(robotMessages)

        setText("")

    }

    function clearMessage(){
        setChatMess([])
    }

    return(

        <div className="input-container">
            <input 
                type="text"
                className="input-text"
                placeholder="Ask a question to the chat bot"
                size={25}
                onChange={saveInput}
                value={text}
            />
            <button
                className="send-btn"
                onClick={sendMessage}
            >
                Send
            </button>

            <button
                className="clear-btn"
                onClick={clearMessage}
            >
                Clear
            </button>
        </div>

    );

}

export default Chatinput;