---
layout: post
permalink: /_posts/2022-12-20-__init__mtg_sim
permalink_name: "/posts/2022-12-20"
filename: "2022-12-20"
title: cat __init__mtg_sim.md
link_title: __init__mtg_sim
projects: mtg_sim
---
**Tuesday, 20 December, 2022**

Song of the Day: [**The Foggy Dew**](https://youtu.be/IKU1UxRlE0Q) - *Derek Warfield and the Young Wolfe Tones*

Classes are over!

So glad to finally have time to myself again.

I've picked up a new project to immediately fill that time once more, but at least it's something I actually want to be doing. While trying to optimize my Magic: The Gathering deck the other night, I wished I had some way of quickly running through games with a deck and see how the addition or subtraction of a few cards impacted the stats against an opponent. Then, I remembered I was a Computer Scientist and tried to figure out how best to tackle the problem.

After a bit of thought, I realized that what I would need first is some sort of simulation for the game, which I could later worry about strapping an AI or other techniques onto. I very quickly realized that this would be easier said than done. If by some chance, someone other than me is actually reading this and is unfamiliar with the game, allow me to explain: The game is incredibly complicated. Not so much in the 4D chess sense, but in the sense that every rule has an exception, and that exception has rules with exceptions... And the game has been around for like 30 years, with a lot of crazy cards. For instance:

![Shahrazad](https://usercontent2.hubstatic.com/14584785_f520.jpg).

When Sharazad is played, you have to start a new game, where the outcome affects the current game in progress. Obviously this is an extreme case, but it gives you some sense of just how wild things can get. Most of the rules like that are odd, but at least to a human it is interpretable and manageable. Writing code to allow shit like that to happen without specifically writing cases for it takes a lot more work. And I could not possibly hard code every interpretation of every card, that would be a monster.

So, my proto-language it is! I've decided to name it skulk, after one of the abilities from the game. By translating the abilities from the cards into skulk, I can build an interpreter to handle reading that skulk and affecting the game state.

This is going to be an extensive project, and I do not imagine I will finish it anytime soon. I'll try and update when I can with what I have.

[< Prev](/_posts/2022-11-25-return)    [Next >](/_posts/2022-12-31-year++)
