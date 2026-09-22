# 求职进度看板

一个无需构建步骤的本地静态页面，用流程节点展示求职申请的流转情况。点击任意公司卡片，可在右侧查看公司、岗位和当前阶段。

## 运行方式

在项目根目录运行以下任一命令：

```powershell
python -m http.server 8000
```

或使用 Node.js：

```powershell
npx serve .
```

然后在浏览器访问 `http://localhost:8000`。

## 项目结构

```text
.
├── index.html          # 页面结构
├── styles/main.css     # 响应式视觉样式与流程连线
└── scripts
    ├── data.js         # 固定流程节点与预置求职记录
    └── app.js          # 流程和详情面板渲染、点击交互
```
