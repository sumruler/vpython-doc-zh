# 挤压形状

![_images/extrusion-shape-vs-path.png](https://cdn.phycat.cn/localediter/202405181628455.png)

左侧（青色）：沿矩形路径挤压的圆形形状。右侧（洋红色）：沿圆形路径挤压的矩形形状。


      

## 挤压的基础

挤压对象是通过沿一个3D路径挤压一个2D形状制造出来的。



### 常用属性

```python
myext = extrusion(shape=myshape, path=mypath)
```

| 参数名 | 类型 | 说明 |
|--------|------|------|
| shape  | 列表 | 一个由x-y对组成的列表，每个对本身也是一个列表，描述了*xy*平面中的一个封闭图形。 |
| path   | 列表 | 一个表示路径的3D向量的列表。 |

下面的代码在 *xy* 平面中创建了一个三角形形状，并沿 *+z* 方向的直线路径挤压它，制造出一个长楔形：

```python
triangleshape = [[2,0], [0,4], [-2,0], [2,0]]
linepath = [vec(0,0,-4), vec(0,0,4)]
wedge = extrusion(shape=triangleshape, path=linepath, color=color.magenta)
```

![_images/extrusion2.png](https://cdn.phycat.cn/localediter/202405181628351.png)

### 不常用属性

*extrusion* 的其他属性包括：

```python
myext = extrusion(shape=myshape, path=mypath, color=color.red, smooth=0.9, scale=3, twist=0.1)
```

| 参数名        | 类型           | 说明                                                                                   |
|---------------|----------------|----------------------------------------------------------------------------------------|
| color         | 向量           | 挤压的颜色。默认为 *color.white*                                                       |
| smooth        | 标量           | 如果相邻路径元素之间的角度余弦大于此数字，则平滑它们之间的接头。默认：0.95（角度18度）。 |
| scale         | 标量或列表     | 如果scale为3，则所有接头放大3倍。如果是列表，如“scale = [2, 3, 0.5]”，则初始截面放大2倍，第二个3倍，第三个0.5倍。对于列表，比例因子的数量必须与路径点的数量相同。 |
| xscale        | 标量或列表     | 仅在x方向的放大，与scale相同。                                                          |
| yscale        | 标量或列表     | 仅在y方向的放大，与scale相同。                                                          |
| twist         | 标量或列表     | 按路径旋转后续片段的弧度角（或角度列表）。对于列表，扭曲因子的数量必须与路径点的数量相同。 |
| start_normal  | 向量           | 初始面的外向法线。默认情况下，这由从起点到路径上下一段的方向决定。如果路径闭合，则此属性无效。 |
| end_normal    | 同start_normal | 结束面的法线，与start_normal相同。                                                      |
| show_start_face | 布尔值        | 如果为*False*，开始面保持开放。默认为*True*。                                           |
| show_end_face | 布尔值         | 与show_start_face相同，但适用于挤压的结束面。                                            |
| smooth_joints | 列表           | 无论整体设置如何，都应平滑其接头的路径点位置列表。路径中的第一个位置为0。设置`smooth_joints=[2,5]`会开启这些接头的平滑。 |
| sharp_joints  | 列表           | 与smooth_joints相反的效果，语法相同。                                                    |
| group         | 对象           | 此对象所属的组。                                                                        |

<img width="200" height="94" src="https://cdn.phycat.cn/localediter/202405181628033.png"/>
上图：沿线性路径挤压的矩形，并加入了扭曲。

## 带孔的对象

路径总是一个点集。然而，形状可以有孔。如果形状有孔，则它将包含多个子列表：第一个列表表示形状的外围，其他各个列表分别指定外围内部一个孔的边界。孔不得相互重叠。

```python
outershape = [[0.5, -0.5], [0.5, 0.5], [-0.5, 0.5], [-0.5, -0.5], [0.5, -0.5]]
innershape = [[0.35, -0.20], [0, 0.40], [-0.35, -0.20], [0.35, -0.20]]
zpath = [vec(0,0,0), vec(0,0,0.5)]
thing = extrusion(shape=[outershape, innershape], path=zpath, color=color.yellow)
```

<img width="175" height="150" src="https://cdn.phycat.cn/localediter/202405181628505.png"/>

## 常见形状和路径

VPython提供了一个[常用形状库](https://www.glowscript.org/docs/VPythonDocs/shapes_and_paths.html)：*xy*平面中的封闭图形。每个形状都是预计算的*x-y*对列表。你可以在制作挤压物时使用这些形状：

```python
myextrusion = extrusion(shape=shapes.rectangle(width=10, height=6), path=mypath)
```

[路径库](https://www.glowscript.org/docs/VPythonDocs/shapes_and_paths.html)包含与形状库相同的图形。然而，每条路径都是预计算的3D向量位置列表。

要沿圆形路径挤压三角形形状，可以使用这些库：

```python
trishape = shapes.triangle(xscale=0.5, yscale=0.3)
circpath = paths.circle(scale=2)
oddring = extrusion(shape=trishape, path=circpath, color=color.yellow)
```

![_images/extrusion3.png](https://cdn.phycat.cn/localediter/202405181628151.png)

有关这些库的详细文档，请参见[形状和路径库](https://www.glowscript.org/docs/VPythonDocs/shapes_and_paths.html)。

## 颜色混合

像复合对象一样，设置非白色挤压物的颜色将使整体颜色与原始颜色进行乘法混合。例如，如果挤压物的原始颜色是&lt;0,1,1&gt;（青色），而你稍后将颜色设置为&lt;1,1,0&gt;（黄色），则混合结果为&lt;0\*1, 1\*1, 0\*0&gt;或&lt;0,1,0&gt;，即绿色。如果你打算在创建挤压对象后改变颜色，最好从

**color.white**开始，这是默认设置。

## 半球形

使用挤压创建半球形有两种方法。第一种方法涉及沿圆形路径挤压一个四分之一圆弧形状，并使用偏移（pos）：

```python
hshape = shapes.arc(angle1=0, angle2=0.999*pi/2, radius=0.5, thickness=0.01, pos=[-0.5,0])
hpath = paths.circle(radius=0.5)
demihemi = extrusion(shape=hshape, path=hpath, color=color.green)
```

![_images/extrusion-hemisphere-1.png](https://cdn.phycat.cn/localediter/202405181628888.png)

第二种方法涉及沿线性路径挤压一个圆形，但在路径的每一步调整圆形的缩放因子：

```python
rr = 1
N = 400
x = 0
dx = 1/(N)
scalef = []
hpath = []
for i in range(0, N+1, 1):
    rad = sqrt(rr**2 - x**2)
    scalef.append(rad)
    x = i*dx
    hpath.append(vec(0,x,0))
hem = extrusion(path=hpath, shape=shapes.circle(radius=rr), scale=scalef, show_start_face=False, color=color.magenta)
```

![_images/extrusion-hemisphere-2.png](https://cdn.phycat.cn/localediter/202405181628307.png)