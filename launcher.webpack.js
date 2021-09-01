const path = require("path");

export default {
  mode: "development",
  target: "electron-main",
  entry: {
    main: "./src/launcher/main.ts",
    "io.service": "./src/launcher/services/child/io.service.ts",
    plugin: "./src/launcher/services/child/plugin.service.ts",
    "list-dir": "./src/launcher/utils/list-dir.ts",
  },
  output: {
    path: path.join(__dirname, "dist/launcher"),
    filename: "[name].js",
  },
  resolve: {
    extensions: [".ts", ".js"],
    alias: {
      "@launcher": path.resolve(__dirname, "src/launcher"),
    },
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
    ],
  },
  node: {
    __dirname: false,
    __filename: false,
  },
};
