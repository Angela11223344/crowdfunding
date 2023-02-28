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
            <div>
                {/* {loggedIn && <p>Welcome!</p>} */}
                {!loggedIn && <Link to="/login">Sign In</Link>}
            </div>
            <div>
                {!loggedIn && <Link to="/createAccount">Not A Member? Create New Account</Link>}
                <div className="nav-item">
                <Link to="/" >Home</Link>
                {loggedIn && <Link to="/myProjects" >My Projects</Link>}
                {loggedIn && <Link to="/" >My Account Details</Link>}
                {loggedIn && <Link to="/projects" >Create A New Project</Link>}
                {loggedIn && <button onClick={handleClick}>Sign Out</button>}
                </div>
            </div>
        </nav>
    );
}
export default Nav;

