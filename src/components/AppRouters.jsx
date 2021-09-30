import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import routers from "../routers.js";

function AppRouters () {
  return(
    <Switch>
      {
        routers.map((route, index) => {
          return <Route key={index} {...route} />
        })
      }
      <Redirect to="/"/>
    </Switch>
  );
}

export default AppRouters;