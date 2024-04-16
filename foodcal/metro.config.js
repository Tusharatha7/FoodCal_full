const path = require("path");
const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");

const defaultConfig = getDefaultConfig(__dirname);
const { resolver: { sourceExts, assetExts } } = defaultConfig;

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
 transformer: {
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
    // Increase the buffer size limit
    maxWorkers: 4, // Increase the number of workers
    minifierConfig: {
      // Increase the buffer size limit for minification
      maxBundlerMemoryUsage: 1024 * 1024 * 1024, // 1GB
    },
 },
 resolver: {
    assetExts: assetExts.filter((ext) => ext !== "svg").concat(["png", "jpg", "jpeg", "gif", "webp", "svg"]),
    sourceExts: [...sourceExts, "svg"],
 },
};

module.exports = mergeConfig(defaultConfig, config);
