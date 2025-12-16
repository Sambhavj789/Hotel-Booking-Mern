import { useContext } from "react"
import { UserDataContext } from "../context/UserContext"
import { Navigate } from "react-router-dom";

function OwnerProtectedRoutes({ children }) {
    const { user } = useContext(UserDataContext);
    if (user?.isOwner) {
        return children
    }
    return <Navigate to="/" />
}

export default OwnerProtectedRoutes;