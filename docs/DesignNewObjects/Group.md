# 组

## 图示
<img src="https://cdn.phycat.cn/localediter/202405181520460.png" width="250px" style="display: inline;margin:20px">

## 注意

这是 *group* 的一个beta版本。点、曲线、螺旋线和标签目前无法使用 *group*。*group* 的 *size* 属性存在，但没有实际意义。

组是对象的集合。移动或旋转组会影响组中的所有对象。但是，属于组的对象保留其身份，可以单独旋转、调整大小、着色等（相比之下，用于创建 [compound](https://www.glowscript.org/docs/VPythonDocs/compound.html) 的对象一旦被合并就会失去其个体身份。Compound 在计算上比 group 更加廉价）。

例如，使用一个组可以创建一个汽车，整个组移动时车轮会转动，就像这个 [示例程序](https://www.glowscript.org/#/user/GlowScriptDemos/folder/Examples/program/Car) 中所示。

### 创建一个组：

1. 首先创建组
2. 然后通过将组的名称指定为每个对象的 *group* 属性来向组添加对象。**组中对象的位置是相对于组的位置的。**

```python
mygroup = group(pos=vec(1,-1,3) )
```

### 参数：

| 参数名      | 类型      | 说明                                                         |
|-------------|-----------|--------------------------------------------------------------|
| pos         | 向量      | 组的位置。默认值为 &lt;0,0,0&gt;。这不一定是对象集合的中心，也不一定在一端。            |
| axis        | 向量      | 默认值为 &lt;1,0,0&gt;。修改 axis 会改变组中所有对象的方向。                               |
| color       | 向量      | 修改组的颜色会改变组中每个对象的颜色；组成员对象的原始颜色会丢失。最初，组的颜色设置为白色，尽管组成员对象保留其自己的颜色。将任何值赋给 *color* 会永久性地改变组中所有对象的颜色。     |
| visible     | 布尔值    | 如果为False，则对象不显示。默认值为True。                                                      |
| canvas      | 对象      | 默认为 `scene`。                                            |
| make_trail  | 布尔值    | 如果为True，则对象移动时会留下轨迹。                                                         |
| up          | 向量      | 与 axis 垂直的向量。                                       |

```python
mygroup = group(pos=vec(0,0,0))
p1 = pyramid(group=mygroup, pos=vec(1,0,0), color=color.red)
p2 = pyramid(group=mygroup, pos=vec(1,2,0), color=color.yellow)
scene.pause()
mygroup.pos=vec(-3,0,0)
scene.pause()
mygroup.rotate(angle=pi/2, axis=vec(0,0,1))
```

## 组的方法

### mygroup.group_to_world(*myvec*)

将相对于组位置的位置转换为世界坐标中的位置。

### mygroup.world_to_group(*myvec*)

将世界坐标中的位置转换为相对于组位置的位置。

### mygroup.rotate(*axis=vec(0, 0, 1)*, *angle=pi / 2*)

与3D对象的旋转相同。

<style>
table {
  width: 100%;
}

th:nth-child(2), td:nth-child(2) {
  width: 100px; /* 调整第二列的宽度 */
}
</style>