import React from 'react'
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from "moment";

const ProjectDetails = (props) => {
  const {project,auth} = props;
  if(!auth.uid){
    return <Redirect to="/signin"/>
  }
  if(project){
    return (<div>
              <div className="container section project-details">
                <div className="card z-depth-0">
                  <div className="card-content">
                    <span className="card-title">
                        {props.project.title}
                    </span>
                    <p>{props.project.content}</p>
                  </div>
                  <div className="card-action grey lighten-4 grey-text">
                    <div>Post By {project.authorFirstName} {project.authorLastName}</div>
                    <div>{moment(project.createdAt.toDate()).calendar()}</div>
                  </div>
                </div>
              </div>
            </div>)
  } else{
    return (<div className="container center">
              <p>Loading... Project</p>
            </div>)
  }
}

const mapStateToProps = (state, ownProps)=>{
  const id = ownProps.match.params.id
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id]:null;
  return {
    project,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection:'projects'}
  ])
)(ProjectDetails)
