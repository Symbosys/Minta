import { Navigate, Outlet } from 'react-router-dom';

const isAuthenticated = () => {
    return Boolean(localStorage.getItem('r')); // Replace with actual auth logic
};


const ProtectedRoute = () => {
    return isAuthenticated() ? <Outlet /> : <Navigate to="/signIn" />;
};
export { ProtectedRoute, isAuthenticated } ;

