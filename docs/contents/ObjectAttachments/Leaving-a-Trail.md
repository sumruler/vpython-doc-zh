# 留下轨迹

<img width="660" height="229" src="https://cdn.phycat.cn/localediter/202405181726550.png"/>

## 显示轨迹 `make_trail`

为对象设置轨迹。每次渲染场景时，新的位置 *ball.pos* 会被添加到曲线上，从而在移动的对象后留下轨迹。这适用于除曲线和点对象外的所有对象，包括复合对象。

```python
ball = sphere(make_trail=True, trail_type="points", trail_radius=0.2, interval=10, retain=1000)
```

| 属性名        | 类型     | 说明                                                                                           |
|---------------|----------|------------------------------------------------------------------------------------------------|
| make_trail    | 布尔值   | 如果为 *True*，移动的对象将留下轨迹。默认值为 False。                                             |
| trail_type    | 字符串   | 如果为 “points”，轨迹将由离散点组成。否则为连续曲线。                                              |
| trail_radius  | 标量     | 曲线或点的半径。曲线的默认值为 0（细曲线）；点的默认值为 0.2\*ball.radius 或 0.1\*size.y（在创建对象时）。 |
| interval      | 标量     | 移动的次数间隔后才添加一个点。*interval=10* 表示每移动第 10 次时在轨迹中添加一个点。                   |
| retain        | 标量     | 在轨迹中保留的点数。默认值为保留所有点。最早的点会首先被删除。                                    |
| pps           | 标量     | 对于曲线，*pps=15* 表示每秒大约添加 15 个点。                                                     |

在对象移动时，如果设置 `ball.make_trail=False`，则不再向轨迹添加点，直到再次设置 `ball.make_trail=True`，此时新的轨迹将在球的当前位置开始。

如果在创建球时指定了间隔（大于零），并且没有指定位置，那么在稍后给球分配位置时，轨迹中的第一个点将出现在该位置。如果在创建球时指定了位置，并且 make_trail 为 True，则轨迹中的第一个点是指定的位置。如果未指定间隔，则曲线从第一次渲染场景时的位置开始。

注意：如果轨迹点之间的距离较大，请不要使用大于 `rate(60)` 的速率。VPython 尝试每秒渲染 3D 场景 60 次。每次渲染场景时，它都会查看所有指定 “make_trail=True” 的对象列表，如果对象的 pos 属性发生变化，渲染函数将延长轨迹。如果指定 `rate(300)`，并且每次通过循环时更新对象的位置，则只有对象的每第 5 个位置会被添加到轨迹中，因为场景每秒仅渲染约 60 次。相反，如果指定 `rate(10)` 并且每次通过循环时更新对象的位置，则轨迹每秒将被延长 10 次。

## 清除轨迹 `clear_trail()` 

```python
ball.clear_trail()
```
清除现有轨迹中的所有点，然后再添加更多点。要停止添加点，请将 `ball.make_trail` 设置为 False。
