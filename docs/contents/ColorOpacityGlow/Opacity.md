# 不透明度

一个不透明度为0.4的蓝色球放在一个红色盒子前面。

`opacity` 是一个参数，其范围是0-1。一个具有 `opacity=0` 的对象是完全透明的；一个具有 `opacity=1` 的对象是完全不透明的。曲线和螺旋线对象始终是完全不透明的，并且没有不透明度属性。

请注意，如果你将一个或多个对象设为透明，抗锯齿功能将被关闭，并且对象的边缘会变得锯齿状。这个限制是由于当前的VPython图形引擎在WebGL中的实现方式。