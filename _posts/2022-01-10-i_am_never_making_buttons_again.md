---
layout: post
permalink: /_posts/2022-01-10-i_am_never_making_buttons_again
permalink_name: "/posts/2022-01-10"
filename: "2022-01-10"
title: cat i_am_never_making_buttons_again.md
link_title: i_am_never_making_buttons_again
projects: terminal_tv
---
**10 January, 2022**

Song of the Day: [**Feel Good Inc.**]() - *Gorillaz*

First day of Spring classes. Looking forward to the semester ahead. Little worried about Algo, as I learned today that the final grade with be the minimum of my homework avg and test avg, as well as that the tests are notoriously difficult. But I guess we'll see how that goes.

After classes, I spent the rest of the afternoon and evening ripping my hair out looking for a solution to the next aspect of my terminal_tv project. I essentially needed 2 non-blocking while(True) loops:

1. To handle single character keyboard input from the user
2. To continously make calls for the next frame if the player was supposed to be playing video

I tried all sorts of methods. I tried curses. I tried pygame. I tried keyboard. I must have searched every StackOverflow answer under the sun. I ended up liking a version of getch, which while blocking, accepted input without "\n". I figured I'd be fine tossing that in a separate thread by itself and letting it go nuts, while simultaneously tossing the frame changer in a separate one. NOPE. That led to the frame advancer only running once the rest of the program quit. I figured multiprocessing might fix it. NOPE. I realized what I was doing was overkill, removed the second thread for the frames, and put that in a while loop at the end of the program. NOPE. Switching the buttons and frames calls? NOPE. By this point I was pretty livid. My program was finally working all together, and freaking keyboard input was what was breaking it for me.

[Thats when I found it.](https://github.com/simondlevy/kbhit)

Simon D. Levy's KBHit saved this project. I refactored my code (not well, I wasn't sure it would work, regardless, there's a lot of cleanup to do) to use his class, and [IT FINALLY WORKS!](https://youtu.be/iXaw70X7wb4?t=125)

In all seriousness, I made a [video](https://youtu.be/WiUcDEvBqWc) of the program in action, playing my butchered version of Feel Good Inc. by Gorillaz.

NEXT STOP SOUND!

[< Prev](/_posts/2022-01-09-initializing_the_player)    [Next >](/all_caught_up)
