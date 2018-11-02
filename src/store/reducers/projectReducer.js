const initState = {
  projects: [
    {id: '1',title: 'Find the apple',content:'blah blah blah blah blah blah '},
    {id: '2',title: 'Find the banana',content:'blah blah blah blah blah blah '},
    {id: '3',title: 'Find the pear',content:'blah blah blah blah blah blah '}
  ]
}

const projectReducer = (state = initState, action)=>{
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('create project', action.project);
      break;
    case 'CREATE_PROJECT_ERROR':
      console.log("Create project error: "+action.error);
      break;
    default:
      break;
  }
  return state;
}

export default projectReducer;