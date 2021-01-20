import {generateFetchActionNames} from "../../utils/reduxUtils";

const LOG_IN_USER = generateFetchActionNames("LOG_IN_USER");
const REGISTER_USER = generateFetchActionNames("REGISTER_USER");

export default {
  LOG_IN_USER,
  REGISTER_USER
}