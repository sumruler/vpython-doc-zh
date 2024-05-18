# 文件和库

<img width="400" height="279" src="https://cdn.phycat.cn/localediter/202405181709921.jpg"/>

以下讨论的选项仅在 Web VPython 中可用。在使用 vpython 包的 Python 中，请使用标准的 Python 文件和导入方法。

## get_library

get_library 导入一个 JavaScript 库。该库可能由导出 Web VPython 程序创建的 JavaScript 代码组成，但有限制。

```python
get_library("https://xyz.org/lib.js")
```

| 参数     | 类型  | 说明        |
|----------|-------|-------------|
| argument | URL   | 库的位置    |

### 限制：

- 库必须是 JavaScript（不是 VPython）。
  
- 如果从 Web VPython 导出，库不能包含 **rate**、**waitfor**、**sleep**、**pause**、**capture**、**input**、**winput**、**get_library** 或 **read_local_file**。
  
- 在导出的代码中，向量操作必须写成：
  
    - A+B -> A.add(B)
      
    - A-B -> A.sub(B)
      
    - k\*A -> A.multiply(k)
      
    - A/k -> A.divide(k)
    
- 库必须驻留在网站上（而不是本地文件中）。
  

## read_local_file

read_local_file 允许用户从对话框中选择一个文件。

在 Web 浏览器中，由于安全问题，限制了本地文件的读写，因为任意网站不应该能够读取或修改本地计算机上的文件。然而，可以创建一个文件对话框，允许用户读取本地文件。

read_local_file 在画布标题或标题区域创建一个按钮，显示“选择文件”。点击按钮会弹出一个文件对话框，允许用户选择一个文件。完成后，对话框和按钮消失，并返回文件信息。

```python
myfile = read_local_file(scene.title_anchor)
```

| 参数     | 类型             | 说明                               |
|----------|------------------|------------------------------------|
| argument | 画布属性         | 按钮的放置位置。默认值：scene.caption_anchor |

变量 `myfile` 现在将具有以下属性：

- `myfile.name` 文件名
  
- `myfile.size` 文件大小（字节）
  
- `myfile.type` 文件类型
  
- `myfile.date` 创建日期（如果有）
  
- `myfile.text` 文件内容
  

## download

同样由于安全问题，浏览器只能写入用户的下载文件夹。

```python
download(filename, data)
```

| 参数            | 类型     | 说明                             |
|-----------------|----------|----------------------------------|
| firstargument   | 字符串   | 要写入的文件名                    |
| secondargument  | 字符串   | 要写入的数据，格式化为字符串      |

请注意，可以使用 Python f 字符串将数据格式化为字符串。

使用相同文件名重复执行时，会在文件名中添加 (1)、(2) 等。
