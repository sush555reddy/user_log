import { DELETE_USER,FETCH_USERS } from "../actions/users";
import { CREATE_USER } from "../actions/users";
const intialAppState = [];
function userReducer(state = intialAppState, action) {
  switch (action.type) {
    case DELETE_USER:

      var new_state = Object.assign([],state);      
      var index = new_state.map(function(e) { return e.username; }).indexOf(action.uname);
      new_state.splice(index,1);
     
      return new_state;
      break;
    case CREATE_USER:
      var create_state = [...state, action.data];
      return create_state;
      break;
      case FETCH_USERS:
     // var create_state = [...state, action.userobj];
      return [
        ...action.data
      ]
      break;
  }
  return state;
}
export default userReducer;
