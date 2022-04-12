"""
@author: Max Marshall
@desc:
@created: 04/11/2022
"""
from editPlaylist import editPlaylist
import music_roundup as mr
import googleapiclient


if __name__ == '__main__':
	playlist_id = "PLLkrk54i7avFFumGOz81PaN2xBSRP8gOb"
	playlist = editPlaylist(playlist_id,"client_secret.json")
	music = mr.get_music(True)
	for song in music:
		link = song.link.split("/")[-1].replace("watch?v=","")
		playlist.add_video(link)
