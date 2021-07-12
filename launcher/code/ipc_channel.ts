export const UI_CHANNELS = {
  READ_DIR: "READ_DIR",
  READ_FILE: "READ_FILE",
  FILE_EXISTS: "FILE_EXISTS",
  READ_JSON: "READ_JSON",
  ZIP_FILES: "ZIP_FILES",
  WRITE_JSON: "WRITE_JSON",
  WRITE_FILE: "WRITE_FILE",
  UPLOAD_FILE: "UPLOAD_FILE",
  DELETE_QINIU_FILE: "DELETE_QINIU_FILE",
  DOWNLOAD_FILE: "DOWNLOAD_FILE",
  UNZIP_FILE: "UNZIP_FILE",
  COPY_FILES: "COPY_FILES",
  REMOVE_FILE: "REMOVE_FILE",
  REMOVE_DIR: "REMOVE_DIR",
};

export const UI2WORKER_CHANNELS = {
  LAUNCH_GAME: "LAUNCH_GAME",
  LAUNCH_SCENE: "LAUNCH_SCENE",
};

export const WORKER2UI_CHANNELS = {
  LAUNCH_GAME_BACK: "LAUNCH_GAME_BACK",
  LAUNCH_SCENE_BACK: "LAUNCH_SCENE_BACK",
};
