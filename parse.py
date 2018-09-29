# -*- coding: utf-8 -*-
from bs4 import BeautifulSoup
import re
import codecs
import MySQLdb


def insert(img_id, chinese, book_num, img_addr):
	# 打开数据库连接
	db = MySQLdb.connect("localhost", "root", "kellydc", "ancientChinese", charset='utf8' )
	# 使用cursor()方法获取操作游标 
	cursor = db.cursor()
	# SQL 插入语句
	sql = "INSERT INTO sample(img_id, chinese, book_num, img_addr) VALUES ('%s','%s','%s','%s')" % (img_id, chinese, book_num, img_addr)
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


def insert_book(this_id, this_book):
	# 打开数据库连接
	db = MySQLdb.connect("localhost", "root", "kellydc", "ancientChinese", charset='utf8' )
	# 使用cursor()方法获取操作游标 
	cursor = db.cursor()
	# SQL 插入语句
	sql = "INSERT INTO book(this_id, this_book) VALUES ('%s','%s')" % (this_id, this_book)
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



soup = BeautifulSoup(open('/Users/daven/Github/ancientChinese/test.html'), features="html.parser")
soup.prettify('utf-8')

file = codecs.open("/Users/daven/Github/ancientChinese/testsoup.html", "w")

print >> file, soup

file = codecs.open("/Users/daven/Github/ancientChinese/testsoup.html", "r", "utf-8")

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


		if tmp[0]!='</p>':
			collection.append(tmp)
	# print line


# print len(collection)
# print sum
# print sum1
img_id = 0
chinese = ''
book_num = '-'
img_addr = ''

this_id = 0
this_book = ''

for l in collection[::-1]:
	# print l
	if len(l)==4 and len(l[2])>62:
		img_addr = re.findall('\"([^\"]*)\"', l[2])[0]
		img_id = int(re.findall('\d+',img_addr)[0])
		this_id = img_id
	else:
		if img_id != 0:
			chinese = l[len(l)-1][-3:]
			print chinese
			try:
				insert(img_id, chinese, book_num, img_addr)
			except Exception as e:
				raise e
		if l[0][0]=='7':
			this_book = l[0]
			# print this_id, this_book
			insert_book(this_id, this_book)











