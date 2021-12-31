---
layout: page
permalink: /images
permalink_name: /images
title: ls images
---
<div class="row">
<div class="column">
  {% for image in site.data.images.left %}
    <img src="{{ image.link }}" alt="image" />
  {% endfor %}
</div>

<div class="column">
  {% for image in site.data.images.right %}
    <img src="{{ image.link }}" alt="image" />
  {% endfor %}
</div>

</div>