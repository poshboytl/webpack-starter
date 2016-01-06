var path = require('path')
var ROOT_PATH = path.resolve(__dirname, '../')

module.exports = {
  ROOT_PATH : ROOT_PATH,
  SRC_PATH  : path.resolve(ROOT_PATH, 'src'),
  DIST_PATH : path.resolve(ROOT_PATH, 'dist'),
  TEM_PATH  : path.resolve(ROOT_PATH, 'templates')
}
