---
layout: post
permalink: /_posts/2022-01-17-successes_and_speed_increases
permalink_name: "/posts/2022-01-17"
filename: "2022-01-17"
title: cat successes_and_speed_increases.md
link_title: successes_and_speed_increases
projects: terminal_tv
---
**17 January, 2022**

Song of the Day: [**I Wanna Get Better**](https://youtu.be/8twpQTna_9w) - *Bleachers*

The C++ version is still a flop. I did everything. I switched back to Ubuntu. Nothing works.

On the bright side, I made 3 major improvements. Firstly, I modified the converter algorithm to be faster and more accurtae. I did this after realizing that I could turn the problem into a pidgeon-hole problem. Since I store each character in each frame as a byte, there can only be 2^8 possible configurations of foreground, background, and character values. Knowing this, I generated a list of all possible combinations and estimated their approximate rgb values. Then, for each combination of rgb values, I checked which of the possible combinations was the closest to it and stored that in a file. Now, when the converter runs, it loads that file as a config, and creates a dictionary of those values. Then for each pixel in the given image, the frame conversion is a simple matter of querying the dictionary and writing the byte value to the file. This not only allowed for better color matching, but it also sped up the process by a multiple of 3.

Secondly, I realized that I was being a dumbass. Nothing out of the ordinary. I realized that I was reinventing the wheel, and that it was costing me time. So, intead of resizing the images myself, I used the PIL library, and ended up further increasing my speed by about a multiple of 10.

Lastly, I figured out how to properly use the multiprocessing library to maximize my efficiency.

[< Prev](/_posts/2022-01-15-beyond_python)    [Next >](/all_caught_up)
