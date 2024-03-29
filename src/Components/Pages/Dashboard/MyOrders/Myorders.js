import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth'
import Loader from '../../Shared/Loader/Loader';

import Order from './Order';
const Myorders = () => {

    const { user } = useAuth();
    const [success, setSuccess] = useState();

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://nextgen-games-server.onrender.com/order/${user.email}`)
            .then((res) => res.json())
            .then((data) => {
                setOrders(data);
            });
    }, [user.email]);
   


    const removeOrderHandler = (id) => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed === true) {
            const url = `https://nextgen-games-server.onrender.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount) {
                       
                        setSuccess(true);
                        setTimeout(() => {
                            setSuccess(false);
                        }, 5000);
                        const remaining = orders.filter((order) => order._id !== id);
                        setOrders(remaining);
                    }
                });
        }
    };
if(orders.length===0){
    return <Loader></Loader>
}
    
    return (
        <Container>
            {orders.length === 0 ? (
          <div className='shadow-2xl'>You have no order</div>
        ) : 
            
            orders.map(order=> <Order
            key={order._id}
            order={order}
            removeOrderHandler={removeOrderHandler}
            ></Order>)
       
          
        }
        </Container>
    );
};

export default Myorders;