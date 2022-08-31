---
layout: post
permalink: /_posts/2022-08-30-adv_maintenance
permalink_name: "/posts/2022-08-30"
filename: "2022-08-30"
title: cat adv_maintenance.md
link_title: adv_maintenance
projects: homelab,website
---
**Tuesday, 30 August, 2022**

Song of the Day: [**Misery Business**](https://www.youtube.com/watch?v=aCyGvGEtOwc) - *Paramore*

After getting out of class today, I put in some time on my main site. I didn't love the way that the caching was working, with the images not being cached (and therefore taking **forever** to load) while the javascript/jquery would hold on for dear life, resisting my changes to the backend. I realized that cloudflare allows me to set up page rules to set these values how I would like, so I took care of it. It should be working a whole lot better now. While I was taking care of that, I realized that the way I was duplicating my apex domain to a separate "www" subdomain wasn't optimal, as it would require separate page rules to accomplish the same results across both apex and subdomain. After coming across a tutorial online, I was made aware of the "bulk redirects" that cloudflare offered, and so I now have the subdomain redirected to the apex domain, solving that problem as well.

Aside from that, I have also finally come to the realization that I will have to expose a port on the router in order to access the OpenSSH server on my server from outside of the local network. For a while, I had searched for a way to get around the router using cloudflare tunnels, but none of those workarounds have born any fruit. In preparation for forwarding the port, I have hardened the server, setting up PubKeyAuthentication and disabling root login. I have also created an entry with [duckdns.org](duckdns.org) to point to (and keep an updated log of) my IP address so that I can use it as an A Record for the subdomain I am configuring.

All-in-all a slow day, but I got a fair bit accomplished.

[< Prev](/_posts/2022-08-28-welcome_to_the_internet_(nginx))    [Next >](/all_caught_up)
