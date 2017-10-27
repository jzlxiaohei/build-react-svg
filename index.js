const genReact = require('./src/genReact');
const genDemoComp = require('./src/genDemoComp');

/**
 *
 * @param {*} originsDir
 * @param {*} compsDir
 * @param {*} demoFilePath
 * @param {*} options
 *
 * options: {
 *  defaultClass,
 *  compTplStr // njk template for svg comps
 *  demoTplStr // njk template for demo comp
 *  svgo // svgo instance for compress svg string
 * }
 */

function genCode(originsDir, compsDir, demoFilePath, options) {
  return genReact(originsDir, compsDir, options)
    .then(() => {
      return genDemoComp(compsDir, demoFilePath, options);
    });
}

genCode.genReact = genReact;
genCode.genDemoComp = genDemoComp;

module.exports = genCode;
