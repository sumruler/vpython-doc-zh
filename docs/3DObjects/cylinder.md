# 圆柱体

## 图示
<img src="https://cdn.phycat.cn/localediter/202405171646115.png" width="200px" style="display: inline;margin:20px"><img src="https://cdn.phycat.cn/localediter/202405171646116.png" width="200px" style="display: inline;margin:20px">

## 常用属性

```python
cylinder(pos=vec(0, 0, 0), axis=vec(3, 0, 0), color=color.red)
```

| 属性名       | 类型     | 说明                                         |
|--------------|----------|----------------------------------------------|
| pos          | 向量     | 左端位置，默认值 &lt;0,0,0&gt;               |
| axis         | 向量     | 从 *pos* 延伸到末端。默认值 &lt;1,0,0&gt;         |
| color        | 向量     | 默认为 *color.white*                         |
| radius       | 标量     | 圆柱体的半径。默认为1            |
| length       | 标量     | 轴线的长度。设置长度会确定轴线的大小。默认为1            |
| size         | 向量     | 包围圆柱体的箱子的长度、高度、宽度。默认为 &lt;1,1,1&gt;            |

通过适当设置 `size`，可以使圆柱体的横截面成椭圆形而非圆形。

## 不常用属性

```python
cylinder(opacity=0.5, shininess=0.2, texture=textures.wood, make_trail=True, canvas=mycanvas, emissive=False)
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

