# Umi3 + TS 中后台项目模板

## 架构目录
```bash
├── .vscode                     # vscode 自定义工作区
├── dist                        # 打包目录
├── mock                        # mock请求
├── public                      # 资源文件
├── src # 源码目录
│   ├── api                     # 接口
│   ├── assets                  # 资源
│   ├── hooks                   # react hooks 方法
│   ├── models                  # 数据流
│   ├── pages                   # 页面组件
│   │   │── example             # 示例代码
│   │   │── login               # 登录示例代码
│   │   │── 404.tsx             # 404页面
│   │   │── document.ejs        # 入口 HTML 模板
│   │   └── index.tsx           # 首页
│   ├── router                  # 路由配置
│   ├── utils                   # 工具库
│   ├── access.ts               # 权限控制
│   ├── app.ts                  # 运行时配置
│   └── global.less             # 全局样式
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