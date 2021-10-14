import React from 'react'
import './sidebarChat.css';
import {Avatar} from '@material-ui/core';
function SidebarChat() {
    return (
        <div className='sidebarChat'>
            <Avatar src='https://www.statnews.com/wp-content/uploads/2021/01/image0-645x645.jpeg'/>
            <div className="sidebarChat_info">
                <h2>Room Name</h2>
                <p>This the last message.</p>
            </div>
        </div>
    )
}

export default SidebarChat
