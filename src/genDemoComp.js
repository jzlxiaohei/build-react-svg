const path = require('path');
const fs = require('fs');
const glob = require('glob');
const fsExtra = require('fs-extra');
const njk = require('nunjucks');

function genDemo(compsDir, demoFilePath, options = {}) {
  const comps = glob.sync(path.join(compsDir, '*.jsx'))
    .map((filePath) => {
      const fileName = path.relative(compsDir, filePath);
      const name = fileName.substring(0, fileName.length - 4); // remove .jsx

      return { name };
    });
  const demoTplStr = options.demoTplStr;
  const tplStr = demoTplStr || fs.readFileSync(
    path.join(__dirname, './demo.njk'),
  ).toString();
  const template = njk.compile(tplStr);

  const str = template.render({
    comps,
  });
  return fsExtra.outputFile(demoFilePath, str);
}

module.exports = genDemo;

