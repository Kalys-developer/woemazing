
import React from 'react';
import img from '../../img/bakaibank.jpg'
import img1 from '../../img/baitushum_2.png'


function Credit (props) {
  
  return (
    <div>
       <div className="container">
       
         <h1 style={{marginTop:30}}>Кредит</h1>
         <span style={{fontWeight: 'bold', marginLeft:430}}>Приобрести товары в кредит стало ещё проще...</span> 
         <br/><p className="text-muted">Не откладывайте желанную покупку!<br/>
         Товар сразу, оплата в рассрочку!</p>
         <p className="date2">Список банков</p>
         <div className="content">
           <a href="#" className="img"><img src={img} alt=""/></a>
           <a href="#" className=""><img src={img1} alt=""/></a>
           </div>
         
       </div>
            
                
            
     
 
    </div>
  );
}

export default Credit;