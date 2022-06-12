---
layout: page
permalink: /random
permalink_name: /random
title: ls random
---
Anything that doesn't fit anywhere else
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
