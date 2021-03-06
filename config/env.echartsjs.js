const path = require('path');
const config = require('./common');

config.host = 'https://www.echartsjs.com';
config.galleryPath = 'https://www.echartsjs.com/gallery/';
config.blogPath = 'https://efe.baidu.com/tags/ECharts/';
config.releaseDestDir = path.resolve(__dirname, '../release');

module.exports = config;
