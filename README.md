```javascript
const getCode = require('build-react-svg');
genCode(originDir, compsDir, demoFilePath, { defaultClass: 'lls-cc-svg-icon' });
```

1. originsDir: 原始svg所在文件夹，里面的svg文件只能有一层， 不能存在 `originsDir/xx/yy.svg`, 只能是`originsDir/yy.svg`
2. compsDir: 组件文件目录， react组件将会自己写入这个文件夹
3. demoFilePath: 会生成一个 DemoComp, 包含所有的svg icons(样式可能需要自己写)
4. options:
  - defaultClass, 每个react svg 组件会加 className, 命名规则是 defaultClass + ' ' + 和fileName 的className
  -  `compTplStr`, `demoTplStr`, `svgo` 这三个配置，有点高级，不太好说清楚, 后面再补

