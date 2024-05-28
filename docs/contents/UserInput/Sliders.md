# 滑块

<img width="250" height="184" src="https://cdn.phycat.cn/localediter/202405181748343.png" alt="slider"/>

滑块是提供数值的小部件。拖动滑块会调用一个函数（事件处理程序）。如果在创建滑块后不能修改某些属性，则这些属性被标记为“不可修改”。演示程序 [Color-RGB-HSV](https://www.glowscript.org/#/user/GlowScriptDemos/folder/Examples/program/Color-RGB-HSV-VPython) 使用多个滑块来调整颜色。

```python
myslider = slider(bind=myaction, min=0, max=50)
```

| 属性名     | 类型         | 说明                                                  |
|------------|--------------|-------------------------------------------------------|
| bind       | 函数         | 点击按钮时调用的函数。                                |
| min        | 标量         | 滑块的最小值。默认值为 0。不可修改。                  |
| max        | 标量         | 滑块的最大值。默认值为 1。不可修改。                  |
| step       | 标量         | 点击或拖动时的步长。默认值为 0.001\*(max-min)。不可修改。|
| value      | 标量         | 当前值。可以由程序或用户设置。当程序设置值时，不执行绑定函数。|
| vertical   | 布尔值       | 如果为 True，滑块为垂直方向。默认值为 False（水平）。不可修改。|
| length     | 标量         | 滑块的长度（以像素为单位）。默认值为 400 px。不可修改。|
| width      | 标量         | 滑块的宽度（以像素为单位）。默认值为 10 px。不可修改。|
| left       | 标量         | 滑块左侧的边距（以像素为单位）。默认值为 12 px。不可修改。|
| right      | 标量         | 滑块右侧的边距（以像素为单位）。默认值为 12 px。不可修改。|
| top        | 标量         | 滑块上方的边距（以像素为单位）。默认值为 0 px（水平），8 px（垂直）。不可修改。|
| bottom     | 标量         | 滑块下方的边距（以像素为单位）。默认值为 0 px（水平），8 px（垂直）。不可修改。当前不正常工作。|
| align      | 字符串       | 如果为 'left'，滑块显示在窗口左侧。选项为 'left'、'right'、'none'（默认）。不可修改。|
| pos        | 画布属性     | 小部件的位置。默认值为 scene.caption_anchor。         |
| disabled   | 布尔值       | 如果为 True，小部件变灰且不活动。                     |
| delete()   | 方法         | `myslider.delete()` 删除小部件。                      |

以下代码创建了一个具有 *id* 属性的滑块，用于调整圆锥的长度：

```python
cc = cone(color=color.yellow, axis=vec(2.5,0,0), pos=vec(-2,0,0))

def stretch(evt):
    console.log(evt)
    if evt.id == 'x':
        cc.length = evt.value

xslider = slider(bind=stretch, max=5, min=0.5, step=0.1, value=cc.length, id='x')
```

滑块没有文本字段。如果你希望显示滑块的当前值，请使用 [wtext](wtext)。

## 滑块事件属性

事件处理函数的参数（在上面的代码中为 'evt'）将具有以下属性（滑块在点击时的属性）：

- `evt.value`
- `evt.disabled`

此外，你为小部件创建的任何属性（例如 `name` 或 `id`），也将作为 `evt` 的属性可用。
