---
layout: post
permalink: /_posts/2021-11-12-playing_with_the_terminal
permalink_name: "/posts/2021-11-12"
filename: "2021-11-12"
title: cat playing_with_the_terminal.md
link_title: playing_with_the_terminal
projects: terminal_tv
---

Today I did a bit of work ahead of a planned collaboration with Vinny. The idea is to convert mkv files to ascii text, which can be shown frame by frame in the terminal. We thought this would be a cool experiment to try minimizing file sizes and messing with ascii color gradients.

This morning, I woke up with an idea for the project, that I had to put in some work on and give a shot. I've done some work with converting images to ascii in the past, and I was able to borrow some old code. This time around though, I'm considering using the built-in terminal colors. Essentailly, the terminal allows me to make each character a combination of 2 colors:

1. The text itself
2. The background color

For each of these two options, I can select bewtween red, green, blue, white, and black. Therefore, I can basically create any shade of gray, as well as any shade of red, green, and blue, as well as mixtures of red and green, red and blue, or green and blue. Using a crappy 3 dimensional distance function, I was able to come up with a halfway decent first pass at at least figuring out which 2 colors would be blended for each character.

I think the results are pretty cool.

![Initial_D](assets/../../assets/images/initial_d.webp)
