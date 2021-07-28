# utils

封装常用的工具函数模板，在此模板基础上封装业务常用工具函数

### 特点
- rollup
- typescript
- jest 自动化测试
- prettierrc + vscode 
自定义工作区 保持代码风格一致

### 常用命令
```bash
# 开发
npm run dev

# jest 测试
npm run test

# 正式构建
npm run build
```

### 使用场景
开发完成发布到npm; 可在react、vue项目中使用, 可在网页引入 构建好的js文件

- 网页上直接引用（参考example）
本地快速启动服务器 live-server or http-serve
```javascript
// 全局安装
npm install -g live-server
// 切换到项目根目录,启动服务
live-server ./
```

- react、vue项目中使用
```javascript
// 安装
yarn add -D npm包名
// 使用
import { isMobile } from 'npm包名'
console.log(isMobile('18825040666'))
```

