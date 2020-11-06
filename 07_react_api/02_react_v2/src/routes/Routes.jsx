import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';
import Posts from '../pages/posts/list';
import Create from '../pages/posts/create';
import Post from '../pages/post';
import About from '../pages/about';
import NoMatch from '../pages/nomatch';
import Comments from '../pages/comments';
import Ref from '../pages/ref';
import SideEffects from '../pages/sideeffects';

const Routes = () => (
  <Router>
    <MainLayout>
      <Switch>
        <Route exact path="/posts">
          <Posts />
        </Route>
        <Route exact path="/posts/create">
          <Create />
        </Route>
        <Route path="/posts/:id">
          <Post />
        </Route>
        <Route path="/comments">
          <Comments />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/ref">
          <Ref />
        </Route>
        <Route path="/side">
          <SideEffects />
        </Route>
        <Redirect exact from="/" to="/posts" />
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </MainLayout>
  </Router>
);

export default Routes;
