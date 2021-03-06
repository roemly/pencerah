module.exports = {
  staticFileGlobs: [
    'dist/**.html',
    'dist/**.js',
    'dist/**.css',
    'dist/assets/images/*',
    'dist/assets/icons/*',
    'dist/assets/roboto/*',
  ],
  root: 'dist',
  stripPrefix: 'dist/',
  navigateFallback: '/index.html',
  runtimeCaching: [{
    urlPattern: /http/,
    handler: 'networkFirst'
  }],
  importScripts: ["./push-notification.js"]
};
