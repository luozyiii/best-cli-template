# 常用的工具函数模板，在此模板基础上封装业务常用工具函数

## 使用
```bash
# 安装依赖
npm install

# 开发
npm run dev

# jest 测试
npm run test

# 正式构建
npm run build
```

## 架构目录
```bash
├── .vscode                     # vscode 自定义工作区
├── example                     # 浏览器直接运行示例
├── lib                         # 打包目录
├── src # 源码目录
│   ├── reg                     # 某模块工具函数
│   ├── time                    # 某模块工具函数
│   └── index.ts                # 导出
├── .babelrc                    # babel 配置
├── .eslintrc.js                # eslint 配置
├── .gitignore                  # git忽略文件
├── .prettierrc                 # prettier 配置
├── jest.config.js              # jest 配置
├── package.json                # Node.js manifest
├── README.md                   # 文档说明
├── rollup.config.js            # rollup 打包配置
└── tsconfig.json               # typescript 配置
```