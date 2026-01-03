import React from "react";
import Axios from "axios";
const Card = (props) => {
  return (
    <>
      <div className="card-container">
        {props.allData.map((item, idx) => {

            const clr1 = Math.floor(Math.random() * 256);
            const clr2 = Math.floor(Math.random() * 256);   
            const clr3 = Math.floor(Math.random() * 256);   

          return (
            <div style={{backgroundColor: `rgb(${clr1},${clr2},${clr3})`}} className="card" key={idx}>
              <h2>{item.username}</h2>
              <h3>{item.phone}</h3>
              <h4>{item.password}</h4>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Card;
