"""
Updating the most current date and song
________________
|_File_History_|________________________________________________________________
|_Programmer______|_Date_______|_Comments_______________________________________
| the-astronot     | 2023-03-29 | Created File
|
|
|
"""
import os
import os.path as path


def find_current_post(posts_dir):
	latest_filename = None
	latest_directory = None
	for dirpath, _, filenames in os.walk(posts_dir):
		for filename in filenames:
			if latest_filename is None or latest_filename < filename:
				latest_filename = filename
				latest_directory = dirpath
	return path.join(posts_dir,path.join(latest_directory,latest_filename))
	

def get_info(post_file):
	f = open(post_file,"r")
	text = f.read()
	f.close()
	song_start = text.index("Song of the Day: [**") + 20
	song_end = text.index("**](")
	song = text[song_start:song_end]
	artist_start = text.index(") - *") + 5
	artist_end = text.index("*",artist_start)
	artist = text[artist_start:artist_end]
	date = path.basename(post_file)[:10]
	year = date[:4]
	month = date[5:7]
	day = date[8:]
	return artist, song, year, month, day


def write_info(info_file,info):
	f = open(info_file,"r")
	text = f.read()
	f.close()
	date_idx = text.index("\"date\": \"") + 9
	text = text[:date_idx] + "{0}/{1}/{2}".format(info[3],info[4],info[2]) + text[date_idx+10:]
	song_start = text.index("\"song\": \"") + 9
	song_end = text.index("\"",song_start)
	text = text[:song_start] + info[1] + text[song_end:]
	artist_start = text.index("\"band\": \"") + 9
	artist_end = text.index("\"",artist_start)
	text = text[:artist_start] + info[0] + text[artist_end:]

	f = open(info_file,"w")
	f.write(text)
	f.close()


if __name__ == '__main__':
	src = path.dirname(path.abspath(__file__))
	info_file = path.join(src,path.join("assets",path.join("js","info.js")))
	posts_path = path.join(src,"_posts")
	post_file = find_current_post(posts_path)
	info = get_info(post_file)
	write_info(info_file, info)
