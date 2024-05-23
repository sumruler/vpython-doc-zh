# Vpyton 简介
Vpython是一个用于创建3D图形和动画的Python库，非常适合用于教学和科学计算视觉化。它允许用户通过简单的Python代码快速构建3D模型，实现数据的直观表示。
通过简单的几行代码就可以实现生动直观的3D场景。
<iframe src="/demo/1.html" width="320" height="320"></iframe>

```python
improm * from vpython


side = 4.0
thk = 0.3
s2 = 2*side - thk
s3 = 2*side + thk
wallR = box (pos=vector( side, 0, 0), size=vector(thk, s2, s3),  color = color.red)
wallL = box (pos=vector(-side, 0, 0), size=vector(thk, s2, s3),  color = color.red)
wallB = box (pos=vector(0, -side, 0), size=vector(s3, thk, s3),  color = color.blue)
wallT = box (pos=vector(0,  side, 0), size=vector(s3, thk, s3),  color = color.blue)
wallBK = box(pos=vector(0, 0, -side), size=vector(s2, s2, thk), color = color.gray(0.7))

ball = sphere (color = color.green, radius = 0.4, make_trail=True, retain=200)
ball.mass = 1.0
ball.p = vector (-0.15, -0.23, +0.27)

side = side - thk*0.5 - ball.radius

dt = 0.3
def move():
    rate(200, move)
    ball.pos = ball.pos + (ball.p/ball.mass)*dt
    if not (side > ball.pos.x > -side):
        ball.p.x = -ball.p.x
    if not (side > ball.pos.y > -side):
        ball.p.y = -ball.p.y
    if not (side > ball.pos.z > -side):
        ball.p.z = -ball.p.z

move()

```
