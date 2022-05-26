import React,{Suspense} from 'react';
import Loyout from '../src/loyout/loyout'
import Topbar from '../src/components/topbar.jsx'
import Sidebar from '../src/components/sidebar/sidebar.jsx'
import Futer from '../src/components/futeur/fuetur.jsx'
import Chart from '../src/components/chart/chart.jsx'
import WigetSm from '../src/wegetSm/wigetSm.jsx'
import WigetLg from '../src/wegetLg/wiget.jsx'
import Loyoute from '../src/loyoute/loyoute'
import './app.scss';

function App() {
  
   return (
    <Suspense fullback={"loeding..."}>
      <div>
      
      <Loyout/>      
      </div>
    </Suspense>
    
  );
}

export default App;
