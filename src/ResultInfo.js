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
         //const data = this.props.match.params.id;
        console.log('result data dis', data);
       this.props.displayResult(data)
    }
    
    render() {
     
        const { result } = this.props;
        console.log(result);
         
        const data = this.props.id;
        // const data = this.props.match.params.id;
    
        return (
                <div className="rest">
                <div className="card">
                    <div className="content">
                        <div className="created"><h6>University Name</h6> </div>
                        <div className="created">{result.university_name}</div>
                    </div>
                    <hr/>
                    <div className="content">
                        <div className="created"><h6>Course</h6> </div>
                        <div className="created">{ result.course}</div>
                    </div>
                    <hr/>

                    <div className="content">
                        <div className="created"><h6>Grade</h6></div>
                        <div className="created">{result.grade}</div>
                    </div>
                    <hr/>
                    <div className="content">
                        <div className="created"><h6>Year of Graduation</h6></div>
                        <div className="created">{ result.year_of_graduation}</div>
                    </div>
                    <hr/>
                    <div className="content">
                    <div className="button-update">
                            <div>Date Updated:</div>
                      </div>
                        <div className="button-update">
                            <button type="button"> <Link to={`/editResult/${data}`}>Edit</Link></button>
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
        result: state.result.oneresult
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