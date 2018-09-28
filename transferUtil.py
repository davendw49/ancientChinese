from docx2html import convert

f = open('/Users/daven/Github/ancientChinese/test.html', 'w') 
html = convert('/Users/daven/Github/ancientChinese/test.docx')
print >> f,html

f.close()
