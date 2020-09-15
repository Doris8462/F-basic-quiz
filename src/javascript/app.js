import "../style/index.scss";

import { getUser, getEducation } from "./request";

const pathnames = window.location.pathname;
const index = pathnames.split("/")[2];
getUser(index);
getEducation(index);
