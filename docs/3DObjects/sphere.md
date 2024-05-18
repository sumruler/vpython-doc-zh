# 球体

## 图示
<img src="https://cdn.phycat.cn/localediter/202405171703690.jpg" width="200px" style="margin:20px">

## 参数说明

```python
sphere(pos=vec(0, 0, 0), radius=2, color=color.cyan)
```

| 参数名       | 类型     | 说明                                         |
|--------------|----------|----------------------------------------------|
| pos          | 向量     | 球体中心的位置。默认值为 &lt;0,0,0&gt;               |
| radius       | 标量     | 球体的半径。默认为1            |
| color        | 向量     | 默认为 *color.white*                         |
| size         | 向量     | 球体周围的盒子尺寸。默认为 &lt;2,2,2&gt;             |
| axis         | 向量     | 默认为 &lt;1,0,0&gt;                          |

通过为球体指定不对称的大小，可以将其制作成椭球体。

## 不常用属性

```python
sphere(opacity=0.5, shininess=0.2, texture=textures.wood, make_trail=True, canvas=mycanvas, emissive=False)
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

尽管球体具有 `axis` 和 `up` 属性，但除非应用了纹理，否则这些属性通常不太有用。

## simple_sphere

为了看起来光滑，球体由大量三角形构成。有时速度比极致美观更重要。simple_sphere 对象的三角形比普通球体少得多。它可以像普通球体一样使用，但大量的 simple_sphere 对象的显示速度比同等数量的普通球体快得多。为了速度，simple_sphere 对象用于 points 对象和使用 points 的轨迹。
