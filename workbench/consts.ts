import { op_def } from "pixelpai_proto";
export const USER_STORAGE_KEY = "user";

export const PLUGINS_CONFIG_FILE = "plugins.config.json";
export const MENU_CONFIG_FILE = "menu.config.json";
export const PLUGINS_FOLDER = "plugins-repo";

export const PLUGINS_WEB_URI = `http://127.0.0.1:45326/${PLUGINS_FOLDER}`;

export enum EDITOR_EVENTS {
  OPEN_SCENE_EDITOR_EVENT_NAME = "open-scene-editor",
  OPEN_ELEMENT_EDITOR_EVENT_NAME = "open-element-editor",
  OPEN_CODE_EDITOR_EVENT_NAME = "open-code-editor",
}
export const BaseNodeTypes = [
  op_def.NodeType.TerrainCollectionType,
  op_def.NodeType.TerrainNodeType,
  op_def.NodeType.LocationType,
  op_def.NodeType.MovableType,
  op_def.NodeType.DisplayType,
  op_def.NodeType.AttributeType,
  op_def.NodeType.FunctionType,
  op_def.NodeType.AnimationsType,
  op_def.NodeType.MapSizeType,
  op_def.NodeType.CampType,
  op_def.NodeType.AnimationDataType,
  op_def.NodeType.ButtonType,
  op_def.NodeType.TextType,
  op_def.NodeType.SettingsType,
  op_def.NodeType.CommodityType,
];
