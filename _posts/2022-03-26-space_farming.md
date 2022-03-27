---
layout: post
permalink: /_posts/2022-03-26-space_farming
permalink_name: "/posts/2022-03-26"
filename: "2022-03-26"
title: cat space_farming.md
link_title: space_farming
projects: datathon_for_ukraine
---
**26 March, 2022**

Song of the Day: [**Band Without A Country**](https://youtu.be/ly4ubkByY7k) - *The Irish Rovers*

I spent today at RPI's Datathon for Ukraine, which I found out earlier this week would be held today and tomorrow.

It began with my learning about Ukraine's role as one of the world's largest exporters of grains, and used my time at the 'thon with my group trying to obtain and analyze data related to Ukraine's manufacture and export of those grains in past years to evaluate what the lack of farming and ability to export effectively would have on the world's grain supply. I ended up becoming a bit hyper-focused on this one site that NASA [maintains](https://glam1.gsfc.nasa.gov/) that holds records of the NDVI (Normalized Difference Vegetation Index) scans made by satellite every 8 days. I did some math to figure out which 9 deg by 9 deg lat/lon square the majority of the country would fall into, and then wrote a script to automate the downloading and saving of weekly GeoTIFFs for the region. Those images by themselves were not exactly the most useful, so I wrote a second script to color them from a red hue for an NDVI of -1 to green for an NDVI of 1. White is cloud cover and blue is water.
![Ukraine_Satellite_Grayscale](/assets/images/ukraine_sat_gray.tif)
![Ukraine_Satellite](/assets/images/ukraine_sat.tif)

[< Prev](/_posts/2022-03-25-well-deserved_rest)    [Next >](/all_caught_up)
