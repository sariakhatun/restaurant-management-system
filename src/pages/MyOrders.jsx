import React, { Suspense } from 'react';
import OrderList from './OrderList';
import Loading from '../Components/Loading';
import useAuth from '../hooks/useAuth';
import { myOrdersPromise } from '../Apis/MyOrderApi';


const MyOrders = () => {
    let {user} = useAuth()
   // console.log('token',user.accessToken)
    
    return (
        <div>
           <Suspense fallback={<Loading></Loading>}>
            <OrderList myOrdersPromise={myOrdersPromise(user.email,user.accessToken)}></OrderList>
           </Suspense>
        </div>
    );
};

export default MyOrders;