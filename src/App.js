import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
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

import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Layout>
      <Router>
        <header>
          <OcNav />
        </header>
        <div>
          <Switch>
            <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/check">
              <Check />
            </Route>
            <Route path="/comments">
              <Comments />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/deposit">
              <Deposit />
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
    </Layout>
  )
}

export default App;
