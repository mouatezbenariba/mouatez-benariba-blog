---
lang: en
title: "Elzero Frontend Challenges: Build a Font Changer"
author: Elmouatez Billah Benariba
tags:
  - post
  - featured
  - HTML
  - CSS
  - Frontend
  - Elzero-Frontend-Challenges
date: 2023-06-22T23:40:30.546Z
image: /assets/images/blog/showhide-paragraph.png
imageAlt: Build a Font Changer - Elzero Frontend Challenges
description: Explore my blog post where I provide a step-by-step breakdown of
  how I tackled Font Changer Elzero Frontend Challenge.
pageDescription: Explore my blog post where I provide a step-by-step breakdown
  of how I tackled Font Changer Elzero Frontend Challenge.
seoImage: /assets/images/blog/showhide-paragraph.png
---
## Overview on Elzero Frontend Challenges

Elzero Frontend Challenges is a collection of coding challenges designed for learners who want to improve their HTML and CSS skills. Created by [Osama Mohamed (Elzero)](https://twitter.com/Osama_Elzero), these challenges are available in the frontend track of [Elzero Web School](https://elzero.org/tracks/front-end/).

## Understanding the Challenge

The [Font Changer Challenge](https://elzero.org/frontend-font-changer/) is a straightforward and easy task that involves the following objectives:

* Creating a Select Box containing a collection of Fonts for selection.
* When any Font is selected, it should be applied directly to the page as shown in the image.
* The task should be implemented in a dynamic manner, so that any Font added to the Select Box is automatically applied.

## Building the Skelton

The Font Changer consists of an input and an output component:

* **Input:** A select list containing three font options.
* **Output:** A text element where the font-family style will be applied.

To achieve this, I created a select list with three options, each representing a font's value and name. The output component is a div containing the text "Testing Fonts Here." These elements are encapsulated within a parent div. For consistent and clear class naming, the BEM (Block Element Modifier) methodology was followed.

```html
<div class="container font-changer">
  <!-- input -->
  <select name="fonts" id="text-fonts" class="font-changer__list">
    <option value="Open Sans">Open Sans</option>
    <option value="Metal Mania">Metal Mania</option>
    <option value="Caesar Dressing">Caesar</option>
  </select>
  <!-- output -->
  <div class="font-changer__result">Testing Fonts Here</div>
</div>
```

## Perfecting the Styling

To recreate the provided design, I applied styles to both the select list and the test text.

## Font Changer Logic

Each time the select list value changes, the font-family CSS property of the Test text gets the value of the selected font.

## JavaScript Implementation

First, I searched for the desired fonts on Google Fonts and included them using link tags.

Second, I set the default font family for the test text as "Open Sans." This ensures that the text always has a font style applied.

T﻿hird, I added an event listener to the select. Whenever a change occurs in the select element, the font family of the Test text is updated based on the selected value (Font Name)in the select element. The value attribute of each option in the select element corresponds to the font family declaration provided by Google Fonts.

```javascript
const font = document.getElementById('text-fonts');
const text = document.querySelector('.font-changer__result');

font.addEventListener('change', (e) => {
  text.style.fontFamily = e.target.value;
});

```

## Links

* Github: ﻿[Font Changer](https://github.com/mouatezbenariba/Elzero-Frontend-Challenges/tree/main/font-changer)
* Demo: [﻿Font Changer](https://mouatezbenariba.github.io/Elzero-Frontend-Challenges/font-changer/)
* Codepen: [Font Changer](https://codepen.io/mouatezbenariba/pen/JjeRVmB)﻿﻿

## Give it a Try!

I invite you to rate my work and give it a try yourself. Engaging in frontend challenges like this one can be an excellent opportunity to enhance your skills, expand your knowledge, and improve your problem-solving abilities.