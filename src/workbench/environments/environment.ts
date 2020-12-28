import { assign } from "lodash-es";
import { BaseConfig } from "./base";

export const WorkbenchConfig = assign(BaseConfig, {
  production: false,
  environment: "LOCAL",
  WEB_RESOURCE_URI: "https://osd-alpha.tooqing.com",
});
