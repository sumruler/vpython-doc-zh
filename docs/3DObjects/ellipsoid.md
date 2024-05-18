# 椭球体

椭球体是一个形变的球体。一个长形椭球体看起来像一支雪茄，一个扁椭球体看起来像一个煎饼。

## 图示
<img src="https://cdn.phycat.cn/localediter/202405171650301.jpg" width="200px" style="display: inline;margin:20px">

## 常用属性

```python
ellipsoid(pos=vec(0, 0, 0), length=2, height=1, width=3, color=color.cyan)
```

| 属性名       | 类型     | 说明                                         |
|--------------|----------|----------------------------------------------|
| pos          | 向量     | 中心位置，默认值 &lt;0,0,0&gt;               |
| color        | 向量     | 默认为 *color.white*                         |
| length       | 标量     | *axis* 的大小。默认为 x 轴方向。            |
| height       | 标量     | 默认为 y 维度。            |
| width        | 标量     | 默认为 z 维度。            |
| size         | 向量     | 长度、高度、宽度的一个向量。长度、高度和宽度的替代方案。默认为 &lt;1,1,1&gt;（一个球体）。 |
| axis         | 向量     | 默认为 &lt;1,0,0&gt;            |

## 不常用属性

```python
ellipsoid(opacity=0.5, shininess=0.2, texture=textures.wood, make_trail=True, canvas=mycanvas, emissive=False)
```

| 属性名     | 类型                   | 说明                                                 |
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

