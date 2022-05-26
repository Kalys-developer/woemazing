import React from 'react';
import {ArrowDownward, ArrowUpward} from '@mui/icons-material';



const Futer = () => {
    return (
        <div className="futered">
            <div className="futered_item">
                <span className="futered_title">Ravenue</span>
                <div className="futered_moneycontainer">
                  <span className="futered_money">
                      $2,415                   
                  </span>
                  <span className="futered_moneyrate">-11.4<ArrowDownward className="futered_iconnagativ"/></span>
                </div>
                <span className="futered_sub">Compared to last month</span>
            </div>
           
            <div className="futered_item">
    <span className="futered_title">Seles</span>
    <div className="futered_moneycontainer">
      <span className="futered_money">
          $4,415                   
      </span>
      <span className="futered_moneyrate">-1.4<ArrowDownward className="futered_iconnagativ"/></span>
    </div>
    <span className="futered_sub">Compared to last month</span>
</div>

<div className="futered_item">
    <span className="futered_title">Cost</span>
    <div className="futered_moneycontainer">
      <span className="futered_money">
          $2,225                   
      </span>
      <span className="futered_moneyrate">+2.4<ArrowUpward className="futered_icon"/></span>
    </div>
    <span className="futered_sub">Compared to last month</span>
</div>
   
        </div>
        
    );
};

export default Futer;