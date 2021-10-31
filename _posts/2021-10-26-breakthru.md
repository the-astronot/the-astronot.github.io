---
layout: post
permalink: /_posts/2021-10-26-breakthru
permalink_name: "/posts/2021-10-26"
filename: "2021-10-26"
title: cat breakthru.md
link_title: breakthru
projects: deep_thought
---
## I GOT IT

I guess I must have been pretty tired last night, because I can't believe I didn't see it. The main trouble I was running into was running the high level scripts in the bin folder from my path. My programs kept floundering about in the wrong directories.

I knew that the problem was due mostly to my use of relative paths throughout the repo, and normally, the easiest solution would be to rewrite them as full paths, but that wouldn't work well here either.

These scripts are being designed to be able to load onto a minimally set-up cluster and get everything working with minimal fuss. Not to mention I am working on them with 3 different computers, each with a differently laid out path to the repo from root. To complicate matters even more, most of the code written for this project isn't compiled, but rather consists of python files that the high level bash scripts call.

This morning I had a bit of time to think about what way I might go about fixing the issue, and it hit me.

I needed a build script. Admittedly, it doesn't work the way a Makefile or other builder would work in most situations. Here, it simply runs $PWD and then creates an env.sh file that contains the paths to the base directory and the popular other directories. The other /bin programs are then able to source these paths, use them to cd (with the full path) to wherever the python programs are and run them.

So far, on my laptop at least, this method has worked for each of the scripts I have tried, namely:

- boot_system
- kill_system
- launch_hardware_controller
- launchserver

I'll have to perform a more thorough test later on, but this is looking promising.
