import Cookies from 'universal-cookie';
import { Redirect } from "react-router";

function logout() {
    const cookies1 = new Cookies();
    cookies1.remove("token");
    return (
        <Redirect to="/" />
    )
}

export default logout;
