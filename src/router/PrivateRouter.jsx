import {Navigate} from "react-router-dom";
import {useUserAuth} from "../context/UserAuthContext";

const PrivateRouter = ({children}) => {
    let {user} = useUserAuth();

   return user ? children : <Navigate to="/Login" />;

}

export default PrivateRouter;