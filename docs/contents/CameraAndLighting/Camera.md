# 摄像机

每个画布，包括默认画布 *scene*，都包含一个摄像机。默认情况下，摄像机指向场景中心，并放大或缩小以将所有对象都放入其视野范围内。默认情况下，用户可以放大或缩小，围绕场景旋转摄像机，以及上下或左右平移。

## 用户对摄像机的控制

| 属性           | 默认值 | 说明                                    |
|----------------|--------|-----------------------------------------|
| `scene.userzoom` | True   | 用户可以放大或缩小场景。                 |
| `scene.userspin` | True   | 用户可以旋转摄像机。                     |
| `scene.userpan`  | True   | 用户可以横向或纵向平移场景。             |
| `scene.autoscale` | True  | 摄像机会自动缩放以保持所有对象在视野内。 |

## 程序对视图的控制

<img src="https://cdn.phycat.cn/localediter/202405171956325.png" width="500" height="559" style="display: inline; margin:20px"/>

上图描述了下面所讨论的 *scene* 的属性，并指示了它们之间的关系。

| 属性           | 默认值    | 说明                                                                  |
|----------------|-----------|-----------------------------------------------------------------------|
| `scene.center` | <0,0,0>   | 摄像机持续注视的位置。                                                |
| `scene.forward` | <0,0,-1> | 指向摄像机所指方向的向量。如果更改了 *scene.forward*，摄像机将移动到一个位置，从该位置 *scene.forward* 指向 *scene.center*。 |
| `scene.range`  | N/A       | 从 `scene.center` 到画布边缘的距离。对于矩形画布，*range* 是两种可能距离中的较短距离（对于宽度大于高度的画布，为 *y* 方向）。 |
| `scene.fov`    | N/A       | 摄像机的视野，以弧度为单位。如果 *scene.autoscale* 为 *True*，则自动更改。 |
| `scene.up`     | <0,1,0>   | 垂直于 *scene.forward* 的向量。更改 *scene.up* 会围绕 z 轴旋转摄像机。 |

## 直接操作摄像机

<img src="https://cdn.phycat.cn/localediter/202405171956327.png" width="660" height="240" style="display: inline; margin:20px"/>

如果，例如，您正在对场景进行飞越：

| 属性                  | 说明                                                                                   |
|-----------------------|----------------------------------------------------------------------------------------|
| `scene.camera.pos`    | 摄像机的位置。如果 *scene.autoscale* 为 *True*，则会自动更改。更改 *scene.camera.pos* 会将 *scene.center* 更改为 *scene.camera.pos + scene.camera.axis*。 |
| `scene.camera.axis`   | 摄像机当前指向的方向。`scene.camera.axis = scene.center - scene.camera.pos`。更改 *scene.camera.axis* 会更改 *scene.forward* 和 *scene.center*。注意：可能会将摄像机指向一个看不到任何东西的方向。 |
| `scene.camera.rotate` | 旋转摄像机：`scene.camera.rotate(angle=myangle, axis=myaxis, origin=myorigin)`。 |
| `scene.camera.follow` | 跟随一个对象：`scene.camera.follow(myobject)` 将场景中心重置为 *myobject* 的当前位置。要关闭跟随，请设置：`scene.camera.follow(None)`。 |
