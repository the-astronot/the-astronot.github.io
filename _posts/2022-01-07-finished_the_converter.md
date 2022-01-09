---
layout: post
permalink: /_posts/2022-01-07-finished_the_converter
permalink_name: "/posts/2022-01-07"
filename: "2022-01-07"
title: cat finished_the_converter.md
link_title: finished_the_converter
projects: terminal-tv
---
**07 January, 2022**

Song of the Day: [**No Halo**](https://youtu.be/NqowVWu_4f0) - *Sorority Noise*

Spent my time after work working on the video to ascii frames converter. After completing that, I also began work on creating files to store the frames.

I originally began with each character being expressed by 1 of 8 foreground colors, 1 of 8 background colors, and 1 of 8 ascii characters. (Here I use foreground to reference the color of the character itself.) Via this method, the FG and BG colors can be expressed by a minimum of 3 bits each. That leaves me with 2 bits to express all possible characters, which only allows for 4 possible characters. So, at the cost of half of my previous color resolution (via characters taking up various amounts of space), I can fit each character of each frame into a single byte for storing.

More work on the actual file layout and other considerations will have to come tomorrow.

[< Prev](/_posts/2022-01-05-working_with_videos)    [Next >](/_posts/2022-01-08-improving_the_storage)
