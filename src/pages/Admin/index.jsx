import React, {useState} from 'react';
import './index.sass';
import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

import CommentList from './CommentList';
import TaskList from './TaskList';
import TaskDetail from './TaskDetail';
import UserList from './UserList';
import UserDetail from './UserDetail';

const { Header, Content, Footer, Sider } = Layout;


export default function Admin() {
	let { path, url } = useRouteMatch();
  const [key, setkey] = useState('2')
  const handleClick = e => {
  };
  return (
  	<Layout>
  	  <Sider
  	    breakpoint="lg"
  	    collapsedWidth="0"
  	    onBreakpoint={broken => {
  	      console.log(broken);
  	    }}
  	    onCollapse={(collapsed, type) => {
  	      console.log(collapsed, type);
  	    }}
  	  >
  	    <div className="logo" />
  	    <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['2']}
          onClick={handleClick}
        >
  	      <Menu.Item key="1">
            <Link to={`${url}/users`}>用户列表</Link>
  	      </Menu.Item>
  	      <Menu.Item key="2">
            <Link to={`${url}/tasks`}>
            任务列表
            </Link>
  	      </Menu.Item>
  	      <Menu.Item key="3">
            <Link to={`${url}/comments/`}>
              评论审核
            </Link>
  	      </Menu.Item>
  	    </Menu>
  	  </Sider>
  	  <Layout>
  	    <Content style={{ margin: '24px 16px 0' }}>
  	      <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Switch>
              <Route exact path={path}>
                <TaskList />
              </Route>
              <Route path={`${path}/comments/`}>
                <CommentList />
              </Route>
              <Route path={`${path}/tasks/:id`}>
                <TaskDetail />
              </Route>
              <Route path={`${path}/tasks/`}>
                <TaskList />
              </Route>
              <Route path={`${path}/users/:uid`}>
                <UserDetail />
              </Route>
              <Route path={`${path}/users/`}>
                <UserList />
              </Route>
            </Switch>
  	      </div>
  	    </Content>
  	  </Layout>
  	</Layout>
  )
}
