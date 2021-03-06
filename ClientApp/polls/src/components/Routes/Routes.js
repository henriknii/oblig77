import React, { useEffect, useState} from "react";
import { Switch, Route, withRouter, } from "react-router-dom";
import axios from 'axios'


//Components
import Login from "../Login/Login";
import Header from "../Header";
import Register from "../Register/Register";
import Join from "../Join";
import PageNotFound from "../PageNotFound";
import CreatePoll from "../CreatePoll";
import Poll from "../Poll"

//checking if PageNotFound is rendered so that the header dissapears.

const Routes = ({ location }) => {
  // Paths that header is excluded from.
  const excludedPaths = ["/registrer", "/Create-poll",];

  

  return (
    <div className="App">
      <div className="col-sm-1 mx-auto">
        {excludedPaths.indexOf(location.pathname) < 0 &&  location.pathname !=="/404-page-not-found" && <Header />}
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/registrer" exact component={Register} />
          <Route path="/join" exact component={Join} />
          <Route path="/CreatePoll" exact component={CreatePoll} />
          <Route path="/poll/:id" component={Poll}></Route>
          <Route component={PageNotFound}></Route>
        </Switch>
      </div>
    </div>
  );
};

export default withRouter(Routes);