import { BrowserRouter as Router,Switch, Route, Link } from 'react-router-dom';

import Home from "./components/home";
import Login from "./components/login";
import UserPage from "./components/user-page"
import Logout from "./components/logout"

function App() {
  return (
    <div className="App">
      <Router>
        <Link to={{ pathname: `/`, fromDashBoard: false}}>Home</Link>
        <Switch>
          <Route path='/logout' exact component={Logout}></Route>
          <Route path='/login' exact component={Login}></Route>
          <Route path='/lk' exact component={UserPage}></Route>
          <Route path='/' exact component={Home}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
