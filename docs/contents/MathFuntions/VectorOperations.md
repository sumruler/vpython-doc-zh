# 向量操作

向量对象具有数学和科学中 3D 向量的属性。

`r = vector(x,y,z)` 或 `r=vec(x,y,z)` 生成 3D 向量 < x, y, z >。


## 向量加法和减法

```python
a = vector(1,2,3)
b = vector(10,20,30)
print(a+b)    # 输出 < 11, 22, 33 >
```

## 标量乘法

```python
a = vector(1,2,3)
c = 2*a
print(c)   # 输出 < 2, 4, 6 >
```

## 向量的模

`mag` 可以作为函数或属性调用：

```python
a = vector(1,2,3)
b = vector(10,20,30)
d = mag(a)
print(d)    # 输出 3.74166
e = b.mag
print(e)    # 输出 37.4166
```

## 单位向量

计算单位向量的函数有两个名称：hat() 和 norm()。两者都可以作为函数或属性调用：

```python
a = vector(1,2,3)
b = vector(10,20,30)
f = hat(a)
print(f)  # 输出 < 0.267261, 0.534522, 0.801784 >
g = norm(a)
print(g)  # 输出 < 0.267261, 0.534522, 0.801784 >

h = a.hat
i = b.norm
```

为了方便，`hat( vec(0,0,0) ) = vec(0, 0, 0)` 以避免运行时错误。

## 点积

点积和叉积都可以作为函数或属性调用：

```python
a1 = vector(3,1,0)
b1 = vector(0,2,0)
j = dot(a1,b1)
print(j)   # 输出 2
k = cross(a1,b1)
print(k)   # 输出 < 0, 0, 6 >

m = a1.dot(b1)
n = a1.cross(b1)
```

## 向量间的角度

diff_angle() 函数返回两个向量之间的角度（以弧度为单位）：

```python
a1 = vector(3,1,0)
b1 = vector(0,2,0)
p = diff_angle(a1,b1)
print(p)  # 输出 1.24905

q = a1.diff_angle(b1)
```

## 投影

为方便起见，proj() 函数计算一个向量在另一个向量上的投影：

```python
A = vector(3,1,0)
B = vector(0,2,0)
C = proj(A,B)
print(C)   # 输出 < 0, 1, 0 >
```

注意 `proj(A,B) = dot( A, hat(B) ) * hat(B)`

comp() 函数计算 A 在 B 上的标量投影：

```python
A = vector(3,1,0)
B = vector(0,2,0)
C = comp(A,B)
print(C)   # 输出 1.
```

注意 `comp(A,B) = dot( A, hat(B) )`

## 随机向量

`vector.random()` 生成一个分量在 -1 到 +1 范围内的随机向量。

## 旋转向量

```python
myvec2 = rotate(myvec1, angle=a, axis=vector(x,y,z))
```

| 参数            | 类型     | 说明                                    |
|-----------------|----------|-----------------------------------------|
| firstargument   | 向量     | 要旋转的向量（上例中的 *myvec1*）。     |
| angle           | 标量     | 旋转角度（以弧度为单位）。               |
| axis            | 向量     | 旋转轴。默认值 < 0, 0, 1 >。            |

