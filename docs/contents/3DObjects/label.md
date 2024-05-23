# 标签

## 图示
<img src="https://cdn.phycat.cn/localediter/202405171653839.jpg" width="200px" style="display: inline;margin:20px"><img src="https://cdn.phycat.cn/localediter/202405171653840.png" width="200px" style="display: inline;margin:20px">

## 参数说明

```python
label(pos=vec(0, 0, 0), text='Early', xoffset=20, yoffset=50, space=30, height=16, border=4, font='sans')
```

| 参数名       | 类型     | 说明                                         |
|--------------|----------|----------------------------------------------|
| pos          | 向量     | 默认值为 &lt;0,0,0&gt;               |
| text         | 字符串或数值表达式     | 要显示的文本。支持上标、下标、斜体、粗体的 html 格式。          |
| color        | 向量     | 文本的颜色。默认为 *color.white*                         |
| align        | 字符串     | 指定 'left'、'right' 或 'center'。文本与 pos 的对齐方式。默认为 'center'。         |
| xoffset      | 标量     | 从 *pos* 的 x 偏移量（以像素为单位）。            |
| yoffset      | 标量     | 从 *pos* 的 y 偏移量（以像素为单位）。            |
| font         | 字符串     | 'sans'、'serif' 或 'monospace'（固定宽度）。默认为 'sans'。          |
| background   |           | 方框背景的颜色。默认为 *scene.background*。            |
| opacity      |           | 方框背景的不透明度。范围为 0-1。默认为 0.66。           |
| box          | 布尔值     | 如果应绘制方框，则为 True。默认为 *True*。           |
| border       | 标量     | 文本到周围方框的距离，以像素为单位。默认为 5 像素。          |
| line         | 布尔值     | 如果应从 *pos* 到方框绘制一条线，则为 True。默认为 *True*。          |
| linecolor    | 向量     | 线条和方框的颜色。默认为 *scene.foreground*。          |
| linewidth    | 标量     | 线条和方框边缘的粗细，以像素为单位。默认为 1 像素。          |
| space        | 标量     | 从 *pos* 开始排除线条的半径，以像素为单位。          |

设置 *xoffset* 会覆盖 *align*。

## 不常用属性

```python
label(opacity=0.5, canvas=mycanvas, visible=True)
```

| 参数名     | 类型       | 说明                                                 |
|------------|------------|------------------------------------------------------|
| opacity    | 标量       | 默认为1.0；范围0-1                                   |
| visible    | 布尔值     | 如果为False，标签不显示。默认为True                  |
| canvas     | 对象       | 默认为 `scene`                                       |

