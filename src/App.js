import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home";
import { clearMessage } from "./actions/message";
import { history } from "./helpers/history";
import PostitJoke from "./components/PostitJoke";

const App = () => {  
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);
  
  return (
    <Router history={history}>
      <div>
        <div className="d-flex navbar-dark headergray">
          <div className="logo"></div>
        </div>
        <div className="mainjokes">
          <div className="slogan">The best way to have fun with your old man.</div>
          <div className="jokescontainer">
            <PostitJoke type="beer" 
              title="Have fun with your dad!" 
              description="Lorem ipsum dolor sit amet, consectetuer adpiscing elit, sed diam nonummy."/>
            <PostitJoke type="sad" 
              title="Smooth the rough edges" 
              description="Lorem ipsum dolor sit amet, consectetuer adpiscing elit, sed diam nonummy."/>
            <PostitJoke type="hug" 
              title="Appreciate his jokes" 
              description="Lorem ipsum dolor sit amet, consectetuer adpiscing elit, sed diam nonummy."/>            
          </div>
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
