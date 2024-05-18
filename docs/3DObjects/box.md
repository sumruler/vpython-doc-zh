# 盒子

## 图示
<img src="https://cdn.phycat.cn/localediter/202405171631241.jpg" width="150px" style="display: inline;margin:20px"><img src="https://cdn.phycat.cn/localediter/202405171631243.png" width="250px" style="display: inline;margin:20px">

## 常用属性

```python
box(pos=vec(0, 0, 0), length=3, height=2, width=1, color=color.cyan)
```

| 属性名       | 类型     | 说明                                         |
|--------------|----------|----------------------------------------------|
| pos          | 向量     | 中心位置，默认值 &lt;0,0,0&gt;               |
| axis         | 向量     | 从左到右延伸。默认值 &lt;1,0,0&gt;         |
| color        | 向量     | 默认为 *color.white*                         |
| length       | 标量     | 盒子的长度。默认为1            |
| height       | 标量     | 盒子的高度。默认为1            |
| width        | 标量     | 盒子的宽度。默认为1            |
| size         | 向量     | 长度、宽度和高度的一个向量。长度、高度和宽度的替代方案。 |

## 不常用属性

```python
box(opacity=0.5, shininess=0.2, texture=textures.wood, make_trail=True, canvas=mycanvas, emissive=False)
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

