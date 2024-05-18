# 曲线

## 图示
<img src="https://cdn.phycat.cn/localediter/202405171633052.jpg" width="250px">

曲线对象由一系列点连接而成的直线组成。如果点足够接近，曲线可能会看起来平滑。点被提供为向量列表；也可以一次将点附加到曲线上。

## 常用属性

```python
curve(pos=[vec(-1, 3, 2), vec(2, 0, -1)], color=color.yellow)
```

| 参数名       | 类型             | 说明                            |
|--------------|------------------|---------------------------------|
| pos          | 向量列表         | 曲线上点的位置列表。默认为空（无点）。 |
| color        | 向量             | 默认为 *color.white*            |
| radius       | 标量             | 曲线的半径。默认为0，生成非常细的曲线。 |
| size         | 向量             | 改变大小会缩放整个曲线。默认为 &lt;1,1,1&gt;。 |
| origin       | 向量             | 改变起点会移动整条曲线。默认为 &lt;0,0,0&gt;。 |
| axis         | 向量             | 默认为 &lt;1,0,0&gt;           |

曲线对象不能进行复合。曲线既不能透明也不能使用纹理。

## 不常用属性

```python
curve(canvas=mycanvas, emissive=False)
```

| 参数名       | 类型             | 说明                            |
|--------------|------------------|---------------------------------|
| retain       | 标量             | 如果曲线不断添加点，则保留点的数量。 |
| shininess    | 标量             | 默认为0.6；范围0-1。            |
| emissive     | 布尔值           | 默认为False。如果为True，则对象发光，失去所有阴影效果。 |
| visible      | 布尔值           | 如果为False，对象不显示。默认为True。 |
| canvas       | 对象             | 默认为 `scene`                  |
| up           | 向量             | 与轴线垂直的向量                |

曲线不能使用 *make_trail*。

## 向曲线附加点

可以通过逐个附加点来创建曲线。在这种情况下，可以（但不是必须）为曲线中的每个点指定不同的颜色和半径，如下所示：

```python
mycurve = curve()
mycurve.append(pos=vector(-1,0,0), color=color.red, radius=0.05)
mycurve.append(pos=vector(0,1,0), color=color.cyan, radius=0.15)
mycurve.append(pos=vector(1,0,0), color=color.red, radius=0.05)
```

上面的代码会产生下图所示的效果：

<img src="https://cdn.phycat.cn/localediter/202405171633053.png" width="300px">

## 修改曲线的高级方法

点的所有属性都可以组合成一个 Python 对象。在 Web VPython 3.1 及更高版本中支持字典；较早版本使用 JavaScript 对象文字，其语法与 Python 字典的大括号形式基本相同。

描述一个点的 Python 对象可以这样构建：

```python
mypoint1 = {'pos': myvector1, 'color': mycolor1, 'radius': myradius1}
```

对于名为“mycurve”的曲线：

| 方法                  | 功能                                                         |
|-----------------------|--------------------------------------------------------------|
| mycurve.npoints               | 返回曲线中点的总数。                                          |
| mycurve.modify(N, pos, color, radius, visible) | 改变第 N 个点（起始点为 N=0）。                               |
| mycurve.clear()               | 从曲线中移除所有点。                                           |
| mycurve.unshift(mypointlist)  | 在曲线开头插入点列表（字典）。                                  |
| mycurve.splice(N, howmany, pointlist) | 从位置 N 开始插入点列表。                                    |
| mycurve.pop(N)                | 返回第 N 个点的值并将其从曲线中移除。                          |
| mycurve.point(N)              | 返回第 N 个点（作为字典）。                                    |
| mycurve.slice(N1, N2)         | 返回从 N1 到 N2 的点列表（作为字典）。                          |

## 曲线中的颜色插值

曲线机制会从一个点到下一个点进行颜色插值。如果希望颜色突变，请在相同位置添加另一个点。在下面的例子中，将一个青色点添加到橙色点相同的位置，使得第一个线段完全变成了青色。

```python
c = curve(color=color.cyan, radius=0.2)
c.append(vector(-1,0.5,0))
# 添加额外的青色点：
c.append(vector(0,0,0))
# 重复相同的点：
c.append(pos=vector(0,0,0), color=color.orange)
# 添加另一个橙色点：
c.append(pos=vector(1,0.5,0), color=color.orange)
```

在下面的图像中，上部粗曲线没有第二个青色点，由三个位置和颜色点（青色、橙色、橙色）组成，因此蓝色渐变为橙色。下部曲线包括额外的青色点，并包含四个位置和颜色点（青色、青色、橙色、橙色），因此蓝色和橙色之间有明显的分界。

<img src="https://cdn.phycat.cn/localediter/202405171633054.png" width="300px">
