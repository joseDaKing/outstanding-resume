import dayjs from "dayjs";

import "dayjs/locale/en";

import localeData from "dayjs/plugin/localeData";



export default dayjs;

dayjs.extend(localeData);