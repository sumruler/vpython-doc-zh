# 环形

## 图示
<img src="https://cdn.phycat.cn/localediter/202405171702923.jpg" width="200px" style="display: inline;margin:20px"><img src="https://cdn.phycat.cn/localediter/202405171702925.png" width="200px" style="display: inline;margin:20px">

## 参数说明

```python
ring(pos=vec(0, 0, 0), axis=vec(1, 0, 0), radius=2, thickness=0.2, color=color.cyan)
```

| 参数名       | 类型     | 说明                                         |
|--------------|----------|----------------------------------------------|
| pos          | 向量     | 环形的中心位置，默认为 &lt;0,0,0&gt;               |
| axis         | 向量     | 垂直于环形平面的向量。默认为 &lt;1,0,0&gt;         |
| color        | 向量     | 默认为 *color.white*                         |
| radius       | 标量     | 环形的半径。默认为1            |
| thickness    | 标量     | 环形截面的半径的一半。默认为 *0.1*radius            |
| size         | 向量     | 包围对象的盒子大小。默认为 &lt;0.2, 2, 2&gt;         |

环形的 *pos* 位于其中心。环形的 *axis* 仅决定环形的方向；忽略 *axis* 的大小。默认的环形大小为 &lt;0.2, 2, 2&gt;。外半径为 *radius+thickness*，内半径为 *radius-thickness*。

设置 *radius* 或 *thickness* 将覆盖 *size*。要使环形椭圆，可以通过不同的高度和宽度指定 *size*。

## 不常用属性

```python
ring(opacity=0.5, shininess=0.2, texture=textures.wood, make_trail=True, canvas=mycanvas, emissive=False)
```

| 参数名     | 类型                   | 说明                                                 |
|------------|------------------------|------------------------------------------------------|
| opacity    | 标量                   | 默认为1.0；范围0-1                                   |
| shininess  | 标量                   | 默认为0.6；范围0-1                                   |
| emissive   | 布尔值                 | 默认为False。如果为True，则对象发光，失去所有阴影效果 |
| texture    | 类元素 或 路径         | 默认为空                                              |
| visible    | 布尔值                 | 如果为False，对象不显示。默认为True                  |
| canvas     | 对象                   | 默认为 `scene`                                       |
| make_trail | 布尔值                 | 如果为True，对象移动时会留下轨迹                      |
| up         | 向量                   | 与轴线垂直的向量                                     |
| group      | 对象                   | 此对象所属的组                                       |
