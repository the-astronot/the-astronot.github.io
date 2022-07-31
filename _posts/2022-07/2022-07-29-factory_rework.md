---
layout: post
permalink: /_posts/2022-07-29-factory_rework
permalink_name: "/posts/2022-07-29"
filename: "2022-07-29"
title: cat factory_rework.md
link_title: factory_rework
projects: system_setup
---
**Friday, 29 July, 2022**

Song of the Day: [**Using**](https://youtu.be/_JPecqm1VZQ) - *Sorority Noise*

Well, it happened. I actually found a use for something I learned in PSOFT. I can no longer claim that I got nothing out of that class.

Anyways, I had been having some trouble with my system_setup repo. I actually use it pretty often to generate boilerplate files and cut down on rewriting the same dozen lines in every file. As I continued using it, I discovered more and more issues arising from how complicated and convoluted I had set it up.

While trying to think up some clever way of simplifying the whole thing, my mind wandered back to PSOFT and the design styles that we discussed there. I realized that a factory method would suit my needs pretty well, as every file type that I would be adding could pretty easily be massaged into a subclass of the "any" file type.

In the end, it worked! I created a standard file class, and provided it with some functions that every file would need. I then created an assortment of special filetypes as subclasses, each with their own variables and functions, as required. From there, it was a simple matter to create a File Factory function, which took my commandline args and decided which filetype to create.

The hardest files were C++ and repositories. They both consisted of making multiple files, which could be of different types and placed in different locations depending on the input. At the end of the day though, they're working, and I've done what I can to simplify them as much as possible.

[< Prev](/_posts/2022-07-28-jsc_day_34)    [Next >](/_posts/2022-07-30-subclass_division)
