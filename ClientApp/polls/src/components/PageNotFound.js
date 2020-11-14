import React, { useEffect } from "react";
import { Link ,Redirect} from "react-router-dom";

const PageNotFound = ({ location }) => {

  return (
    <div class="col-xs-1 w-75 mx-auto text-center">
        <Redirect to="/404-page-not-found" />
      <h1>Error 404</h1>
      <p>
        The page 
         does not exist
      </p>
      <Link to="/">
        <button className="btn btn-primary">Ta meg tilbake</button>
      </Link>
    </div>
  );
};

export default PageNotFound;