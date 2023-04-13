---
layout: post
permalink: /_posts/2023-04-03-speed_increase
permalink_name: "/posts/2023-04-03"
filename: "2023-04-03"
title: cat speed_increase.md
link_title: speed_increase
projects: website
---
**Monday, 03 April, 2023**

**PROJECT(s):**  [website](/projects/website)

Song of the Day: [**Flash**](https://youtu.be/LfmrHTdXgK4) - *Queen*

I managed to finish up the OpSys due Wednesday, but due to the professor neglecting to post the assignment submission, I cannot officially put it behind me yet. Finding myself with a few free moments since my enigma project last month, I similarly decided to *wisely* spend the given time creating things that don't matter in the slightest. This time around that useless thing is this site.

I went to show one of the images from my site to a friend of mine the other day, only to find that the load times in the [images](/images) were absolutely ludicrous. So, having almost no experience in this sort of thing, I figured I'd investigate.

Using Google's [PageSpeed Insights](https://pagespeed.web.dev), I confirmed my suspicions that the quantity and size of my images were becoming a problem. What I had not anticipated however was just how large my images were. Quite a few had pixel sizes in the 3000 to 4000 range, which is absolutely massive for the screen limitations I was asserting. The largest any image can appear on my site is somewhere around the 600 mark, and that's only for devices with **very** specifically sized screens.

![PageSpeed_Pre_Changes](/assets/ref_images/pageSpeed_original.webp)

My solution to this was to add another image folder, where I placed "thumbnails" of my actual images, for lack of a better word. I modified one of my earlier forgotten attempts to fix this problem (namely a python script for converting images into the webp format), to also create a resized version of each image in a separate folder. From there, I learned to better use the Liquid templating language used by Jekyll to modify my existing **images.md** file, setting the hyperlinks to go to the original file while setting the img src to be the smaller version.

After modifying my code, my new **images.yaml** file looks like this:

```yaml
left:

- link: assets/images/centrifuge_analysis.webp
  small_link: assets/small_images/centrifuge_analysis.webp

- link: assets/images/EOL_door.webp
  small_link: assets/small_images/EOL_door.webp

- link: assets/images/frozen_fingers.webp
  small_link: assets/small_images/frozen_fingers.webp

...
```

![PageSpeed_Post_Thumbnails](/assets/ref_images/pageSpeed_post_thumbnails.webp)

Checking again with PageSpeed, this modification worked wonders. I did notice however that my load times were still longer than I would ideally like. Looking at the recommendations on the site, it seemed like another issue was that I was loading in all the images at the same time, even the ones at the bottom of the grid. After some poking around, I learned that in the html, you can use:

```xml
<img src="example.png" loading="lazy"/>
```

to "lazy load" an image. With that taken care of, I modified my Python scripts again to associate a depth value alongside the original and small file names. Then I modified the Liquid template to look like this:

```
This code block contained a Liquid script(?) form(?) whatever,
but as should be no surprise to anyone but me apparently,
if you include a code snippet in a location that is capable of
running said code, the code does not get printed, but executed instead
Sorry, no snippets for you. I've spent too long trying to create an
escape section for no payoff.
```

After making this modification, PageSpeed returned a perfect score for performance. In addition to speeding up the "largest contentful print" to 0.6 seconds, it also removed the secondary issue of the "cumulative layout shift" that I was experiencing previously. To the best of my knowledge/research, this means that the viewable content for my site appears within 0.6 seconds of loading the page, and the images no longer bounce around filling their assigned boxes as they load in (Can you tell I'm not actually a web developer?).

![PageSpeed_Post_Lazy_Loading](/assets/ref_images/pageSpeed_post_lazyloading.webp)

Unfortunately, in the moment I did not see the drop in CLS, and devoted a bunch of time to solving a problem that didn't exist. So, after that I felt like I have the site working adequately for now and will leave it at that. Maybe if I get some free time again, I can try and fix the issues with the terminal on the home page. Trying to implement a working directory structure was a terrible idea, but I feel the need to get it fixed up right.

Wow! An actual post that outlines the work I did to solve a problem rather than just complaining about whatever was going wrong in my life at any particular moment. What a miracle! We'll see if I can't get a streak going.

[< Prev](/_posts/2023-04-02-breathe)    [Next >](/_posts/2023-04-11-pathways)
