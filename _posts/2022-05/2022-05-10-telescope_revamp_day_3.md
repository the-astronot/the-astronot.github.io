---
layout: post
permalink: /_posts/2022-05-10-telescope_revamp_day_3
permalink_name: "/posts/2022-05-10"
filename: "2022-05-10"
title: cat telescope_revamp_day_3.md
link_title: telescope_revamp_day_3
projects: project-atlas
---
**10 May, 2022**

Song of the Day: [**Cold Sweat**](https://youtu.be/7Yiq4ocwQJs) - *Church of the Cosmic Skull*

**Day 3:**

Main mirror cell finished printing. I messed up the tolerancing a bit on the sides of the holder, and so I spent a lot of the day sanding down the edges. At the end of the day, I managed to get the mirror inserted into it and attached to the rest of the assembly.

Unfortunately, I seem to have encountered a small issue. One of the foundational principles of this telescope design is having no moment about the center when it is at rest. That on its own isn't an issue. The unfortunate part is that I had only done some cursory back-of-the-napkin math to figure out how much space the heavier side would need to be able to rotate to its highest position. I was wrong.

Now, I either need to made the resting pegs higher to accommodate for the extra length, or accept the fact that there will be additional moments resisting tilting the scope upwards. At the moment, the latter is running into issues actually being able to lift everything, so that might well require a stronger stepper motor.

After much thought, I am of the opinion that the simplest solution would be to remake the sides of the box the add the extra height required.

Regardless of that solution, that same thinking has finally convinced me to abandon my current method of driving the y-axis. The way it is currently set up is too finicky for the motor to make the contact required to consistently drive the y-axis. For the longest time now, I have shied away from making any real change, partly out of pride, and partly out of now wanting a metal gear making contact with plastic gears of my own creation. My new idea involves me attaching a large gear to the center of rotation, which will be driven by a belt attached to the y-axis motor. Hopefully, this method will remove the finicky-ness and make the whole thing more stable.

Lastly, I am considering ditching the battery component of the build in favor of a power supply. I have a PSU from a tech-dump computer laying around that I could take advantage of. From what I can tell it should output 24v and 5v, which would be pretty perfect to drive both the Pi and motors. This would even allow for me to upgrade my motor controllers to something that was actually designed by a competent electrical engineer.

[< Prev](/_posts/2022-05-09-telescope_revamp_day_2)    [Next >](/all_caught_up)
