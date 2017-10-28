const path = require('path');
const genCode = require('./index');

const originDir = path.join(__dirname, './demo/origins');
const compsDir = path.join(__dirname, './demo/comps');

const demoFilePath = path.join(__dirname, './demo/SvgDemo.jsx');

genCode(originDir, compsDir, demoFilePath, { defaultClass: 'lls-cc-svg-icon' });

