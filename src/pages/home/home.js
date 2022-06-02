import React from 'react';
import img1 from '../../img/фон1.jpg'
import imggg from '../../img/фон3.jpg'
import Card from 'react-bootstrap/Card'





 function Home  ()  {
  return ( <div>


<Card className="car" style={{ width:'18rem'  }}>
  <Card.Img className="card" variant="top" src={img1} />  
</Card>

  </div>
   


        
  );
};

export default Home;