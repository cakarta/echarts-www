const path = require('path');
const config = require('./common');

config.host = 'http://localhost/incubator-echarts-website';
// config.host = 'http://localhost:8000/echarts/incubator-echarts-website';
config.galleryPath = 'https://www.echartsjs.com/gallery/';
config.blogPath = 'https://efe.baidu.com/tags/ECharts/';
config.releaseDestDir = path.resolve(__dirname, '../../incubator-echarts-website');

module.exports = config;
