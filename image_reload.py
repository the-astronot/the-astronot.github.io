#!usr/bin/python3
import os
from PIL import Image
import cv2


def run():
	left = []
	right = []
	left_len = 0.0
	right_len = 0.0
	images = os.listdir("assets/images")
	for image in images:
		full = "assets/images/{}".format(image)
		im = Image.open(full)
		#im.load()
		#im.show()
		#okay = input("Correct Orientation?: ")
		#x,y = im.size
		x = im.width
		y = im.height
		size = y/float(x) # Normalized Height
		if right_len > 0 and left_len > 0:
			print("{0} -> {2:.02f} :{1} -> {3:.02f}".format(left[-1],right[-1],left_len, right_len))
		print("{} = {} : ({},{})".format(full,size,x,y))
		if (right_len+size < left_len):
			right_len += size
			right.append(full)
		else:
			left_len += size
			left.append(full)
		im.close()
	print(left_len,right_len)
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