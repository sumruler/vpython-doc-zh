# 灯光

<img src="https://cdn.phycat.cn/localediter/202405181851341.png" alt="Lighting Example" width="400"/>

上图显示了一个被绿色远程光（右上角）和红色局部光（左下角）照亮的白色球体。

在 VPython 场景中，为了可见，对象必须受到照明。在 VPython 场景中可能有三种类型的照明：

- 远程光 - 远处的点光源（如太阳）
- 局部光 - 靠近场景中对象的光源
- 环境光 - 均匀的漫射光，均匀照亮所有对象

在更改场景中的照明时，必须小心，因为如果场景中任何地方的总照明强度超过1，结果将是不可预测的。

## distant_light

```python
distant_light(direction=vec(0, -1, 0), color=color.orange)
```

| 属性名    | 类型   | 说明                      |
|-----------|--------|---------------------------|
| direction | 向量   | 指定光的方向的向量，相对于原点 |
| color     | 向量   | 发出光的颜色。            |

默认情况下，VPython 场景中自动存在两个远程光：

- 一个远程光的方向为 `< 0.22, 0.44, 0.88 >`，是稍暗的白色：`color.white*0.8`
- 第二个远程光的方向为 `< -0.88, -0.22, -0.44 >`，是更暗的白色：`color.white*0.3`

## local_light

```python
local_light(pos=vec(-3, 1, -2), color=color.yellow)
```

| 属性名 | 类型   | 说明           |
|--------|--------|----------------|
| pos    | 向量   | 局部光的位置。 |
| color  | 向量   | 发出光的颜色。 |

如果在光的位置放置一个发光对象，局部光看起来就像一盏灯。

## scene.ambient

默认情况下，环境光非常暗，颜色为 `color.white*0.2`。您可以将 `scene.ambient` 设置为任何颜色，但请注意，如果总光强度大于1，结果可能是不可预测的。

## scene.lights

`scene.lights` 是场景中的光源列表。要查看光的属性：

```python
for i in range(0, len(scene.lights)):
    LL = scene.lights[i]
    print(LL.pos, LL.direction, LL.color)
```

对于远程光，`pos` 将未定义，对于局部光，`direction` 将未定义。

要从场景中删除所有光源，请将 `scene.lights` 设置为空列表：

```python
scene.lights = []
```

## 光源的颜色

如果创建的光不是白色，您看到的可能会非常不同。绿色光可以使白色球看起来呈绿色，红色球看起来非常暗（因为红色球吸收绿色光）。
