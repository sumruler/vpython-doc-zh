# 图形和路径
   

## 图形 vs 路径

**shapes** 库中的每个函数创建一个 xy 平面中的 2D 坐标列表，格式为

`[ [x0,y0], [x1,y1], [x2,y2], ... ]`

**paths** 库中的每个函数创建一个 xz 平面中的 3D 向量列表，格式为

`[ vec(x0,y0,z0), vec(x1,y1,z1), ... ]`

因此，**shapes.rectangle()** 和 **paths.rectangle()** 的输出是不同的。然而，除了库名不同，命令的语法几乎相同。以下描述是为 **shapes** 编写的，但可以通过将“shapes”改为“paths”来制作 **paths**。在必要时注明 *shapes* 和 *paths* 之间的差异。

## 矩形

```python
rt = shapes.rectangle(width=10, height=6)
```

| 属性名     | 类型     | 说明                                         |
|------------|----------|----------------------------------------------|
| width      | 标量     | 矩形的宽度，默认值 1                         |
| height     | 标量     | 矩形的高度，默认值 1                         |

上述函数创建一个宽为 10、高为 6 的矩形角点的 2D x-y 坐标列表。如果省略高度值，则形状为边长等于给定宽度的正方形。如果打印上面创建的列表的值，将看到从右下角开始逆时针继续的 2D 坐标列表，最终回到起始位置：

`[[5, -3], [5, 3], [-5, 3], [-5, -3], [5, -3]]`

可以通过执行以下语句在 VPython 中可视化矩形形状，该语句将矩形形状沿从 vec(0,0,0) 到 vec(0,0,-0.1) 的线挤压到屏幕中：

```python
rectshape = shapes.rectangle(width=10, height=6)
linepath = [ vec(0,0,0), vec(0,0,-0.1) ]
extrusion( shape=rectshape, path=linepath )
```

<img width="150" height="107" src="https://cdn.phycat.cn/localediter/202405181650307.jpg"/>

### 矩形的其他参数：

```python
rt = shapes.rectangle(rotate=pi/6, roundness=0.1, invert=True, scale=2, pos=[2,1])
```

| 属性名     | 类型     | 说明                                                                                       |
|------------|----------|--------------------------------------------------------------------------------------------|
| rotate     | 标量     | 矩形按指定角度（以弧度为单位）逆时针旋转。默认值 0                                       |
| roundness  | 标量     | 将锐角替换为半径为 (roundness * min(height,width)) 的圆弧                                  |
| invert     | 布尔值   | 设置 *invert* 为 *True* 并设置 roundness 会产生斜角                                         |
| scale      | 标量     | 将高度和宽度乘以 *scale*。默认值 1                                                         |
| xscale     | 标量     | 仅宽度的缩放因子                                                                            |
| yscale     | 标量     | 仅高度的缩放因子                                                                            |
| thickness  | 标量     | 仅形状使用。创建一个厚度为 (thickness * min(height,width)) 的空心矩形框，即一个带矩形孔的矩形。挤出此形状将形成一个空心盒。默认值 0（无孔）。如果 thickness > 0，则形状将包含两个 2D 点列表：一个用于内部轮廓，一个用于外部轮廓 |
| pos        | 列表     | 仅形状使用。相对于路径的 2D 位置。默认值：矩形的中心放置在路径位置上                         |

<img width="150" height="131" src="https://cdn.phycat.cn/localediter/202405181650308.jpg" style="margin: 10px;display: inline;"/> <img width="130" height="97" src="https://cdn.phycat.cn/localediter/202405181650309.jpg" style="margin: 10px;display: inline;"/> <img width="130" height="103" src="https://cdn.phycat.cn/localediter/202405181650310.jpg" style="margin: 10px;display: inline;"/> <img width="130" height="109" src="https://cdn.phycat.cn/localediter/202405181650311.jpg" style="margin: 10px;display: inline;"/>

