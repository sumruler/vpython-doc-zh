# 文本输入

`winput` 和 `input` 命令允许用户输入由程序处理的文本。

目录

- [文本输入](#text-input)
    - [input](#input)
    - [winput](#winput)

## [input](#id2)

`input()` 函数接受来自弹出对话框的用户输入。这类似于 Python 的 `input()` 函数，但允许指定提示。

```python
mytext = input(prompt='Enter a color:')
```

| 属性名   | 类型   | 说明              |
|----------|--------|-------------------|
| prompt   | 字符串 | 提示文本。        |

如果用户按下“取消”而不是输入字符串，该函数返回 `None`。输入可以转换为数字：`val = float(mytext)`。

```python
ss = input('What is your name?')

if ss != None:
    print('Hello', ss)
else:
    print('Goodbye')
```

## [winput](#id3)

`winput()` 小部件可以放置在画布的说明区域（默认位置）或标题区域。它显示一个用户可以输入的框。用户必须在输入文本之前选择文本输入区域。当用户按下 *Enter* 或 *Tab* 键或点击 VPython 画布之外的地方时，绑定到 *winput* 小部件的函数将被执行。如果某些属性在创建后不能修改，则标记为“不可修改”。

```python
ww = winput(bind=myfunction, prompt='value', type='numeric')
```

| 属性名       | 类型         | 说明                                                  |
|--------------|--------------|-------------------------------------------------------|
| bind         | 函数         | 输入结束时调用的函数（通过 Enter、Tab 或点击画布外部）。 |
| prompt       | 字符串       | 显示在 winput 框左侧的文本。（仅限 WebVPython）。       |
| type         | 字符串       | 请求的输入类型：“numeric”（默认）或“string”。不可修改。|
| pos          | 画布属性     | 复选框的位置。默认值为 scene.caption_anchor。            |
| width        | 标量         | 输入框的宽度（以像素为单位）。默认值为 100。不可修改。  |
| height       | 标量         | 输入框的高度（以像素为单位）。默认值为 20。不可修改。   |
| text         | 字符串       | 显示在框中的文本，无论是用户输入的还是程序设置的。      |
| number       | 标量         | 如果类型是“numeric”，则评估用户输入文本的结果，否则为 None。不可修改。|
| disabled     | 布尔值       | 如果为 True，文本变灰且 winput 不活动。                 |
| delete()     | 方法         | 从显示中删除 winput 框的方法。                         |

此代码使用 *winput* 调整球体的半径：

```python
ss = sphere(pos=vec(-2,0,0), radius=0.2, color=color.yellow)

def change_radius(evt):
    rad = evt.number
    if rad != None:
        if rad < 10:
            ss.radius = evt.number
        else:
            print(rad + ' is too large')
            ww.text = ''

scene.append_to_caption('Radius must be less than 10 \n')
ww = winput(prompt='Radius:', bind=change_radius, type='numeric')
```
