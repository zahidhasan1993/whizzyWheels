import React, { useContext } from 'react';
import { DataProvider } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2'


const PrivateRoute = ({children}) => {
    
    const {user,loader} = useContext(DataProvider);
    const location = useLocation();

    if(loader){
        return <button className="btn loading ml-32 my-20 md:ml-[35rem] md:my-72">loading</button>
    }
    if(!user){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please Login First'
          })
    }
    if(user){
        return children;
    }

    return <Navigate to='/login' state={{from : location}} replace></Navigate>
};

export default PrivateRoute;