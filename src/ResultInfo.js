import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {displayResult} from './store/actions/displayActions'

class ResultInfo extends React.Component{
    constructor(props) {
        super(props);
       
    }
    componentDidMount() {
        const data = this.props.id;
        console.log(data);
       this.props.displayResult(data)
       
    }
    
    render() {
        const { employee } = this.props;
        console.log(employee);
    
        return (
                <div className="rest">
                <div className="card">
                    <div className="content">
                        <div className="created"><h6>University Name</h6> </div>
                        <div className="created">{employee.university_name}</div>
                    </div>
                    <hr/>
                    <div className="content">
                        <div className="created"><h6>Course</h6> </div>
                        <div className="created">{ employee.course}</div>
                    </div>
                    <hr/>

                    <div className="content">
                        <div className="created"><h6>Grade</h6></div>
                        <div className="created">{employee.grade}</div>
                    </div>
                    <hr/>
                    <div className="content">
                        <div className="created"><h6>Year of Graduation</h6></div>
                        <div className="created">{ employee.year_of_graduation}</div>
                    </div>
                    <hr/>
                    <div className="content">
                    <div className="button-update">
                            <div>Date Updated:</div>
                      </div>
                        <div className="button-update">
                            <button type="button"> Edit</button>
                            <button type="button"> Verified</button>
                      </div>
                    </div>

                </div>
                
                       
                          
                </div>
                
        );
    }
}
const mapStateToProps = (state) => {
    return {
        employee: state.employee.result
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        displayResult: (result) => {
            dispatch(displayResult(result));
        }
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultInfo);