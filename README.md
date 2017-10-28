# 用途

自动化把 简单的svg icons（具体要求见下面的压缩规则）批量构建为react组件，并对svg进行内容压缩

```javascript
const getCode = require('build-react-svg');
genCode(originDir, compsDir, demoFilePath, { defaultClass: 'lls-cc-svg-icon' });
```

1. originsDir: 原始svg所在文件夹，里面的svg文件只能有一层， 不能存在 `originsDir/xx/yy.svg`, 只能是`originsDir/yy.svg`
2. compsDir: 组件文件目录， react组件将会自己写入这个文件夹
3. demoFilePath: 会生成一个 DemoComp, 包含所有的svg icons(样式可能需要自己写)
4. options:
  - `defaultClass`, 默认是`lls-svg-icon`. 每个react svg 组件会加 className, 命名规则是 defaultClass + ' ' + 和fileName 的className
  -  `compTplStr`, 生成 react component 的njk模板，默认为src/react.njk. 你可以根据需要进行微调。
  - `demoTplStr`, 生成 demo component 的njk模板。 用来展示所有生成的svg组件的，默认为src/demo.njk. 你可以根据需要进行微调。
  - `svgo`, svgo 实例，用来进行svg内容的压缩，具体参考 `svgo` 项目

# 压缩规则
会对svg进行压缩，目前从 `sketch` 里export的简单icon，测试了有几十个，都可以work。要求原svg 主要的结构为
```jsx
  <svg>
    <g>
      <some-tag />
      <path d="..."/>
    </g>
  </svg>
```
即 `g` tag里只有一个 `path`

压缩包括
1. 去掉不必要的element， 一般情况只应该是 `<svg><path /></svg>` 这样的结构
2. `fill` 和 `stroke` 全部删掉，请使用css 进行颜色设置

