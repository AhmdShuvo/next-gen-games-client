import { Button, Table } from '@mui/material';
import React, { useState } from 'react';

const ManageOrder = ({order, quantity, removeOrderHandler}) => {
    const [status, setStatus] = useState(order.status);
  
    
  const updateStatus = (id) => {
    fetch(`https://warm-retreat-57868.herokuapp.com/orders/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setStatus('shipped');
        }
        window.location.reload()
      });
  };
    return (
      <section>
      <div class="card card-side bg-base-100 shadow-xl  m-3">
<figure><img  className='w-1/3 p-3 ' src={order.purchase.picture} alt="order img"/></figure>
<div class="card-body text-white">
<h2 class="card-title">{order.purchase.name}</h2>
<p>{order.status}</p>
<div class="card-actions justify-end">
<Button onClick={()=>{removeOrderHandler(order._id) }}>Delete order</Button>
<Button onClick={()=>{updateStatus(order._id) }}>Ship </Button>

</div>
</div>
</div>
  </section>
    );
};

export default ManageOrder;