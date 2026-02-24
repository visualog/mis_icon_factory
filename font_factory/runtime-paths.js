const path = require('path');

function isServerlessRuntime() {
    return Boolean(
        process.env.VERCEL ||
        process.env.AWS_LAMBDA_FUNCTION_NAME ||
        process.env.LAMBDA_TASK_ROOT
    );
}

function getProjectRoot() {
    return process.cwd();
}

function getWritableRoot() {
    return isServerlessRuntime() ? '/tmp' : getProjectRoot();
}

function getBuildTempDir() {
    if (isServerlessRuntime()) {
        return path.join(getWritableRoot(), 'iconfont_build_temp');
    }
    return path.join(getProjectRoot(), 'font_factory', 'build_temp');
}

function getOutputDir() {
    return path.join(getWritableRoot(), 'dist_font_custom');
}

module.exports = {
    isServerlessRuntime,
    getProjectRoot,
    getWritableRoot,
    getBuildTempDir,
    getOutputDir
};
