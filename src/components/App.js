import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "../styles/App.scss";
import SideNavBar from "./navigation/SideNavbar";
import Dashboard from "./pages/Dashboard";
import DashboardItem from "./dashboard/DashboardItem";
import About from "./pages/About";
import icons from "./helpers/icons";

function App() {
  icons();

  return (
    <div className="App">
      <Router>
        <Route path="/" component={SideNavBar} />

        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/dashboard/:id" component={DashboardItem} />

          <Route exact path="/about" component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
