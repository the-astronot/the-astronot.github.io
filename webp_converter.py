"""
@author: Jormungandr1105
@desc: Converting images to webp
@created: 05/26/2022
"""
import subprocess as s
import os.path as path
import os


base = path.join(path.dirname(path.abspath(__file__)),"assets")
endings = ["jpg","jpeg","png","tiff"]


def convert(folder,filename):
	file = path.join(folder,filename)
	p_index = file.rfind(".")
	new_file = file[:p_index]+".webp"
	#print(new_file)
	cmd = "cwebp -q 75 {0} -o {1}".format(file, new_file)
	rm = "rm {0}".format(file)
	s.run(cmd, shell=True)
	s.run(rm, shell=True)


def findAll():
	check_directory(base)


def check_directory(curr_dir):
	for root, dirs, files in os.walk(curr_dir):
		for dir in dirs:
			check_directory(path.join(curr_dir,dir))
		for file in files:
			p_index = file.find(".")
			if file[p_index+1:].lower() in endings:
				convert(root,file)


if __name__ == '__main__':
	findAll()
