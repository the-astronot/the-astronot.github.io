"""
@author: Max Marshall
@desc:
@created: 04/11/2022
"""
from editPlaylist import editPlaylist
import music_roundup as mr


if __name__ == '__main__':
	playlist_id = "PLLkrk54i7avH0VbIevnBNELBg-ENqd5-f"
	playlist = editPlaylist(playlist_id,"client_secret.json")
	for x in range(2,4):
		music = mr.get_music(2022,x)
		for song in music:
			link = song.link.split("/")[-1].replace("watch?v=","")
			playlist.add_video(link)
