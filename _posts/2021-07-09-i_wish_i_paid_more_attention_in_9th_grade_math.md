---
layout: post
permalink: /_posts/2021-07-09-i_wish_i_paid_more_attention_in_9th_grade_math
permalink_name: "/posts/2021-07-09"
filename: "2021-07-09"
title: cat i_wish_i_paid_more_attention_in_9th_grade_math.md
link_title: i_wish_i_paid_more_attention_in_9th_grade_math
projects: project-atlas
---
I spent a fair amount of time over the past 2 days trying to figure out ways around buying very expensive sensors for my telescope project, and think I've finally stumbled onto a solution.
The original plan was to align the telescope with due north and as close to level as I could get, and use those points as a basis to work off of to rotate it by the right ascension and declination required to view a heavenly body.
This, however, requires an abundance of precision aligning the telescope to get halfway decent results, which is difficult as sensors cost money and it boasts an 8" diameter mirror, which makes it pretty massive (strictly in terms of it having an abundance of mass).
I figured I ought to be able to use math to make this problem easier for myself, and it appears that I was correct.

**THE CLAIM:**

Given 2 points whose locations are known by 2 separate 2D coordinate planes (at angle theta from each other and offset in the x and y axis from each other by any value) a formula can be obtained such that points with coordinates known on one plane can be located on the other.

**THE PROOF:**

Given coordinate planes C and C', with each containing 2 points with coordinates (x,y), (a,b) and (x',y'), (a',b') respectively.
For each plane, calculate phi, where: 
phi = arccos((a-x)/h), 
and 
h = sqrt((a-x)^2 + (b-y)^2).

Then:
theta = phi - phi'

Now, to calculate the offset, we will use the point (x,y).
The equation for the coordinates on the other plane is as follows:


x' = xcos(theta) + ysin(theta)
y' = xcos(theta + (pi/2)) + ysin(theta + (pi/2)


This calculation will prove to yield incorrect results, as the calculated x' and y' will most likely not match those given.
For this reason, an offset is added to the above equation, of the form (x_given-x_calc, y_given-y_calc).

The final equations can be used to plot any point from the first coordinate plane accurately on the second.

Final Equations:
x' = xcos(theta) + ysin(theta) + (x_given-x_calc)
y' = xcos(theta + (pi/2)) + ysin(theta + (pi/2)) + (y_given-y_calc)

This solution took me waaay too long to figure out, and makes me wish I spent more time on my geometry skills when I was in high school.

In conclusion, this bit of math should be able to save me quite a bit of money on expensive sensors and mechanisms, as it implies that I should be able to (with minor modifications) convert accurate coordinates for a perfectly setup telescope into accurate coordinates for an imperfectly setup telescope. All I will need is to point the telescope at two celestial bodies that I know the correct coordinates of, log whatever my telescope says its reading, and then extraploate the coordinate system for other bodies I want to view.