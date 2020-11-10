import React from 'react';

const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
const formValid =({formErrors, ...rest} ) => {
    let valid = true;
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false)
    });
    Object.values(rest).forEach(val => {
        val.length === 0 && (valid = false);
    
    });
        return valid;
}
class Login extends React.Component{
        state = {
            email:'',
            password: '',
            formErrors: {
                email:'',
                password: '',
            }
        }
    
    handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            email: this.state.email,
            password:this.state.password,
        }
        if (formValid(this.state)) {
            const response = fetch('http://hotelanywhere.ng/background/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
                
            })
                .then(response => {
                    return response.json();
                    
                })
                .then(datum => {
                    console.log('Success:', datum)
                    const { access_token } = datum;
                    localStorage.setItem('token', access_token);
                    if (datum.message == 'Unauthorized') {
                        document.querySelector('.unauthorized').style.display = "block";
                       
                    }
                    else {
                        this.props.history.push('/Home')

                    }
                    
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
                  
        }
        else {
            console.error('form invalid');
        }
    }
    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let formErrors = this.state.formErrors;
        switch (name) {
            
                case 'email': formErrors.email= emailRegex.test(value)  && value.length > 0
                ?  "" : 'invalid email addreess';
                break;
                case 'password': formErrors.password = value.length < 6 && value.length > 0
                ? 'minimum of 6 characters required' : "";
                break;
            default:
                break;
        }
        
    
        this.setState({ formErrors, [name]: value }, console.log(this.state));
    }

    render() {
        const { formErrors } = this.state;
        return (
            
            <div className="login-container">
               
                <form className="login" noValidate>
                <div className="unauthorized">
                    <h3>email or password not found!</h3>
                </div>
                    <input type="email" name="email"
                        onChange={this.handleChange}
                        placeholder="Email"
                        />
                    <span className="errorMessage">{formErrors.email}</span>
                    <input type="password"
                        name="password"
                        onChange={this.handleChange}
                        placeholder="Password"
                        />
                    <span className="errorMessage">{formErrors.password}</span>
                   
                    <button type="button" className="login-button" onClick={this.handleSubmit}>Login</button>
                </form>
            </div>
        )
    }
}
    
    export default Login;