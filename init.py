#!/usr/bin/python
# -*- coding: UTF-8 -*-
import MySQLdb
import shutil
import os
import sys

reload(sys);
sys.setdefaultencoding("utf8")

if os.path.exists('image'):
	shutil.rmtree('image')
if os.path.exists('word'):
	shutil.rmtree('word')
os.mkdir('image')

# 打开数据库连接
db = MySQLdb.connect("localhost", "root", "kellydc", "ancientChinese", charset='utf8' )
	
# 使用cursor()方法获取操作游标 
cursor = db.cursor()

# SQL 删除语句
sql = "DELETE FROM sample WHERE img_id > 0"
try:
   # 执行SQL语句
   cursor.execute(sql)
   # 提交修改
   db.commit()
except:
   # 发生错误时回滚
   db.rollback()

# 关闭连接
db.close()