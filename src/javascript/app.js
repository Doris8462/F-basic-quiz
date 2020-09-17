import "../style/index.scss";

import { getUser, getEducation } from "./request";

const pathnames = window.location.pathname;
// TODO feedback: 逻辑有漏洞，如果URL是/any/1，也是可以通过的
const index = pathnames.split("/")[2];
getUser(index);
getEducation(index);
