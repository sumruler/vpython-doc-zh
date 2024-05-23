# 金字塔

## 图示
<img src="https://cdn.phycat.cn/localediter/202405171656154.png" width="200px" style="margin:20px">

## 参数说明

```python
pyramid(pos=vec(0, 0, 0), axis=vec(1, 0, 0), color=color.green)
```

| 参数名       | 类型     | 说明                                         |
|--------------|----------|----------------------------------------------|
| pos          | 向量     | 中心位置。默认值为 &lt;0,0,0&gt;               |
| axis         | 向量     | 从底部到顶部的延伸方向。默认值为 &lt;1,0,0&gt;         |
| color        | 向量     | 默认为 *color.white*                         |
| length       | 标量     | *axis* 的长度。默认按默认设置沿 x 轴创建。            |
| height       | 标量     | 默认为底部的 y 维度。                         |
| width        | 标量     | 默认为底部的 z 维度。                         |
| size         | 向量     | 长度、高度、宽度的另一种表示。默认为 &lt;1,1,1&gt;          |

## 不常用属性

```python
pyramid(opacity=0.5, shininess=0.2, texture=textures.wood, make_trail=True, canvas=mycanvas, emissive=False)
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
