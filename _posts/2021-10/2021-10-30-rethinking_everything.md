---
layout: post
permalink: /_posts/2021-10-30-rethinking_everything
permalink_name: "/posts/2021-10-30"
filename: "2021-10-30"
title: cat rethinking_everything.md
link_title: rethinking_everything
projects: deep_thought
---
As I come closer to finally having everything up and running, I've come to realize that I've made some pretty stupid decisions in terms of how my code functions.

The good news is that the initial setup should be entirely fixed now. I am relatively certain that I shouldn't have to mess with that again for the foreseeable future.

The "meh" news is that my launcher/manager system is pretty awful. But, I have come to see it for what it is and the changes I need to make.

**To Begin,** I'm essentially merging the hardware manager and job launcher together to create a greater manager/scheduler that will run in the background. Jobs and data queries will be submitted to this manager via a named pipe, and returned info from another named pipe. This will obviate the need for the messy file-writing and checking method that I have now,  as well as allowing for checks to be made on the process while it is running, without interfering with other running processes.

The new job submission process will work like so:

1. "runjob" (not married to that name) will be run from the terminal
2. "runjob" will perform some error checks, and pass the info for the job on to the manager via the "in" pipe
3. "job_manager" (not married to this either) will get the information, ready the physical nodes and launch the job as a subprocess
4. "job_manager" will send confirmation throught the "out" pipe to "runjob"
5. "runjob" will exit

Querying will be allowed like so:

1. Program connects to the "in" and "out" pipes
2. Program sends data to "job_manager" via the "in" pipe
3. "job_manager" processes data, performs actions
4. "job_manager" returns data via the "out" pipe
5. Program disconnects from the pipes and uses retrieved data

As far as I can tell, this is the simplest way for me to accomplish all the goals I have for this software, and my cluster overall. It may take a bit of time, but I think it is worth it to get all that I want out of the system.
