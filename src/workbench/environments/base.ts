import * as path from "path";

export const log = path.join(__dirname, "assets/images/logo.ico");

export const BaseConfig = {
  production: false,
  environment: "LOCAL",
  storagekeys: {
    USER_STORAGE_KEY: "user",
  },
};
