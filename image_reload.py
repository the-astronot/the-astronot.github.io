#!usr/bin/python3
import os
import sys
from PIL import Image


def run():
	left = []
	right = []
	left_len = 0.0
	right_len = 0.0
	images = os.listdir("assets/images")
	for image in images:
		full = "assets/images/{}".format(image)
		im = Image.open(full)
		x,y = im.size
		size = y/float(x)
		if (right_len < left_len):
			right_len += size
			right.append(full)
		else:
			left_len += size
			left.append(full)
	# Swap
	if right_len < left_len:
		temp = right
		right = left
		left = temp
	data = "left:\n\n"
	for x in left:
		data += "- link: {}\n\n".format(x)
	data += "right:\n\n"
	for x in right:
		data += "- link: {}\n\n".format(x)

	f = open("_data/images.yml","w+")
	f.write(data)
	f.close()


if __name__ == "__main__":
	run()