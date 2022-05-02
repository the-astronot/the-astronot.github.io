---
layout: page
permalink: /projects
permalink_name: /projects
title: ls projects
---
<ul>
  {% for project in site.projects %}

		<li>
			<a href="{{ project.url }}">{{ project.filename }}</a>
			<text> {{ project.tags }} </text>
		</li>
  
  {% endfor %}
</ul>
