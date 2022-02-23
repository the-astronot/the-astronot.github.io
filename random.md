---
layout: page
permalink: /random
permalink_name: /random
title: ls random
---
Just a spot to toss random stuff I find.
<ul>
  {% for random in site.pages %}

		{% if random.path contains "_random" %}
			<li>
      	<a href="{{ random.url }}">{{ random.filename }}</a>
				<text> {{ random.tags }} </text>
			</li>
		{% endif %}
  
  {% endfor %}
</ul>
