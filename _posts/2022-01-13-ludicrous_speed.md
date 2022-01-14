---
layout: post
permalink: /_posts/2022-01-13-ludicrous_speed
permalink_name: "/posts/2022-01-13"
filename: "2022-01-13"
title: cat ludicrous_speed.md
link_title: ludicrous_speed
projects: terminal_tv
---
**13 January, 2022**

Song of the Day: [**Seven Seas of Rhye**](https://youtu.be/FxIo57WURRE) - *Queen*

More work on the terminal project around classes today.

It's actually developing into a full-fledged media player. I set up the logic to allow for skipping ahead and backwards through the videos, as well as revamping the file selection section into its own class, and adding a progress bar. This will allow for my next expansion, which will essentially create another file type. This file will replace the .trm files in terms of what the selector will search for and allow the user to select. Within these files will be a catalog of the number of .trm files by that name available, as well as any other information I deem relevant.

At the moment, I plan on storing the current time in the video when a video is ejected, and allow for the user to choose whether to return to the video at that time or start over. The inclusion of a list of available files will allow me to switch between available resolutions mid-video. This option would of course require me to convert videos multiple times into the separate file sizes, but it is an option which I would enjoy the ability to have nonetheless. This statement is especially true for videos with aspect ratios falling closer to 4:3, as the height of the terminal grows quite quickly for the change in width, potentially growing larger than the available screen.

Late last night, I also spent a bit of time trying to improve the time required to run the converter. I rewrote the code to utilize threads, as I realized that the largest time sink involved reading frames into memory. The result is certainly faster, but not by nearly as much as I would have hoped. I'm beginning to think that with the Big-O time I'm looking at for essentially manipulating every pixel of every file of every frame, I will most likely be better off if I can find a way to rewrite it using C++. I admit to not having a ton of practice using the language for lower level file operations, other than my STL project, so I do not know if libraries exist to accomplish the video analyzing, but I will certainly give it a shot at some point.

The current abilties of the player can be viewed [here](https://youtu.be/HL4_ovnA6oY)

[< Prev](/_posts/2022-01-12-forget_windows)    [Next >](/all_caught_up)
