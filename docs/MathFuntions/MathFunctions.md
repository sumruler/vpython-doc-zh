# 数学函数

在安装的 Python 的 **vpython** 包中，导入了 Python 的 *math* 模块（`from math import *`）。

在 Web VPython 中，提供以下数学函数：

```python
abs(x)
sqrt(x)
sin(x)
cos(x)
tan(x)
asin(x)    # 反正弦
acos(x)    # 反余弦
atan(x)    # 反正切；范围 -pi/2 到 pi/2
atan2(y,x) # 反正切；范围 -pi 到 pi
sqrt(x)    # 平方根
exp(x)     # e 的 x 次方
log(x)     # 自然对数，以 e 为底
log10(x)   # 以 10 为底的对数
pow(x,y)   # x 的 y 次方，替代 x**y 的写法
pi         # 3.14159....
ceil(x)    # 向上取整
floor(x)   # 向下取整
sign(x)    # x > 0 时为 +1，x < 0 时为 -1，x == 0 时为 0
round(x,N) # 四舍五入到最近的整数；可选参数 N 指定小数位数
max(x,y,z) # x, y, z 中的最大值
min(x,y,z) # x, y, z 中的最小值
random()   # 0 到 1 之间的伪随机数
factorial(x)  # x! = x*(x-1)*(x-2)...(1)
combin(x,y)   # 组合数 x!/(y!*(x-y)!)
max(a,b,c,...) # 多个值中的最大值
min(a,b,c,...) # 多个值中的最小值
radians(theta) # 将角度 theta 转换为弧度
degrees(phi)  # 将弧度 phi 转换为角度
clock()    # 从 Python 的 time 模块中导入
msclock()  # 以毫秒为单位的时间
arange()  # numpy 的 arange() 函数
```

许多这些函数基于 JavaScript 的 Math 函数。

尽管一般来说无法在 Web VPython 程序中导入 Python 模块，但 *random* 模块是个例外，它已被转译为 JavaScript 库。在 Web VPython 中使用以下语法：

```python
import random as rr
from random import randint, uniform
```
