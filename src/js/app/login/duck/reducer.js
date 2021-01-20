import types from './types';

const initialState = {};

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.LOG_IN_USER.FULFILLED:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default userReducer;