import { useContext } from "react"
import { AppContext } from "../AppContext/AppProvider";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const { isLoading, user } = useContext(AppContext);
  if (isLoading) {
    return <div className="h-[80vh] w-[90vw] flex items-center justify-center">
      <span className="loading loading-infinity loading-lg"></span>
    </div>
  } else if (user) {
    return children
  } else {
    return <Navigate to='/login'></Navigate>
  }
}

export default PrivateRouter
