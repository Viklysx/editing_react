import {CHANGE_SERVICE_FIELD, EDIT_SERVICE, ADD_SERVICE, CLEAR_SERVICE_FIELDS} from '../actions/actionTypes';

const initialState = {
  id: "",
  name: "",
  price: ""
}; 

export default function serviceAddReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD:
      const {name, value} = action.payload;
      return {...state, [name]: value};
    case ADD_SERVICE:
      return { ...initialState };
    case EDIT_SERVICE:
      const {id} = action.payload;
      return {...state, id}
    case CLEAR_SERVICE_FIELDS:
      return {...initialState};
    default:
      return state;
  }
}