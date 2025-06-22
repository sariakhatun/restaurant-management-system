import React, { Suspense } from 'react';
import FoodList from './Foodlist';
import Loading from '../Components/Loading';
import { myFoodsPromise } from '../Apis/MyFoodsApi';
import useAuth from '../hooks/useAuth';

const MyFood = () => {
    let {user} = useAuth()
    return (
        <div>
            <Suspense fallback={<Loading></Loading>}>
                <FoodList myFoodsPromise={myFoodsPromise(user.email)}></FoodList>
            </Suspense>
        </div>
    );
};

export default MyFood;