"""
@author: the-astronot
@desc:
@created: 04/11/2022
"""
from editPlaylist import editPlaylist
import music_roundup as mr


if __name__ == '__main__':
	playlist_id = "PLLkrk54i7avH0VbIevnBNELBg-ENqd5-f"
	playlist = editPlaylist(playlist_id,"client_secret.json")
	index = 0
	for x in range(12):
		music = mr.get_music(2022,x)
		for song in music:
			link = song.link.split("/")[-1].replace("watch?v=","")
			playlist.add_video(link,index)
			index+=1
