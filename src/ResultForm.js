import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { CircleLoader } from 'react-spinners';
import { css } from '@emotion/core';
import { connect } from 'react-redux';
import { createResult } from './store/actions/employeeActions';
import toast from 'toasted-notes'; 
import 'toasted-notes/src/styles.css';

let letters = RegExp(/^[A-Za-z]+$/);
const formValid =({formErrors, ...rest} ) => {
    let valid = true;
    console.log('form error',formErrors);
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false)
    });
    Object.values(rest).forEach(val => {
        val.length === 0 && (valid = false);
       
    });
        return valid;
 }
const loaderCss = css`
margin: 150px auto 10px auto;
border-color:white;
`

class ResultForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
           university_name:'',
            course: '',
            grade: '',
            year_of_graduation:'',
            loading: false,
            formErrors: {
            university_name:'',
            course:'',
            grade:'',
            year_of_graduation:'',
            }
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
         console.log('props ', this.props);
        const id = this.props.id;
            
        if (formValid(this.state)) {
            const data = {
                employee_id: id,
                university_name: this.state.university_name,
                course: this.state.course,
                grade: this.state.grade,
                year_of_graduation: this.state.year_of_graduation,        
            }
            this.setState({
                loading: true
            });
            
             this.props.createResult(data).then(datum => {
                this.setState({
                    loading: false,
                    university_name:'',
                    course: '',
                    grade: '',
                  year_of_graduation:'',

                });
                 if (datum.success === false) {
                    toast.notify('Result not captured!');
                 }
                 else {
                    toast.notify('Result successfully captured!');
                 }
              
                 console.log('Success:', datum);    
                 {/* console.log(datum.data);*/ }
             })
            .catch((error) => {
                console.error('Error:', error);
            });
  
        }
        
        else {
            console.error('Form inValid');
            }

    }

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let formErrors = this.state.formErrors;

        switch (name) {
            case 'university_name': formErrors.university_name = letters.test(value) &&  value.length > 2 
                ? "" : 'minimum of 3 letters required' ;
                break;
            
            case 'course': formErrors.course = letters.test(value) && value.length > 2
                ? "" : 'minimum of 3 characters required';
                break;
            
                case 'grade': formErrors.grade =  value.length > 2
                ?  "" : 'invalid email addreess';
                break;
                case 'year_of_graduation': formErrors.year_of_graduation = value.length > 2
                ? "" : 'select'  ;
                break;
               
            default:
                break;
        }
        this.setState({ formErrors, [name]: value }, console.log(this.state));
        
    }
    render() {
        return (
            <div>
                {this.state.loading ?
                    <div className="sweet-loading">
                        <CircleLoader css={loaderCss} size={100}
                            color={"#2b4f81"}
                            loading={true} />
                    </div> :
                    <div className="rest">
                        <div className="update-form">
                            <form className="guarantor-form">
                                <div className="guarantor-name">
                                    <div>
                                <label>University Name</label><br />
                                <input type="text"
                                    name="university_name"
                                    onChange={this.handleChange}
                                    value={this.state.university_name}
                                    className="addname"
                                            placeholder="Oluwabukola" />
                                    </div>
                                    <div>
                            
                                <label>Course</label><br />
                                <input type="text"
                                    name="course"
                                    onChange={this.handleChange}
                                    value={this.state.course}
                                    className="addname"
                                            placeholder="Oluwabukola" />
                                    </div>
                                    </div>
                                
                                <div className="guarantor-name">
                                    <div>
                                <label>Grade</label><br />
                                <input type="text"
                                    name="grade"
                                    onChange={this.handleChange}
                                    value={this.state.grade}
                                    className="addname"
                                            placeholder="Oluwabukola" />
                                    </div>

                                    <div>
                                <label>Year of Graduation</label><br />
                                <input type="text"
                                    name="year_of_graduation"
                                    onChange={this.handleChange}
                                    value={this.state.year_of_graduation}
                                    className="addname"
                                            placeholder="Oluwabukola" />
                                    </div>
                                    </div>
                                <button type='button' className="form-submit" onClick={this.handleSubmit}>Save</button>
                            
                            </form>
                        </div>
                    </div>
                }
                </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        result: state.result.result
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createResult: (result) => dispatch(createResult(result))
        
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ResultForm));

 