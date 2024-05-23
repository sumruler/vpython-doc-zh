# 绘图

<img width="400" height="257" src="https://cdn.phycat.cn/localediter/202405181712661.png"/>

在 VPython 中，绘图是动态的，可以实时完成。例如，可以在对象移动时将点添加到 x 对 t 的图上。随着分布的变化，直方图条可以进行调整。

## 术语

- **graph** 是一个可以显示各种图表的 2D 画布。
- **gcurve** 对象是连接数据点的连续曲线。
- **gdots** 对象显示数据为离散点。
- **gvbars** 对象显示离散的垂直条，**ghbars** 对象显示离散的水平条。

## graph

*graph* 是一个 2D 区域，可以在其中绘制 2D 数据，类似于显示 3D 对象的 3D 画布。如同 *canvas* 的情况一样，实际的数据展示对象属于特定的 graph。可以创建多个 graph。

如果在没有先创建 *graph* 的情况下创建一个数据对象（如 *gcurve*），VPython 会自动为你创建一个 graph。这对于简单、快速的绘图非常方便。显式创建 graph 的优点在于可以为其设置标题、说明或关键字，并且可以指定其对齐方式。

```python
g1 = graph(title='My Graph', xtitle='x', ytitle='t', xmin=0, ymin=-20)
```

