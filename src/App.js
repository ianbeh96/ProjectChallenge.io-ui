import React from "react";
import './App.css';
import LandingPage from './views/landingPage';
import LoginPage from './views/loginPage';
import RegisterPage from './views/registerPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import ProtectedRoute from "./routes/protectedRoute";
 
export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <ProtectedRoute path="/landing">
          <LandingPage />
        </ProtectedRoute>
        <Route exact path="/">
          <Redirect exact from="/" to="landing" />
        </Route>
        <Route path="*">
          <Redirect from="/" to="landing" />
        </Route>
      </Switch>
    </Router>
  );
}
