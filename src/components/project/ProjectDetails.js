import React from 'react'
import { connect } from "react-redux";
import { firebaseConnect } from "react-redux-firebase";
import { compose } from "redux";

const ProjectDetails = (props) => {
  const id = props.match.params.id
  return (
    <div>
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">
              Project Title - {id}
            </span>
            <p>Loram asdasdag hag jasdhhf kashd kasd kjsdhf jsdafhajkskhekrhfskjdhf jhskdjaf sdaf asd f</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Post By Hugo</div>
            <div>2nd September</div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToPreps = (state, ownProps)=>{
  console.log(state);

  const id = ownProps.match.params.id
  const project = state.firestore.data.projects;
  return {

  }
}

export default compose(
  connect(mapStateToPreps),
  firebaseConnect([
    {collection:'projects'}
  ])
)(ProjectDetails)
