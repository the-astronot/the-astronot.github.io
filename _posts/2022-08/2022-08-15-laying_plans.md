---
layout: post
permalink: /_posts/2022-08-15-laying_plans
permalink_name: "/posts/2022-08-15"
filename: "2022-08-15"
title: cat laying_plans.md
link_title: laying_plans
projects: homelab
---
**Monday, 15 August, 2022**

Song of the Day: [**Mama I'm Coming Home**](https://youtu.be/K0siYUjV9UM) - *Ozzy Osbourne*

Today, I started solidifying plans for getting my homelab up to speed once I return to school. While at JSC this summer, I was exposed to their server setup, and want to try and emulate a version of it myself. I want to completely change the way I write, run, and store code, moving almost everything from my multiple devices onto one centralized server.

To make full use of this, I will be setting up my own VPN into the network that my server runs on, allowing myself to connect to my server from anywhere. As I learned this summer, VSCode allows users to run codeservers over SSH connections, which I will be setting up.

Aside from that, the other utilities I have planned include:

1. PiHole - I want to put a PiHole on the network, using it as a DNS to block unwanted adds. I'll also add DNS entries for all of my sites/services so that I can access them locally without sending unnecessary traffic out of the network.
2. Plex Server - I'm going to be pulling the components of an older computer out of its case and rack mount them. I'll install TrueNAS Core onto it and add some new hard drives. At the moment, I'm looking at having the weaker NAS host a samba share, which my R620 will use to host a Plex server.
3. Vaultwarden - A self-hosted password storage service.
4. NextCloud - Similar to Plex setup, data stored on NAS, served up by the R620.
5. Apple Dev Server - Hosted on the Mac Mini I snagged, a place for me to test my software on Mac OS.
6. Grafana Dashboards - Displaying assorted data for the homelab.
7. My website - Hosting my website.
8. "Virtual Desktop" - A large linux machine serving the codeserver also doubles as my main linux machine that I can remote into.

Those are my plans at the moment. We'll see how they hold up when I try to put them into practice.

[< Prev](/_posts/2022-08-14-rebirth)    [Next >](/all_caught_up)
