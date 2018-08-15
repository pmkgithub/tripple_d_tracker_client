import { SET_CURRENT_ROUTE } from '../actions/action_currentRoute';

const initialState = {
  currentRoute: ''
};

export default (state=initialState, action) => {
  console.log('reducer_currentRoute ran');
  switch(action.type) {
    case SET_CURRENT_ROUTE:
      return {
        ...state,
        currentRoute: action.currentRoute
      };

    default:
      return state;
  }
}