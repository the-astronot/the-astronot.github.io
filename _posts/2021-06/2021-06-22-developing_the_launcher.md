---
layout: post
permalink: /_posts/2021-06-22-developing_the_launcher
permalink_name: "/posts/2021-06-22"
filename: "2021-06-22"
title: cat developing_the_launcher.md
link_title: developing_the_launcher
projects: deep_thought
---
# Project: [Deep_Thought](/projects/deep_thought) [GitHub Page](https://github.com/Jormungandr1105/parallel-reqs)
Today, I'm trying to figure out how I'm going to setup/write the program that will facilitate managing my cluster and running jobs on it. Since my cluster very small, and I am also managing my own power and thermals, I am creating a wrapper for the standard mpiexec/slurm job launcher that allows for my added requirements. Since I'm using an arduino to manage the physical system, I dedicate one cpu core on the head node to constantly monitor output from the job, and extra info from the arduino and send commands to the arduino. That process is pretty well set up, and now I am working on the second half, that will wrap around the standard job launchers and sends output to the former program.