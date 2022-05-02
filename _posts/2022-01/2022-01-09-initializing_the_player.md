---
layout: post
permalink: /_posts/2022-01-09-initializing_the_player
permalink_name: "/posts/2022-01-09"
filename: "2022-01-09"
title: cat initializing_the_player.md
link_title: initializing_the_player
projects: terminal_tv
---
**09 January, 2022**

Song of the Day: [**Deja Vu**](https://youtu.be/dv13gl0a-FA) - *Dave Rodgers*

Worked today on getting some vague idea of the player set up. Once I figured out how to get "Buttons" to remain on the screen while refreshing the video frames, I moved on to trying to set up some fragment of a video selector. In the end, I managed to essentially replicate the tree program to map out a filesystem, but my vision calls for more. Once its finished, the folders will be toggle-able to open and close them to view their contents. I also began messing around with different methods of collecting key presses, and finally settled on the getch library.

![term_tree](/assets/images/terminal_tree.jpg)

My vision of the video selection system entails printing the file tree to the screen and highlighting the currently selected item. I'll be able to use the up and down arrow keys to move the highlighted "cursor" and the enter key to toggle the folders open and closed and select video files to queue.

[< Prev](/_posts/2022-01-08-improving_the_storage)    [Next >](/_posts/2022-01-10-i_am_never_making_buttons_again)
