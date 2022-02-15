---
layout: post
permalink: /_posts/2022-02-14-from_the_ashes
permalink_name: "/posts/2022-02-14"
filename: "2022-02-14"
title: cat from_the_ashes.md
link_title: from_the_ashes
projects: deep_thought
---
**14 February, 2022**

Song of the Day: [**Uprising**](https://youtu.be/w8KQmps-Sog) - *Muse*

In some free time today, I managed to get some more of the C++ version of the manager up and running.

Specifically, I:

- Established a basic threading system that allows the incoming pipe to be constantly monitored, while also executing commands based on the received output
- Learned about the C++ Mutex, which I will have to use to properly control access to the vector which will act as the queue
- Added functionality to implement a **basic** queue displayer, and job adder

[< Prev](/_posts/2022-02-12-and_back_to_failure)    [Next >](/all_caught_up)