从左到右的图像：旋转矩形，圆角矩形，倒角矩形，矩形框

## 圆形

<img width="150" height="145" src="https://cdn.phycat.cn/localediter/202405181650312.jpg"/>

```python
cr = shapes.circle(radius=2, np=128)
```

| 属性名     | 类型     | 说明                                                        |
|------------|----------|-------------------------------------------------------------|
| radius     | 标量     | 圆的半径。默认值 1                                          |
| np         | 标量     | 用于近似圆的点数。默认值 64。未完成的圆将没有全部点数       |
| scale      | 标量     | 将高度和宽度乘以 *scale*。默认值 1                          |
| xscale     | 标量     | 仅宽度的缩放因子                                             |
| yscale     | 标量     | 仅高度的缩放因子                                             |
| angle1     | 标量     | 从 +x 轴逆时针的起始角度，以弧度为单位。默认值 0            |
| angle2     | 标量     | 从 +x 轴逆时针的结束角度，以弧度为单位。默认值 2*pi         |
| thickness  | 标量     | 仅形状使用。创建宽度为 (thickness * radius) 的圆环。挤出此形状将形成一个空心圆柱。默认值 0（无孔） |
| pos        | 列表     | 仅形状使用。相对于路径的 2D 位置。默认值：圆的中心放置在路径位置上 |

<img width="150" height="149" src="https://cdn.phycat.cn/localediter/202405181650313.jpg" style="margin: 10px;display: inline;"/> <img width="150" height="79" src="https://cdn.phycat.cn/localediter/202405181650314.jpg" style="margin: 10px;display: inline;"/> <img width="150" height="87" src="https://cdn.phycat.cn/localediter/202405181650315.png" style="margin: 10px;display: inline;"/>

从左到右的图像：圆环，angle1 和 angle2，以及 thickness



## 椭圆

<img width="150" height="97" src="https://cdn.phycat.cn/localediter/202405181650316.jpg"/>

```python
myellipse = shapes.ellipse(width=5, height=3)
```

| 属性名     | 类型     | 说明                              |
|------------|----------|-----------------------------------|
| width      | 标量     | x 轴方向的尺寸。默认值 2           |
| height     | 标量     | y 轴方向的尺寸。默认值 1           |

*ellipse* 的属性与 *circle* 的属性几乎相同，不同之处在于 *xscale* 和 *yscale* 被替换为 *width* 和 *height*。椭圆的默认宽度是圆的两倍。

## 弧形

<img width="150" height="141" src="https://cdn.phycat.cn/localediter/202405181650317.jpg"/>

```python
myarc = shapes.arc(radius=2, angle1=0, angle2=pi/2)
```

| 属性名     | 类型     | 说明                        |
|------------|----------|-----------------------------|
| radius     | 标量     | 弧的半径                    |

*arc* 的属性与 *circle* 的属性非常相似。弧可以旋转和缩放。对于形状，如果未指定厚度，弧形状会被赋予一个非常小的厚度，以便产生闭合轮廓。

注意，*np* 是完整圆中的点数，而不是弧本身的点数。

沿弧路径挤出的弧形状可以形成带状物：

```python
hshape = shapes.arc(angle1=0, angle2=pi/3)
hpath = paths.arc(angle1=pi/2, angle2=pi)
demihemi = extrusion(shape=hshape, path=hpath, color=color.yellow)
```

<img width="150" height="141" src="https://cdn.phycat.cn/localediter/202405181650318.png"/>

## 线条

```python
Lshape = shapes.line(start=(1,0), end=(1,1), np=20)
```

| 属性名     | 类型     | 说明                                 |
|------------|----------|--------------------------------------|
| start      | 列表     | 对于形状，线条起点的 2D 坐标。默认值 [0,0]。对于路径，起点是向量。 |
| end        | 列表     | 对于形状，线条终点的 2D 坐标。默认值 [0,1]。对于路径，终点是向量。 |
| np         | 标量     | 线条中的均匀分布点数                 |

