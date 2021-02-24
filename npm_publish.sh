npm run build:lib
cp ./publish.package.json ./lib/package.json
cd lib
npm version patch
npm publish
cp package.json ../publish.package.json