const path = require('path');
const genCode = require('../index');

const originDir = path.join(__dirname, './origins');
const compsDir = path.join(__dirname, './comps');

const demoFilePath = path.join(__dirname, 'SvgDemo.jsx');

genCode(originDir, compsDir, demoFilePath, { defaultClass: 'lls-cc-svg-icon' });

