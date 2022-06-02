import React from 'react';
import img4 from '../../img/Instagram.svg.png'
import img5 from '../../img/strelka.svg'
import img6 from '../../img/Instagram.jpg'

const Footer = () => {
    return (
        <div className="footer1">
            <div className="container1">
            <div className="block1">
            <h1 className="footer1_itemm">Информация</h1>
             <p className="footer1_item"><img className="foot" src={img5}/><a href="#">О магазине</a></p>
             <p className="footer1_item"><img className="foot" src={img5}/><a href="#">Доставка</a></p>
             <p className="footer1_item"><img className="foot" src={img5}/><a href="#">Сертификаты</a></p>
             <p className="footer1_item"><img className="foot" src={img5}/><a href="#">Политика Безопасности</a></p>
             <p className="footer1_item"><img className="foot" src={img5}/><a href="#">Условия соглашения</a></p>
              <p className="footer1_text">Интернет магазин в Бишкеке - Kupi.kg © 2022</p>
                       
            </div>
            <div className="block1">
              <h1 className="footer1_itemm">Дополнительно</h1>              
                <p className="footer1_item"><img className="foot" src={img5}/><a href="#">Оплата</a></p>
                <p className="footer1_item"><img className="foot" src={img5}/><a href="#">Обзоры</a></p>
                <p className="footer1_item"><img className="foot" src={img5}/><a href="#">Подарочные сертификаты</a></p>
                <p className="footer1_item"><img className="foot" src={img5}/><a href="#">Обратная связь</a></p>
                       
            </div>
            <div className="block1">
              <p className="footer1_pdf"><a className="" src="#"> Instagram </a>KUPI.KG<button className=""><a className="" href="#">Подписатся</a></button></p>
           
              <img className="img8"  src={img6}/>
                 
            </div>
            </div>
          </div>
    );
};

export default Footer;