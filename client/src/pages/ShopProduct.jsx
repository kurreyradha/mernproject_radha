import { useState } from "react";
import Button from 'react-bootstrap/Button';
const ShopProduct=()=>{
    const [input, setInput]= useState({});

    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values, [name]:value}));
        console.log(input);
    }
    return(
        <>
         <h1 align="center"> Your Shopping Place</h1>
         <div id="shoppage">
            <div id="shopMenu"> 
              <h5> Set Your Pattern</h5>
              Low Price: <input type="text" name="lprice" value={input.lprice} onChange={handleInput} />
              <br/>
              High Price: <input type="text" name="hprice" value={input.hprice} onChange={handleInput} />
              <br/>
               <input type="checkbox" value="all" name="allcat" onChange={handleInput}/> Select All Products
              <br />
               <input type="checkbox" value="Men" name="mencat" onChange={handleInput}/> Mens
              <br/>
             <input type="checkbox" value="Women" name="womencat" onChange={handleInput}/> Womens 
              <br/>
              <input type="checkbox" value="Kids" name="kidcat" onChange={handleInput}/>  Kids
             <br/>
             
             <Button variant="primary" size="sm">
          Show Result
        </Button>
              


            </div>
            <div id="shopData"> </div>
         </div>
        </>
    )
}

export default ShopProduct;