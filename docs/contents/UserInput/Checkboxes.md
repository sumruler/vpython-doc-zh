# 复选框

<img width="250" height="166" src="https://cdn.phycat.cn/localediter/202405181746427.png"/>

复选框是具有两种状态的小部件：选中和未选中。

```python
checkbox(bind=myfunction, text='mytext')
```

| 属性名       | 类型         | 说明                                            |
|--------------|--------------|-------------------------------------------------|
| bind         | 函数         | 选中或取消选中复选框时调用的函数。              |
| text         | 字符串       | 显示在复选框旁边的文本。                        |
| checked      | 布尔值       | 如果为 True，复选框被选中。                     |
| pos          | 画布属性     | 复选框的位置。默认值为 scene.caption_anchor。    |
| disabled     | 布尔值       | 如果为 True，复选框变灰并且不活动。             |
| delete()     | 方法         | `mywidget.delete()` 删除小部件。                |

一个控制立方体旋转的复选框示例：

```python
cube = box(color=color.orange)
spin = True

def rotate(evt):
    global spin
    spin = evt.checked

rcheck = checkbox(bind=rotate, text='Spin', checked=True)

while True:
    rate(20)
    if spin:
        cube.rotate(angle=pi/20, axis=vec(0,1,0))
```

## 复选框事件属性

事件处理函数的参数（在上面的代码中为 'evt'）将具有以下属性（复选框在点击时的属性）：

- `evt.text`
- `evt.checked`
- `evt.disabled`

此外，你为小部件创建的任何属性（例如 `name` 或 `id`），也将作为 `evt` 的属性可用。

另请参见：

[事件处理程序](https://www.glowscript.org/docs/VPythonDocs/userinput.html#eventhandler); [处理事件](https://www.glowscript.org/docs/VPythonDocs/userinput.html#event-handling); [轮询](https://www.glowscript.org/docs/VPythonDocs/userinput.html#polling); [小部件位置](https://www.glowscript.org/docs/VPythonDocs/widgetPosition.html)
