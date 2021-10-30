import { defaultCSS } from "./defaults-css";

import { normalizeCSS } from "./normalize-css";

import { twPreflightCSS } from "./tw-preflight-css";

normalizeCSS();

twPreflightCSS();

defaultCSS();