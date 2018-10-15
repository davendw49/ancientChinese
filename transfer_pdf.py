# -*- coding: utf-8 -*-
import pdfkit
import sys

reload(sys);
sys.setdefaultencoding("utf8")
options = {
    'page-size': 'Letter',
    'margin-top': '0.75in',
    'margin-right': '0.75in',
    'margin-bottom': '0.75in',
    'margin-left': '0.75in',
    'encoding': "UTF-8",
    'custom-header' : [
        ('Accept-Encoding', 'gzip')
    ],
    'no-outline': None
}


pdfkit.from_file(sys.argv[1],sys.argv[2], options = options)