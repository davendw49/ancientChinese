# -*- coding: utf-8 -*-
from sgmllib import SGMLParser

class GetIdList(SGMLParser):
    def reset(self):
        self.IDlist = []
        self.flag = False
        self.getdata = False
        self.verbatim = 0
        SGMLParser.reset(self)
        
    def start_div(self, attrs):
        if self.flag == True:
            self.verbatim +=1 #进入子层div了，层数加1
            return
        for k,v in attrs:#遍历div的所有属性以及其值
            if k == 'src':
                self.flag = True
                return
 
    def end_div(self):#遇到</div>
        if self.verbatim == 0:
            self.flag = False
        if self.flag == True:#退出子层div了，层数减1
            self.verbatim -=1
 
    def start_p(self, attrs):
        if self.flag == False:
            return
        self.getdata = True
        
    def end_p(self):#遇到</p>
        if self.getdata:
            self.getdata = False
 
    def handle_data(self, text):#处理文本
        if self.getdata:
            self.IDlist.append(text)
            
    def printID(self):
        for i in self.IDlist:
            print i
 

f = open('/Users/daven/Github/ancientChinese/test.html', 'r')
##import urllib2
##import datetime
##vrg = (datetime.date(2012,2,19) - datetime.date.today()).days
##strUrl = 'http://www.nod32id.org/nod32id/%d.html'%(200+vrg)
##req = urllib2.Request(strUrl)#通过网络获取网页
##response = urllib2.urlopen(req)
##the_page = response.read()
try:    
    with f:        
        the_page = f.read()
except Exception as e:
    print e
    print the_page.split()

lister = GetIdList()
lister.feed(the_page)
lister.printID()
f.close()