import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import {DbNav} from './components/DbNav';
import {DbAbout} from './components/DbAbout';
import {DbRules} from './components/DbRules';
import {DbSubmit} from './components/DbSubmit';
import {DbRegister} from './components/DbRegister';
import {Default} from "./components/Default";
import { Splash } from "./components/Splash";
export default function App()  {
    return (
      <><Splash/>
        <Router>
          <Switch>
            <Route exact path={process.env.PUBLIC_URL + '/'}>
              <DbAbout/>
            </Route>
            <Route path={process.env.PUBLIC_URL + "/rules"} component={DbRules} />
            <Route path={process.env.PUBLIC_URL + "/submission"} component={DbSubmit} />
            <Route path={process.env.PUBLIC_URL + "/registration"} component={DbRegister} />
            <Route component={Default} />
          </Switch>
          <DbNav />
        </Router>
      </>
    );
};
