import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

const SignedInLinks = (props)=>{
  const {auth,profile} = props;
  console.log(auth);
  return (
    <ul className="right">
      <li><NavLink to="/create">New Project</NavLink></li>
      <li><a onClick={props.signOut}>Log Out</a></li>
      <li><NavLink to="/" className="btn btn-floating pink lighten-1">{profile.initials}</NavLink></li>
    </ul>
  )
}

const mapDispatchToProps = (dispatch)=>{
  return {
    signOut : ()=>dispatch(signOut())
  }
}

const mapStateToProps = (state)=>{
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks);