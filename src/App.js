import React, {Component} from 'react';
import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom';
import SubmitForm from "./containers/SubmitForm/SubmitForm";
import Navigations from "./components/Navigations/Navigations";
import Chart from "./containers/Chart/Chart";

class App extends Component {
  render() {
    let routes = <Switch>
      <Route exact path={'/submit'} component={SubmitForm}/>
      <Route exact path={'/chart'}>
        <Chart/>
      </Route>
      <Redirect to={'/submit'} from={'/'}/>
    </Switch>

    return (
        <div className="App">
          <Navigations/>
          {routes}
        </div>
    );
  }
}

export default App;