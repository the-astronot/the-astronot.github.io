---
layout: post
permalink: /_posts/2022-01-15-beyond_python
permalink_name: "/posts/2022-01-15"
filename: "2022-01-15"
title: cat beyond_python.md
link_title: beyond_python
projects: terminal_tv
---
**15 January, 2022**

Song of the Day: [**The Others**](https://youtu.be/6FrqLD7vgXo) - *Church of the Cosmic Skull*

I rewrote a part of the converter today, and came to the realzation that for some bizarre reason, the OpenCV python library takes far longer to simply set the current frame to another value than it does to set up and complete a for loop, retrieving frames along each step. This increase in speed has made the python converter slightly more viable, but still is not good enough. I've decided that I will have to try and rewite it in C++ for the speed boost it should gain.

Unfortuantely, setting up OpenCV to work with C++ and the g++ compiler has been quite the challenge. It would appear that there is very little information out there for those qho seek it on properly setting up and configuring the libraries. It is also unfortunate that most of the writings I have found on the subject utilize CMAKE, which I am quite unfamiliar with. I tend to just use regular makefiles.

In the end, its a tomorrow problem.

[< Prev](/_posts/2022-01-13-ludicrous_speed)    [Next >](/all_caught_up)
