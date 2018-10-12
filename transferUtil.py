from docx2html import convert

f = open('/Users/daven/Github/ancientChinese/sample.html', 'w') 
html = convert('/Users/daven/Github/ancientChinese/sample.docx')
print >> f,html

f.close()
print "done"