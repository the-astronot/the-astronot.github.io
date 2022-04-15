---
layout: post
permalink: /_posts/2022-04-14-testing_with_iss_photos
permalink_name: "/posts/2022-04-14"
filename: "2022-04-14"
title: cat testing_with_iss_photos.md
link_title: testing_with_iss_photos
projects: star_tracker
---
**14 April, 2022**

Song of the Day: [**Run to the Hills**](https://youtu.be/AMHxf8KoSkY) - *Iron Maiden*

Found a bit of time today to try and get the NASA code to actually generate some quaternions for me. I have some photos from the International Space Station (ISS) that I tried to get quaternions for since my photos that I had taken previously yielded no dice.

I managed to use tetra to generate camera params, with only minor difficulties, and then proceeded to build the star catalog and successfully generate quaternions for all of the images.

Following that, I set up an api key with [astrometry.net](https://nova.astronomy.net) to get actual accurate quaternion values for the images to compare.

That's gonna be left running overnight, as there are over 100 images and the api query seems to be taking around 2 minutes each.

Tomorrow, I'll use the comparison software to determine how well the software did.

[< Prev](/_posts/2022-04-13-map_generation)    [Next >](/all_caught_up)
