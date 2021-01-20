import {createAppRequestAction} from "../../utils/reduxUtils";
import * as Cookies from "js-cookie";
import types from './types';
import {push} from 'connected-react-router';

const login = (formValue) => (dispatch) => dispatch(
  createAppRequestAction({
    types: types.LOG_IN_USER,
    url: "auth",
    method: 'POST',
    body: formValue,
    noAuth: true,
    successHandler: data => {
      const {userId, email, token} = data;
      Cookies.set("AuthToken", token);
      dispatch(push("/main/file-list"));
      return {userId, email};
    }
  })
);

const createUser = (formValues) => (dispatch) => dispatch(
  createAppRequestAction({
    types: types.REGISTER_USER,
    url: "user",
    method: 'POST',
    body: formValues,
    noAuth: true,
    successHandler: () => dispatch(push("/login"))
  })
);

const logout = () => dispatch => {
  Cookies.remove("AuthToken");
  return dispatch(push("/login"));
};

export default {
  login,
  logout,
  createUser
}