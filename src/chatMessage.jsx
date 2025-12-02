function ChatMessage(props){

    //This is a shortcut of props full is eg const message = props.message
    const {message, pic, sender} = props

    
    return(

        <div>

            {sender === "robot" && 
                <img 
                    src={pic} 
                    alt="Picture Logo"
                    width={50}
                />
            }
            
            <span>{message}</span>

            {sender === "user" &&
                <img 
                src={pic} 
                alt="UserLogo"
                width={50}
            />}

        </div>

    )

}

export default ChatMessage;