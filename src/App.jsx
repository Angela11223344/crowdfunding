import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { useState } from "react";


//Pages
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import LoginPage from "./pages/LoginPage";
import PledgePage from "./pages/PledgePage";
import MyProjectPage from "./pages/MyProjectPage";
import PledgeFormPage from "./pages/PledgeFormPage";
import CreateAccountPage from "./pages/CreateAccountPage";

//Components
import Nav from "./components/Nav/Nav";
//import Footer from "./components/Footer/Footer";

//CSS
import "./App.css";

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
      { path: "/pledges/:id", element: <PledgePage />},
      { path: "/pledges", element: <PledgeFormPage />},
      { path: "/createAccount", element: <CreateAccountPage />},
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;