const path = require('path');
const fs = require('fs');
const fsExtra = require('fs-extra');
const njk = require('nunjucks');
const _ = require('lodash');
const glob = require('glob');
const bluebird = require('bluebird');
const zipSvg = require('./zipSvg');

const readFile = bluebird.promisify(fs.readFile);

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function buildReactString(svgContent, compName, compTplStr) {
  const svg = svgContent.replace('class=', 'className=');

  const tplStr = compTplStr || fs.readFileSync(
    path.join(__dirname, './react.njk'),
  ).toString();

  const template = njk.compile(tplStr);

  return template.render({
    compName,
    svg,
  });
}

function removeSvgStyle(svg) {
  return svg
    .replace(/(<style.*?<\/style>)/g, '');
}

function processSvgFiles(originsDir, options = {}) {
  return glob
  .sync(path.join(originsDir, '*.svg'))
  .map((filePath) => {
    return readFile(filePath, 'utf-8')
      .then((originSvgString) => {
        const relativePath = path.relative(originsDir, filePath);
        let className = relativePath.substring(0, relativePath.length - 4);
        className = _
          .snakeCase(className)
          .replace('_', '-')
          .replace('/', '-')
          .replace('\\', '_');

        const zipOptions = _.assign(
          {},
          options,
          { extraClass: className },
        );

        return zipSvg(originSvgString, zipOptions)
          .then((result) => {
            const data = result.data;
            const textWithOutStyle = removeSvgStyle(data);
            const finalText = textWithOutStyle
              .replace('fill-rule=', 'fillRule=')
              .replace('fill-opacity=', 'fillOpacity=');

            return {
              data: finalText,
              relativePath,
            };
          });
      });
  });
}

function genReact(originsDir, compsDir, options = {}) {

  const allWritePromise = processSvgFiles(originsDir, options).map((svgPromise) => {
    return svgPromise.then((result) => {
      const { data, relativePath } = result;
      const fileName = _.camelCase(
        relativePath.substring(0, relativePath.length - 4),
      );
      const compName = capitalizeFirstLetter(fileName);
      const filePath = path.join(compsDir, compName + '.jsx');
      if(fsExtra.existsSync(filePath) && !options.force) {
        return Promise.resolve();
      }
      const svg = buildReactString(data, compName, options.compTplStr);

      return fsExtra.outputFile(filePath, svg);
    });
  });

  return bluebird.all(allWritePromise);
}

module.exports = genReact;
