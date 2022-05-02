---
layout: post
permalink: /_posts/2022-01-08-improving_the_storage
permalink_name: "/posts/2022-01-08"
filename: "2022-01-08"
title: cat improving_the_storage.md
link_title: improving_the_storage
projects: terminal_tv
---
**08 January, 2022**

Song of the Day: [**Tears Over Beers**](https://youtu.be/kxViktJCHlg) - *Modern Baseball*

I spent some more time working on the terminal-tv project today. Figured out exactly how to store files, prefacing the data with values for the number of rows and columns, as well as a float to represent the amount of time that should be devoted to each frame. I have completed a couple of test runs converting the first episode of Bojack Horseman and the music video to [**Feel Good Inc.**](https://youtu.be/HyHNuVaZJ-k) by *Gorillaz*.

During this process, I realized that the actual conversion is very lengthy time-wise, and I began to wonder whether I might be able to speed it up with multithreading.

But, since I'm trapped in Mass for another week with just my IdeaPad, I'm gonna spend time working on setting up the player rather than trying to implement a faster converter. Given those factors, it is unlikely I would be able to notice much of an increase in performance on this machine. Hopefully when I can get back in my apartment, I can implement those changes and get the converter up to a reasonable speed.

I am also hoping that when I eventually get around to rewriting the logic to convert images into ascii frames, I am able to implement those changes in a way that reduces the time complexity and speed up the process as well.

[< Prev](/_posts/2022-01-07-finished_the_converter)    [Next >](/_posts/2022-01-09-initializing_the_player)
