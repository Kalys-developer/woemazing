import React,{Suspense} from 'react';
import Loyout from '../src/loyout/loyout'
import Loyoute from '../src/loyoute/loyoute'


import './app.scss';



function App() {
  
   return (
    <Suspense fullback={"loeding..."}>
      <div>
      
      <Loyout/> 
      
      <Loyoute/> 
         
      </div>
    </Suspense>
    
  );
}

export default App;
