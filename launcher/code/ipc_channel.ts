export const UI_CHANNELS = {
  READ_DIR: "read-dir",
  READ_FILE: "read-file",
  READ_JSON: "read-json",
  ZIP_FILES: "zip-files",
  WRITE_JSON: "write-json",
  WRITE_FILE: "write-file",
  UPLOAD_FILE: "upload-file",
  DELETE_QINIU_FILE: "delete-qiniu-file",
  DOWNLOAD_FILE: "download-file",
  UNZIP_FILE: "unzip-file",
  REMOVE_FILE: "remove-file",
};

export const UI2WORKER_CHANNELS = {
  LAUNCH_GAME: "launch-game",
  LAUNCH_SCENE: "launch-scene",
};

export const WORKER2UI_CHANNELS = {
  LAUNCH_GAME_BACK: "launch-game-back",
  LAUNCH_SCENE_BACK: "launch-scene-back",
};
