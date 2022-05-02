---
layout: post
permalink: /_posts/2022-02-12-and_back_to_failure
permalink_name: "/posts/2022-02-12"
filename: "2022-02-12"
title: cat and_back_to_failure.md
link_title: and_back_to_failure
projects: deep_thought
---
**12 February, 2022**

Song of the Day: [**Who By Fire**](https://youtu.be/ilGahIwQEQ0) - *Leonard Cohen*

So close, and yet so far. It seems the progress I made yesterday was for naught. The subprocess library I was using in python to run the actual MPI jobs does not seem to allow me to monitor it's output as a stream, rather giving me it all at it's termination. This is an issue for 2 reasons:

1. I was planning on using the output to determine the percent completion of the program at any given time. That would have been a nice way of getting that information with minimal modification to the programs I would be running on it.
2. More importantly, the module stores all of the output in a buffer, meaning that for long-running programs, or those with a lot of output, all of that output will end up caught in an ever-expanding buffer, which is not exactly a great thing to have happen to a system that is built for speed and efficiency, let alone on a board with only 2 gigs of ram.

So, it seems I am back to the drawing board. I have begun the process of trying to replicate the manager I had written in python in C++ instead, hoping that the lower level language will provide me greater ability to achieve what I had hoped. Luckily, due to the way in which my program already works, I will not have to rewrite the API or change the way I was going to rewrite any of my JS.

For the C++ version, there are a number of unknowns I need to clear up as a proof of concept before I can be sure that this workaround will actually work. I accomplished the first tonight, making a very basic program that utilized the named pipes provided by the API requests. That check was thankfully cleared with flying colors. Next, I will have to try and get threading to work, as I cannot be stuck monitoring the pipes all of the time, and at present see no way of setting a timeout. Lastly, I will have to try executing a command from withing the script, and see what happens to the output, namely whether it will provide me with a stream I may pull from before the program has completed.

[< Prev](/_posts/2022-02-11-core_functionality)    [Next >](/_posts/2022-02-14-from_the_ashes)
