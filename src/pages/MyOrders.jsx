import React, { Suspense, use } from 'react';
import OrderList from './OrderList';
import Loading from '../Components/Loading';
import useAuth from '../hooks/useAuth';
import { myOrdersPromise } from '../Apis/MyOrderApi';




const MyOrders = () => {
    let {user} = useAuth()
    
    return (
        <div>
           <Suspense fallback={<Loading></Loading>}>
            <OrderList myOrdersPromise={myOrdersPromise(user.email)}></OrderList>
           </Suspense>
        </div>
    );
};

export default MyOrders;