"""
@author: the-astronot
@desc: Converting images to webp
@created: 05/26/2022
"""
import subprocess as s
import os.path as path
import os
from PIL import Image

base = path.join(path.dirname(path.abspath(__file__)),"assets")
endings = ["jpg","jpeg","png","tiff","tif"]


def convert(folder,filename):
	file = path.join(folder,filename)
	p_index = file.rfind(".")
	new_file = file[:p_index]+".webp"
	cmd = "cwebp -q 75 {0} -o {1}".format(file, new_file)
	rm = "rm {0}".format(file)
	s.run(cmd, shell=True)
	s.run(rm, shell=True)


def shrink(folder, filename):
	file = path.join(folder,filename)
	print("Shrinking file: {}".format(file))
	small_file = path.join(base,path.join("small_images",filename))
	image = Image.open(file)
	width = image.width
	reduced_width = min(width,550)
	cmd = "cwebp -resize {0} 0 {1} -o {2}".format(reduced_width,file,small_file)
	s.run(cmd,shell=True)


def findAll():
	check_directory(base)


def check_directory(curr_dir):
	for root, dirs, files in os.walk(curr_dir):
		for dir in dirs:
			check_directory(path.join(curr_dir,dir))
		for file in files:
			p_index = file.find(".")
			if file[p_index+1:].lower() in endings:
				convert(root,file) # Convert to webp
	if curr_dir == path.join(base,"images"):
		for root, _, files in os.walk(curr_dir):
			for file in files:
				p_index = file.find(".")
				if file[p_index+1:] == "webp":
					if not path.exists(path.join(base,path.join("small_images",file))):
						shrink(root,file) # Add small webp


if __name__ == '__main__':
	findAll()
