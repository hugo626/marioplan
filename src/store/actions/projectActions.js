export const createProject = (project)=>{
  return (dispatch, getState,{ getFirebase, getFirestore })=>{
    // make async call to database,
    console.log(project);

    const firestore = getFirestore();
    firestore.collection('projects').add({
      ...project,
      authorFirstName: 'hugo',
      authorLastName: 'Li',
      authorId: 12345,
      createAt: new Date(),
    }).then(()=>{
      dispatch({type:'CREATE_PROJECT', project})
    }).catch((error)=>{
      dispatch({type:'CREATE_PROJECT_ERROR', error})
    })
  }
};