#!/usr/bin/python
# -*- coding: UTF-8 -*-
import os.path
from shutil import copyfile
from docx2html import convert
import sys

reload(sys);
sys.setdefaultencoding("utf8")


def handle_image(image_id, relationship_dict):
    image_path = relationship_dict[image_id]
    # Now do something to the image. Let's move it somewhere.
    _, filename = os.path.split(image_path)
    destination_path = os.path.join(os.getcwd()+'/image/', filename)
    copyfile(image_path, destination_path)

    # Return the `src` attribute to be used in the img tag
    return 'file://%s' % destination_path

f = open('sample.html', 'w') 
html = convert(sys.argv[1], image_handler=handle_image)
print >> f,html

f.close()
print "done"
