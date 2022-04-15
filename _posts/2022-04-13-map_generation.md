---
layout: post
permalink: /_posts/2022-04-13-map_generation
permalink_name: "/posts/2022-04-13"
filename: "2022-04-13"
title: cat map_generation.md
link_title: map_generation
projects: wopr
---
**13 April, 2022**

Song of the Day: [**Down On The Corner**](https://youtu.be/BrB3gaX3-gI) - *Creedence Clearwater Revival*

Tonight, around other work, I began working on the map generation for the wopr repo. I've gotten the basic gist of it down now, and I hope to finish up most of it this weekend, depending on how much work I have to do.

The general idea is that I am creating chunks from the image that will each be transformed into ascii characters in the terminal. For there, each chunk is divided into a square of 9 smaller chunks. I plan to use the heatmaps of those smaller chunks to match the chunk to the character that most closely resembles its shape. As for color, the algo should choose the color that has the highest average value throughout the entire chunk.

That's what it is in my head. Like I said, I started programming it tonight, so we'll see how accurate it ends up being.

Plus, I mean, I am functionally crushing the images to bits before I even begins, so it'll be interesting to see if anything gets picked up at all.

[< Prev](/_posts/2022-04-12-background)    [Next >](/_posts/2022-04-14-testing_with_iss_photos)
