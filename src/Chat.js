import React from 'react';
import {useState} from 'react';
import './Chat.css';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Avatar} from '@material-ui/core';
import {IconButton} from '@material-ui/core';
import {SearchOutlined, AttachFile, MoreVert, MessageSharp} from '@material-ui/icons';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import axios from './axios';
function Chat({messages}) {
    const [input, setInput] = useState(" ");
    const sendMessage = async(e) =>{
        e.preventDefault();
        await axios.post("/messages/new",{
            message: input,
            name: "demo app",
            timeStamp: "just Now",
            received: false,
        });
        setInput('');
    }
    return (
        <div className="chat">
           <div className="chat_header">
                <Avatar/>
                <div className="chat_headerInfo">
                    <h3>Room Name</h3>
                    <p>Last seen at ... </p>
                </div>
                <div className="header_Right"/>
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                     <IconButton>
                        <AttachFile/>
                    </IconButton>
                     <IconButton>
                       <MoreVert/>
                    </IconButton>
                </div>
                 <div className="chat_body">
                    {messages.map((message) => (
                        <p className={`chat_message ${message.received && "chat_reciever"}`}>
                        <span className="chat_name">{message.name}</span>
                        {message.message}
                        <span className="chat_timeStamp">{message.timeStamp}</span>
                        </p>
                    ))}
                </div>
                <div className="chat_footer">
                    <InsertEmoticonIcon/>
                    <form>
                        <input 
                        value={input}
                        onChange={e => setInput(e.target.value)}
                           placeholder="Type a message"
                           type="text"
                        />
                        <button onClick={sendMessage} type="submit">Send a message</button>
                    </form>
                    <MicIcon/>
                </div>
           </div>
       
    )
}

export default Chat
