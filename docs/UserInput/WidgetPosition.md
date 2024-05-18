# 小部件定位

按钮、复选框、菜单、单选按钮和滑块统称为“小部件”。小部件的 `pos` 属性指定其位置。

选项：

- `scene.caption_anchor`（画布下方 - 默认）
- `scene.title_anchor`（画布上方）
- `print_anchor`（页面底部，打印区域所在的位置）

创建小部件时，它会被附加到锚点。

- 要在小部件后添加更多空间，请插入空格：`scene.append_to_caption('   ')`。
- 要添加垂直空间，请插入回车：`scene.append_to_caption('\n\n')`。

[wtext](https://www.glowscript.org/docs/VPythonDocs/wtext.html) 对象允许你在画布的说明或标题中创建可修改的文本。

