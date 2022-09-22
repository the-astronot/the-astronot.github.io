---
layout: post
permalink: /_posts/2022-09-19-mentoring
permalink_name: "/posts/2022-09-19"
filename: "2022-09-19"
title: cat mentoring.md
link_title: mentoring
projects: none
---
**Monday, 19 September, 2022**

Song of the Day: [**Immortals**](https://youtu.be/l9PxOanFjxQ) - *Fall Out Boy*

For the past few weeks, my roommate has been learning python as part of his masters degree. I've been giving him some help when he needs it. He's been doing really well at it, and today he started his own project to use those new skills for something he cares about. I set him up with a Raspberry Pi 3B+ that I wasn't using, which he plans to turn into a weather station in the backyard.

Today marked the first step in that process, where we hooked up the pi to a 1-wire thermometer and he wrote the scripts required to read the sensor and have the pi create a plot of the temperature readouts daily. We only managed to get it running after midnight had passed, so I guess we'll see tomorrow night whether or not the graph gets produced.

This was also my first time using 1-wire sensors. Every other time I have messed about with sensors, they have used other protocols. I'm not sure how I feel about the protocol. It seems to add a a lot of overhead to the kernel to continually update the sensor data, even when I am not requesting any new information from the system.

**UPDATE:** It worked! First try too! Wicked proud of him.

[< Prev](/_posts/2022-09-17-resoldering_the_stepper_controller)    [Next >](/all_caught_up)
