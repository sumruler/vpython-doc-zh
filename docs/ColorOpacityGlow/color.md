# 颜色

每个图形对象都有一个 `color` 属性。`color` 属性是一个向量，其组成部分是 `R`（红色）、`G`（绿色）和 `B`（蓝色）。你可以通过指定 RGB 分量来指定自己的颜色，或者你可以使用VPython库中的颜色之一：

- `color.white` 定义为 `vec(1,1,1)`
  
- `color.red` 定义为 `vec(1,0,0)`
  
- `color.green` 定义为 `vec(0,1,0)`
  
- `color.blue` 定义为 `vec(0,0,1)`
  
- `color.cyan` 定义为 `vec(0,1,1)`
  
- `color.magenta` 定义为 `vec(1,0,1)`
  
- `color.yellow` 定义为 `vec(1,1,0)`
  
- `color.orange` 定义为 `vec(1,0.6,0)`
  
- `color.purple` 定义为 `vec(0.4,0.2,0.6)`
  
- `color.black` 定义为 `vec(0,0,0)`
  

在RGB颜色系统中，颜色是以红色、绿色和蓝色的分数来指定的，对应于计算机屏幕上微小红色、绿色和蓝色点的强度。在RGB方案中，白色是红色、蓝色和绿色的最大值（1, 1, 1）。黑色的分量是最小值（0, 0, 0）。最亮的红色由（1, 0, 0）表示；也就是说，它具有完整的红色分量，没有绿色和蓝色。

除了颜色库中的颜色之外，你还可以创建自己的颜色，例如：

`vector(0.5, 0.5, 0.5)` 一种相当暗的灰色。或者你可以说 `color=color.gray(0.5)` 或 `color.white*0.5` 表示 `vec(0.5,0.5,0.5)`。

`vector(1,0.7,0.2)` 一种铜色。

颜色在不同的计算机和不同的3D光照条件下可能显示不同。上述命名的颜色最可能适当显示，因为RGB值为0或1不受不同的颜色校正（"gamma"校正）的影响。

VPython演示程序 [Color-RGB-HSV](https://www.glowscript.org/#/user/GlowScriptDemos/folder/Examples/program/Color-RGB-HSV-VPython) 允许你调整RGB滑块以可视化颜色，并打印颜色三元组，然后你可以将其复制到你的程序中。它还提供HSV滑块来调整色调、饱和度和亮度。

## RGB和HSV颜色描述之间的转换

HSV（色调、饱和度和亮度）是一种描述颜色的备用方案。尽管VPython只接受RGB颜色，但有函数可以在RGB和HSV之间进行转换。

`color.rgb_to_hsv(*c*)`

参数c是表示颜色的向量。

`color.hsv_to_rgb(*c*)`

```python
c = vector(1,1,0)
c2 = color.rgb_to_hsv(c) # 将RGB转换为HSV
print(hsv) # vector(0.16667, 1, 1)
c3 = color.hsv_to_rgb(c2) # 再次转换为RGB
print(c3) # vector(1, 1, 0)
```

这些函数可以嵌入在对象构造函数中。例如：

`sphere( radius=2, color=color.hsv_to_rgb(vector (0.5,1,0.8) )`