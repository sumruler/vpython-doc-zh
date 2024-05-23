# 按钮

<img width="250" height="169" src="https://cdn.phycat.cn/localediter/202405181745789.png"/>

按钮是可以放置在画布的标题区域或说明区域的小部件。点击按钮会调用一个可以执行操作的函数，包括更改按钮的文本或禁用按钮。

```python
mybutton = button(bind=myaction, text='Click me!')
```

| 属性名       | 类型         | 说明                                    |
|--------------|--------------|-----------------------------------------|
| bind         | 函数         | 点击按钮时调用的函数。                  |
| text         | 字符串       | 按钮上显示的文本。                      |
| pos          | 画布属性     | 按钮的位置。默认值为 scene.caption_anchor。 |
| color        | 向量         | 按钮文本的颜色。可修改。                |
| background   | 向量         | 按钮背景的颜色。可修改。                |
| disabled     | 布尔值       | 如果为 True，按钮将变灰并且不响应。     |
| delete()     | 方法         | `mybutton.delete()` 删除按钮。          |

一个更改自身颜色和球体颜色的按钮示例：

```python
ball = sphere(color=color.cyan)

def changecolor(evt):
    if evt.text == 'red':
        ball.color = color.red
        clrbtn.background = color.cyan
        clrbtn.text = 'cyan'
    else:
        ball.color = color.cyan
        clrbtn.text = 'red'
        clrbtn.background = color.red

clrbtn = button(bind=changecolor, text='red', background=color.red)
```

## 按钮事件属性

事件处理函数的参数（在上面的代码中为 'evt'）将具有以下属性（按钮在点击时的属性）：

- `evt.text`
- `evt.color`
- `evt.background`
- `evt.disabled`

此外，你为小部件创建的任何属性（例如 `name` 或 `id`），也将作为 `evt` 的属性可用。

接下来你需要翻译和整理哪部分内容呢？