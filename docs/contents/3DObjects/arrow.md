# 箭头

## 图示
<img src="https://cdn.phycat.cn/localediter/202405171612676.jpg" width="150px" style="display: inline;margin:20px"><img src="https://cdn.phycat.cn/localediter/202405171612677.png" width="250px" style="display: inline;margin:20px">

## 常用属性

```python
arrow(pos=vec(0, 0, 0), axis=vec(1, 0, 0), color=color.orange)
```


| 属性名       | 类型     | 说明                                         |
|--------------|----------|----------------------------------------------|
| pos          | 向量     | 尾部的位置，默认值 &lt;0,0,0&gt;               |
| axis         | 向量     | 从尾部延伸到尖端，默认值 &lt;1,0,0&gt;         |
| color        | 向量     | 默认为 *color.white*                         |
| round        | 布尔值   | 使轴和头部圆形而非方形，默认为 False         |
| shaftwidth   | 标量     | 尾部的宽度，默认为箭头长度的0.1倍            |
| headwidth    | 标量     | 默认为2倍shaftwidth                          |
| headlength   | 标量     | 默认为3倍shaftwidth                          |



如果没有设置 `shaftwidth`，较短的箭头在所有维度上会比较长的箭头小（如下图第一张所示）。通过设置 `shaftwidth`，你可以确保所有箭头都有相同的横截面面积（如下图第二张所示）。<img src="https://cdn.phycat.cn/localediter/202405170940785.png" width="250px" style="display: inline;margin:20px"><img src="https://cdn.phycat.cn/localediter/202405170940071.png" width="250px" style="display: inline;margin:20px"> 

请注意，如果你确实设置了 `shaftwidth`，极短的箭头的 `headlength` 可能需要调整。



## 不常用属性

```python
arrow(opacity=0.5, shininess=0.2, texture=textures.wood, make_trail=True, canvas=mycanvas, emissive=False)
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
