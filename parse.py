# -*- coding: utf-8 -*-
from bs4 import BeautifulSoup
import re
import codecs

soup = BeautifulSoup(open('/home/daven/Github/ancientChinese/test.html'), features="html.parser")
soup.prettify('utf-8')

file = codecs.open("/home/daven/Github/ancientChinese/testsoup.html", "w")

print >> file, soup

file = codecs.open("/home/daven/Github/ancientChinese/testsoup.html", "r", "utf-8")

collection = []
sum=0
sum1=0
for line in file:
	tmp = re.split(r'\s+', line.encode('utf-8'))
	# print tmp
	if len(tmp)>2:
		
		if tmp[0]=='':
			sum+=1
			tmp.pop(0)
		else:
			print tmp[0]


		if tmp[len(tmp)-1]=='':
			sum1+=1
			tmp.pop(len(tmp)-1)
		else:
			print tmp[len(tmp)-1]

		collection.append(tmp)
	# print line


# print len(collection)
# print sum
# print sum1
for l in collection:
	print l
