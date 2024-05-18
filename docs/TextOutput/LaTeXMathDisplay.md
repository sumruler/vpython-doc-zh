# LaTeX 数学显示

<img width="300" height="45" src="https://cdn.phycat.cn/localediter/202405181736567.png"/>

LaTeX 可用于 Jupyter notebook 中的 vpython 模块用户。

在 Web VPython 中，LaTeX 可以与 [MathJax](https://www.mathjax.org) 一起使用，在画布的标题或说明字段中显示数学公式。MathJax 要求：

- 所有 LaTeX 反斜杠必须替换为双反斜杠。
  
- 表达式必须用 `\\(` 和 `\\)` 而不是美元符号括起来。

```python
box()
scene.caption = "Final kinetic energy = \\( \\dfrac {1} {2}mv_i^{2}+\\int _{i}^{f}\\vec{F}\\cdot d \\vec{r} \\)"
scene.title = "\\(\\dfrac {5} {7} \\)"
MathJax.Hub.Queue(["Typeset", MathJax.Hub])
```

要仅排版特定元素：

```python
scene.title = "\\(\\dfrac {3y} {4x} \\)"
MathJax.Hub.Queue(["Typeset", MathJax.Hub, scene.title])
```