创建从 *start* 到 *end* 的直线，总点数为 n，间隔均匀。如果要在挤出中使用 *twist*，这对路径很有用。

<img width="300" height="140" src="https://cdn.phycat.cn/localediter/202405181650319.png"/>

上图：沿着 30 个点的路径挤出的矩形，每步有 0.1 弧度的扭曲。

## 三角形

<img width="150" height="145" src="https://cdn.phycat.cn/localediter/202405181650320.jpg"/>

```python
trishape = shapes.triangle(length=5, roundness=0.2)
```

| 属性名     | 类型     | 说明                                                                                       |
|------------|----------|--------------------------------------------------------------------------------------------|
| length     | 标量     | 等边三角形的边长                                                                           |
| rotate     | 标量     | 矩形按指定角度（以弧度为单位）逆时针旋转。默认值 0                                         |
| roundness  | 标量     | 将锐角替换为半径为 roundness * length 的圆弧                                               |
| invert     | 布尔值   | 设置 *invert* 为 *True* 并设置 roundness 会产生倒角                                         |
| scale      | 标量     | 将高度和宽度乘以 *scale*。默认值 1                                                         |
| xscale     | 标量     | 仅底边的缩放因子                                                                            |
| yscale     | 标量     | 仅高的缩放因子                                                                              |
| thickness  | 标量     | 仅形状使用。创建一个厚度为 thickness * length 的空心矩形框，即一个带矩形孔的矩形。挤出此形状将形成一个空心对象。默认值 0（无孔）。如果 thickness > 0，则形状将包含两个 2D 点列表：一个用于内部轮廓，一个用于外部轮廓 |
| pos        | 列表     | 仅形状使用。相对于路径的 2D 位置。默认值：矩形的中心放置在路径位置上                         |

<img width="150" height="148" src="https://cdn.phycat.cn/localediter/202405181650321.jpg"/>



## 五边形

<img width="150" height="140" src="https://cdn.phycat.cn/localediter/202405181650322.jpg"/>

```python
pt = shapes.pentagon(length=3)
```

| 属性名     | 类型     | 说明                                                                                       |
|------------|----------|--------------------------------------------------------------------------------------------|
| length     | 标量     | 边长                                                                                        |
| rotate     | 标量     | 按指定角度（以弧度为单位）逆时针旋转。默认值 0                                             |
| roundness  | 标量     | 将锐角替换为半径为 (roundness * length) 的圆弧                                             |
| invert     | 布尔值   | 设置 *invert* 为 *True* 并设置 roundness 会产生倒角                                         |
| scale      | 标量     | 将高度和宽度乘以 *scale*。默认值 1                                                         |
| xscale     | 标量     | 仅宽度的缩放因子                                                                            |
| yscale     | 标量     | 仅高度的缩放因子                                                                            |
| thickness  | 标量     | 仅形状使用。创建一个五边形框。挤出此形状将形成一个空心五边形。默认值 0（无孔）。如果 thickness > 0，则形状将包含两个 2D 点列表：一个用于内部轮廓，一个用于外部轮廓 |
| pos        | 列表     | 仅形状使用。相对于路径的 2D 位置。默认值：五边形的中心放置在路径位置上                         |

## 六边形

<img width="150" height="134" src="https://cdn.phycat.cn/localediter/202405181650323.jpg"/>

```python
hx = shapes.hexagon(length=5)
```

**hexagon** 对象与 **pentagon** 拥有相同的属性。

## 八边形

<img width="150" height="150" src="https://cdn.phycat.cn/localediter/202405181650324.png"/>

```python
oc = shapes.octagon(length=5)
```

**octagon** 形状与 **pentagon** 拥有相同的属性。

## 多边形

<img width="150" height="140" src="https://cdn.phycat.cn/localediter/202405181650325.jpg"/>

```python
poly = shapes.ngon(np=7, length=5)
```

