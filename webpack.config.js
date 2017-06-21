const pxtorem = require('postcss-pxtorem');
const path = require('path');

module.exports = function (webpackConfig) {
  webpackConfig.babel.plugins.push(['babel-plugin-import', {
    style: true, // if true, use less
    libraryName: 'antd-mobile'
  }]);

  const svgDirs = [
    require.resolve('antd-mobile').replace(/warn\.js$/, ''),  // 1. 属于 antd-mobile 内置 svg 文件
    path.resolve(__dirname, 'src/common/svg/'),  // 2. 自己私人的 svg 存放目录
  ];

  webpackConfig.module.loaders.forEach(loader => {
    if (loader.test && typeof loader.test.test === 'function' && loader.test.test('.svg')) {
      loader.exclude = svgDirs;
    }
  });

  webpackConfig.module.loaders.unshift({
    test: /\.(svg)$/i,
    loader: 'svg-sprite',
    include: svgDirs, // 把 svgDirs 路径下的所有 svg 文件交给 svg-sprite-loader 插件处理
  });

  webpackConfig.postcss.push(pxtorem({
    rootValue: 100,
    propWhiteList: [],
    selectorBlackList: [],
  }));

  // Production Environment, reference to an external resource of React / ReactDOM
  if (process.env.NODE_ENV === 'production') {
    webpackConfig.externals = {
      "react": "React",
      "react-dom": "ReactDOM"
    };
  }

  return webpackConfig;
};
