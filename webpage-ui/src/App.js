import { BrowserRouter as Router,Switch, Route, Link } from 'react-router-dom';

import Home from "./components/home";
import Login from "./components/login";
import UserPage from "./components/user-page";
import Logout from "./components/logout";
import Registration from "./components/reg";
import Lessons from "./components/master";
import Market from "./components/market";
import Chat from "./components/chat";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/chat' exact component={Chat}></Route>
          <Route path='/market' exact component={Market}></Route>
          <Route path='/lessons' exact component={Lessons}></Route>
          <Route path='/reg' exact component={Registration}></Route>
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
