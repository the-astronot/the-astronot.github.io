---
layout: post
permalink: /_posts/2022-03-09-redemption
permalink_name: "/posts/2022-03-09"
filename: "2022-03-09"
title: cat redemption.md
link_title: redemption
projects: project-atlas,deep_thought
---
**09 March, 2022**

Song of the Day: [**Like a Stone**](https://youtu.be/7QU1nvuxaMA) - *Audioslave*

Today, I managed to get some stuff done for the projects. Specifically, I:

1. Designed, printed, and tested 4 total sled designs for the new cluster setup (the old ones were poorly made)
2. Deconstructed more of the old cluster
3. Mounted the removed hardware in the new spots
4. Wired up the stepper controller circuit again with the 12V PSU (did not explode capacitor)
5. Hooked the stepper controller circuit up to the telescope base and moved the parts around

I am really upset with my past self for the amount of the cluster that was held together by double-sided tape. I honestly have no idea why I would have done that. Literally everything that went on the board had mounting holes. Worst case, I could have designed and printed a board to hold a thing, like I did this time around with the arduino, etc. I'm also straight-up disappointed by my wiring job. The lack of connecters is downright crazy to me right now. Which is funny, because I have not gained any more experience with circuitry or electrical systems since last spring when I assembled it, so I really wonder what I was thinking.

I was overjoyed when the stepper system finally worked today. I spent far too long without it working thinking that yesterday's ordeal fried some components, when in reality today I had what should have been the ground on the pi hooked into the 5V pin instead. It took me **far** too long to figure out why I was seeing a negative voltage across the motor controller (3.3->5). But, despite my best efforts to the contrary, it eventually turned. I'm gonna toss some photos down the bottom here, and a video of the base moving on the [youtube channel](https://youtu.be/EHHx5cRPcEI).

Here's me looking like a dumbass before testing the capacitors again. (I really didn't want it to blow up in my face)
![dumbass](/assets/ref_images/goofy_goggles.jpg)

Here's my printer at work on the sleds:
![printer](/assets/ref_images/printer_sleds.jpg)

The new home for the cluster:
![cluster](/assets/ref_images/new_home.jpg)

And finally, here's the chassis/base of my telescope at the moment:
![atlas](/assets/images/atlas_preview.jpg)

[< Prev](/_posts/2022-03-08-releasing_the_blue_smoke)    [Next >](/all_caught_up)
