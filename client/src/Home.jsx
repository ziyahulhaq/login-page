import { Link } from "react-router-dom";

function Home() {
    return ( 
        <Link className="link-login" to="/login">
        <h2>Login</h2>
        </Link>
     );
}

export default Home;