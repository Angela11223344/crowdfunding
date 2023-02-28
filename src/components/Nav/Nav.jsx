import { Link } from "react-router-dom";
import "./Nav.css";


// function Nav() {
//     return (
//         <nav>
//             <Link to="/">Home</Link>
//             <Link to="/login">Login</Link>
//             <Link to="/pledges">View all pledges</Link>
//         </nav>
//     );
// }

function Nav(props) {
    const { loggedIn, setLoggedIn } = props
    const handleClick = () => {
        window.localStorage.removeItem("token")
        setLoggedIn(false)
    }

    return (
        <nav>
            <div id="nav-right">
                {loggedIn && <p>Welcome!</p>}
                {!loggedIn && <Link to="/login" className="btn">Sign In</Link>}
            <div>
                {!loggedIn && <Link to="/createAccount" className="btn">Not A Member? Create New Account</Link>}
            </div>
            <div id="nav-controls">
                <Link to="/" >Home</Link>
            </div>
            </div>
            <div>
                {loggedIn && <Link to="/myProjects" >My Projects</Link>}
            </div>
            <div>
                {loggedIn && <Link to="/" >My Account Details</Link>}
            </div>
            <div>
                {loggedIn && <Link to="/projects" >Create A New Project</Link>}
            </div>
            <div>
                {loggedIn && <button onClick={handleClick}>Sign Out</button>}
            </div>
        </nav>
    );
}
export default Nav;

