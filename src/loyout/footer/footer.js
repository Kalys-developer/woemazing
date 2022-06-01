import React from 'react';
import img4 from '../../img/Instagram.svg.png'
import img5 from '../../img/strelka.svg'
import img6 from '../../img/Instagram.jpg'

const Footer = () => {
    return (
        <div className="footer1">
            <div className="container1">
            <div className="block3">
              <h1 className="Titleto">Информация</h1>
              <ul>
                <li className="footer1_item"><img src={img5}/><a href="#">О магазине</a></li>
                <li className="footer1_item"><img src={img5}/><a href="#">Доставка</a></li>
                <li className="footer1_item"><img src={img5}/><a href="#">Сертификаты</a></li>
                <li className="footer1_item"><img src={img5}/><a href="#">Политика Безопасности</a></li>
                <li className="footer1_item"><img src={img5}/><a href="#">Условия соглашения</a></li>
                <p className="footer1_text">Интернет магазин в Бишкеке - Kupi.kg © 2022</p>
              </ul>         
            </div>
            <div className="block3">
              <h2 className="Titleto">Дополнительно</h2>
              <ul>
                <li className="footer1_item"><img src={img5}/><a href="#">Оплата</a></li>
                <li className="footer1_item"><img src={img5}/><a href="#">Обзоры</a></li>
                <li className="footer1_item"><img src={img5}/><a href="#">Подарочные сертификаты</a></li>
                <li className="footer1_item"><img src={img5}/><a href="#">Обратная связь</a></li>
               </ul>         
            </div>
            <div className="block3">
              <h3 className="img9"><a  src="#">INSTAGRM  </a>KUPI.KG<button><a  href="#">Подписатся</a></button></h3>
              <img className="img8"  src={img6}/>
              <img className="img8"  src={img6}/>
              <img className="img8"  src={img6}/>
              <div>
              <img className="img8"  src={img6}/>
              <img className="img8"  src={img6}/>
              <img className="img8"  src={img6}/>
              </div>   
            </div>
            </div>
          </div>
    );
};

export default Footer;