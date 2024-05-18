# 圆锥

## 图示
<img src="https://cdn.phycat.cn/localediter/202405171208893.jpg" width="150px" style="display: inline;margin:20px"><img src="https://cdn.phycat.cn/localediter/202405171208894.png" width="250px" style="display: inline;margin:20px">

## 常用属性

```python
cone(pos=vec(5, 2, 0), axis=vec(3, 0, 0), radius=1, color=color.cyan)
```

| 属性名       | 类型     | 说明                                         |
|--------------|----------|----------------------------------------------|
| pos          | 向量     | 圆锥底部的位置，默认值 &lt;0,0,0&gt;               |
| axis         | 向量     | 从底部延伸到尖端，默认值 &lt;1,0,0&gt;         |
| color        | 向量     | 默认为 *color.white*                         |
| length       | 标量     | 圆锥的长度。轴的大小。默认为1            |
| radius       | 标量     | 圆锥底部的半径。默认为1            |
| size         | 向量     | 包围圆锥的箱子的尺寸。长度和半径的替代方案。允许椭圆形的底部。默认为 &lt;1,2,2&gt; |


如果未设置 `size`，则圆锥的底部将是一个圆形。通过设置 `size`，你可以调整底部的形状为椭圆形。

## 不常用属性

```python
cone(opacity=0.5, shininess=0.2, texture=textures.wood, make_trail=True, canvas=mycanvas, emissive=False)
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

