# 螺旋线

## 图示
<img src="https://cdn.phycat.cn/localediter/202405171651359.jpg" width="200px" style="margin:20px">

## 参数说明

```python
helix(pos=vec(0, 0, 0), axis=vec(3, 0, 0), color=color.red)
```

| 参数名       | 类型     | 说明                                         |
|--------------|----------|----------------------------------------------|
| pos          | 向量     | 左端位置，默认值 &lt;0,0,0&gt;               |
| axis         | 向量     | 从 *pos* 延伸到另一端。默认值 &lt;1,0,0&gt;         |
| color        | 向量     | 默认为 *color.white*                         |
| radius       | 标量     | 螺旋线的半径。默认为1            |
| thickness    | 标量     | 曲线横截面的直径。默认为 *radius/20*            |
| length       | 标量     | 轴线的长度。设置长度会确定轴线的大小。默认为1            |
| coils        | 标量     | 螺旋线的匝数。默认为5            |
| size         | 向量     | 包围螺旋线的箱子的长度、高度、宽度。默认为 &lt;1,1,1&gt;            |
| ccw          | 布尔值   | 如果 *ccw* 为 *True*，螺旋线逆时针旋转（默认）。            |

通过适当设置 `size`，可以使螺旋线的横截面成椭圆形而非圆形。

由于螺旋线是由曲线构成的，因此它具有与曲线相同的限制：螺旋线不能被复合，不能是透明的，也不能具有纹理。

## 不常用属性

```python
helix(canvas=mycanvas, make_trail=True, emissive=False)
```

| 参数名     | 类型       | 说明                                                 |
|------------|------------|------------------------------------------------------|
| shininess  | 标量       | 默认为0.6；范围0-1                                   |
| emissive   | 布尔值     | 默认为False。如果为True，则对象发光，失去所有阴影效果 |
| visible    | 布尔值     | 如果为False，对象不显示。默认为True                  |
| canvas     | 对象       | 默认为 `scene`                                       |
| make_trail | 布尔值     | 如果为True，对象移动时会留下轨迹                      |
| up         | 向量       | 与轴线垂直的向量                                     |

