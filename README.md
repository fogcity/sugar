<p align="center">
  <h1 align="center">sugar</h1>
</p>
</br>
<p align="center">
  向白头偕老的爱情致敬
</p>

## 🖥 环境支持

- 微信小程序
- H5

## 📦 开始开发

克隆项目后，进入根目录，然后运行

```bash
npm i
```

和

```bash
npm run dev
```

## 项目结构

项目是 monorepos 架构，所有 sugar 项目的代码和服务都放在 packages 下开发，分别有：

- sugar-web - 使用 nutui 的 react 多端开发框架 taro 搭建的 web 项目，功能是脱单业务需要的用户 C 端界面
- sugar-server - 使用快速极简的 koa.js 搭建的后端项目，功能是提供脱单业务的 api 接口服务
- 数据库这边使用 mongodb