| 属性名     | 类型     | 说明                                     |
|------------|----------|------------------------------------------|
| np         | 标量     | 图形的边数                               |
| radius     | 标量     | n 边形可以嵌入一个具有此半径的圆中。此情况下边长会自动计算 |

其他参数与 **pentagon** 相同。

## 星形

<img width="160" height="154" src="https://cdn.phycat.cn/localediter/202405181650326.jpg"/>

```python
starshape = shapes.star(n=6, radius=3, iradius=1)
```

| 属性名     | 类型     | 说明                                                                                       |
|------------|----------|--------------------------------------------------------------------------------------------|
| n          | 标量     | 星形的“光束”数目。默认值：5                                                                |
| radius     | 标量     | 星形适合的圆的半径。改变 *radius* 仅影响星形的外凸顶点，内凹顶点不变                           |
| iradius    | 标量     | 内半径：经过星形内凸顶点的圆的半径。默认值为 0.5 * radius                                   |
| rotate     | 标量     | 围绕中心旋转                                                                                |
| roundness  | 标量     | 将锐角替换为圆弧                                                                           |
| invert     | 布尔值   | 设置 *invert* 为 *True* 并设置 roundness 会产生倒角                                         |
| scale      | 标量     | 将高度和宽度乘以 *scale*。默认值 1                                                         |
| xscale     | 标量     | 仅宽度的缩放因子                                                                            |
| yscale     | 标量     | 仅高度的缩放因子                                                                            |
| thickness  | 标量     | 仅形状使用。创建一个星形框。挤出此形状将形成一个空心对象。默认值 0（无孔）。如果 thickness > 0，则形状将包含两个 2D 点列表：一个用于内部轮廓，一个用于外部轮廓 |
| pos        | 列表     | 仅形状使用。相对于路径的 2D 位置。默认值：星形的中心放置在路径位置上                         |

## 梯形

<img width="160" height="73" src="https://cdn.phycat.cn/localediter/202405181650327.jpg"/>

```python
tr = shapes.trapezoid(pos=[-2,3], width=5, height=1, top=3)
```

| 属性名     | 类型     | 说明                                |
|------------|----------|-------------------------------------|
| width      | 标量     | 底边的宽度                           |
| height     | 标量     | 从底边到顶边的垂直距离               |
| top        | 标量     | 顶边的长度。默认值为 0.5 * width     |

其他属性请参考 *pentagon*。

## 十字形

<img width="160" height="152" src="https://cdn.phycat.cn/localediter/202405181650328.jpg"/>

```python
st = shapes.cross(width=10, thickness=2)
```

| 属性名     | 类型     | 说明                                                                                       |
|------------|----------|--------------------------------------------------------------------------------------------|
| width      | 标量     | 十字形的宽度。默认值 1                                                                     |
| thickness  | 标量     | 臂的厚度。默认值 0.2。注意，这不会创建空心框架                                                |
| rotate     | 标量     | 按指定角度（以弧度为单位）逆时针旋转。默认值 0                                             |
| scale      | 标量     | 将高度和宽度乘以 *scale*。默认值 1                                                         |
| xscale     | 标量     | 仅宽度的缩放因子                                                                            |
| yscale     | 标量     | 仅高度的缩放因子                                                                            |
| pos        | 列表     | 仅形状使用。相对于路径的 2D 位置。默认值：十字形的中心放置在路径位置上                         |

**paths.cross()** 生成路径，但 *thickness* 属性对于 thickness >= 1 时不会产生可预测的结果。



## 点

此函数仅适用于形状。如果要指定自己的路径，只需将点列表作为参数传递给挤出。

```python
ptshape = shapes.points(pos=[[1,0], [1,1], [-2,3], [1,0]], rotate=pi/4)
```

