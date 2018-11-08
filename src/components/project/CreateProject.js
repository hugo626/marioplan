import React, { Component } from 'react';

import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { createProject } from "../../store/actions/projectActions";

class CreateProject extends Component {

  state = {
    title:'',
    content: '',
  }

  handleSubmit = (e)=> {
    e.preventDefault();
    this.props.createProject(this.state);
    this.props.history.push('/');
  }

  handleChange = (e)=>{
    this.setState({
      [e.target.id]: e.target.value
    })
  }


  render() {
    const {auth} = this.props;
    if(!auth.uid){
      return <Redirect to="/signin"/>
    }else{
      return (
        <div className="container">
          <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Create New Project</h5>
            <div className="input-field">
              <label htmlFor="title">Title</label>
              <input type="text" id="title" onChange={this.handleChange} />
            </div>
            <div className="input-field">
              <label htmlFor="content">Content</label>
              <textarea id="content" className="materialize-textarea" onChange={this.handleChange}>

              </textarea>
            </div>
            <div className="input-field">
              <button className="btn pink lighten-1 z-depeth-0">Create</button>
            </div>
          </form>
        </div>
      )
    }

  }
}

const mapStateToProps = (state)=>{
  return {
    ...state,
    auth : state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    createProject: (proejct)=>dispatch(createProject(proejct))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateProject)
