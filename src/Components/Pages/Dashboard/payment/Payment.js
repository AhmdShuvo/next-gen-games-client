import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";

import { toast } from "react-toastify";
// import '../App.css'

import "react-toastify/dist/ReactToastify.css";
import Loader from "../../Shared/Loader/Loader";
import Order from "../MyOrders/Order";


toast.configure();

function Payment() {
 const [product,setProoduct]=useState({})
 const {productId}=useParams()


 useEffect(()=>{
fetch("https://nextgen-games-server.onrender.com/orders").then(res=>res.json()).then(data=>{

  const match = data.find(plc => plc._id == productId)
  setProoduct(match);
})
 },[productId])

if (!product._id) {
  return <Loader></Loader>
  
}

  return (
    <Container>
      <div className="product">
        <h1>{product.purchase.name}</h1>
        <h3>Pay ${product.purchase.price}</h3>
      </div>
      <StripeCheckout
        stripeKey="pk_test_4TbuO6qAW2XPuce1Q6ywrGP200NrDZ2233"
        
        amount={product.price * 100}
        name="Tesla Roadster"
        billingAddress
        shippingAddress
      />
    </Container>
  );
}


export default Payment