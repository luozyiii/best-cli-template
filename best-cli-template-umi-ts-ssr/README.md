# Umi3 + TS + SSR 项目模板
> 有 SEO 诉求，用在搜索引擎检索以及社交分享，用在前台类应用。
> 首屏渲染时长有要求，常用在移动端、弱网情况下。

## 架构目录
```bash
├── .vscode                     # vscode 自定义工作区
├── dist                        # 打包目录
├── mock                        # mock请求
├── src # 源码目录
│   └── pages                   # 页面组件
│       │── index               # 简单页面
│       └── demo                # demo页面
├── .editorconfig               # editor 配置
├── .gitignore                  # git忽略文件
├── .prettierignore             # prettier忽略文件
├── .prettierrc                 # prettier 配置
├── .umirc.ts                   # umi 配置
├── package.json                # Node.js manifest
├── README.md                   # 文档说明
├── tsconfig.json               # typescript 配置
└── typings.d.ts                # 定义ts模块声明
```

## SSR 配置[文档](https://umijs.org/zh-CN/docs/ssr)
```javascript
{
  // 一键开启
  ssr: {
    // 更多配置
    // forceInitial: false,
    // removeWindowInitialProps: false
    // devServerRender: true,
    // mode: 'string',
    // staticMarkup: false,
  }
}
```

##### 配置说明：

- forceInitial：客户端渲染时强制执行 getInitialProps 方法，常见的场景：静态站点希望每次访问时保持数据最新，以客户端渲染为主。
- removeWindowInitialProps: HTML 中移除 window.getInitialProps 变量，避免 HTML 中有大量数据影响 SEO 效果，场景：静态站点
- devServerRender：在 umi dev 开发模式下，执行渲染，用于 umi SSR 项目的快速开发、调试，服务端渲染效果所见即所得，同时我们考虑到可能会与服务端框架（如 Egg.js、Express、Koa）结合做本地开发、调试，关闭后，在 umi dev 下不执行服务端渲染，但会生成 umi.server.js（Umi SSR 服务端渲染入口文件），渲染开发流程交由开发者处理。
- mode：渲染模式，默认使用 string 字符串渲染，同时支持流式渲染 mode: 'stream'，减少 TTFB（浏览器开始收到服务器响应数据的时间） 时长。
- staticMarkup：html 上的渲染属性（例如 React 渲染的 data-reactroot），常用于静态站点生成的场景上。

##### 注意：

- 开启后，执行 umi dev 时，访问 http://localhost:8000 ，默认将单页应用（SPA）渲染成 html 片段，片段可以通过开发者工具『显示网页源代码』进行查看。
- 执行 umi build，产物会额外生成 umi.server.js 文件，此文件运行在 Node.js 服务端，用于做服务端渲染，渲染 html 片段。
- 如果应用没有 Node.js 服务端，又希望生成 html 片段做 SEO（搜索引擎优化），可以开启 exportStatic 配置，会在执行 umi build 构建时进行预渲染。
- removeWindowInitialProps 与 forceInitial 不可同时使用
