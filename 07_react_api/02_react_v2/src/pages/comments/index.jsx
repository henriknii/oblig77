import React from 'react';
import {
  Switch,
  Route,
  NavLink,
  useParams,
  Prompt,
  useRouteMatch,
} from 'react-router-dom';

const Comments = () => {
  const { path } = useRouteMatch();

  return (
    <div>
      <Prompt when message="Vil du forlate denne siden?" />
      <h2>Comments Page</h2>
      <ul>
        <li>
          <NavLink to="/comments/topic/sub1">Sub1</NavLink>
        </li>
        <li>
          <NavLink to="/comments/topic/sub2">Sub2</NavLink>
        </li>
        <li>
          <NavLink to="/comments/topic/sub3">Sub3</NavLink>
        </li>
      </ul>
      <Switch>
        <Route path={`${path}/topic/:id`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  );
};

function Topic() {
  const { id } = useParams();

  return (
    <div>
      <h3>{id}</h3>
    </div>
  );
}

export default Comments;
