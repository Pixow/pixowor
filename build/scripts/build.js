const package = require("../../package.json");

let version = package.version;
let output;
let productName;
let name;
let shortcutName;
let url;

console.log("NODE_ENV: ", process.env.NODE_ENV);

if (process.env.NODE_ENV === "production") {
  output = "./output/production";
  productName = package.productName;
  artifactName = productName + "-v${version}.${ext}";
  name = package.name;
  shortcutName = "Pixowor";
  url = "http://www.tooqing.com/download/editor/";
  appId = "com.apowo.pixowor";
} else if (process.env.NODE_ENV === "release") {
  output = "./output/release";
  productName = `${package.productName}-RELEASE`;
  artifactName = productName + "-v${version}.${ext}";
  name = `${package.name}-release`;
  shortcutName = "PixoworRelease";
  url = "http://a.tooqing.com/download/editor/";
  appId = "com.apowo.pixowor_release";
} else {
  output = "./output/develop";
  productName = `${package.productName}-DEVELOP`;
  artifactName = productName + "-v${version}.${ext}";
  name = `${package.name}-develop`;
  shortcutName = "PixoworDevelop";
  url = "http://a.tooqing.com/download/editordev/";
  appId = "com.apowo.pixowor_develop";
}

let builderConfig = {
  extraMetadata: {
    name: name,
    version: version,
    productName: productName,
    appId: appId,
  },
  copyright: "Copyright © 2021 ${author}",
  directories: {
    output: output,
  },
  files: [
    "**/*",
    "!**/node_modules/*/{CHANGELOG.md,README.md,README,readme.md,readme}",
    "!**/node_modules/*/{test,__tests__,tests,powered-test,example,examples}",
    "!**/node_modules/*.d.ts",
    "!**/node_modules/.bin",
    "!**/*.{iml,o,hprof,orig,pyc,pyo,rbc,swp,csproj,sln,xproj}",
    "!.editorconfig",
    "!**/._*",
    "!**/{.DS_Store,.git,.hg,.svn,CVS,RCS,SCCS,.gitignore,.gitattributes}",
    "!**/{__pycache__,thumbs.db,.flowconfig,.idea,.vs,.nyc_output}",
    "!**/{appveyor.yml,.travis.yml,circle.yml}",
    "!**/{npm-debug.log,yarn.lock,.yarn-integrity,.yarn-metadata.json}",
    "!src/*",
    "!.vscode/*",
    "!output/*",
  ],
  publish: [
    {
      provider: "generic",
      url: url,
    },
  ],
  win: {
    target: [
      {
        target: "nsis",
        arch: ["ia32"],
      },
    ],
    icon: "./build/icons/logo.ico",
  },
  mac: {
    category: "pixelpai.app.category.type",
    target: ["dmg"],
  },
  linux: {
    icon: "./build/icons/logo.ico",
    synopsis: "pixelpai game for linux",
    target: ["AppImage"],
  },
  nsis: {
    oneClick: false,
    allowElevation: true,
    allowToChangeInstallationDirectory: true,
    installerIcon: "./build/icons/logo.ico",
    uninstallerIcon: "./build/icons/logo.ico",
    installerHeaderIcon: "./build/icons/logo.ico",
    createDesktopShortcut: true,
    createStartMenuShortcut: true,
    shortcutName: shortcutName,
    include: "./build/scripts/installer.nsh",
    license: "./build/license/license.txt",
    artifactName: artifactName,
    perMachine: true,
    unicode: true,
  },
  asar: false,
};

module.exports = builderConfig;
