import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {PermIdentity,LocationSearching, MailOutline, PhoneAndroid, CalendarToday, Publish} from '@mui/icons-material'

const User = () => {
    return (
        <div className="user">
            <div className="user_titlecontainer">
              <h1 className="user_title">Edit User</h1>                       
              <button className="user_addbutton">Create</button>                      
            </div>
            <div className="user_container">
             <div className="user_show">
                 <div className="user_showtop">
                     <img className="user_showimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbMdd15M9W7LtvU9GatcvpTkKkxB_dasnR1vExBEp73w&s" alt=""   />
                     <div className="user_showtoptitle">
                         <span className="user_showusername">Anna Baecher</span>
                         <span className="user_showusertitle">Software Engineer</span>
                     </div>
                 </div>
                 <div className="user_showbottom">
                     <span className="user_showtilte">Account Datilse</span>
                     <div className="user_showinfo">
                     <PermIdentity className="user_showicon"/>
                     <span className="user_showinfotitle">Annabec99</span>
                     </div>
                      <div className="user_showinfo">
                      <CalendarToday className="user_showicon"/>
                      <span className="user_showinfotitle">10.12.99</span>
                      </div>
                      <span className="user_showtilte">Contact Datilse</span>
                      <div className="user_showinfo">
<PhoneAndroid className="user_showicon"/>
<span className="user_showinfotitle">165654652354</span>
</div>

<div className="user_showinfo">
<MailOutline className="user_showicon"/>
<span className="user_showinfotitle">anabec99gmail.com</span>
</div>

<div className="user_showinfo">
<LocationSearching className="user_showicon"/>
<span className="user_showinfotitle">Bishkek</span>
</div>
                 </div>

             </div>
               <div className="user_epdete">updete
               <span className="user_epdetetitle">Edite</span>
               <form className="user_epdeteform">
                 <div className="user_epdeteleft">
                     <div className="user_epdeteitem">
                         <lebel>UserName</lebel>
                         <input type="text" placeholder="Annabec99" className="user_epdeteinput">
                         </input>
                     </div>
                           

                     <div className="user_epdeteitem">
    <lebel>FullName</lebel>
    <input type="text" placeholder="Anna Baecher" className="user_epdeteinput">
    </input>
</div>

<div className="user_epdeteitem">
    <lebel>Email</lebel>
    <input type="text" placeholder="gmail.com" className="user_epdeteinput">
    </input>
</div>


<div className="user_epdeteitem">
    <lebel>Phone</lebel>
    <input type="text" placeholder="+654654451" className="user_epdeteinput">
    </input>
</div>

<div className="user_epdeteitem">
    <lebel>Address</lebel>
    <input type="text" placeholder="Bishkek" className="user_epdeteinput">
    </input>
</div>
                 </div> <div className="user_epdeteright">
                     <div className="user_updateuploed">
                         <img className="user_updateuploerimg" src="https://images.unsplash.com/photo-1527189919029-aeb3d997547d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385" alt=""/>
                         <lebel htmlfor="file">
                             <Publish className="user_epdeteicon"/>
                             </lebel>
                         <input style={{display:"none"}} type="file" id="file"/>
                     </div>
                     <button type="button" className="user_epdetebutton">Updete</button>
                 </div>

             </form>
            </div>
            </div>
            user       
        </div>
    );
};

export default User;