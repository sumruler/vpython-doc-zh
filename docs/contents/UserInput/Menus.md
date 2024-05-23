# 下拉菜单

<img src="https://cdn.phycat.cn/localediter/202405181746081.png" alt="menu" width="250"/>

菜单小部件提供一个下拉菜单。

```python
menu(bind=myfunction, choices=choicelist)
```

| 属性名       | 类型         | 说明                                             |
|--------------|--------------|--------------------------------------------------|
| bind         | 函数         | 选择菜单选项时调用的函数。                        |
| choices      | 列表         | 显示在菜单中的选项列表（字符串）。                |
| selected     | 字符串       | 当前选择的菜单选项的文本。                        |
| index        | 标量         | 当前选择的选项在列表中的位置。                    |
| disabled     | 布尔值       | 如果为 True，菜单将变灰并且不响应。               |
| delete()     | 方法         | `mymenu.delete()` 删除菜单。                      |

以下代码创建一个菜单来更改对象的颜色：

```python
pointer = arrow(pos=vec(-3,-3,0), axis=vec(6,6,0), color=color.white)

def changeattr(evt):
    console.log(evt)
    if evt.index < 1:
        pass
    elif evt.index == 1:
        pointer.color = color.yellow
    elif evt.index == 2:
        pointer.color = color.magenta
    elif evt.index == 3:
        pointer.color = color.cyan

choicelist = ['Color', 'yellow', 'magenta', 'cyan']

menu(choices=choicelist, bind=changeattr)
```

## 菜单事件属性

事件处理函数的参数（在上面的代码中为 'evt'）将具有以下属性（菜单的属性）：

- `evt.index`
- `evt.selected`
- `evt.disabled`

此外，你为小部件创建的任何属性（例如 `name` 或 `id`），也将作为 `evt` 的属性可用。
