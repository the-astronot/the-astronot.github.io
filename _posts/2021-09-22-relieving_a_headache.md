---
layout: post
permalink: /_posts/2021-09-22-relieving_a_headache
permalink_name: "/posts/2021-09-22"
filename: "2021-09-22"
title: cat relieving_a_headache.md
link_title: relieving_a_headache
projects: deep_thought
---
## September 22, '21

Today, around studying for a CompOrg exam, I spent some time fixing a problem that had been giving me a headache for the past few days.

I've been trying to get mybcluster up and running, piece by piece, and have become quite frustrated at having to repeat the same few processes across them all one after another. Enter, my new bash script.

This new script allows me to run any commands I desire across as many nodes as I desire all at about the same time. Theoretically, it should allow me to git pull the latest from my dev branch onto each node in the cluster and afterwards build the MPICH library all over again should I feel the need.

Tomorrow's looking pretty busy with PropSys hw, so it'll probably be Friday before I can actually give it a full test with anything aside from cursory file creation/deletion and echoing ls -a.
