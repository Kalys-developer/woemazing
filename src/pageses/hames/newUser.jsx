import React from 'react';

const NewUser = () => {
    return (
        <div className="newUser">
            <h1 className="newUser_Title">New Users</h1>
            <form className="newUser_Form">
                <div className="newUser_Item">
                    <lebel>UserName</lebel>
                    <input type="text" placeholder="Jonn" className="newUser_Input" ></input>
                </div>

                                <div className="newUser_Item">
                    <lebel>FullName</lebel>
                    <input type="text" placeholder="Jonn Smith" className="newUser_Input"></input>
                </div>

                <div className="newUser_Item">
    <lebel>Email</lebel>
    <input type="Email" placeholder="JonnEmail" className="newUser_Input"></input>
</div>

<div className="newUser_Item">
     <lebel>Password</lebel>
     <input type="Password" placeholder="Password" className="newUser_Input"></input>
 </div>

 <div className="newUser_Item">
     <lebel>Phone</lebel>
     <input type="Password" placeholder="+5515154" className="newUser_Input"></input>
 </div>

 <div className="newUser_Item">
    <lebel>Address</lebel>
    <input type="Password" placeholder="Bishkek" className="newUser_Input"></input>
</div>

<div className="newUser_Item">
    <lebel>Gender</lebel>
    <div className="newUser_Gender">
    <input type="radio" name="gender" id="mail" value="male" className="newUser_Input"></input>
<lebel className="newUser_GenderLebel" for="mail">Mail</lebel>
<input type="radio" name="gender" id="femail" value="female" className="newUser_Input"></input>
<lebel className="newUser_GenderLebel" for="femail">Femail</lebel>
<input type="radio" name="gender" id="other" value="other" className="newUser_Input"></input>
<lebel className="newUser_GenderLebel" for="other">Other</lebel>
    </div>   
</div>
           <div className="newUser_Item">
           <lebel>Active</lebel>
           <select className="newUser_GenderSelect" name="active" id="active">
               <option value="yes">Yes</option>
               <option value="no">No</option>
           </select>
           </div>
           
            </form>
            <button className="newUser_GenderButton">Create</button>
            NewUser
        </div>
    );
};

export default NewUser;