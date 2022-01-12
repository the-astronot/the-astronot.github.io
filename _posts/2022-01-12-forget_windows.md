---
layout: post
permalink: /_posts/2022-01-12-forget_windows
permalink_name: "/posts/2022-01-12"
filename: "2022-01-12"
title: cat forget_windows.md
link_title: forget_windows
projects: terminal_tv
---
**12 January, 2022**

Song of the Day: [**Walk**](https://youtu.be/4PkcfQtibmU) - *Foo Fighters*

A lot has changed since my last post.

Originally, I tried adding support for playing associated .mp3 files alongside the terminal videos. I built a basic structure for the audio player, utilizing vlc extensions (they seemed to give the greatest level of control from the research I did). Unfortunately, I took too long to realize that my current system would not be able to use this upgrade. Until I can get back on campus, I'm stuck on my Windows laptop and running Ubuntu on WSL2. WSL does not currently allow audio output, and I'm honestly upset that it took as many error logs as it did for me to realize that.

But, this project has momentum, and I wasn't ready to give up just yet. I figured that nothing I had done thus far should keep me from adding minor supports for Windows and running it there. Long story short, I figured out all of the minor modifications I had to make, like importing and initializing colorama to use ANSI sequences from the command line. At the end of it all, I ran the program and was shocked at how slowly each line of text was scrolling by. A quick search later, and I find out that the current Windows terminals can't even come close to keeping pace with the gnome terminal. It would seem that the project simply cannot function on Windows. **SIGH**

Nevertheless, support exists for it now, so I guess if Windows ever increases its terminal speed, it'll work across platforms. In its current state, it is impossible to discern whether the audio section is functioning correctly, so I suppose I'll have to come back to that once I'm back on my home machine.

In the meantime, I suppose the project is essentially finished, so I'll continue making slight modifications to make using the converter easier. If I find the time, I'd also like to try and speed up the conversion process with threading or multiprocessing. A faster and more accurate method of converting pixels into ascii pairings is also high on my list, and I am thinking about the possibility of trying to make a neural net as a color classifier.

tldr;

This is the first time I've ever tried to add support for Windows for something I developed for Linux, and this experience does not fill me with the desire to continue doing it.

[< Prev](/_posts/2022-01-10-i_am_never_making_buttons_again)    [Next >](/all_caught_up)
