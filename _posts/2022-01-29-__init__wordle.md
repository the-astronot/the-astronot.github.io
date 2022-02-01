---
layout: post
permalink: /_posts/2022-01-29-__init__wordle
permalink_name: "/posts/2022-01-29"
filename: "2022-01-29"
title: cat __init__wordle.md
link_title: __init__wordle
projects: wordle_solver
---
**29 January, 2022**

Song of the Day: [**Rock'n Roll Suicide**](https://youtu.be/SOgVoxqKU7U) - *David Bowie*

A few days ago one of my roommates introduced me to [wordle](https://www.powerlanguage.co.uk/wordle/). I got to wondering whether I could design a program to solve it without my input, and it turns out I could. At the moment, all it does is guess random words out of the dictionary of currently possible words, and resize the dictionary once it has gained new information. Even with just that, it tends to guess the correct word in 5 or 6 tries, and only fails on words where it gets 4 letters correct, but there are too many combinations for the first letter. I am planning on improving this algorithm to include some machine learning, giving it multiple options of strategies to try on each turn and training it to pick the best options.

[< Prev](/_posts/2022-01-22-v1-0-1)    [Next >](/_posts/2022-01-31-__init__nasa)
