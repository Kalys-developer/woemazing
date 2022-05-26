import React from 'react';
import {NotificationsNone, Language,Settings} from '@mui/icons-material';


const Topbar = () => {
    return (
        <div className="topbar">
            <div className="topbar_wrapper">
                <div className="topLeft">
                <span className="topbar_logo">Lamaadmin</span>
                </div>
                <div className="topbar_Right">
                <div className="topbar_icon_container">
                 <NotificationsNone/>
                 <span className="topbar_iconbadge">2</span>
                </div>
                <div className="topbar_icon_container">
                <Language/>
                <span className="topbar_iconbadge">2</span>
                </div>
                <div className="topbar_icon_container">
                <Settings/>
                 
                </div>
                <img src="https://media-cdn.tripadvisor.com/media/photo-s/15/a4/9b/77/legacy-hotel-at-img-academy.jpg" alt="" className="topbar_avatar"/>
                </div>

            </div>
        </div>
    );
};

export default Topbar;