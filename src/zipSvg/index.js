const _ = require('lodash');
const SVGO = require('svgo');
const overrideClassNamePlugin = require('./_overrideClassNamePlugin');
const removeSketchPolygon = require('./_removeSketchPolygon');

const buildSvgo = (options) => {
  const defaultClass = options.defaultClass || 'lls-svg-icon';
  const extraClass = options.extraClass;
  const config = {
    plugins: [
      {
        overrideClassName: _.assign({}, overrideClassNamePlugin, {
          params: {
            className: defaultClass + ' ' + extraClass,
          },
        }),
      }, {
        removeSketchPolygon: _.assign({}, removeSketchPolygon),
      }, {
        removeStyleElement: true,
      }, {
        removeXMLNS: true,
      }, {
        cleanupAttrs: true,
      }, {
        removeDoctype: true,
      }, {
        removeXMLProcInst: true,
      }, {
        removeComments: true,
      }, {
        removeMetadata: true,
      }, {
        removeTitle: true,
      }, {
        removeDesc: true,
      }, {
        convertStyleToAttrs: true,
      }, {
        removeUselessDefs: true,
      }, {
        removeEditorsNSData: true,
      }, {
        removeEmptyAttrs: true,
      }, {
        removeHiddenElems: true,
      }, {
        removeEmptyText: true,
      }, {
        removeEmptyContainers: true,
      }, {
        removeViewBox: false,
      }, {
        cleanUpEnableBackground: true,
      }, {
        convertColors: true,
      }, {
        convertPathData: true,
      }, {
        convertTransform: true,
      }, {
        removeUnknownsAndDefaults: true,
      }, {
        removeNonInheritableGroupAttrs: true,
      }, {
        removeUselessStrokeAndFill: true,
      }, {
        removeUnusedNS: true,
      }, {
        cleanupIDs: true,
      }, {
        cleanupNumericValues: true,
      }, {
        moveElemsAttrsToGroup: true,
      }, {
        moveGroupAttrsToElems: true,
      }, {
        collapseGroups: true,
      }, {
        removeRasterImages: false,
      }, {
        mergePaths: true,
      }, {
        convertShapeToPath: false,
      }, {
        sortAttrs: true,
      }, {
        transformsWithOnePath: false,
      }, {
        removeDimensions: true,
      },
    ],
  };

  return new SVGO(config);
};

function removeSvgStyle(svg) {
  return svg
    .replace(/(<style.*?<\/style>)/g, '')
    .replace(/(fill="#([0-9a-f]{6})")/g, '');
}

function zipSvg(data, options) {
  if (!options.extraClass) throw new Error('extraClass is required');

  const svgo = options.svgo || buildSvgo(options);
  const textWithOutStyle = removeSvgStyle(data.toString());
  const finalText = textWithOutStyle
    .replace('fill-rule=', 'fillRule=')
    .replace('fill-opacity=', 'fillOpacity=');
  return svgo.optimize(finalText);
}


module.exports = zipSvg;
