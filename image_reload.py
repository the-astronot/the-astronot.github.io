#!usr/bin/python3
import os
from PIL import Image
import random

image_types = ["webp","gif"]
small_images = ["webp"]

def run():
	left = []
	right = []
	left_sizes = []
	right_sizes = []
	left_len = 0.0
	right_len = 0.0
	images = os.listdir("assets/images")
	random.shuffle(images) # Change the image order up each time
	for image in images:
		p_idx = image.rfind(".")
		if image[p_idx+1:] in image_types:
			full = "assets/images/{}".format(image)
			im = Image.open(full)
			x = im.width
			y = im.height
			size = y/float(x) # Normalized Height
			if right_len > 0 and left_len > 0:
				print("{0} -> {2:.02f} :{1} -> {3:.02f}".format(left[-1],right[-1],left_len, right_len))
			print("{} = {} : ({},{})".format(full,size,x,y))
			if (right_len+size < left_len):
				right_len += size
				right.append(full)
				right_sizes.append([x,y])
			else:
				left_len += size
				left.append(full)
				left_sizes.append([x,y])
			im.close()
	data = ""
	column_names = ["left","right"]
	columns = [left,right]
	sizes = [left_sizes, right_sizes]
	for i in range(2):
		data += "{}:\n\n".format(column_names[i])
		for j in range(len(columns[i])):
			image = columns[i][j]
			p_idx = image.rfind(".")
			if image[p_idx+1:] in small_images:
				data += "- link: {}\n  small_link: {}\n  depth: {}\n  width: {}\n  height: {}\n\n".format(image,image.replace("/images","/small_images"),j,sizes[i][j][0],sizes[i][j][1])
			else:
				data += "- link: {}\n  small_link: {}\n  depth: {}\n  width: {}\n  height: {}\n\n".format(image,image,j,sizes[i][j][0],sizes[i][j][1])

	f = open("_data/images.yml","w+")
	f.write(data)
	f.close()


if __name__ == "__main__":
	run()