| 属性名     | 类型     | 说明                                                                                       |
|------------|----------|--------------------------------------------------------------------------------------------|
| pos        | 列表     | 定义多边形边界的点列表。最后一个点必须与第一个点相同。                                         |
| scale      | 标量     | 将高度和宽度乘以 *scale*。默认值 1                                                         |
| rotate     | 标量     | 围绕中心旋转                                                                                |
| roundness  | 标量     | 将锐角替换为圆弧                                                                           |

请注意，*pos* 并不是相对于路径的偏移量，如在其他形状中一样。

## 齿轮

<img width="160" height="151" src="https://cdn.phycat.cn/localediter/202405181650329.jpg"/>

齿轮用于通过改变旋转速度和方向以及相关的扭矩来传递运动。有关齿轮和齿轮术语的详细说明，请参考[齿轮](https://en.wikipedia.org/wiki/Gear)。请务必点击放大解释齿轮命名法的图表。它提到了“渐开线齿轮”，可在[渐开线齿轮](https://en.wikipedia.org/wiki/Involute_gear)中讨论。默认的齿轮形状是“正齿轮”。

齿轮参数定义了齿轮的行为。这些参数必须相互协调以获得定义良好的齿轮。此程序中并未提供所有参数以完全控制齿轮结构。某些参数是通过使用其他参数计算的，因此可能会导致齿轮结构不一致。许多齿轮参数是从半径派生的。用户有责任提供一组一致的参数。

```python
g = shapes.gear()
```

| 属性名     | 类型     | 说明                                                                                       |
|------------|----------|--------------------------------------------------------------------------------------------|
| radius     | 标量     | 从齿轮中心延伸到齿根和齿顶中点。通常，将两个齿轮的中心放置在两个半径之隔通常可以使齿轮正确啮合。默认值 1。|
| scale      | 标量     | 对齿轮应用统一缩放                                                                         |
| pos        | 列表     | 仅形状使用。相对于路径的 2D 位置。默认值：矩形的中心放置在路径位置上                         |
| n          | 整数     | 定义齿轮的齿数。通常，“齿尺寸”和齿数应定义齿轮的周长（或半径），但在此程序中，“齿尺寸”不是控制参数，而是根据齿数和半径计算的。因此，齿数 n 可以任意设置，并且可以得到一些不合理的“齿尺寸”值。用户应适当设置参数以获得合理的齿结构。默认齿数为 20。|
| phi        | 标量     | 耦合齿轮在旋转过程中在齿轮轮廓上施加力。Phi 被称为压力角，这是定义齿轮轮廓以获得更好接触的基本参数之一。同样，“齿尺寸”组件如底部间隙（大致为齿底之间的间隙）和顶部间隙（齿顶的厚度）是使用压力角计算的。默认压力角为 20 度。|
| addendum   | 标量     | “齿深度”定义为齿顶和齿根的总和。齿顶是从半径到齿顶的部分。默认值为 0.08 倍半径。       |
| dedendum   | 标量     | 齿根是从节圆半径到齿深度的部分。默认值为 0.1 倍半径。                                      |
| fradius    | 标量     | 底部圆角半径，定义齿根与齿根之间的圆弧半径。默认值为 0.02 倍半径。                          |
| rotate     | 标量     | 按指定角度（以弧度为单位）逆时针旋转。默认值 0                                             |
| res        | 标量     | 此参数定义绘图网格分辨率，不影响齿轮结构。由于大多数网格点位于圆上或定义齿轮轮廓的曲线上，res 用于控制网格不同部分在不同尺度下的曲率分辨率。默认值为 1.0，增加 res 可以获得更好的分辨率。|

### 内向齿轮

您可以通过将圆形外形与内齿轮形状组合来制作带有内向齿的齿轮：

```python
outer = shapes.circle(radius=1) # 圆盘
inner = shapes.gear(radius=0.8) # 圆盘中的齿轮形状孔
extrusion(path=[vec(0,0,0), vec(0,0,0.2)], shape=[outer, inner])
```

<img width="160" height="151" src="https://cdn.phycat.cn/localediter/202405181650331.jpg"/>

