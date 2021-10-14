import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import React from 'react';
import './Sidebar.css';
import {IconButton, Avatar} from '@material-ui/core';
import {SearchOutlined} from '@material-ui/icons';
import SidebarChat from './SidebarChat';
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <div className="sidebar_headerLeft">
                    <IconButton>
                        <Avatar src='https://www.statnews.com/wp-content/uploads/2021/01/image0-645x645.jpeg'/>
                    </IconButton>
                </div>
                <div className="sidebar_headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
             <div className="sidebar_search">
                    <div className="sidebar_searchContainer">
                        <SearchOutlined/>
                        <input placeholder="Search or start new chat" type="text"/>
                    </div>
            </div>

            <div className="sidebar_chats">
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
            </div>


        </div>
    )
}

export default Sidebar
