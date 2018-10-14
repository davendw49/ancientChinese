from docx2html import convert

f = open('sample.html', 'w') 
html = convert('sample.docx')
print >> f,html

f.close()
print "done"