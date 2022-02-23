---
layout: post
permalink: /_posts/2022-02-22-site_patches
permalink_name: "/posts/2022-02-22"
filename: "2022-02-22"
title: cat site_patches.md
link_title: site_patches
projects: website
---
**22 February, 2022**

Song of the Day: [**The Bard's Song**](https://youtu.be/n63UbX5kzAc) - *Blind Guardian*

Minor improvements to this site today, around ripping my hair out trying to understand Dafny for a homework due at midnight. But I guess I'm not sure what I should have expected from a language/software that uses this as an actual logo:
![dafny](/assets/ref_images/dafny.jpeg)

It's an absolute mess, and the autograder for the homework has decided not to be my friend.

Anyways, I theoretically improved the site's usability on mobile devices by messing around with the CSS file. I guess I'll find out if I succeeded once this goes live.

I also added separate files for images, so that every image I put on this site doesn't get tacked on to the images page. For example, I never want to see that image of dafny again, and it isn't relevant to anything else I am working on, or will ever work on, so it has been relegated to the reference_image folder, which doesn't appear anywhere outside of these posts.

Unfortunately, I could not fix the messed up images page. I figured I had made a math error in determining which pictures should be in which column, but as it turns out, the image library I was using was misreporting their sizes. I tried switching from pillow to openCV, but found that the issue plagued both libraries, so I did my best to straighten it out and gave up.

[< Prev](/_posts/2022-02-21-adding_images)    [Next >](/all_caught_up)
