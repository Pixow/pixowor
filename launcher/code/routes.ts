import ipc_channel from "./ipc_channel";
import { readAFile } from "../base/node/file";

export default {
  [ipc_channel.READ_LOCAL_FILE]: ({ params, cb }) => {
    const { path } = params;

    readAFile({ path, cb });
  },
};
