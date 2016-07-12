/**
 * Created by negin.basiri on 12/07/2016.
 */
const gulp = require('gulp');
const gutil = require('gulp-util');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
const webpackDevServer =  require('webpack-dev-server');


gulp.task("serve", function(callback) {
  // Start a webpack-dev-server
  var serverConfig = Object.create(webpackConfig);

  serverConfig.devtool = 'eval';
  serverConfig.debug = true;
  serverConfig.hot = true;

  new webpackDevServer(webpack(serverConfig), {
    // server and middleware options
  }).listen(serverConfig.devServer.port, "localhost", function(err) {
    if(err) throw new gutil.PluginError("webpack-dev-server", err);
    // Server listening
    gutil.log("[webpack-dev-server]", "http://localhost:"+serverConfig.devServer.port+"/webpack-dev-server/index.html");

    // keep the server alive or continue?
    // callback();
  });
});
