---
layout: post
permalink: /_posts/2022-09-03-nas_online
permalink_name: "/posts/2022-09-03"
filename: "2022-09-03"
title: cat nas_online.md
link_title: nas_online
projects: homelab
---
**Saturday, 03 September, 2022**

Song of the Day: [**The Mary Ellen Carter**](https://youtu.be/JKsVidS70xQ) - *The Longest Johns*

After **a lot** of messing with my 4U server chassis, I finally managed to get my HP ProDesk 600 G2 mounted in it. This was especially tricky for a number of reasons, mostly arising from the fact that it would appear HP never intended for anyone to ever do any work on this computer whatsoever. For example, the SFF made the PSU hard to mount, and the awkward mounting holes on the motherboard required extensive tinkering with the new case. The former required me to 3D print an [adapter](https://www.thingiverse.com/thing:4867847/files) to the normal size.

The worst, however, has got to be the pinout on the motherboard. Try as I might, I could not find any documentation, diagrams, or any other article regarding the custom pinout on the board for IO. I had to go in and use a combination of a voltmeter and bridging wires to determine what the actual pinout was well enough for me to make all of the connections to the IO wiring.

Thankfully, flashing TrueNAS Core onto the system was fairly straightforward, and made the process very easy once I had the case closed. I have some drives and a PCIE to SATA card coming in this week, so I should be able to get the whole system running as expected for next weekend.

In other news, I have continually tried to flash raspbian onto my rpi 4 to serve as a wireguard server. I'm starting to think that there is something wrong with either the hardware or the several micro SD cards I've tried to flash so far. I'll have to perform some further tests to know which one for sure.

[< Prev](/_posts/2022-08-30-adv_maintenance)    [Next >](/all_caught_up)
