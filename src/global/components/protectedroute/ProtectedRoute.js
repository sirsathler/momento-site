import { Navigate } from "react-router-dom";


import { useContext } from "react";
import { AuthContext } from '../../contexts/Auth'


const ProtectedRoute = ({ children }) => {
    const AuthProvider = useContext(AuthContext)

    if(AuthProvider.loading){
        return <h1>loading...</h1>
    }

    if(!AuthProvider.token){
        return <Navigate to="/login" replace={true} />
    }

    return children;
};
export default ProtectedRoute;