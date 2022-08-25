import { Navigate } from "react-router-dom";


import { useContext } from "react";
import { AuthContext } from '../../contexts/AuthProvider'


const ProtectedRoute = ({ children }) => {

    const AuthProvider = useContext(AuthContext)
    if(AuthProvider.user.token)
    return <Navigate to="/login" replace={true} />

    return children;
};
export default ProtectedRoute;