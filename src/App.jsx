import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Setting from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/setting">Setting</Link>
        <Link to="/single">Single</Link>
        <Link to="/write">Write</Link>
      </nav>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/setting">
            <Setting />
          </Route>
          <Route path="/single">
            <Single />
          </Route>
          <Route path="/write">
            <Write />
          </Route>
      </Switch>
   
   </Router>
  )
}

export default App
