# attach_arrow()

箭头通常用于可视化向量，例如移动对象的速度或作用在对象上的力。*attach_arrow* 允许在对象移动时自动更新箭头的位置、方向和大小。

<img src="https://cdn.phycat.cn/localediter/202405181727393.png" alt="attach_arrow" width="400"/>

一个表示速度的箭头被附加到一个弹跳球上。

注意事项：

- 要可视化的量必须是移动对象的向量属性。
  
- 必须在对象移动时由代码更新该量的值。
  
- 为保持箭头的截面恒定，请设置 *shaftwidth*。

```python
attach_arrow(ball, "velocity", color=color.green, scale=10, shaftwidth=ball.radius/3)
```

| 属性名        | 类型     | 说明                                                                                           |
|---------------|----------|------------------------------------------------------------------------------------------------|
| firstargument | 对象     | 要附加箭头的对象（上例中的 *ball*）。                                                            |
| secondargument| 字符串   | 要由箭头表示的向量属性的名称（上例中的 “velocity”）。                                            |
| scale         | 标量     | 用于调整箭头轴的大小的属性的倍数。                                                               |
| color         | 向量     | 默认值为附加箭头的对象的颜色。                                                                  |
| shaftwidth    | 标量     | 箭头尾部的截面。                                                                                 |

## 开启和关闭 *attach_arrow*

开始和停止显示箭头：

```python
ball = sphere(color=color.yellow, velocity=vec(0,0,0))
myarrow = attach_arrow(ball, "velocity", scale=2.0)
...
myarrow.stop()  # 停止箭头显示
...
myarrow.start() # 重新开始箭头显示
```
