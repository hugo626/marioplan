const initState = {
  authError: null
}

const authReducer = (state = initState, action)=>{
  switch (action.type) {
    case 'LOGIN_ERROR':
      return {...state,
        authError:'Login failed'
      }
    case 'LOGIN_SUCCESS':
      return {...state,
        authError:null}
    case 'SIGNOUT_SUCCESS':
      console.log("signout success");
      return state;
    case 'SINGUP_SUCCESS':
      return {
        ...state,
        authError: null
      };
    case 'SINGUP_ERROR':
      return{
        ...state,
        authError: action.err.message
      };
    default:
      return state;
  }
}

export default authReducer;