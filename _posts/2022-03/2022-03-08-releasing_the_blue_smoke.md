---
layout: post
permalink: /_posts/2022-03-08-releasing_the_blue_smoke
permalink_name: "/posts/2022-03-08"
filename: "2022-03-08"
title: cat releasing_the_blue_smoke.md
link_title: releasing_the_blue_smoke
projects: project-atlas,deep_thought
---
**08 March, 2022**

Song of the Day: [**Who Can It Be Now?**](https://youtu.be/SECVGN4Bsgg) - *Men At Work*

After dropping Emilie off at the train station, I set to work on my telescope. I got the last of the parts I needed delivered yesterday, so I had everything on hand to build the stepper control circuits.

Things did not go as planned...

After I connected the pi and everything else to the stepper motor controller (the a4988), it decided to sit there and do absolutely nothing. I poked around at the different wires to try and figure out what I was doing wrong, and realized that the battery wasn't making proper contact and therefore the system wasn't being adequately powered. I should have double checked my work...

**BOOM**

I blew the decoupling capacitor and released the blue smoke that makes electronics work. In my attempts to get the system to work, I had switched the positive and negative wires from the battery.

I was fine, but I wasn't overly keen on trying that again, so I figured I'd try it again tomorrow. Before I realized the cause of the spontaneous explosion, I decided that I would be better served using a 12V power supply to test, rather than the battery. I remembered that my cluster computer was equipped with both 5 and 12 volt PSUs, and thought I might scrounge the 12V one for a test.

That's when I realized the state I had left the cluster in.

I've left it leaning against the window in my room, and the sun had not been kind. Not to mention that much of it was falling apart. That's when I realized that the desk I had built had it's own pegboard that I didn't really end up utilizing very well. I decided that I might as well kill a few birds with the stones I had one me. The cluster will be moving to the desk, allowing for a 12V tap to also be run to the desktop, allowing me to use it to test projects on the desk. I'll use the PSU to get the stepper motor controller working the way it should, and then cement the circuit and move back to the battery.

To round out the night, I began disassembling the cluster and designing/printing a bracket to hold the arduino, relays, and led strip circuits. I cannot believe I actually just put those on the board originally with double sided tape *facepalm*.

[< Prev](/_posts/2022-03-05-and_now_for_something_completely_different)    [Next >](/_posts/2022-03-09-redemption)
