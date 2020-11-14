
import React from "react"
import {Switch,Route,withRouter}  from 'react-router-dom';

//Components
import Login from "../Login/Login";
import Header from "../Header";
import Register from "../Register/Register"
import Join from "../Join"


const Routes = ({location}) => {
    
    const exlcudedPaths = [
        '/registrer',
        '/Create-poll'

    ]
return(
        <div className="App">
            <div className="col-sm-1 mx-auto">
               {exlcudedPaths.indexOf(location.pathname) < 0 && <Header />}
                <Switch>
                <Route  path="/" exact component={Login} />
                <Route path="/registrer" exact component={Register} />
                <Route path="/join" exact component={Join} />
                </Switch>
            </div>
        </div>
)
}

export default withRouter(Routes);