import React from "react";
import { Switch, Route } from "react-router-dom";
import routerEnable from "./routerEnable";

const AsyncTabs = routerEnable(() => {
  return import("./tabs/Tab");
});

const NotFindPage = () =>{
  return <div>2222</div>
}

const RouteComponent = ({ component: Component, ...rest,props }) => {
  return <Route {...rest} render={(props) => <Component {...props} />} />;
};

export default ()=>{
  return (
    <Switch>
      <RouteComponent path="/tabs" component={AsyncTabs} />
      <RouteComponent component={NotFindPage} />
    </Switch>
  )
};
