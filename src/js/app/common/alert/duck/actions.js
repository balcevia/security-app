import types from "./types";

const showAlert = (text) => ({
  type: types.SHOW_ALERT,
  payload: text
});

const hideAlert = () => ({
  type: types.HIDE_ALERT
});

export default {
  hideAlert,
  showAlert
}