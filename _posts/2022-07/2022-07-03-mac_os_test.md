---
layout: post
permalink: /_posts/2022-07-03-mac_os_test
permalink_name: "/posts/2022-07-03"
filename: "2022-07-03"
title: cat mac_os_test.md
link_title: mac_os_test
projects: homelab
---
**Sunday, 03 July, 2022**

Song of the Day: [**The Chain**](https://youtu.be/iLC-tHvkNvI) - *Fleetwood Mac*

New addition to what should be a homelab, come the fall. I managed to get my hands on a Mac Mini (Mid-2011) off of ebay. I've been meaning to pick up some kind of Mac OS device for a while now so that I might test my code on it. Unfortunately, between sky-high Apple prices, the difficulty virtualizing macOS on non-Mac hardware, and Apple's absolutely abhorrent right to repair (or more specifically lack-thereof) policies, I hadn't been able to find a good way of doing it.

Enter, the 2011 Mac Mini. How does it solve my problems? Well for one, it's old and pretty cheap second-hand, is actual Apple hardware, so I don't need to virtualize anything, and the 2011-2012 models seem to be the last models Apple made before they started soldering everything to the chip and making their products difficult to repair. This Mini allows me to swap out/expand the memory as well as exchange the SSD for an HDD, and I am pretty confident that should any parts break, I could find replacements and repair it myself.

The only real downside is that I cannot avoid Apple's version control and lack of support for older versions. I began using this machine with macOS El Capitan 10.11, but after some messing around managed to get it up to macOS Sierra 10.12. Hopefully that should help with some of my support for XCode and other utilities. I believe that I should be able to get it up to High Sierra if I were to upgrade the storage to an SSD, but I'm hoping that for the time being at least, I should be able to slip by with Sierra.

I am a bit disheartened that my first test of running one of my repos on it has gone so poorly. I set it up with the terminal-tv repo, but OpenCV has been giving me a hard time with the installation to get it going. I haven't given up on getting it to run just yet, but I have temporarily pivoted to other projects.

Thankfully, I have been given some hope that this was not all in vain. I cloned my system-setup repo onto the mac and managed not only to run it, but also encounter some OS-specific bugs that I would not have been aware of without a system to test it on. I took some small action to fix the glaring issues, and plan on expanding the codebase in the future to work correctly on macOS.

[< Prev](/_posts/2022-06-30-jsc_day_17)    [Next >](/_posts/2022-07-04-mac_os_test_2)
