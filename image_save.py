#!/usr/bin/python
# -*- coding: UTF-8 -*-
import os.path
from shutil import copyfile
from docx2html import convert
import docx
import re
import codecs
import MySQLdb
import sys
import os
import shutil
import zipfile
import sys

reload(sys);
sys.setdefaultencoding("utf8")

f = open('sample.html', 'w') 
html = convert(sys.argv[1])

print >> f,html

f.close()
print "50%"
shutil.copyfile(sys.argv[1],'undergo.ZIP')
f=zipfile.ZipFile('undergo.zip','r')  #进行解压

for file in f.namelist():
    f.extract(file)
#file=open(word\embeddings\oleObject1.bin','rb').read() #进入文件路径，读取二进制文件。
#for f in file:
#    print f

shutil.move('word/media/','image/')

print "100%"