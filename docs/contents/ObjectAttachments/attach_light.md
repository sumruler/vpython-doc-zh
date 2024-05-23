# attach_light()

<img src="https://cdn.phycat.cn/localediter/202405181729012.png" alt="attach_light" width="400"/>

*attach_light* 创建一个 *local_light* 并将其绑定到一个移动对象。

[可以在这里查看示例](https://www.glowscript.org/#/user/GlowScriptDemos/folder/Examples/program/BoxLightTest)。

```python
attach_light(ball, offset=vec(3, 0, 1), color=color.green)
```

| 属性名        | 类型     | 说明                                                                                           |
|---------------|----------|------------------------------------------------------------------------------------------------|
| firstargument | 对象     | 要附加 *local_light* 的对象（上例中的 *ball*）。                                               |
| offset        | 向量     | 光源相对于移动对象中心的偏移量。默认值为 <0,0,0>。                                             |
| color         | 向量     | 默认值为附加光源的对象的颜色。                                                                 |

可以将多个光源附加到一个对象上。

偏移量可以看作是连接移动对象和 local_light 的一个看不见的刚性杆，因此如果对象旋转，local_light 将绕着移动对象旋转。

如果为球体指定零偏移量，你会发现 local_light 不会影响球体外表面的照明；当然，它会影响球体外部的物体的照明。在这种情况下，你可能希望指定 `ball.emissive = True`，这会使球体看起来在发光。
