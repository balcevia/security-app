import types from './types';

const initialState = {
  fileList: [],
  users: [],
  activity: []
};

const mainReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.FETCH_FILE_LIST.FULFILLED:
      return {
        ...state,
        fileList: action.payload
      };
    case types.FETCH_USERS.FULFILLED:
      return {
        ...state,
        users: action.payload
      };
    case types.FETCH_ACTIVITY.FULFILLED:
      return {
        ...state,
        activity: action.payload
      };
    default:
      return state;
  }
};

export default mainReducer;