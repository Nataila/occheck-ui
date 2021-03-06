import React, { useState, createContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import 'antd/dist/antd.css';
import './init.sass';
import './global.sass';
import OcNav from './components/OcNav';
import OcFooter from './components/OcFooter';

import Home from './pages/Home';
import Comments from './pages/Comments';
import Check from './pages/Check';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
import Deposit from './pages/Deposit';
import Admin from './pages/Admin';
import ForgetPwd from './pages/ForgetPwd';

import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;

export const loginContext = createContext(null)

function PrivateRoute(props) {
  const user = localStorage.getItem('user');
  if (!user) {
    return (
      <Redirect from={props.path} to='/signin' />
    )
  } else {
    return (
      <Route path={props.path} component={props.component} />
    )
  }
}

function App() {
  const status = localStorage.getItem('user') === null ? false : true;
  const [isLogin, setLogin] = useState(status)
  return (
    <loginContext.Provider value={{ isLogin, setLogin }}>
      <Router>
        <header>
          <OcNav isLogin={isLogin} />
        </header>
        <div>
          <Switch>
            <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/forget">
              <ForgetPwd />
            </Route>
            <PrivateRoute path="/check" component={ Check } />
            <Route path="/comments">
              <Comments />
            </Route>
            <PrivateRoute path="/profile" component={ Profile } />
            <PrivateRoute path="/deposit" component={ Deposit } />
            <Route path="/admin">
              <Admin />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        <footer>
          <OcFooter />
        </footer>
      </Router>
    </loginContext.Provider>
  )
}

export default App;
