import React from 'react';
import img from '../../img/wallett.svg'

const Oplata = () => {
    return (
        <div>
           <div className="container">
               <h1 className="title">Оплата</h1>
               <p className="description">В данное время доступны:</p>
               <p className="date">- Оплата наличными курьеру при доставке.</p>
               <p className="date">- Оплата перечислением (уточняйте у консультанта).</p>
               <p className="date">- Оплата посредством денежных переводов.</p>
               <p className="date1">Оплата производится строго в национальной валюте.</p>
               <img style={{width:250,height:250, marginBottom:30}} src={img}/>
           </div>
        </div>
    );
};

export default Oplata;