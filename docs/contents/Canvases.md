# 画布

画布是屏幕上用于显示3D对象的区域。一个名为 *scene* 的画布会自动创建。默认情况下，3D对象在创建时会被分配到程序中最近创建的画布。可以通过设置对象的 *canvas* 属性将对象分配给特定的画布：`mybox.canvas = scene2`。每个3D画布实际上都有一个2D覆盖层，用于显示 *label* 对象。

## 常用属性

```python
canvas(width=600, height=300, background=color.white)
```

| 属性名       | 类型     | 说明                                         |
|--------------|----------|----------------------------------------------|
| width        | 标量     | 画布宽度，单位为像素。默认640。              |
| height       | 标量     | 画布高度，单位为像素。默认400。              |
| background   | 向量     | 背景颜色。默认为 *color.black*。             |

## 不常用属性

```python
canvas(resizable=True, visible=True, align='left')
```

| 属性名       | 类型     | 说明                                         |
|--------------|----------|----------------------------------------------|
| visible      | 布尔值   | 如果为False，画布上不显示任何对象。默认为True。|
| resizable    | 布尔值   | 如果为False，用户不能调整画布大小。默认为True。|
| align        | 字符串   | 对齐方式，默认为‘none’。可选‘left’, ‘right’, ‘none’。|

## 方法

```python
mycanvas.select()
```

使 *mycanvas* 成为活动画布（因此随后创建的对象将进入它）。

```python
current = canvas.get_selected()
```

返回当前选中的画布。

画布也可以在创建对象时显式指定。

### 对齐

将 *align* 设置为‘left’会将画布强制放置在窗口的左侧。要将图表放置在画布右侧，设置画布的 *align* 为‘left’，并将图表的 *align* 设置为‘right’或‘left’。 （如果窗口不够宽以显示两者，图表将出现在画布下方。）

<img src="https://cdn.phycat.cn/localediter/202405171855740.png" width="250px" style="display: inline;margin:20px">

画布（左对齐）显示一个弹跳的球。图表（也是左对齐）显示球的y轴速度随时间的变化。

### 调整大小

如果 *mycanvas* 是可调整大小的画布，那么 `mycanvas.bind('resize', myfunction)` 将在用户调整画布大小时执行函数 `myfunction()`。如果函数形式为 `myfunction(myevent)`，则 `myevent.type` 将是‘resize’，`myevent.canvas` 将是‘mycanvas’。

### 画布中的对象

对于名为 *scene* 的画布：

**scene.camera** 是画布中的摄像机。

**scene.objects** 是画布中所有可见对象的列表。

**scene.lights** 是场景中所有灯光的列表。

**scene.delete()** 删除画布中的所有对象，然后删除画布本身。

### 屏幕捕获

**scene.capture(myfilename)** 将画布的屏幕截图发送到您的下载文件夹，文件名为 *myfilename.png*。后续捕获将命名为 *myfilename(1).png* 等。

**scene.capture(myfilename, False)** 捕获不包括 *label* 对象。默认为True。

### 标题和标题

画布可以有一个标题，显示在画布上方，和一个标题，显示在画布下方。文本可以包含简单的html元素。

<img src="https://cdn.phycat.cn/localediter/202405171855741.png" width="250px" style="display: inline;margin:20px">

在这幅图像中，标题包含文本“This is a &lt;i&gt;sphere&lt;/i&gt;”。标题

包含文本“White spheres are &lt;b&gt;boring&lt;/b&gt;”。

```python
canvas(title='This is the &lt;i&gt;Title&lt;/i&gt;', caption='This is the &lt;b&gt;caption&lt;/b&gt;')
```

| 属性名       | 类型     | 说明                                         |
|--------------|----------|----------------------------------------------|
| title        | 字符串   | 出现在画布上方的字符串。                     |
| caption      | 字符串   | 出现在画布下方的字符串。                     |

为标题追加文本使用：

**mycanvas.append_to_caption(“Some additional text.”)**

您可以使用标准的Python格式化对数值元素进行格式化。

标题或标题区域也可以放置按钮、菜单和滑块等小部件。对于动态可修改的标题中的文本，使用 *wtext*。

### 重绘事件

VPython大约每秒重绘整个画布60次。如果由于某种原因您希望等待屏幕开始或完成重绘，可以使用 [scene.waitfor()](/contents/UserInput/MouseInput.html#scene-waitfor)。

#### 开始重绘

evt = scene.waitfor('redraw')

#### 完成重绘

evt = scene.waitfor('draw_complete')