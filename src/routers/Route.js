import React from "react";
import { Switch, Route } from "react-router-dom";
import routerEnable from "./routerEnable";

const RouteComponent = ({ component: Component, ...rest,props }) => {
  return <Route {...rest} render={(props) => <Component {...props} />} />;
};



const AsyncTabs = routerEnable(() => {
  return import("./tabs/Tab");
});
const AsyncNotPage = routerEnable(()=>{
  return import('./not-page/NotPage')
})

export default ()=>{
  return (
    <Switch>
      <RouteComponent path="/tabs" component={AsyncTabs} exact />
      <RouteComponent component={AsyncNotPage} />
    </Switch>
  )
};
