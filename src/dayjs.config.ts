import dayjs from "dayjs";

import "dayjs/locale/sv";

import localeData from "dayjs/plugin/localeData";



export default dayjs;

dayjs.extend(localeData);