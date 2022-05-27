---
layout: post
permalink: /_posts/2022-01-21-change_of_plans
permalink_name: "/posts/2022-01-21"
filename: "2022-01-21"
title: cat change_of_plans.md
link_title: change_of_plans
projects: terminal_tv
---
**21 January, 2022**

Song of the Day: [**Yellow Ledbetter**](https://youtu.be/iYtBMgLfqKQ) - *Pearl Jam*

The other day I said I wasn't going to make any more posts about my terminal tv project. Well, I guess I lied.

I realized that while all the functionality exists, it's all rather  meaningless if it isn't portable and user friendly. On the user-friendly side, I've added a batch converter that I'm going to begin using as the default. The batch converter takes a csv or other delimited file as argument, which contains all of the data needed to perform the conversion. This new method keep me from having to constantly change my args when converting an entire season of a tv show. Today I managed to use it to convert the remainder of the first season of Initial D.

I am also currently working on a detailed README that explains how to use all of the different aspects of the project.

On the portability side, I am figuring out how I want the software to be able to be used, so that I can rewrite certain portions to work across separate systems. Currently, I am thinking that there should be an established repository that should be set up when the software is built. The player should open this repo no matter where it is called from. By that same logic, the converter should deposit the files in that repo, but I am planning on the videos to be converted to be given relative to the current directory the converter is being run in.

I'm also including two images of screenshots from the player.

![test1](/assets/images/terminal_test1.webp)
![test2](/assets/images/terminal_test2.webp)

[< Prev](/_posts/2022-01-19-closing_remarks)    [Next >](/_posts/2022-01-22-v1-0-1)
