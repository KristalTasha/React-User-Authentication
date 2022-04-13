import { Navigate, Outlet } from "react-router-dom"

export const ProtectedRoute = ({ user, children }) => {
    if(!user){
        //adding replace to the navigation to cover any previous browser history
        return <Navigate to='/landing' replace/>
    }

    return children ? children : <Outlet/>
    
}