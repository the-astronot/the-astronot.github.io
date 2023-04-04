---
layout: page
permalink: /images
permalink_name: /images
title: ls images
---
<div class="row">
<div class="column">
  {% for image in site.data.images.left %}
    <a href="{{ image.link }}">
    {% if image.depth < 5 %}
      <img src="{{ image.small_link }}"/>
    {% endif %}
    {% if image.depth > 4 %}
      <img src="{{ image.small_link }}" loading="lazy"/>
    {% endif %}
    </a>
  {% endfor %}
</div>

<div class="column">
  {% for image in site.data.images.right %}
    <a href="{{ image.link }}">
    {% if image.depth < 5 %}
      <img src="{{ image.small_link }}"/>
    {% endif %}
    {% if image.depth > 4 %}
      <img src="{{ image.small_link }}" loading="lazy"/>
    {% endif %}
    </a>
  {% endfor %}
</div>

</div>
