import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  withRouter,
  Route,
  Link
} from "react-router-dom";
import Login from './login';

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('logged out');
    
    const token = localStorage.getItem('token');
    const response = fetch('http://hotelanywhere.ng/background/api/auth/logout', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
              
    })
      .then(response => {
        return response.json();
                  
      })
      .then(data => {
        console.log(data);

        this.props.history.push('/Login')
          
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  
  }
  render() {
       
    return (
            
     
      <div className="navi">
        <ul>
          <li><Link to='/home'><i className="fas fa-columns"></i>Home</Link></li>
          <li><Link to='/regions'><i className="fas fa-compass"></i>Regions</Link>
            <div className="sub-region">
              <ul >
                <li><button type="button">Edit Region</button></li>
                <li> <Link to='/addregion'><button type="button">Add Region<i className="fas fa-plus"></i></button></Link></li>
              </ul>
            </div>
          </li>
          <li><Link to='/createEmployee'><i className="fas fa-compass regn"></i>Create Employee</Link> </li>
          <li><Link to='/verification'><i className="fas fa-compass regn"></i>Verification</Link> </li>
          <li onClick={this.handleSubmit}><i className="fas fa-sign-out-alt "></i>Signout</li>
        </ul>
      </div>
     
    )
  }
}
  
export default withRouter(Nav) ;