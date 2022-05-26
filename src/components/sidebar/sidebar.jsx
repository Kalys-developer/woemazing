import React from 'react';
import './sidebar.scss'
import 
{LineStyle,Timeline,TrendingUp,PersonOutline,Inventory2,MonetizationOn,Assessment,MailOutline,
      ChatBubbleOutline,PanoramaHorizontal,Report} from '@mui/icons-material';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="side_wrapper">
                <div className="sidebar_menu">
                    <h3 className="sidebar_title">Daeshboard</h3>
                     <ul className="sidebar_list">
                       <a href="/" className="">
                       <li className="sidebar_listitem">
                         <LineStyle className="sidebar_icon"/>Home
                       </li>
                       </a>
                       <li className="sidebar_listitem">
                        <Timeline/>Analytics
                         </li>
                        <li className="sidebar_listitem">
                          <TrendingUp/>Sales
                        </li>
                        
                        
                        
                     </ul>
                    

                </div>
                <div className="sidebar_menu">
                    <h3 className="sidebar_title">Quick Menu</h3>
                     <ul className="sidebar_list">
                       <a href="/userlist" className="">
                       <li className="sidebar_listitem">
                       <PersonOutline/>Users
                       </li>
                       </a>
                       
                       
                       <a href="/products" className="">
                       <li className="sidebar_listitem">
                        <Inventory2/>Products
                        </li>
                       </a>
                       
                       
                        <li className="sidebar_listitem">
                          <MonetizationOn/>Transactions
                        </li>
                        <li className="sidebar_listitem">
                        <Assessment/>Reports
                        </li>
                     </ul>
                    
                </div>
                <div className="sidebar_menu">
    <h3 className="sidebar_title">Notificetions</h3>
     <ul className="sidebar_list">
       <li className="sidebar_listitem">
         <MailOutline/>Mail
       </li>
       <li className="sidebar_listitem">
        <Timeline/>Feedback
         </li>
        <li className="sidebar_listitem">
          <ChatBubbleOutline/>Messages
        </li>
     </ul>
    
</div>
<div className="sidebar_menu">
    <h3 className="sidebar_title">Staff</h3>
     <ul className="sidebar_list">
       <li className="sidebar_listitem">
         <PanoramaHorizontal/>Manage
       </li>
       <li className="sidebar_listitem">
        <Timeline/>Analytics
         </li>
        <li className="sidebar_listitem">
          <Report/>Reports
        </li>
     </ul>
    
</div>

            </div>
            
        </div>
    );
};

export default Sidebar;