
import React from "react";
import ReactDom from "react-dom";
//  import App from "./App";
import Card from "./Card";
import Sdata from "./Sdata";
import "./index.css"



ReactDom.render(
  
 <>
<div className="mainDiv">
{Sdata.map((val)=>{
return(
    <Card  plan={val.plan} price={val.price} features={val.features} />
);
})};
</div>
 </>
 ,document.getElementById('root')
);