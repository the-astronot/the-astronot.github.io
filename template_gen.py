#/usr/bin/python3
import os
import sys


def create_post_file(path, file_path):
	text = get_text(path)
	year = input("Year: ")
	month = input("Month: ")
	day = input("Day: ")
	post_name = input("Post_Name: ")
	project = input("Project: ")
	text = text.replace("YYYY",year).replace("MM",month).replace("DD",day)
	text = text.replace("post_name",post_name).replace("project_name", project)
	post_name = "{0}-{1}-{2}-{3}.md".format(year, month, day, post_name)
	f = open(file_path+post_name,"w+")
	f.write(text)
	f.close()


def create_project_file(path, file_path):
	text = get_text(path)
	project_name = input("Project Name: ")
	tags = input("Tags: ")
	tag_list = tags.split(",")
	for tag in tag_list:
		tag = tag.strip(" ")
	tag_text = ""
	for tag in tag_list:
		tag_text += "[{0}]".format(tag)
	text = text.replace("project_name", project_name).replace("project_lname", project_name.lower()).replace("[tag1][tag2]",tag_text)
	proj_name = "{0}.md".format(project_name.lower())
	f = open(file_path+proj_name,"w+")
	f.write(text)
	f.close()


def get_text(path):
	f = open(path, "r")
	text = f.read()
	f.close()
	return text


if __name__ == '__main__':
	assert(len(sys.argv)==2)
	kind = sys.argv[1]
	if kind.lower() == "post":
		create_post_file("templates/post.md", "_posts/")
	elif kind.lower() == "project":
		create_project_file("templates/project.md", "assets/projects/")
	