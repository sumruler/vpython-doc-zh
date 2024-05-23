# 删除对象

在 VPython 中，使用 Python 的 `del` 函数无法删除 VPython 对象。

要隐藏一个 VPython 对象，请将其设置为不可见：

```python
ball.visible = False
```

这将使对象在场景中不再可见，但它依然存在于内存中。如果需要再次显示该对象，只需将 `visible` 属性设置回 `True` 即可。
