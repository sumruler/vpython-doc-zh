# wtext

wtext 对象（小部件文本）通常与滑块等小部件一起使用。它提供了一种动态修改画布标题或说明部分的方法，可能响应用户交互或计算的变化。

示例程序 [ButtonsMenusSliders](https://www.glowscript.org/#/user/GlowScriptDemos/folder/Examples/program/ButtonsSlidersMenus-VPython) 使用 **wtext** 显示一个旋转速度由滑块控制的立方体的当前旋转速度。

变量必须使用标准的 Python 格式选项转换为字符串。可以通过设置 *wtext* 对象的 *text* 属性随时更新文本：

```python
myspeedtxt.text = f'omega = {vslider.value:.1e} radians/s'
```
