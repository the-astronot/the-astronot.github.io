---
layout: page
permalink: /projects
permalink_name: /projects
title: ls projects
---
<ul>
  {% for project in site.pages %}

		{% if project.path contains "assets/projects" %}
			<li>
      	<a href="{{ project.url }}">{{ project.filename }}</a>
				<text> {{ project.tags }} </text>
			</li>
		{% endif %}
    
  {% endfor %}
</ul>