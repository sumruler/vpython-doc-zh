# 处理事件

处理事件有三种方法：

1. 等待事件：所有程序执行停止，直到事件发生。
2. 创建事件处理程序：事件可以绑定到一个函数。程序继续运行，直到指定事件发生；然后立即调用绑定的函数。
3. 轮询事件：在计算循环中检查是否发生了事件，如果是，则查看事件是什么。

## 等待事件

等待输入会暂停程序，直到输入发生。

```python
scene.pause()
```

`scene.pause()` 是等待输入的最简单方法。当程序执行到这一行时，它不会继续，直到鼠标被点击。下面的代码将绘制球体，然后在屏幕右下角放置一个白色三角形，并等待鼠标点击，然后擦除三角形并绘制立方体。

```python
ball = sphere(pos=vec(-1,0,0), radius=0.5, color=color.magenta)
scene.pause()
cube = box(pos=vec(1,0,0), color=color.green)
```

一种更通用的方法是指定等待的事件，可以是鼠标事件或按键事件：

```python
scene.waitfor('click keydown')
```

有关详细讨论，请参见 [鼠标输入](MouseInput)。

## 事件处理程序

处理事件（包括与按钮、菜单和滑块的交互）的一种通用且灵活的方法是使用事件处理程序。设置方法如下：

- 定义一个响应特定事件的函数
- **绑定**事件到该函数

当事件发生时，不管程序中其他部分在做什么，都会自动调用该函数。如果函数有一个参数，该参数将包含有关事件的信息，可供函数使用。

```python
scene.bind('keydown', key_pressed)
```

| 属性名          | 类型     | 说明                               |
|-----------------|----------|------------------------------------|
| firstargument   | 字符串   | 第一个参数给出事件类型。           |
| secondargument  | 函数     | 第二个参数是要调用的函数名称。     |

这段代码检测按键并打印按下的键的名称：

```python
box()  # 我们需要一个对象来获取画布

def key_pressed(evt):  # 事件信息存储在 evt 中
    keyname = evt.key
    print('The ' + keyname + ' key was pressed.')

scene.bind('keydown', key_pressed)
```

事件对象的属性取决于事件类型（键盘、鼠标等）。

## 轮询

可以在循环内部显式检查鼠标或键盘的状态。下面的代码检查是否按下了 “q” 键，如果是，则退出循环。

```python
ball = sphere(color=color.cyan)
while True:
    rate(10)
    k = keysdown() # 一个包含按下键的列表
    if 'q' in k:
        break
print('Done with loop')
```
