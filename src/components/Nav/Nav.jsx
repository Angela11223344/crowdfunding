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

    //To show 'Welcome 'username'' on login
    const [owner, setOwner] = useState([]);

    }

    return (
        <nav>
            <div className="welcome">
                {loggedIn && <p>Welcome!</p>}
                {!loggedIn && <Link className="sign-in" to="/login">Sign In</Link>}
            </div>
            <div>
                {!loggedIn && <Link to="/register">Not A Member? Create New Account</Link>}
            <div className="home">
                <Link to="/" >Home</Link>
            <div>
                {loggedIn && <Link to="/myProjects" >My Projects |</Link>}
                {loggedIn && <Link to="/" >My Account Details |</Link>}
                {loggedIn && <Link to="/projects" >Create A New Project |</Link>}
                {loggedIn && <button onClick={handleClick}>Sign Out</button>}
            </div>
            </div>
            </div>
        </nav>
    );
}
export default Nav;

