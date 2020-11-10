import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from "react-router-dom";
import './App.css';
import Signup from './signup';
import Login from './login';
import Home from './home';
import Regions from './Regions';
import AddRegion from './AddRegion';
import Employee from './Employee';
import EmployeeForm from './EmployeeForm'
import CreateEmployee from './CreateEmployee';
import Verify from './Verify';
import GuarantorForm from './GuarantorForm';
import ResultForm from './ResultForm';
import EmployerForm from './EmployerForm';


function App() {
  return (
    <Router>
      <Switch>
        <div>
          <Route path='/' exact component={Signup}>
          </Route>
          <Route path='/login' exact component={Login}>
            </Route>
          <Route path="/home" component={Home}>
          </Route>
          <Route path='/regions' component={Regions}>
          </Route>
          <Route path='/addregion' component={AddRegion}>
          </Route>
          <Route path='/employeeForm' component={EmployeeForm}>
          </Route>
          <Route path='/createEmployee' component={CreateEmployee}>
          </Route>
          <Route path='/employee' component={Employee}>
          </Route>
          <Route path='/verify' component={Verify}>
          </Route>
          <Route path='/guarantorForm/employee_id' component={GuarantorForm}>
          </Route>
          <Route path='/resultForm' component={ResultForm}>
          </Route>
          <Route path='/employerForm' component={EmployerForm}>
          </Route>
        </div>
        </Switch>
      </Router>
  );
}

export default App;
