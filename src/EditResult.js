import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { CircleLoader } from 'react-spinners';
import { css } from '@emotion/core';
import { connect } from 'react-redux';
import { displayResult, editResult } from './store/actions/displayActions';
import Nav from './Nav';
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

class EditResult extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          result:{},
            loading: false,
            formErrors: {
            university_name:'',
            course:'',
            grade:'',
            year_of_graduation:'',
            }
        }
    }
    componentDidMount() {
         const params = this.props.match.params;
        console.log(params.id);
        // const data = this.props.id
        // console.log(data);
        this.props.editResult(params.id);
        this.setState({
            result: this.props.result
        })
          console.log('employer data', this.props.result);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('employer error', this.state.formErrors)
        let errors = this.state.formErrors
        console.log('errors', errors)
      
        if (formValid(this.state)) {
            const params = this.props.match.params;
            // console.log('sending...', params.id);
               const { result } = this.state;
            
            const data = {
                
                id: params.id,
                university_name: result.university_name,
                course: result.course,
                grade: result.grade,
                year_of_graduation: result.year_of_graduation,        
            }
            this.setState({
                loading: true
            });
            
             this.props.editResult(data).then(datum => {
                this.setState({
                    loading: false
                });
                toast.notify('Result successfully edited!');
                 console.log('Success:', datum);     
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
        let result = this.state.result

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
            this.setState({ formErrors: formErrors });
        result[name] = value
        this.setState({result})
        console.log(this.state)
        
    }
    render() {
        const { formErrors } = this.state;
        const { result } = this.state;
        return (
            <div>
                {this.state.loading ?
                    <div className="sweet-loading">
                        <CircleLoader css={loaderCss} size={100}
                            color={"#2b4f81"}
                            loading={true} />
                    </div> :
                    <div className="home-page">
                        <Nav />
                    <div className="rest">
                        <div className="update-form">
                            <form className="guarantor-form">
                                <div className="guarantor-name">
                                    <div>
                                <label>University Name</label><br />
                                <input type="text"
                                    name="university_name"
                                    onChange={this.handleChange}
                                    value={result.university_name}
                                    className="addname"
                                            placeholder="Oluwabukola" />
                                    </div>
                                    <div>
                            
                                <label>Course</label><br />
                                <input type="text"
                                    name="course"
                                    onChange={this.handleChange}
                                    value={result.course}
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
                                    value={result.grade}
                                    className="addname"
                                    placeholder="Oluwabukola" />
                                    </div>
                                    <div>
                                <label>Year of Graduation</label><br />
                                <input type="text"
                                    name="year_of_graduation"
                                    onChange={this.handleChange}
                                    value={result.year_of_graduation}
                                    className="addname"
                                 placeholder="Oluwabukola" />
                                    </div>
                                    </div>
                                <button type='button' className="form-submit" onClick={this.handleSubmit}>Save</button>
                            
                            </form>
                        </div>
                    </div>
                    </div>
                }
                </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        result: state.result.oneresult
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        displayResult:(result) => dispatch(displayResult(result)),
        editResult: (result) => dispatch(editResult(result))
        
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditResult));

 