import React from "react";

function Card(props){
    
    return(
        <>
      <div className="card">
          <p className="plan">{props.plan}</p>
          <p className="price">${props.price}<span className="month">/month</span></p>
          <ul className="list">
              {props.features.map((ele)=>{
               return(
                <li>{ele}</li>
               )
              })}
              
              
        </ul>
           
          <button className="buy">BUY</button>
      </div>
       
        </>
    );
}

export default Card;