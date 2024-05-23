# 点

## 图示
<img src="https://cdn.phycat.cn/localediter/202405171654052.jpg" width="200px" style="margin:20px">

## 参数说明

```python
points(pos=[vec(-1, 3, 2), vec(2, 0, -1)], color=color.yellow)
```

| 参数名       | 类型            | 说明                                         |
|--------------|-----------------|----------------------------------------------|
| pos          | 向量列表         | 点的位置列表。默认为空列表（没有点）。               |
| color        | 向量            | 默认为 *color.white*                         |
| radius       | 标量            | 一个 *simple_sphere* 的半径。默认为 2.5 像素。            |
| size_units   | 字符串          | 点大小的单位。默认为 'pixels'。可选 'world'。          |

## 不常用属性

```python
points(opacity=0.5, shininess=0.2, canvas=mycanvas, emissive=False)
```

| 参数名     | 类型       | 说明                                                 |
|------------|------------|------------------------------------------------------|
| opacity    | 标量       | 默认为1.0；范围0-1                                   |
| shininess  | 标量       | 默认为0.6；范围0-1                                   |
| emissive   | 布尔值     | 默认为False。如果为True，则对象发光，失去所有阴影效果 |
| visible    | 布尔值     | 如果为False，对象不显示。默认为True                  |
| canvas     | 对象       | 默认为 `scene`                                       |

*curve* 的大部分选项都可以与 *points* 一起使用。

