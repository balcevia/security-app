import {appServerUrl, createAppRequestAction} from "../../utils/reduxUtils";
import types from './types';
import _ from 'lodash';
import alertActions from '../../common/alert/duck/actions';
import {getFormValues, initialize} from 'redux-form';
import {FormNames, ModalNames} from "../../constants";
import fileDownload from "js-file-download";
import fetchActions from "../../fetch/duck/fetchActions";
import * as Cookies from "js-cookie";
import modalOperations from '../../common/modal/duck/operations';

const fetchFileList = () => dispatch => dispatch(createAppRequestAction({
  types: types.FETCH_FILE_LIST,
  url: "file",
  method: "GET"
}));

const fetchUsers = () => dispatch => dispatch(createAppRequestAction({
  types: types.FETCH_USERS,
  url: "user-list",
  method: "GET"
}));

const uploadFile = (formValues) => dispatch => {
  const formData = new FormData();
  formData.append("file", formValues.file);
  formData.append("info", JSON.stringify(_.omit(formValues, "file")));
  return  dispatch(createAppRequestAction({
    types: types.UPLOAD_FILE,
    url: `file`,
    method: "POST",
    parseToJson: false,
    body: formData,
    successHandler: () => {
      dispatch(initialize(FormNames.UploadFileForm, {file: undefined}));
      dispatch(alertActions.showAlert("Successfully Uploaded"))
    }
  }));
};

const downloadFile = (fileName, id, key) => dispatch => {
  const param = {
    method: 'POST',
    headers: {
      Authorization: Cookies.getJSON("AuthToken")
    },
    body: JSON.stringify({id, key})
  };

  dispatch(fetchActions.setFetchRequestPending(types.DOWNLOAD_FILE.BASE));

  return fetch(appServerUrl + 'file/download', param)
    .then(res => {
      if(res.status === 400) {
        const error = "Access Denied";
        dispatch(fetchActions.setFetchRequestRejected(types.DOWNLOAD_FILE.BASE, error));
        dispatch({type: types.DOWNLOAD_FILE.REJECTED, payload: error});
        dispatch(alertActions.showAlert(error));
        return Promise.reject(error);
      }
      return res.blob();
    })
    .then(res => {
      dispatch(fetchActions.setFetchRequestFulfilled(types.DOWNLOAD_FILE.BASE));
      fileDownload(res, fileName)
    })
    .catch(err => {
      dispatch(fetchActions.setFetchRequestRejected(types.DOWNLOAD_FILE.BASE, err));
    })
};

const downloadFileFromDialog = (row) => (dispatch, getState) => {
  const key = _.get(getFormValues(FormNames.Key)(getState()), "key");
  return dispatch(downloadFile(row.fileName, row.id, key))
    .then(() => dispatch(modalOperations.hideModal(ModalNames.Key)))
};

const fetchActivity = () => dispatch => dispatch(createAppRequestAction({
  types: types.FETCH_ACTIVITY,
  url: "activity",
  method: "GET"
}));

export default {
  fetchFileList,
  fetchUsers,
  uploadFile,
  downloadFile,
  downloadFileFromDialog,
  fetchActivity
}