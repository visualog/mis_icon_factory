const path = require('node:path');

const { generateMetadataFile } = require('./icon-metadata-generator');

const metadataPath = path.join(__dirname, 'icon-metadata.json');
const catalog = generateMetadataFile(metadataPath);

console.log(`Generated icon metadata for ${Object.keys(catalog.icons).length} icons.`);
