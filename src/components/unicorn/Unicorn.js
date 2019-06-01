import React from 'react';

import './unicorn.css';

function Unicorn() {
  return (
    <div className="unicorn">
      <div className="face">
        <div className="cheek"></div>
        <div className="snoot">
          <div className="nose">
            <div className="nostril"></div>
          </div>
        </div>
        <div className="eye">
          <div className="eyelashes"></div>
        </div>
        <div className="ear"></div>
        <div className="horn"></div>
        <div className="mane top"></div>
        <div className="mane mid"></div>
      </div>
      <div className="neck">
        <div className="mane end"></div>
      </div>
    </div>
  )
};

export default Unicorn;
