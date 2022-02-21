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
      <img src="{{ image.link }}" alt="{{ image.link }}"/>
    </a>
  {% endfor %}
</div>

<div class="column">
  {% for image in site.data.images.right %}
    <a href="{{ image.link }}">
      <img src="{{ image.link }}" alt="{{ image.link }}"/>
    </a>
  {% endfor %}
</div>

</div>
