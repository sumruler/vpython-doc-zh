# 单选按钮

<img width="250" height="170" src="https://cdn.phycat.cn/localediter/202405281927763.png" alt="radio button"/>

一组单选按钮提供互斥选择。选中一个按钮将取消选中所有其他按钮。组中的所有单选按钮必须具有相同的 *name* 属性。

```python
radio(bind=myfunction, text='mytext', name='mygroup')
```

| 属性名       | 类型         | 说明                                            |
|--------------|--------------|-------------------------------------------------|
| bind         | 函数         | 选中或取消选中复选框时调用的函数。              |
| text         | 字符串       | 显示在复选框旁边的文本。                        |
| name         | 字符串       | 所属的单选按钮组的名称。                        |
| checked      | 布尔值       | 如果为 True，复选框被选中。默认值为 False。      |
| pos          | 画布属性     | 复选框的位置。默认值为 scene.caption_anchor。    |
| disabled     | 布尔值       | 如果为 True，复选框变灰并且不活动。             |
| delete()     | 方法         | `mywidget.delete()` 删除小部件。                |

一组控制球体颜色的单选按钮示例：

```python
ball = sphere(color=color.red)

def rfun(evt):
    if evt.text == 'red':
        ball.color = color.red
    elif evt.text == 'green':
        ball.color = color.green
    elif evt.text == 'blue':
        ball.color = color.blue

redbutton = radio(bind=rfun, text='red', name='colors', checked=True)
greenbutton = radio(bind=rfun, text='green', name='colors')
bluebutton = radio(bind=rfun, text='blue', name='colors')
```

## 单选按钮事件属性

事件处理函数的参数（在上面的代码中为 'evt'）将具有以下属性（单选按钮在点击时的属性）：

- `evt.text`
- `evt.checked`
- `evt.disabled`

此外，你为小部件创建的任何属性（例如 `name` 或 `id`），也将作为 `evt` 的属性可用。
