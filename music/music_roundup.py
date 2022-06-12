#/usr/bin/python3
"""
@author: Jormungandr1105
@desc: Rounds up the music from the posts from the past year
"""
import os
import datetime


class Song:
	def __init__(self,name,band,link,date):
		self.name = name
		self.band = band
		self.link = link
		self.date = date


def get_music(year, month):
	music = []
	posts = os.listdir("../_posts")
	posts.sort()
	to_remove = []
	for post in posts:
		if post[0:4] != str(year) or post[5:7] != "{:02d}".format(month):
			to_remove.append(post)
	for post in to_remove:
		posts.remove(post)
	for post in posts:
		try:
			f = open("../_posts/{}".format(post),"r")
			post_text = f.read()
			f.close()
		except FileNotFoundError:
			print("{} not found...".format(post))
			post_text = ""
		finally:
			if post_text.__contains__("Song of the Day"):
				start_index = post_text.find("Song of the Day")
				post_text = post_text[start_index:-1]
				start_index = post_text.find("[")
				post_text = post_text[start_index:-1]
				end_index = post_text.find("\n")
				post_text = post_text[0:end_index]
				end_name = post_text.find("**]")
				end_link = post_text.find(")")
				start_band = post_text.find("*",end_link)+1
				name = post_text[3:end_name]
				link = post_text[end_name+4:end_link]
				band = post_text[start_band:-1]
				music.append(Song(name,band,link,post[5:10]))
	return music


if __name__ == '__main__':
	for x in range(12):
		music = get_music(2022,x)
		for song in music:
			print("{0}: {2} - {1} > {3}".format(song.date,song.name,song.band,song.link))