| 属性名       | 类型     | 说明                                                                                      |
|--------------|----------|-------------------------------------------------------------------------------------------|
| title        | 字符串   | 图表的标题。允许 html 格式（下标、上标、斜体）。                                           |
| xtitle       | 字符串   | 横轴的标题。允许 html 格式（下标、上标、斜体、粗体）（如 ‘&lt;i&gt;t&lt;/i&gt;’）。          |
| ytitle       | 字符串   | 纵轴的标题。允许 html 格式（下标、上标、斜体、粗体）（如 ‘x&lt;sub&gt;1&lt;/sub&gt;’）。   |
| xmin         | 标量     | 横轴的最小值。默认：添加点时 graph 自动调整。                                              |
| xmax         | 标量     | 横轴的最大值。默认：添加点时 graph 自动调整。                                              |
| ymin         | 标量     | 纵轴的最小值。默认：添加点时 graph 自动调整。                                              |
| ymax         | 标量     | 纵轴的最大值。默认：添加点时 graph 自动调整。                                              |
| width        | 标量     | 图表宽度（像素）。默认值 640。                                                            |
| height       | 标量     | 图表高度（像素）。默认值 480。                                                            |
| background   | 向量     | 背景颜色。默认值 color.white。                                                             |
| foreground   | 向量     | 前景颜色（轴、标签等）。默认值 color.black。                                               |
| align        | 字符串   | 在窗口中的位置。选项：‘left’，‘right’，‘none’。默认值为 ‘none’。                           |
| scroll       | 布尔值   | 如果为 True，则在图表中添加点时从一端删除点（类似于记录仪）。必须指定初始 xmin 和 xmax，其中 xmax > xmin。 |
| fast         | 布尔值   | 如果为 True，绘图速度更快，但图表检查选项较少。默认值为 True。详见 [Plotting Packages](#plotting-packages)。  |
| logx         | 布尔值   | 如果为 True，使用对数刻度绘图。所有值必须为正。仅在 fast=False 时可用。                       |
| logy         | 布尔值   | 与 logx 类似，适用于纵轴。                                                                 |

### graph 方法

```python
mygraph.select()
```
使其成为当前图表。

```python
mygraph.delete()
```
删除此图表及其所有内容。

```python
current = graph.get_selected()
```
返回当前选定的图表（新创建的 gcurves 等将属于此图表）。

## gcurve

gcurve 以连续曲线显示数据点列表。

```python
gc = gcurve(color=color.red)
```

| 属性名       | 类型     | 说明                                                                                       |
|--------------|----------|--------------------------------------------------------------------------------------------|
| color        | 向量     | 该 gcurve 的颜色。默认值为 color.black。                                                   |
| label        | 字符串   | 识别此 gcurve 的文本。出现在右上角，显示为 gcurve 的颜色。                                  |
| legend       | 布尔值   | 如果为 True，则显示标签。默认值为 True。                                                   |
| width        | 标量     | 线条宽度（像素）。                                                                        |
| markers      | 布尔值   | 如果为 True，则在每个数据点显示点。                                                        |
| marker_size  | 标量     | 标记的点的宽度。默认值略大于 gcurve 宽度。                                                  |
| marker_color | 向量     | 标记点的颜色。默认值为 gcurve 颜色。                                                       |
| dot          | 布尔值   | 如果为 True，则用点突出显示最近绘制的点。如果图表重绘路径，这很有用。                       |
| dot_radius   | 标量     | 点的宽度（像素）。默认值为 3。                                                             |
| dot_color    | 向量     | 点的颜色。默认值为 gcurve 颜色。                                                           |
| visible      | 布尔值   | 如果为 True，则显示此对象。默认值为 True。                                                 |
| data         | 列表     | 填充 gcurve 的 (x,y) 对列表。如果在创建后使用，gc.data=[ … ] 将替换 gcurve 中的任何现有数据。 |
| graph        | 对象     | 此对象所属的图表。默认值为最近创建的图表。                                                 |

### gcurve 方法

绘制数据点：

```python
gc.plot(x, y)
```

| 参数           | 类型     | 说明                  |
|----------------|----------|-----------------------|
| firstargument  | 标量     | 横轴上的值            |
| secondargument | 标量     | 纵轴上的值            |

点 (x,y) 被添加到 gcurve 的末尾。

绘图的替代形式：

```python
gc.plot([(1,2), (2,3), (3,4)])
```

数据对可以是元组或列表。

删除 gcurve：

```python
gc.delete()
```

## 简单绘图

以下 VPython 程序绘制一个 sin 函数。注意没有显式创建 *graph*。

```python
a = gcurve()

for x in arange(0, 2*pi, pi/20):
    rate(30)
    a.plot(x, sin(x))
```

<img width="300" height="191" src="https://cdn.phycat.cn/localediter/202405181712662.png"/>

多个 gcurves（或 gdots 或 gvbars）可以在同一个 graph 上绘制。

## gdots

gdots 对象将 (x,y) 对列表显示为离散点，而不是连接的曲线。

```python
gd = gdots(color=color.red)
```

| 属性名       | 类型     | 说明                                                                                       |
|--------------|----------|--------------------------------------------------------------------------------------------|
| color        | 向量     | 该 gcurve 的颜色。默认值为 color.black。                                                   |
| radius       | 标量     | 点的半径（像素）。默认值为 3。                                                             |
| size         | 标量     | 点的直径（像素）。                                                                        |
| label        | 字符串   | 识别此 gdots 的文本。出现在右上角，显示为 gcurve 的颜色。                                  |
| legend       | 布尔值   | 如果为 True，则显示标签。默认值为 True。                                                   |
| visible      | 布尔值   | 如果为 True，则显示此对象。默认值为 True。                                                 |
| data         | 列表     | 填充 gdots 的 (x,y) 对列表。如果在创建后使用，gd.data=[ … ] 将替换 gdots 中的任何现有数据。 |
| graph        | 对象     | 此对象所属的图表。默认值为最近创建的图表。                                                 |

gdots 的方法与 gcurve 相同。

## gvbars 和 ghbars

gvbars 对象为每个 (x,y) 数据点显示一个垂直条。ghbars 对象显示水平条。语法和选项相同。

```python
gv = gvbars(delta=0.05, color=color.blue)
```

| 属性名       | 类型     | 说明                                                                                       |
|--------------|----------|--------------------------------------------------------------------------------------------|
| delta        | 标量     | 条的宽度。默认值 1。                                                                       |
| color        | 向量     | 条的颜色。默认值为 color.black。                                                           |
| label        | 字符串   | 识别此 gvbars 的文本。出现在右上角，显示为 gcurve 的颜色。                                  |
|

 legend       | 布尔值   | 如果为 True，则显示标签。默认值为 True。                                                   |
| visible      | 布尔值   | 如果为 True，则显示此对象。默认值为 True。                                                 |
| data         | 列表     | 填充 gvbars 的 (x,y) 对列表。如果在创建后使用，gv.data=[ … ] 将替换 gvbars 中的任何现有数据。 |
| graph        | 对象     | 此对象所属的图表。默认值为最近创建的图表。                                                 |

gvbars 和 ghbars 的方法与 gcurve 相同。

## 绘图包

您可以选择两种绘图包，一种速度较快（目前基于 Flot），另一种提供丰富的交互功能（如缩放和平移），但速度较慢（目前基于 Plotly）。默认是快速版本，相当于在 graph、gcurve、gdots、gvbars 或 ghbars 语句中指定 fast=True。要使用较慢但更具交互性的版本，请设置 fast=False。在许多程序中，“慢”版本的运行速度可能接近于“快”版本，但如果绘制大量数据点，速度差异可能很明显。

尝试使用 fast=False 查看提供的众多选项。当您在鼠标按钮向上时拖动鼠标穿过图表时，将显示所绘点的数值。您可以按住鼠标按钮拖动选择图表的一部分，然后选择的区域填充整个图表。当您沿图表下方拖动时，可以左右平移，如果沿图表左侧拖动，则可以上下平移。当您移动鼠标时，会注意到右上角有许多选项。将鼠标悬停在每个选项上可查看简短描述。“主页”图标可恢复缩放或平移前的显示。尝试[此示例](https://www.glowscript.org/#/user/GlowScriptDemos/folder/Examples/program/GraphTest)。

## 直方图

程序 [HardSphereGas](https://www.glowscript.org/#/user/GlowScriptDemos/folder/Examples/program/HardSphereGas-VPython/edit) 提供了动态直方图的示例。
