# ancientChinese

这是一个将中国古文字图版，通过文件的转码、重组和分类，从而将非结构化的古汉语文章里面的字和当今可存储的文字相联系的起来的一组工具包，下面介绍所需要的系统环境和相关的操作要求和流程。

## Environment

> 本工具包需要安装python2.7的基础编译环境。

* docx2html `-` 0.2.3
* beautifulsoup4 `-` 4.6.3
* MySQL-python `-` 1.2.5
* pdfkit `-` 0.6.1
* docx `-` 0.2.4
* 其余的软件包需要在实际的安装中具体观察

### docx2html
    pip install docx2html
[docx2html](https://pypi.org/project/docx2html/)的具体文档可以在这里查看。

### beautifulsoup4
	pip install beautifulsoup4
[beautifulsoup4](https://pypi.org/project/beautifulsoup4/)的具体安装方式和使用方式可以在[这里](http://www.bkjia.com/Pythonjc/992499.html)寻找方式。

### MySQL-python
	pip install MySQL-python
[MySQL-python](https://pypi.org/project/MySQL-python/)的具体的文档可以在这里查看

### pdfkit
[pdfkit](https://pypi.org/project/pdfkit/)的具体的安装方式和使用方式可以在[这里](https://www.cnblogs.com/xingzhui/p/7887212.html)查看。

1. 下载wkhtmltopdf安装包，并且安装到电脑上，在系统Path变量中添加wkhtmltopdf的bin路径，以便于pdfkit的调用。[下载地址](https://wkhtmltopdf.org/downloads.html)须根据自己的系统版本进行下载安装。
2. 在系统环境中安装pdfkit库，`pip install pdfkit`
3. 在pycharm中安装whtmltopdf库。这个和第一步中的安装包是两个东西，请区别开来。

### docx
	pip install python-docx
[docx](https://pypi.org/project/python-docx/)的具体的安装方式和使用方式可以在[这里](https://blog.csdn.net/sinat_30711195/article/details/80725435?utm_source=blogxgwz0)查看。


## 代码使用说明

> 本工具包旨在能够最大化解决图版样式的种类冲突，从而验证代码的鲁棒性。

* 第一步. 通过`init.py`脚本将数据库置空。
* 第二步. 将`.docx`文件通过`image_save.py`脚本，将非结构化图版数据进行从新编写，生成`.html`的结构化文本信息，方便于数据提取等操作。**在这个脚本中需要填入需要转化的`.docx`文件的名称**
* 第三步. 通过`parse_html.py`脚本，将图片数据和文本数据一一纳入数据库（此举为的是能够通过这个制作一个全局的古汉语文字数据库），可以通过临时变量暂替，此处本脚本相当于是一个工具，用来方便最后输出用，**不需要独立运行！**。
* 第四步. 通过`docx_output.py`脚本将所有的汉子按需输出，从而获得研究者所需要的题版集合，目前提供了输出html和输出word的两个方法，如果输出是html之后可以通过`transfer_pdf.py`进行转化。**在这个脚本中需要填入需要生成的`.docx`文件的名称**

## 具体的演示

此处的演示系统是Mac OS具体的Windows环境下的配置和实际操作还没有确定。

### 使用init.py
	python init.py
### 使用image_save.py
	python image_save.py file/relational/path.docx
### 使用docx_output.py
* 若需要输出网页：
```
python docx_output.py html file/relational/path.html
```
* 若需要输出word文档
```
python docx_output.py docx file/relational/path.docx
```

### 使用transfer_pdf.py
若需要得到pdf有如下两个方法
* 上一步获得的是`.docx`，则直接word打开，另存为`.pdf`即可
* 上一步获得的是`.html`，则
```
python transfer_pdf.py file/relational/path.html file/relational/path.pdf
```
*html文件的位置和命名须与上一步相同*


## 结果展示
### 一开始的样子
![at first](http://dclegend.xyz/download/ac/first.png)
### 后来的样子
![at last](http://dclegend.xyz/download/ac/second.png)

## 写在最后的话
部分代码如果出现`bug`需联系作者协商提供解决方案。
在运行的过程中一旦不注意输入错误，需要重头开始运行。
还有待进一步的开发，请大家多多包涵……Y(^_^)Y

## Windows情况
对于湖南大学岳麓书院的那两位老哥：

* 第一步肯定是要进入到代码目录的：
  1. 老丁: `win+R` -> `cd ancientChinese` 即可；
  2. 学弟: `win+X` -> `选择Windows PowerShell` -> `cd c:/ancientChinese/` 即可。
* 如果需要更新：在该目录下输入`git pull`
* 文档的注意事项：
  1. 文段不得以文字结尾，如：
  ![cn](http://dclegend.xyz/download/ac/last_is_cn.png)
  2. 不可以连续出现两张图片，如：
  ![image](http://dclegend.xyz/download/ac/double_image.png)
