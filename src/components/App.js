// import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Redirect } from "react-router-dom";

import "../styles/App.scss";
// import Login from "./auth/Login";
// import Logout from "./auth/Logout";
import SideNavBar from "./navigation/SideNavbar";
import Dashboard from "./pages/Dashboard";
import DashboardItem from "./dashboard/DashboardItem";
import About from "./pages/About";
import icons from "./helpers/icons";

icons();

function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  // const handleLogin = (isLoggedIn) => [setIsAuthenticated(isLoggedIn)];

  // const unAuthenticatedRoutes = () => {
  //   return (
  //     <Route
  //       exact
  //       path="/login"
  //       render={(props) => (
  //         <Login {...props} setIsAuthenticated={setIsAuthenticated} />
  //       )}
  //     />
  //   );
  // };

  // const authenticatedRoutes = () => {
  //   return [
  //     <Route key="sidenav" path="/" component={SideNavBar} />,
  //     <Route key="about" path="/about" component={About} />,

  //     <Route key="dashboard" exact path="/dashboard" component={Dashboard} />,
  //     <Route
  //       key="dashboard-item"
  //       path="/dashboard/:id"
  //       component={DashboardItem}
  //     />,

  //     <Route
  //       key="logout"
  //       path="/logout"
  //       render={(props) => {
  //         <Logout {...props} setIsAuthenticated={setIsAuthenticated} />;
  //       }}
  //     />,
  //   ];
  // };

  // useEffect(() => {
  //   fetch("http://devpipeline-mock-api.herokuapp.com/api/auth/check-login", {
  //     credentials: "include",
  //   })
  //     .then((res) => res.json())
  //     .then(() => handleLogin(true))
  //     .catch((err) => {
  //       console.error("Login Error: ", err);
  //       handleLogin(false);
  //     });
  // }, []);

  return (
    <div className="App">
      <Router>
        <Route path="/" component={SideNavBar} />

        <Switch>
          <Route path="/about" component={About} />

          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="/dashboard/:id" component={DashboardItem} />

          {/* {isAuthenticated ? unAuthenticatedRoutes() : authenticatedRoutes} */}

          {/* <Redirect from="/logout" to="/login" /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
