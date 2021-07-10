---
layout: page
permalink: /images
permalink_name: /images
title: ls images
---
<ul>
  {% for image in site.static_files %}
    {% if image.path contains 'assets/images/' %}
        <img src="{{ image.path }}" alt="image" />
    {% endif %}
  {% endfor %}
</ul>