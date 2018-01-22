import React from "react";
import { Switch, Route,Redirect } from "react-router-dom";
import routerEnable from "./routerEnable";


//react-router按需加载
const RouteComponent = ({ component: Component, ...rest,props }) => {
  return <Route {...rest} render={(props) => <Component {...props} />} />;
};



const AsyncHome = routerEnable(() => {
  return import("./home/Home");
});
const AsyncNotPage = routerEnable(()=>{
  return import('./not-page/NotPage');
})

const AsyncSearch = routerEnable(()=>{
  return import('./search/Search')
})

export default ()=>{
  return (
    <Switch>
      <Redirect exact path="/" to="/home" />
      <RouteComponent path="/home" component={AsyncHome} exact />
      <RouteComponent path="/search" component={AsyncSearch} exact />
      <RouteComponent component={AsyncNotPage} />
    </Switch>
  )
};
