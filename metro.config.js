const { getDefaultConfig } = require('@expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname); // Use a different variable name
defaultConfig.resolver.assetExts.push('cjs');

module.exports = defaultConfig;
