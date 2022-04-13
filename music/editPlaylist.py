"""
@author: Max Marshall
@desc:
@created: 04/11/2022

All of my software is created with the intent of being a net gain for humanity, or at worst, neutral. You are free to use it as you see fit, but please don't be evil.
"""
import os
import time

import google_auth_oauthlib.flow
import googleapiclient.discovery
import googleapiclient.errors

scopes = ["https://www.googleapis.com/auth/youtube.force-ssl"]

class editPlaylist:
	def __init__(self, playlist_id, secrets):
		self.id = playlist_id
		api_service_name = "youtube"
		api_version = "v3"
		flow = google_auth_oauthlib.flow.InstalledAppFlow.from_client_secrets_file(secrets, scopes)
		credentials = flow.run_console()
		self.youtube = googleapiclient.discovery.build(
        api_service_name, api_version, credentials=credentials)

	def add_video(self, video_link):
		try:
			request = self.youtube.playlistItems().insert(
				part="snippet",
					prettyPrint=True,
					body={
						"snippet": {
							"playlistId": self.id,
							"position": 0,
							"resourceId": {
								"kind": "youtube#video",
								"videoId": video_link
							}
						}
					}
			)
			response = request.execute()
			print(response["snippet"]["title"])
			time.sleep(.2)
		except KeyboardInterrupt:
			exit()
		except:
			time.sleep(5)
			self.add_video(self,video_link)

	def rm_video(self, video_link):
		pass


# Testing
if __name__ == '__main__':
	playlist_id = "PLLkrk54i7avH2AnjH23YsNDQZ3npy5kzZ"
	class_test = editPlaylist(playlist_id,"client_secret.json")
	class_test.add_video("wYsMjEeEg4g")
	class_test.add_video("CZ_VFJn2kJM")
