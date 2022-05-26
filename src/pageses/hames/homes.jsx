import React from 'react';
import WigetSm from '../../wegetSm/wigetSm'
import WigetLg from '../../wegetLg/wiget.jsx'
import Chart from '../../components/chart/chart.jsx'
import Futer from '../../components/futeur/fuetur.jsx' 

const Homes = () => {
    return (
        <div className="homes">
            <Futer/>
            <Chart />
        <div style={{display:"flex"}} className="homewidgets">
         <WigetSm/>
         <WigetLg/>
        </div>  
            
        </div>
    );
};

export default Homes;