module.exports = {
  default: {
    require: [
      'steps/*.js',
      'hooks/hooks.js'
    ],
    format: ['progress'],
    paths: ['features/*.feature']
  }
};
