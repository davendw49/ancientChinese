import os.path
from shutil import copyfile

from docx2html import convert

def handle_image(image_id, relationship_dict):
    image_path = relationship_dict[image_id]
    # Now do something to the image. Let's move it somewhere.
    _, filename = os.path.split(image_path)
    destination_path = os.path.join('/tmp', filename)
    copyfile(image_path, destination_path)

    # Return the `src` attribute to be used in the img tag
    return 'file://%s' % destination

html = convert('sample.docx', image_handler=handle_image)
print "ok"