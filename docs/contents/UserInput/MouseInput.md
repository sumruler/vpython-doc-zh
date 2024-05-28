# 鼠标输入

点击或拖动鼠标会生成事件。VPython 目前不处理右键或中键事件。

## scene.pause

使用鼠标的最简单方法是暂停并等待鼠标点击：

```python
myevt = scene.pause()
```

在画布中会显示一个白色三角形，表示程序已暂停，等待鼠标点击。当鼠标被点击时，变量 `myevt` 将具有以下属性：

- `myevt.event` 事件类型，将为 “click”。
- `myevt.pageX` 鼠标位置的 x 坐标（以像素为单位）；(0,0) 位于左上角。
- `myevt.pageY` 鼠标位置的 y 坐标。
- `myevt.pos` 鼠标在世界坐标中的位置（一个向量）。
- `myevt.which` 鼠标按钮指示器（目前始终为 1）。

## scene.waitfor()

使用 `scene.waitfor()` 可以指定事件类型（除了下面列出的鼠标事件外，还可以包括按键事件或重绘事件）。`scene.waitfor()` 会暂停程序，直到特定事件发生。

```python
myevt = scene.waitfor('click')
```

| 属性名   | 类型     | 说明                                   |
|----------|----------|----------------------------------------|
| argument | 字符串   | 要等待的事件类型。                     |

可能的参数有：

- `click` 等待鼠标按钮点击。
- `mousedown` 等待鼠标按钮按下。
- `mouseup` 等待鼠标按钮释放。
- `mousemove` 等待鼠标移动。
- `mouseenter` 等待鼠标移入画布。

可以组合多个参数，例如 `mousedown mousemove`。

变量 `myevt` 将具有以下属性：

- `myevt.event` 事件类型。
- `myevt.pageX` 鼠标位置的 x 坐标（以像素为单位）；(0,0) 位于左上角。
- `myevt.pageY` 鼠标位置的 y 坐标。
- `myevt.pos` 鼠标在世界坐标中的位置（一个向量）。
- `myevt.canvas` 事件发生的画布。
- `myevt.which` 鼠标按钮指示器（目前始终为 1）。

## scene.mouse()

有关鼠标当前状态的信息可以在 `scene.mouse()` 中随时查询。

```python
mickey = scene.mouse()
```

| 属性名 | 类型   | 说明                                                                                  |
|--------|--------|---------------------------------------------------------------------------------------|
| pos    | 向量   | 鼠标光标的当前 3D 位置。始终位于平行于屏幕的平面上，通过 `scene.center` 处。            |
| pick   | 对象   | 鼠标光标当前停留的对象（如果有）。某些对象不可选中：label、helix、curves、spheres 和 arrows。 |
| ray    | 向量   | 从摄像机到鼠标光标的单位向量。                                                        |
| alt    | 布尔值 | 如果按下 ALT 键，则为 True。                                                          |
| ctrl   | 布尔值 | 如果按下 CTRL 键，则为 True。                                                         |
| shift  | 布尔值 | 如果按下 SHIFT 键，则为 True。                                                        |

## scene.mouse.project()

此方法返回将鼠标光标投影到平行于指定法线并通过指定点的平面上的 3D 位置。如果与平面没有交点，则返回 None。

```python
mypos = scene.mouse.project(normal=vec(0,1,0), point=vec(0,3,0))
```

| 属性名  | 类型   | 说明                                               |
|---------|--------|----------------------------------------------------|
| normal  | 向量   | 垂直于投影平面的单位向量。                         |
| point   | 向量   | 投影平面通过的点。默认值为 <0, 0, 0>。             |
| d       | 标量   | point 的替代值。距离原点到投影平面的距离。          |

以下程序允许用户通过移动鼠标（按钮抬起）在平行于 *xz* 平面的平面上留下球体的轨迹：

```python
xax = curve(pos=[vec(-3,0,0), vec(3,0,0)])
yax = curve(pos=[vec(0, -3,0), vec(0,3,0)])
zax = curve(pos=[vec(0, 0, -3), vec(0,0,3)])
bb = box(pos=vec(0,2,0), size=vec(4,0.01,4), opacity=0.5)

scene.autoscale = False
while True:
    rate(30)
    mpos = scene.mouse.project(normal=vec(0,1,0), point=vec(0,2,0))
    if mpos != None:
        sphere(pos=mpos, radius=0.1, color=color.green)
```

## 鼠标事件处理程序

可以将鼠标事件绑定到一个函数。

```python
scene.bind('click', newcolor)
```

| 属性名          | 类型     | 说明                                           |
|-----------------|----------|------------------------------------------------|
| firstargument   | 字符串   | 事件类型。可以是 'click'、'mousedown'、'mousemove'、'mouseup'。 |
| secondargument  | 函数     | 鼠标事件发生时要调用的函数名称。               |

以下代码允许用户通过点击画布中的任何位置来更改球体的颜色：

```python
s = sphere(color=color.cyan)

def change():
    if s.color.equals(color.cyan):
        s.color = color.red
    else:
        s.color = color.cyan

scene.bind('click', change)
```
