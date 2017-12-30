import React from "react";
import { Switch, Route,Redirect } from "react-router-dom";
import routerEnable from "./routerEnable";

const RouteComponent = ({ component: Component, ...rest,props }) => {
  return <Route {...rest} render={(props) => <Component {...props} />} />;
};



const AsyncHome = routerEnable(() => {
  return import("./home/Home");
});
const AsyncNotPage = routerEnable(()=>{
  return import('./not-page/NotPage');
})

export default ()=>{
  return (
    <Switch>
      <Redirect exact path="/" to="/home" />
      <RouteComponent path="/home" component={AsyncHome} exact />
      <RouteComponent component={AsyncNotPage} />
    </Switch>
  )
};
