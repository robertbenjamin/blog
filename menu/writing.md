---
title: 'Archive'
---

<ul class="posts">
  {% for post in site.posts %}
    <li class="post">
      <a class="link" href="{{ site.github.url }}{{ post.url }}">{{ post.title }}</a>
      <div class="date">{{ post.date | date_to_string }}</div>
    </li>
  {% endfor %}
</ul>
