import {generateFetchActionNames} from "../../utils/reduxUtils";

const FETCH_FILE_LIST = generateFetchActionNames("FETCH_FILE_LIST");
const FETCH_USERS = generateFetchActionNames("FETCH_USERS");
const UPLOAD_FILE = generateFetchActionNames("UPLOAD_FILE");
const DOWNLOAD_FILE = generateFetchActionNames("DOWNLOAD_FILE");
const FETCH_ACTIVITY = generateFetchActionNames("FETCH_ACTIVITY")

export default {
  FETCH_FILE_LIST,
  FETCH_USERS,
  UPLOAD_FILE,
  DOWNLOAD_FILE,
  FETCH_ACTIVITY
}