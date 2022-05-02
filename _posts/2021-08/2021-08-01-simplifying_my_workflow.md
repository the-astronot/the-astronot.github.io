---
layout: post
permalink: /_posts/2021-08-01-simplifying_my_workflow
permalink_name: "/posts/2021-08-01"
filename: "2021-08-01"
title: cat simplifying_my_workflow.md
link_title: simplifying_my_workflow
projects: project-phoenix
---
The other day I managed to snag a halfway decent monitor for cheap at a garage sale. It seemed like a good deal and I figured I could get some use out of it. Originally, I figured I'd use it as an extra vertical monitor to allow me to more easily review code side by side, But unfortunately its stand does not allow it to rotate in that manner.
So instead, I got to thinking. Being at my intersection of engineering where I require both a lot of coding and a lot of CAD (and other programs optimized for windows), my main workstation is dual-booted with Windows 10 and Linux. This has become a bit of a pain of late, as I constantly find myself switching back and forth between them. I know that a lot of solutions exist, namely running a linux VM, but I have tried that solution and found it lacking.
As it happens, I also have an older computer that I have been running as a Plex server that had been discarded by RPI. I realized that nothing I tend to do on Linux tends to be overly computationally expensive, and I could probably get away running my Linux installation on my current server computer, giving it 2 screens, and leaving my ultrawide attached to my now permanent windows pc.
The only issue that presented itself was managing the keyboards and mice. I have a really nice keyboard that I treated myself to, and would like to use on both, and because of this, I discovered KVM controllers.
In my case, I dont care about video, so I could get away with a KM controller. I found an old DPDT switch in one of my parts buckets, removed some female usb A connectors from an old laptop case, and designed a case to house it.
![CAD_PIC](/assets/images/KM_Switch_Mk1_v1.jpg)
Once that it printed, I'll wire the data lines from each usb port to it, the grounds to each other, and the 5v line from one of the hosts to the "shared" connector.
As far as I understand, I should then be able to plug a usb hub with my keyboard and mouse attached into the shared usb port and toggle with the switch which computer they are attached to, allowing me to more easily run 2 computers on the 3 screens I'll have on my desk.
And I won't have to restart my computer 4 times a day!
