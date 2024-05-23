# 纹理

<img width="200" height="200" src="https://cdn.phycat.cn/localediter/202405181738995.jpg"/>

将纹理应用于 3D 对象涉及将平面 2D 图像映射到 3D 表面。没有纹理的话，很难看出一个球体是否在其轴上旋转。纹理和凹凸贴图还可以帮助感知深度。

*texture* 是大多数 VPython 对象的属性。上面的图像是通过以下语句生成的：

```python
mybox = box(texture=textures.stucco)
```

## 内置纹理

内置纹理包括花岗岩、砾石、金属、岩石、石头和木材。有关完整的 VPython 内置纹理集，请参见示例程序 [Textures](https://www.glowscript.org/#/user/GlowScriptDemos/folder/Examples/program/Textures-VPython)。

## 创建纹理

用作纹理的图像的宽度和高度（以像素为单位）应为 2 的幂。如果不是，则图像会被拉伸到下一个较大的 2 的幂大小。

## 纹理对齐

纹理可以在放置之前旋转，并应用于对象的选定侧面。纹理的详细信息可以作为字典指定：

```python
bb = box(texture={
    'file': textures.stucco,
    'bumpmap': bumpmaps.stucco,
    'place': ['right', 'sides'],
    'flipx': True,
    'flipy': True,
    'turn': -3
})
```

| 属性名        | 类型     | 说明                                           |
|---------------|----------|------------------------------------------------|
| texture       | 字典     | 在这种情况下，指定多个选项的字典。                |

选项包括：

- flipx 或 flipy：如果为 True，纹理将沿指定轴反射（类似于池塘中的倒影）。
  
- turn：要执行的 90 度旋转次数。如果为负数，旋转方向为顺时针。
  
- place：选项包括 'left'、'right'、'sides'、'ends'、'all'。仅适用于平面侧面。
  

## 颜色

如果为纹理对象指定了除 color.white 以外的颜色，则该颜色将与纹理颜色混合。如果仅部分对象具有纹理，则不会发生混合。

## 纹理加载时间

从指定文件加载纹理可能需要一些时间。如果重要的是在显示场景之前等待所有纹理加载完成，可以使用：

```python
scene.waitfor("textures")
```

一种可能的使用顺序是：

```python
scene.visible = False  # 不显示任何内容
# 在此处创建对象
scene.waitfor("textures")
scene.visible = True   # 现在显示所有内容
```

要查看特定对象的纹理是否已加载，可以检查 **myobject.ready**，如果纹理已加载，则为 True。

在纹理加载完成之前，不会显示带纹理的对象。如果不使用 `scene.waitfor("textures")` 进行等待，可能会根据各种纹理加载的时间看到对象以随机顺序变为可见。

要删除纹理：`myobject.texture = None`

## 凹凸贴图

凹凸贴图在表面上进行小的变形，以呈现出非平滑表面的外观。有几种类型的凹凸贴图，但 VPython 当前支持的凹凸贴图类型是“法线贴图”，其中表面的法线（垂直线）会影响表面的照明，在整个表面上变化，从而使表面看起来不再平滑。当你移动表面或光源时，会看到增强的 3D 效果。可以使用专门为此目的设计的计算机工具从图像中生成凹凸贴图，并且在 VPython 中提供了一些凹凸贴图。例如，bumpmaps.stucco 是一种法线贴图，可增强 textures.stucco 的 3D 外观。以下语句将内置凹凸贴图添加到内置纹理：

```python
box(texture={'file': textures.stucco, 'bumpmap': bumpmaps.stucco})
```

示例程序 [Bumpmaps](https://www.glowscript.org/#/user/GlowScriptDemos/folder/Examples/program/Bumpmaps-VPython) 让你可以移动光源并旋转对象，以便查看添加凹凸贴图的效果。

当前可用的凹凸贴图包括 bumpmaps.gravel（用于 textures.gravel）、bumpmaps.rock（用于 textures.rock）、bumpmaps.stones（用于 textures.stones）、bumpmaps.stucco（用于 textures.stucco）和 bumpmaps.wood_old（用于 textures.wood_old）。

## 访问纹理和凹凸贴图

### Web VPython

在 **WebVPython** 中，纹理必须从启用了 CORS（“跨源资源共享”）的网站加载，因为浏览器对访问本地文件有限制。

例如：

```python
texture="https://s3.amazonaws.com/glowscript/textures/flower_texture.jpg"
```
将获取仙人掌花的图像。

有一个启用了 CORS 的网站，[https://imgur.com](https://imgur.com/)，其中有大量可自由使用的图像库。当你看到想要的图像时，右键点击图像（Mac 上使用 Ctrl-点击），选择“复制图像地址”，然后将地址粘贴到你的纹理规范中，用引号括起来。你可以通过点击“New post”将图像上传到 i.imgur.com。显然，你需要注册才能访问你的 CORS 启用图像。

如果你将程序导出为 JavaScript 并嵌入到 iframe 中，可以从同一网站读取纹理。

### vpython 模块

在使用 vpython 模块的 Python 中，可以从本地计算机加载纹理。纹理必须与程序文件在同一目录中，或其子目录中。可以使用以下方式指定纹理：

```python
texture='images/mytexture.jpg'
```

要使纹理在本地计算机上广泛可用，请将它们放在 `../Lib/site-packages/vpython/vpython_data` 目录中。

对于 Jupyter notebook，请使用 `/nbextensions/vpython_data`。
