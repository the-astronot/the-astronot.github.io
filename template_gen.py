#/usr/bin/python3
import os
import sys


def create_post_file(path, file_path):
	text = get_text(path)
	year = input("Year: ")
	month = int(input("Month: "))
	month = "{:02d}".format(month)
	day = int(input("Day: "))
	day = "{:02d}".format(day)
	post_name = input("Post_Name: ")
	project = input("Project: ").lower()
	text = text.replace("YYYY",year).replace("MM",month).replace("DD",day)
	text = text.replace("MONTH",months[month])
	text = text.replace("post_name",post_name).replace("project_name", project)
	post_name = "{0}-{1}-{2}-{3}.md".format(year, month, day, post_name)
	# Dealing with prev and next
	prev_year = 0
	prev_month = 0
	prev_day = 0
	posts = os.listdir(file_path)
	prev_post = ""
	for post in posts:
		if int(post[0:4]) >= prev_year and int(post[5:7]) >= prev_month and int(post[8:10]) >= prev_day:
			prev_year = int(post[0:4])
			prev_month = int(post[5:7])
			prev_day = int(post[8:10])
			prev_post = post
	# Replaces PREV in this file
	prev_post_name = prev_post.replace(".md","")
	text = text.replace("PREV_POST",prev_post_name)
	# Replaces NEXT in old file
	prev_f = open(file_path+prev_post,"r+")
	prev_text = prev_f.read()
	prev_f.seek(0)
	post_name_no_ext = post_name.replace(".md","")
	prev_text = prev_text.replace("/all_caught_up","_posts/"+post_name_no_ext)
	#print(prev_text)
	prev_f.write(prev_text)
	prev_f.truncate()
	prev_f.close()
	# Writes current file
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


months = {"01":"January","02":"February","03":"March","04":"April",
					"05":"May","06":"June","07":"July","08":"August",
					"09":"September","10":"October","11":"November","12":"December"}


if __name__ == '__main__':
	assert(len(sys.argv)==2)
	kind = sys.argv[1]
	if kind.lower() == "post":
		create_post_file("templates/post.md", "_posts/")
	elif kind.lower() == "project":
		create_project_file("templates/project.md", "assets/projects/")
	