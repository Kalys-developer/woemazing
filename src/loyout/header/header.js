import React from 'react';
import {NavLink} from 'react-router-dom'
import img from '../../img/image 7.svg'
import img1 from '../../img/Vector (2).png'
import img2 from '../../img/spisok.svg'
import img3 from '../../img/Search_.svg.png'
import img4 from '../../img/call-icon-.webp'
import BasicMenu from '../../pages/button/button.jsx'


const Header = () => {
    // function Dropdown({ selected, setSelected}){
    //     const [isActive, setIsActive] = useState(false);
    //     const options = ["React, anguler, aux"];
    // }
    return (<>
    <NavLink to="/homes" >Admin</NavLink>
        <div className="header">
            
            <div className='container'>
           <div className="header_inner">
                <div><span><a className="header_title" href="/home"><img className="header_titleimgg"  src={img} Width="200" height="80" viewBox="0 0 19 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                           </img></a>
                    </span>
                   
                    </div>
                   
                    <div>
                       <div className="btn">
                           <button className="btn1">0777 11-44-77</button>
                           <div  className="btn2">
                                <div><a className="btn3" href="#">0777114477 W/a 0707114477</a></div><br/>
                                <div><a className="btn3">по будням с 9:00 до 19:00 по субботам с 10:00 до 18:00</a></div><br/>
                                <div><a className="btn3" href="#">kupi.kg@mail.ru</a></div>
                           </div>
                           
                       </div>
                       <p className="number">0777 44-55-66. 0707 44-55-66</p>
                    </div>
                 <ul className="header_links">
                 <li className="header_item"><NavLink className="header_link" to="/" ></NavLink></li>
                   <li className="header_item"><NavLink className="header_link" to="/oplata" >Оплата</NavLink></li>
                   <li className="header_item"><NavLink className="header_link" to="dostavka" >Доставка</NavLink></li>
                   <li className="header_item"> <NavLink className="header_link" to="/garantya">Гарантия</NavLink></li>
                   <li className="header_item"><NavLink className="header_link" to="/Credit">Кредит</NavLink></li>
                   <li className="header_item"><NavLink className="header_link" to="/ustanovka">Установка</NavLink></li>

                   
               </ul>
               
           </div>
           
        </div>
        <div className="header_bottom">
        <div class="dropdown"> 
        <div class="widget">
            <BasicMenu className="menu"/>
    
    
  </div>     
     </div> 




        <div><input className="header_input" type="text" placeholder="Поиск"/>       
        </div>
        <div style={{display: 'flex',}}>
            <div className="header_search">
            <a href="#"><img style={{ height:25, width:30 }} src={img3}/></a>
            </div>
           <div className="header_cart">
           <div>
            <a href="#"><img className="header_img" src={img1}/></a>
            </div>
            <div>
            <span className="cardtex">0 товаров<br/>на 0 сом</span>
            </div>
           </div>
        </div>
        </div>
        </div>
        </>
    );
};

export default Header;