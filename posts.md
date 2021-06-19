---
layout: page
permalink: /posts
permalink_name: /posts
title: ls posts
---
<ul>
  {% for post in site.posts %}
    <li>
			<text> {{ post.filename }} </text>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>