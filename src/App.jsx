import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { useState, useEffect } from "react";


//Pages
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import LoginPage from "./pages/LoginPage";
import MyProjectPage from "./pages/MyProjectPage";
import PledgeFormPage from "./pages/PledgeFormPage";
import MyAccountPage from "./pages/MyAccountPage";

//Components
import Nav from "./components/Nav/Nav";
//import Footer from "./components/Footer/Footer";
import Register from "./components/User/Register";
// import PledgeForm from "./components/PledgeForm/PledgeForm";
import ProjectForm from "./components/ProjectForm/ProjectForm";


//CSS
import "./App.css";
// import MyAccountPage from "./pages/MyAccountPage";

const HeaderLayout = () => {

  const [loggedIn, setLoggedIn] = useState(window.localStorage.getItem("token") != null)
  return (
    <>
      <Nav loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Outlet context={[loggedIn, setLoggedIn]} />
    </>
  );
}

// const HeaderLayout = () => (
//   <div>
//     <Nav />
//     <Outlet />
//   </div>
// );

const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/login", element: <LoginPage />},
      { path: "/myProjects", element: <MyProjectPage />},
      { path: "/project/:id", element: <ProjectPage /> },
      { path: "/pledges", element: <PledgeFormPage />},
      { path: "/register", element: <Register />},
      { path: "/projects", element: <ProjectForm />},
      { path: "/users/:id", element: <MyAccountPage />},
    ],
  },
]);

function App() {

  const [projectData, setProjectData] = useState([]);

  const fetchData = () => {
    fetch(`${import.meta.env.VITE_API_URL}projects/`)
      .then((result) => result.json())
      .then((result) => {
        setProjectData(result);
        //console.log(result);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
      <>
        <RouterProvider router={router} />
      </>
      );
};

export default App;