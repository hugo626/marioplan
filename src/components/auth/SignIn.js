import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signIn } from "../../store/actions/authActions";

class SignIn extends Component {

  state = {
    email:'',
    password:''
  }

  handleSubmit = (e)=> {
    e.preventDefault();
    console.log(this.state)
    this.props.signIn(this.state);
  }

  handleChange = (e)=>{
    this.setState({
      [e.target.id]: e.target.value
    })
  }


  render() {
    const {authError, auth }= this.props;
    if(auth.uid){
      return <Redirect to="/"/>
    }
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depeth-0">Login</button>
            <div className="red-text center">
              {authError? <p>{authError}</p>:null}
            </div>
          </div>
          <div className="blue-text center">
            User: test2@test.com
            Password: test1234
          </div>
        </form>
      </div>
    )
  }
}


const maptDispatchToProps = (dispatch)=>{
  return {
    signIn: (creds)=> dispatch(signIn(creds))
  }
}

const mapStateToProps = (state)=>{
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

export default connect(mapStateToProps,maptDispatchToProps)(SignIn)
