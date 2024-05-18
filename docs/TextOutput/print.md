# print

要将文本输出到滚动文本区域（在 WebVPython 中是画布下方的一个区域；在使用 vpython 包的 Python 中是控制台），可以使用标准的 Python **print()** 函数。标准的 Python 格式选项是可用的。

对于 **仅限 WebVPython**，可以控制打印区域的宽度和高度：

```python
print_options(width=500, height=300, readonly=False, digits=4, pos='right', place=scene.title_anchor)
```

| 属性名      | 类型     | 说明                                                                                       |
|-------------|----------|--------------------------------------------------------------------------------------------|
| width       | 标量     | 打印区域的宽度。                                                                            |
| height      | 标量     | 打印区域的高度。                                                                            |
| readonly    | 布尔值   | 如果为 *True*，用户不能编辑打印区域中的文本。默认值为 *True*（但用户仍可以复制输出文本）。   |
| digits      | 标量     | 如果 *digits=4*，则 123.456 将显示为 123.4。默认值为 6。                                     |
| pos         | 字符串   | 打印区域相对于画布的位置。默认值为 “bottom”（在画布下方）。如果设置 *pos=”right”*，打印区域将出现在画布右侧（假设窗口足够宽）。 |
| place       | 锚点位置 | 如果 *place=scene.title.anchor*，打印区域将位于标题区域。*scene.caption.anchor* 也可用。      |

要复制打印区域中的文本：

```python
mytext = print_options(contents=True)
```

要清除打印区域中的所有内容：

```python
print_options(clear=True)
```

要删除整个打印区域：

```python
print_options(delete=True)
```
