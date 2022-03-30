---
layout: post
permalink: /_posts/2022-03-29-digging_into_the_code
permalink_name: "/posts/2022-03-29"
filename: "2022-03-29"
title: cat digging_into_the_code.md
link_title: digging_into_the_code
projects: nasa_star_tracker
---
**29 March, 2022**

Song of the Day: [**Soldier, Poet, King**](https://youtu.be/sOv0hENoQnE) - *The Oh Hellos*

Today, I got a chance to dig into the code for the star tracker software that had tripped me up the week before last. Last week was so busy, I didn't get much of a chance to figure out what was going wrong.

To begin, an apology: A few weeks back, I really questioned how the original creators of the software had built it, since a number of the scripts that I was supposed to use were referencing other files as libraries, when neither I nor the interpreter saw a way for them to be accessed. Tonight I learned that buried in one of the folders is a python setuptools package that adds those files to the dist_utils for easy import. As for why my machine had trouble with that before, I currently blame the overuse of the "sudo" command during the setup, especially for pip installs. After finding the setuptools package, I undid my edits and managed to get the software running as intended. After that point, there was only 2 "list == None" checks to contend with, which would have been easier fixes if:

1. The errors had not been in a file managed setuptools
2. The local package had not been pip installed with the sudo command

After fixing the priviledges issues, I got the software to operate as I believe it should, managing the generate quaternions for the images I took back in February when requiring 3 stars. I'll have to check whether 3 is actually an acceptable number there, as 4 was only possible for one image, and it took like a minute to process.

After getting that taken care of, I decided I'd try and help Alessandro out with his pi. He lost his install a few weeks back, and no amount of effort on either of our parts on any combination of machines and SD cards had managed to reflash the system and reinstall the library. After far more effort than should have been necessary, I got a new OS running on my pi, and ran the install script. I plan on leaving it running overnight and seeing tomorrow whether it has sorted itself out.

I have to admit, I did not undertake this work entirely out of the kindness of my own heart, though I certainly would like to help him out and get his system running again. Before I ran the install script, I removed all of the "sudo" commands from it, to test (and hopefully prove) my claim that they are not in any way required, and in fact only make working with the software more difficult.

As I was finishing writing this up, the install script finished. Everything seems alright, no getting stuck this time around. Hopefully that luck holds through tomorrow, when I'll likely try and catch him up on what he has fallen behind on.

[< Prev](/_posts/2022-03-28-soundtracks_and_circuits)    [Next >](/all_caught_up)
