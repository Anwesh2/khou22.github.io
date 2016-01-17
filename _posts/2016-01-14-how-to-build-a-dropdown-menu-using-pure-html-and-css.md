---
layout: post
title: "How to Build a Dropdown Menu Using Pure HTML and CSS"
author: "Kevin Hou"
date: 2016-01-14 23:54:51
description: ""
category: Programming
tags: [html, css]
featured: "no"
---
Bare Bones Dropdown Menu - Pure CSS

<h3>HTML</h3>
{% highlight html %}
<ul class="nav-ul">
  <li class="nav-li">
    <a class="nav-a" href="#">Work &#9662;</a>
    <ul class="nav-ul dropdown">
      <li class="nav-li"><a href="#">Apps</a></li>
      <li class="nav-li"><a href="#">Projects</a></li>
      <li class="nav-li"><a href="#">School Projects</a></li>
    </ul>
  </li>
  <li class="nav-li"><a class="nav-a" href="#">Contact</a></li>
</ul>
{% endhighlight %}

<h3>CSS</h3>
{% highlight css %}
CSS:
/*Dropdown info from: http://www.tutorialrepublic.com/faq/show-hide-dropdown-menu-on-mouse-hover-using-css.php*/
.nav-ul{
    /*padding: 0;*/
    list-style: none;
    background: #f2f2f2;
}
.nav-ul .nav-li{
    display: inline-block;
    position: relative;
    line-height: 21px;
    /*text-align: left;*/
}
.nav-ul .nav-li .nav-a{
    display: block;
    padding: 8px 25px;
    color: #333;
    text-decoration: none;
}
.nav-ul .nav-li .nav-a:hover{
    color: #fff;
    background: #939393;
}
.nav-ul .nav-li .nav-ul.dropdown{
    min-width: 125px; /* Set width of the dropdown */
    background: #f2f2f2;
    display: none;
    position: absolute;
    z-index: 999;
    left: 0;
}
.nav-ul .nav-li:hover .nav-ul.dropdown{
    display: block; /* Display the dropdown */
}
.nav-ul .nav-li .nav-ul.dropdown .nav-li{
    display: block;
}
{% endhighlight %}