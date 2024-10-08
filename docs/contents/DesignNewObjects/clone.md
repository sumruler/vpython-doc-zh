# 克隆

![_images/clone.png](https://cdn.phycat.cn/localediter/202405181708861.png)

创建对象后，可以使用 **clone** 进行复制。新对象的所有属性都与原对象完全相同。*除了三角形和四边形之外*，所有对象都可以被克隆。*Clone* 实际上是对象的方法，因此语法如下：

```python
mycopy = myobject.clone(pos=vec(0,2,0), canvas=scene2)
```

| 属性名     | 类型     | 说明                                                                                       |
|------------|----------|--------------------------------------------------------------------------------------------|
| pos        | 向量     | 新对象的位置                                                                                |
| canvas     | 对象     | **不适用于复合或挤出对象。** 新对象应属于的画布。默认值为 *scene* 或当前画布                |

## 其他参数

新对象具有其类的所有常用属性：颜色、大小等。
