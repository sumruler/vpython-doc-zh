# 键盘输入

本节处理单个或组合键按下的输入。有关输入较长字符串的信息，请参见 [文本输入](https://www.glowscript.org/docs/VPythonDocs/textinput.html)。

有关处理输入基础知识的讨论，请参见 [处理事件](https://www.glowscript.org/docs/VPythonDocs/userinput.html#event-handling)。

Jupyter notebook 限制：键盘事件被 Jupyter notebook 作为用户界面的一部分所吞噬，因此 VPython 程序无法使用这些事件。

## 哪些键被按下？

一次可以按下多个键。`keysdown()` 函数提供了当前被按下的所有键的列表。

```python
mykeys = keysdown()  # 一个包含按下键的列表
```

键名包括：

- 字母数字键的单个字符，例如 'b'
- 功能键 'f1' 到 'f10'
- 'backspace'
- 'caps lock'
- 'tab'
- 'shift'
- 'ctrl'
- 'alt'
- 'pageup'
- 'pagedown'
- 'end'
- 'home'
- 'left'（左箭头）
- 'right'（右箭头）
- 'down'（下箭头）
- 'up'（上箭头）
- 'insert'
- 'delete'
- 'break'

### 输入到标签中

`input()` 和 `winput()` 命令允许处理较长的用户输入。

下面的测试例程允许用户一次输入一个字符到标签中：

```python
prose = label()  # 初始为空白文本

def keyInput(evt):
    s = evt.key
    if len(s) == 1:  # 包括回车键 ('\n')
        prose.text += s  # 添加新字符
    elif (s == 'delete' or s == 'backspace') and len(prose.text) > 0:
        prose.text = prose.text[:-1]  # 删除最后一个字符

scene.bind('keydown', keyInput)
```

