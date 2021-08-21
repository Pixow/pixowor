export const Channels = {
  READ_DIR: "readDir",
  READ_FILE: "readFile",
  READ_JSON_File: "readJsonFile",
  ZIP_FILES: "zipFiles",
  WRITE_JSON: "writeJson",
  WRITE_FILE: "writeFile",
  UPLOAD_FILE: "uploadFile",
  DELETE_QINIU_FILE: "deleteQiniuFile",
  DOWNLOAD_FILE: "downloadFile",
  UNZIP_FILE: "unzipFile",
  COPY_FILES: "copyFiles",
  REMOVE_FILE: "removeFile",
  REMOVE_DIR: "removeDir",
};

export const UI2WORKER_CHANNELS = {
  LAUNCH_GAME: "LAUNCH_GAME",
  LAUNCH_SCENE: "LAUNCH_SCENE",
};

export const WORKER2UI_CHANNELS = {
  LAUNCH_GAME_BACK: "LAUNCH_GAME_BACK",
  LAUNCH_SCENE_BACK: "LAUNCH_SCENE_BACK",
};
