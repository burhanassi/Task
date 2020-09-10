import React, {Component} from 'react';
import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom';
import SubmitForm from "./containers/SubmitForm/SubmitForm";
import Navigations from "./components/Navigations/Navigations";
// import { Chart,
//   BarSeries,
//   Title,
//   ArgumentAxis,
//   ValueAxis } from '@devexpress/dx-react-chart-material-ui';
import {connect} from "react-redux";
// import { Animation } from '@devexpress/dx-react-chart';

class App extends Component {
  render() {
    let basicData = this.props.todos;

    let routes = <Switch>
      <Route exact path={'/submit'} component={SubmitForm}/>
      <Route exact path={'/chart'}>
        {/*<Chart type="bar" data={basicData}>*/}
        {/*  <ArgumentAxis />*/}
        {/*  <ValueAxis max={13} />*/}

        {/*  <BarSeries*/}
        {/*      valueField=""*/}
        {/*      argumentField="date"*/}
        {/*  />*/}
        {/*  <Title text="ToDo Chart" />*/}
        {/*  <Animation />*/}
        {/*</Chart>*/}
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

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
};

export default connect(mapStateToProps)(App);
