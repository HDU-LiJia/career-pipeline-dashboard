# 求职进度看板

一个无需构建步骤的本地静态页面，用流程节点展示求职申请的流转情况。点击任意公司卡片，可在右侧查看公司、岗位和当前阶段。

## 依赖与运行环境

项目是纯 HTML、CSS 和 JavaScript，不使用 npm 包、构建工具或后端服务。运行时只需要现代浏览器，以及以下任一种本地静态文件服务器：

- Python 3（推荐，使用标准库，无需安装额外依赖）；
- Node.js 与 `npx`（可选，首次运行 `npx serve` 时会下载 `serve`）。

## 启动方式

在项目根目录运行推荐命令：

```powershell
python -m http.server 8000
```

然后在浏览器访问 `http://localhost:8000`。使用完毕后，在终端按 `Ctrl + C` 停止服务。

如果没有 Python，也可使用 Node.js：

```powershell
npx serve .
```

命令启动后，按终端显示的本地地址访问页面。

## 项目结构

```text
.
├── index.html          # 页面结构
├── styles/main.css     # 响应式视觉样式与流程连线
└── scripts
    ├── data.js         # 固定流程节点与预置求职记录
    └── app.js          # 流程和详情面板渲染、点击交互
```
