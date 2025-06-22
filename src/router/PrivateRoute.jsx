import React, { use } from 'react';

import { Navigate, useLocation } from 'react-router';
import Loading from '../Components/Loading';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({children}) => {

    let {user,loading} = useAuth();
    let location = useLocation()
    console.log(location.pathname)

    if(loading){
        return <Loading></Loading>
    }
    if(!user){
       return <Navigate to='/login' state={location.pathname}></Navigate>
    } 
    return children

   
};

export default PrivateRoute;