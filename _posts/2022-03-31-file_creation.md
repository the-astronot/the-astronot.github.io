---
layout: post
permalink: /_posts/2022-03-31-file_creation
permalink_name: "/posts/2022-03-31"
filename: "2022-03-31"
title: cat file_creation.md
link_title: file_creation
projects: system_setup
---
**31 March, 2022**

Song of the Day: [**The Banshee's Cry**](https://youtu.be/0zM3HJ8C44o) - *The Irish Rovers*

Around some classwork today, I managed to put in some work on my system setup repo. I'm still mulling over in my mind how exactly I'm going to coordinate the bashrc changes, aliases generation/management, and software installation, so I chose instead to make something that I figured would be a bit easier and that I've wanted for a while now. I got to work on a script that generates boilerplate code when given a filetype and name. After some elbow grease today, it can manage a number of different file layouts, as well as more complicated folder configurations, like repositories. It is also capable of setting variables left in the layouts. I wanted to have the date a script was created get generated automatically for my python files, so I included a {{@date}} in the layout, which along with other variables has been recognized as data that the software needs to replace.

[< Prev](/_posts/2022-03-30-__init__system_setup)    [Next >](/_posts/2022-04-02-system_progress)
