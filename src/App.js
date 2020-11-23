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
import Update from './Update';
import View from './View';
import EmployeeInfo from './EmployeeInfo';
import GuarantorInfo from './GuarantorInfo';
import EmployerInfo from './EmployerInfo';
import ResultInfo from './ResultInfo';
import EditEmployee from './EditEmployee';
import Guarantors from './Guarantors';
import 'bootstrap/dist/css/bootstrap.min.css';
import EditRegion from './EditRegion';
import EditEmployer from './EditEmployer';
import EditResult from './EditResult';
import Employers from './Employers';
import EditGuarantor from './EditGuarantor';


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
          <Route path='/guarantorForm/:id' component={GuarantorForm}>
          </Route>
          <Route path='/employerForm/:id' component={EmployerForm}>
          </Route>
          <Route path='/resultForm/:id' component={ResultForm}>
          </Route>
          <Route path='/update/:id' component={Update}>
          </Route>
          <Route path='/view/:id' component={View}>
          </Route>
          <Route path='/employeeInfo/:id' component={EmployeeInfo}>
          </Route>
          <Route path='/employerInfo/:id' component={EmployerInfo}>
          </Route>
          <Route path='/guarantorInfo/:id' component={GuarantorInfo}>
          </Route>
          <Route path='/resultInfo/:id' component={ResultInfo}>
          </Route>
          <Route path='/editEmployee/:id' component={EditEmployee}>
          </Route>
          <Route path='/editEmployer/:id' component={EditEmployer}>
          </Route>
          <Route path='/guarantors/:id' component={Guarantors}>
          </Route>
          <Route path='/editRegion/:id' component={EditRegion}>
          </Route>
          <Route path='/editResult/:id' component={EditResult}>
          </Route>
          <Route path='/employers/:id' component={Employers}>
          </Route>
          <Route path='/editGuarantor/:id' component={EditGuarantor}>
          </Route>
        </div>
        </Switch>
      </Router>
  );
}

export default App;
