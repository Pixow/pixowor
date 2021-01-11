import * as path from "path";

const logo = path.join(__dirname, "assets/images/logo.ico");

export const BaseConfig = {
  production: false,
  environment: "LOCAL",
  logo,
  storagekeys: {
    USER_STORAGE_KEY: "user",
  },
};
