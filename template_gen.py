#/usr/bin/python3
import os
import sys

if __name__ == '__main__':
	assert(len(sys.argv)==3)
	kind = sys.argv[1]
	new_file = sys.argv[2]
	if kind.lower() == "post":
		create_file("assets/templates/post.md", "_posts/"+new_file)
	else if kind.lower() == "project":
		create_file("assets/templates/project.md", "assets/projects/"+new_file)
	