import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './init.css';
import './global.sass';
import OcNav from './components/OcNav';

import Home from './pages/Home';
import Comments from './pages/Comments';
import Check from './pages/Check';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Layout>
      <Router>
        <Header>
          <OcNav />
        </Header>
        <Content>
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
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Content>
        <Footer>Footer</Footer>
      </Router>
    </Layout>
  )
}

export default App;
