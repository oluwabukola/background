import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {  displayReferees, verifyReferee } from '../store/actions/verificationAction';
import { CircleLoader } from 'react-spinners';
import { css } from '@emotion/core';
import toast from 'toasted-notes'; 
import Modal from 'react-bootstrap/Modal';
import 'toasted-notes/src/styles.css';

const loaderCss = css`
margin: 150px auto 10px auto;
border-color:white;
`


class VerifyReferees extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            id: '',
            guarantor: null,
            IsVerified:0,
        
        }
    }
    componentDidMount() {
        const data = this.props.id;
       this.props.displayReferees(data);
    }
    
    handleOpen = (employ) => {
        this.setState({
            show: true,
            referee: employ,
        });
      
    }
    handleClose = () => {
        this.setState({
        show: false
})
    }
    handleVerification = async (event) => {
        event.preventDefault();

                const data = {
                    id: this.state.referee.id,
                    IsVerified : this.state.IsVerified 
            }
            this.setState({
                loading: true
            });
              
            await this.props.verifyReferee(data).then(datum => {
                this.setState({
                    loading: false,
        
                });
                this.handleClose();
                 toast.notify('referee successfully verified!');
                 console.log('Success:', datum);
            })
            .catch((error) => {
                console.error('Error:', error);

            });    

    }
    handleUpdate = (event) => {
        
        this.setState({

            IsVerified : event.target.checked == true ? 1 : 0
        })
        alert(JSON.stringify(this.state.referee))
    }
   
    render() {
        const { referees } = this.props;
        console.log(referees);

    
        return (
            <div>
                {this.state.loading ?
                    <div className="sweet-loading">
                        <CircleLoader css={loaderCss} size={100}
                            color={"#2b4f81"}
                            loading={true} />
                    </div> :

                    <div className="rest">
                        <Modal show={this.state.show} onHide={this.handleClose}>
                            <Modal.Header closeButton>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="vef">
                                    <div className="check"> <input type="checkbox" onChange={this.handleUpdate} /> </div>
                                    <h5><span>V</span>erify</h5>
                                </div>
                                <div className="comment">
                                    <textarea maxLength={50} placeholder="comment.." />
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <div className="verify-submission">
                                    <button className="verify-submit" onClick={this.handleVerification}>Done</button>
                                </div>
                            </Modal.Footer>
                        </Modal>
                        <table>
                            <thead>
                                <tr>
                                    {/*<th>Id</th>*/}
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>View</th>
                                    <th>Verify</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    referees != null && referees.map((employ) =>
                                    
                                        <tr key={employ.id}>
                                            {/* <td>{employ.id}</td> */}
                                            <td>{employ.firstname}</td>
                                            <td>{employ.lastname}</td>
                                            <td>{employ.email}</td>
                                            <td className="eyes"><Link to={`/refereeDetails/${employ.id}`}><i class="far fa-eye eye"></i></Link></td>
                                            <td><button className="verify-now " onClick={() =>this.handleOpen(employ)} >Verify Now</button></td>
                                            <td><button className="verified" >Verified</button></td>
                                            {/* <td><button type="button" className="view-btn"><Link to={`/guarantorForm/${employ.id}`}>Update</Link></button></td> */}
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                        <div className="no-guarantor" style={{ display: referees == null || referees.length === 0 ? 'block' : 'none' }}>
                            <h6> Previous employer not available... </h6>
                        </div>
                    </div>
                }
                    </div>
               
                            
                    )
                }
            }
           
    const mapStateToProps = (state) => {
    console.log('displaying referees', state.verification.referees);
    return {
        referees: state.verification.referees,
        verifyReferee: state.verification.verifyReferee,
       
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
         displayReferees: (referees) => dispatch(displayReferees(referees)),
         verifyReferee: (referee) => dispatch(verifyReferee(referee)),

    }
    
}   

export default connect(mapStateToProps, mapDispatchToProps)(VerifyReferees);