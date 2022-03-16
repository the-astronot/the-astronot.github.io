---
layout: post
permalink: /_posts/2022-03-15-filesystem_fix
permalink_name: "/posts/2022-03-15"
filename: "2022-03-15"
title: cat filesystem_fix.md
link_title: filesystem_fix
projects: nasa_star_tracker
---
**15 March, 2022**

Song of the Day: [**Jesus of Suburbia**](https://youtu.be/lPLvBO_2Gn0) - *Green Day*

I put in some time trying to complete the next part of the work I'm doing for my independent study. It would appear that the file system layout has changed rather drastically since it was originally written, because it seems like every script has issues importing other scripts as libraries. I pushed an update to my fork that fixed an issue with the checkerboard calibration directory I had discovered before, and this time I realized that the required script was so separated that it required it's folder to temporarily be added to the path.

Needless to say, both of those errors have been fixed, and as of today, the camera has been calibrated and the star catalog built. Before the check-in Friday, I'll likely try and see if I can get the program to give me some rough quaternions for the images Alessandro and I took last month.

[< Prev](/_posts/2022-03-14-metadata)    [Next >](/all_caught_up)
