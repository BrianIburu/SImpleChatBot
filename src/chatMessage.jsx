function ChatMessage(props){

    //This is a shortcut of props full is eg const message = props.message
    const {message, pic, sender} = props

    
    return(

        <div className={sender === 'user' ? 
            'user-message' : 'robot-message'
        } >

            {sender === "robot" && 
                <img 
                    src={pic} 
                    alt="Picture Logo"
                    width={50}
                    className="messageProfile"
                />
            }
            
            <span className="message">{message}</span>

            {sender === "user" &&
                <img 
                src={pic} 
                alt="UserLogo"
                width={50}
                className="messageProfile"
            />}

        </div>

    )

}

export default ChatMessage;