# 文本对象

## 图示
<img src="https://cdn.phycat.cn/localediter/202405171713147.png" width="660px" height="302px" style="display: inline;margin:20px">

文本对象显示3D文本，该文本是通过拉伸单个字母的轮廓并将生成的对象合成而创建的。在上图中，白色标签用于说明文本对象的一些关键属性。

如果你想在画布上叠加2D文本，请参阅 *label*。如果你想在 *canvas* 上方或下方显示2D文本，请参阅 *canvas*。

```python
text(text='My text is\ngreen', align='center', color=color.green)
```

| 参数名             | 类型     | 说明                                         |
|-------------------|----------|----------------------------------------------|
| pos               | 向量     | 文本基线的位置。由 *align* 调整。默认为 &lt;0,0,0&gt; |
| text              | Unicode字符串 | 要显示的文本。一旦创建不能被修改。              |
| color             | 向量     | 文本颜色。默认为 *color.white*                |
| align             | 字符串   | 指定‘left’、‘right’或‘center’。基线与 pos 的对齐方式。默认为 ‘left’ |
| font              | 字符串   | ‘sans’或‘serif’。默认为 ‘sans’                |
| billboard         | 布尔值   | 如果为 *True*，无论如何旋转，文本始终面向相机。默认为 *False* |
| axis              | 向量     | 轴沿着基线指向。默认为 &lt;1,0,0&gt;           |

下图中的文本设置了 `billboard=False`:

<img src="https://cdn.phycat.cn/localediter/202405171713148.png" width="660px" height="302px" style="display: inline;margin:20px">

## 不常用属性

```python
text(text='mytext', start_face_color=color.red, end_face_color=color.cyan)
```

| 参数名             | 类型     | 说明                                         |
|-------------------|----------|----------------------------------------------|
| start_face_color  | 向量     | 文本起始（背面）面的颜色。默认与文本颜色相同。 |
| end_face_color    | 向量     | 文本起始（前面）面的颜色。默认与文本颜色相同。 |
| opacity           | 标量     | 文本的不透明度。范围0-1。默认为0.66。         |
| height            | 标量     | 文本的高度，以世界坐标为单位。默认为1。        |
| length            | 标量     | 显示文本的长度。构造函数中不能指定，但之后可以更改。 |
| depth             | 标量     | 文本的深度。默认为0.2*height。如果depth>0，向+z方向拉伸；如果depth<0，则向-z方向拉伸。|
| descender         | 标量     | 小写字母如y的下行高度。只读。                  |
| start             | 标量     | 基线上最左侧的位置。只读。                    |
| end               |          | 基线上最右侧的位置。只读。                    |
| vertical_spacing  | 标量     | 多行文本中一个基线到下一个基线的垂直距离。只读。|
| shininess         | 标量     | 默认0.6；范围0-1。                             |
| emissive          | 布尔值   | 默认为False。如果为True，则对象发光，失去所有阴影效果。 |
| visible           | 布尔值   | 如果为False，对象不显示。默认为True。          |
| canvas            | 对象     | 默认为 `scene`。                              |
| up                | 向量     | 与轴线垂直的向量。                            |
| group             | 对象     | 此对象所属的组。

