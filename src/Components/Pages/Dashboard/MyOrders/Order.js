
import React from 'react';
import { Button} from '@mui/material';

import { Link, useNavigate } from 'react-router-dom';
const Order = ({order,removeOrderHandler}) => {
    const url=`payment/${order._id}`;
    const naviagte=useNavigate()
    return (
        <section>
            <div class="card card-side bg-base-100 shadow-xl  m-3">
  <figure><img  className='w-3/4 p-3 ' src={order.purchase.picture} alt="order img"/></figure>
  <div class="card-body text-white">
    <h2 class="card-title">{order.purchase.name}</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div class="card-actions justify-end">
    <Button onClick={()=>{removeOrderHandler(order._id) }}>Delete order</Button>
      <Button onClick={()=>naviagte(url)} >Pay Now</Button>
    </div>
  </div>
</div>
        </section>
    );
};

export default Order;