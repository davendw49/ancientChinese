# -*- coding: utf-8 -*-
from bs4 import BeautifulSoup
import re
import codecs
import MySQLdb
import sys

reload(sys);
sys.setdefaultencoding("utf8")

chinese_set = []
img_set = []
img_h_set = []
img_w_set = []
book_set = []
situation = 0

def insert(img_id, chinese, book_num, img_addr, table_name, img_h, img_w):
	db = MySQLdb.connect("localhost", "root", "kellydc", "ancientChinese", charset='utf8' )
	# 使用cursor()方法获取操作游标 
	cursor = db.cursor()
	# SQL 插入语句
	sql = "INSERT INTO %s(img_id, chinese, book_num, img_addr, img_h, img_w) VALUES ('%s','%s','%s','%s','%s','%s')" % (table_name, img_id, chinese, book_num, img_addr, img_h, img_w)
	print sql
	try:
	# 执行sql语句
		cursor.execute(sql)
	# 提交到数据库执行
		db.commit()
	except Exception as e:
	# 发生错误时回滚
		# print "something wrong"
		raise e
		db.rollback()
	# 关闭数据库连接
	db.close()


def bs4module(file):
	soup = BeautifulSoup(open(file))
	# test bs4
	# print soup.prettify()
	# print soup.img['src']
	# print soup.p
	# print soup.p.string
	# for child in soup.body.children:
	# 	print child
	# print type(soup.stripped_strings)
	book_num=''
	for string in soup.stripped_strings:
		if (repr(string).count(":")==0):
			chinese_set.append(string[len(string)-1])
			book_set.append(book_num)
			# print pos,(len(repr(string)),repr(string).count(":")) 
		elif (repr(string).count(":")==1):
			book_num = string
		
	
	for item in soup.find_all('img'):
		img_set.append(item['src'].replace("data/word/media/","image/"))
		img_h_set.append(item['height'])
		img_w_set.append(item['width'])
	
	print len(chinese_set),len(img_set),len(book_set)

bs4module('sample.html') 
if (len(chinese_set)==len(img_set) and len(img_set)==len(book_set)):
	print "pass 1st step"
	for i in range(0,len(chinese_set)):
 		insert(i+1, chinese_set[i], book_set[i], img_set[i], "sample", img_h_set[i], img_w_set[i])

else:
	if len(chinese_set)<len(img_set):
		situation=1
	else:
		situation=2
	print "error"