---
layout: post
permalink: /_posts/2021-06-19-deep_thought_init
permalink_name: "/posts/2021-06-19"
filename: "2021-06-19"
title: deep_thought_init
project: /assets/projects/deep_thought.md
---
# Deep_Thought
My attempt at building my own cluster computer from the ground up. At the moment, it consists of 1 Odroid HC-1 with an nfs mounted 250GB SSD acting as the head controlling 6 Odroid MC-1s. The head node is connected to an arduino mega that controls an led strip, relays that regulate the power supplies for the worker nodes, and the fans in charge of cooling the system. The whole thing is mounted a sheet of pegboard and powered by one 5v and one 12v power supply.

# NODES: 
- CPU **Samsung Exynos 5422**: bigLITTLE configuration
	- 8 cores: 4@2GHz, 4@1.4GHz
- 2 GBs of Ram
- Mali T628 m6 GPU

# SPECIFICATIONS:
- System designed to use MPICH v3.4 as its version of MPI and is capable of running both C++ and Python scripts in parallel
- Software for system configuration I wrote can be found [here](https://github.com/Jormungandr1105/parallel-reqs)
- The project file for this project can be found [here](/projects/deep_thought)

# CURRENT STATS:
- **56 Nodes**: 7 physical nodes * 8 cores each
- **14 GB**s of Ram
- **250 GB** nfs shared storage
- **HPLinpack** results hopefully coming soon

# PHOTOS:
Coming Soon.