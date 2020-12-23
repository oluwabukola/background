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
import Verify from './verification/Verify';
import GuarantorForm from './GuarantorForm';
import ResultForm from './ResultForm';
import EmployerForm from './EmployerForm';
import Update from './Update';
import View from './View';
import RegionView from './RegionView';
import EmployeeInfo from './EmployeeInfo';
import GuarantorInfo from './GuarantorInfo';
import EmployerInfo from './EmployerInfo';
import RegionInfo from './RegionInfo';
import Results from './Results';
import ResultInfo from './ResultInfo';
import EditEmployee from './EditEmployee';
import Guarantors from './Guarantors';
import 'bootstrap/dist/css/bootstrap.min.css';
import EditRegion from './EditRegion';
import EditEmployer from './EditEmployer';
import EditResult from './EditResult';
import Employers from './Employers';
import EditGuarantor from './EditGuarantor';
import Verification from './verification/Verification';
import VerifyGuarantors from './verification/VerifyGuarantors';
import VerifyPrevEmployers from './verification/VerifyPrevEmployers';
import VerifyAddress from './verification/VerifyAddress';
import VerifyReferees from './verification/VerifyReferees';
import Details from './verification/Details';
import Signout from './Signout';
import GuarantorDetails from './verification/GuarantorDetails';
import EmployerDetails from './verification/EmployerDetails';
import RefereeDetails from './verification/RefereeDetails';



function App() {
  return (
   
    <Router>
      
      <Switch>
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
        <Route path='/regionView/:id' component={RegionView}>
          </Route>
          <Route path='/employeeInfo/:id' component={EmployeeInfo}>
          </Route>
          <Route path='/employerInfo/:id' component={EmployerInfo}>
          </Route>
          <Route path='/guarantorInfo/:id' component={GuarantorInfo}>
        </Route>
        <Route path='/regionInfo/:id' component={RegionInfo}>
        </Route>
        <Route path='/resultInfo/:id' component={ResultInfo}>
        </Route>
          <Route path='/results/:id' component={Results}>
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
        <Route path='/verification' component={Verification}>
        </Route>
        <Route path='/verify/:id' component={Verify}>
        </Route>
        <Route path='/verifyguarantors/:id' component={VerifyGuarantors}>
        </Route>
        <Route path='/verifyprevemployers/:id' component={VerifyPrevEmployers}>
        </Route>
        <Route path='/verifyreferees/:id' component={VerifyReferees}>
        </Route>
        <Route path='/verifyAddress/:id' component={VerifyAddress}>
        </Route>

        <Route path='/details/:id' component={Details}>
        </Route>
        <Route path='/guarantorDetails/:id' component={GuarantorDetails}>
        </Route>
        <Route path='/employerDetails/:id' component={EmployerDetails}>
        </Route>
        <Route path='/refereeDetails/:id' component={RefereeDetails}>
        </Route>
      </Switch>
      
      </Router>

  );
}

export default App;
