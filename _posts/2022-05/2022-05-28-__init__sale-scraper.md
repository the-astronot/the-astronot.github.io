---
layout: post
permalink: /_posts/2022-05-28-__init__sale-scraper
permalink_name: "/posts/2022-05-28"
filename: "2022-05-28"
title: cat __init__sale-scraper.md
link_title: __init__sale-scraper
projects: project-sale-scraper
---
**28 May, 2022**

Song of the Day: [**World War II (Pt. 2)**](https://youtu.be/51wZem-UwPI) - *Wax Fang*

Found a project to chase, and it shouldn't even take too long!

Despite my inability to actually do much in the way of homelabbing this summer, I can certainly continue to check for deals for pieces of tech to take back to NY with me. Having browsed r/homelabsales, I have come across quite a few deals that I've missed out on that I might have snatched up. So, I decided I might as well try my skills at scraping the subreddit for stuff I want to see if I can't keep myself from missing out. Having looked into the "praw" library of the Reddit API for python, this seems pretty straightforward. Plus, I should be able to reuse the same repo to watch other subreddits in the future, like mechanical keyboard sales or pedalboard sales.

To accomplish this, I am creating json files to store:

1. the subreddits to check
2. required text in header to bother reading the post
3. keywords from post to assign value to post

The total value of the post is then calculated to determine what level of action is required (i.e. email, ping, discord message, none, etc).

[< Prev](/_posts/2022-05-27-web_maintenace)    [Next >](/_posts/2022-05-29-commence_scraping)
