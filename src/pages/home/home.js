import React from 'react';
import img from '../../img/фон1.jpg'
import img2 from '../../img/фон2.jpg'
import img3 from '../../img/фон3.jpg'
import img4 from '../../img/delivery.jpg'

const Home = () => {
  return ( <div>
     <div className="container1">
    <div className="slider middle">
  <div className="slides">
    <input type="radio" name="r" id="r1" />
    <input type="radio" name="r" id="r2" />
    <input type="radio" name="r" id="r3" />
    <input type="radio" name="r" id="r4" />
    <div className="slide s1"><img src={img}/></div>
    
    <div className="slide"><img src={img2}/></div>
    <div className="slide"><img src={img3}/></div>
    <div className="slide"><img src={img4}/></div>
  </div>
  <div className="navigetion">
    <label for="r1" className="bar"></label>
    <label for="r2" className="bar"></label>
    <label for="r3" className="bar"></label>
    <label for="r4" className="bar"></label>
  </div>
  
  </div>
    
 
  <div className="slider1 middle1">
<div className="slides1">
  <input type="radio" name="r" id="r5" />
  <input type="radio" name="r" id="r6" />
  <input type="radio" name="r" id="r7" />
  <input type="radio" name="r" id="r8" />
  <div className="slide s2"><img src={img}/></div>
  
  <div className="slide1"><img src={img2}/><img src={img3}/><img src={img3}/></div>
  <div className="slide1"><img src={img3}/></div>
  <div className="slide1"><img src={img4}/></div>
</div>
<div className="navigetion1">
  <label for="r5" className="bar1"></label>
  <label for="r6" className="bar1"></label>
  <label for="r7" className="bar1"></label>
  <label for="r8" className="bar1"></label>
</div>
  
</div>
    
    
    
    

    
    
    
    
    

    
    
    
    
    
    
    
    
    </div>
    </div>
  );
};

export default Home;