# -*- coding: utf-8 -*-
from bs4 import BeautifulSoup
import re
import codecs
import MySQLdb
import sys

reload(sys);
sys.setdefaultencoding("utf8")

file = codecs.open("/Users/daven/Github/ancientChinese/sample.html", "r", "utf-8")
f = open('sample_see.txt', 'w+') 
collection = []
pos =0 
pp = 0
for line in file:
	newline = line.strip()
	if len(newline)<90 :
		if newline[0]!='7' and newline[0]!='<':
			pos+=1
			print >> f,newline
	else:
		pp+=1
		print >> f,newline

print >>f,pos,pp
f.close()