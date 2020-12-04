import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './init.css';
import './global.sass';
import OcNav from './components/OcNav';

import Home from './pages/Home';
import Comments from './pages/Comments';
import Check from './pages/Check';

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
