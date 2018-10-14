# -*- coding: utf-8 -*-
import codecs
import MySQLdb
import parse_html
import sys

reload(sys);
sys.setdefaultencoding("utf8")

f = open('sample_img.html', 'w+') 

def query(chinese, table_name):
	# 连接
	db = MySQLdb.connect("localhost", "root", "kellydc", "ancientChinese", charset='utf8' )
	# 获取操作游标
	cursor=db.cursor()
	# 使用execute方法执行SQL语句

	result_set = []

	n = cursor.execute("select * from %s where chinese='%s'" % (table_name, chinese))
	for info in cursor.fetchall():
		result_set.append(info)

	return result_set


print len(parse_html.chinese_set)
ids = list(set(parse_html.chinese_set))
print len(ids)


for charI in ids:
	print >> f,"<p>"
	print >> f,charI
	print >> f,"</p>"
	result = query(charI, "sample")
	print >> f,"<p>"
	for rs in result:
		print >> f,rs[2],rs[3],","
	print >> f,"</p>"

f.close()
print "done"