---
lang: en
title: "Elzero Frontend Challenges: Build a button that shows and hides a paragraph"
author: Elmouatez Billah Benariba
tags:
  - post
  - HTML
  - CSS
  - Frontend
  - Elzero-Frontend-Challenges
  - featured
date: 2023-05-27T14:59:25.270Z
image: /assets/images/blog/showhide-paragraph-2-.png
imageAlt: Build a button that shows and hides a paragraph - Elzero Frontend Challenges
description: Explore my blog post where I provide a step-by-step breakdown of
  how I tackled Show/Hide Paragraph Elzero Frontend Challenge.
pageDescription: Explore my blog post where I provide a step-by-step breakdown
  of how I tackled Show/Hide Paragraph Elzero Frontend Challenge.
seoImage: /assets/images/blog/showhide-paragraph-2-.png
---
# Overview on Elzero Frontend Challenges

Elzero Frontend Challenges is a collection of coding challenges designed for learners who want to improve their HTML and CSS skills. Created by [Osama Mohamed (Elzero)](https://twitter.com/Osama_Elzero), these challenges are available in the frontend track of [Elzero Web School](https://elzero.org/tracks/front-end/). \[[1]](https://mouatezbenariba.me/src/html/case-study/elzero-frontend-challenges.html)

# [](https://hashnode.mouatezbenariba.me/build-a-button-that-shows-and-hides-a-paragraph-elzero-frontend-challenges#heading-introduction "Permalink")Introduction

As part of my journey to enhance my frontend skills, I took on the [Elzero Frontend Challenges](https://elzero.org/category/challenges/front-end-challenges/). Initially, progress was slow, but I was determined to overcome the obstacles and improve my abilities. Upon my return to the challenges, I encountered some new additions that piqued my interest. In this blog post, I will share my experience and insights gained from tackling the "**[show/hide paragraph challenge](https://elzero.org/frontend-show-hide-paragraph/)**".

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1685195852930/2fab1a79-fcaa-421b-826e-ce0b806a0765.gif?auto=format,compress&gif-q=60&format=webm)

## [](https://hashnode.mouatezbenariba.me/build-a-button-that-shows-and-hides-a-paragraph-elzero-frontend-challenges#heading-understanding-the-challenge "Permalink")Understanding the Challenge

The objective of this challenge was to create a button that toggles the visibility of a paragraph when clicked. While seemingly simple, it taught me an important lesson: "Understanding the question is half the answer."

## [](https://hashnode.mouatezbenariba.me/build-a-button-that-shows-and-hides-a-paragraph-elzero-frontend-challenges#heading-building-the-foundation "Permalink")Building the Foundation

To begin, I created a basic HTML structure for the challenge. Following best practices, I adhered to the BEM (Block, Element, Modifier) naming convention, ensuring a clean and organized codebase. With the foundation in place, I proceeded to the next stage of styling the elements using CSS.

```html
<div class="container action">
  <button class="action__btn">Click</button>
  <p class="action__content">This is My Paragraph</p>
</div>
```

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1685196017505/699c4549-f449-4cde-be91-82ea0798c00b.png?auto=compress,format&format=webp)

## [](https://hashnode.mouatezbenariba.me/build-a-button-that-shows-and-hides-a-paragraph-elzero-frontend-challenges#heading-perfecting-the-styling "Permalink")Perfecting the Styling

To achieve the desired design, I leveraged CSS to add the necessary visual enhancements.

For the button, I removed the default border styling and added a hover effect that changed the mouse cursor to a hand. These subtle details contribute to a better user experience.

```css
.action__btn {
  /* reset all inherited styles to their initial value */
  all: unset;
  /* add custom button style */
  padding: 0.2rem 1.2rem;  
  background-color: var(--cyan-100);
  border-color: var(--cyan-100);
  border-radius: 0.4rem;
  color: white;
  font-size: 1.4rem;
  cursor: pointer;
}
```



Moving on to the paragraph, I applied appropriate styles to ensure they aligned with the provided design.

I used the "[Perfect Pixel](https://chrome.google.com/webstore/detail/perfectpixel-by-welldonec/dkaagdgjmgdmbnecmcefdhjekcoceebi)" extension to ensure precise pixel-sized programming since I only had an image of the design and not a Figma or Adobe XD file.

## [](https://hashnode.mouatezbenariba.me/build-a-button-that-shows-and-hides-a-paragraph-elzero-frontend-challenges#heading-javascript-implementation "Permalink")JavaScript Implementation

As I delved into the JavaScript implementation, I initially planned to create an event listener that would toggle classes with each click, allowing for seamless show/hide functionality. However, upon re-reading the challenge requirements, I realized the need to incorporate the `window.getComputedStyle()` method.

> `Understanding the question is half the answer.`

## [](https://hashnode.mouatezbenariba.me/build-a-button-that-shows-and-hides-a-paragraph-elzero-frontend-challenges#heading-taking-a-closer-look-at-getcomputedstyle "Permalink")Taking a Closer Look at `getComputedStyle()`

The `Window.getComputedStyle()` method returns an object containing the values of all CSS properties of an element, after applying active stylesheets and resolving any basic computation those values may contain [\[2]](https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle). By utilizing this function, we can retrieve the **visibility property value** and manipulate it accordingly.

## [](https://hashnode.mouatezbenariba.me/build-a-button-that-shows-and-hides-a-paragraph-elzero-frontend-challenges#heading-solution "Permalink")Solution

To bring the challenge to life, I wrote the following JavaScript code:

```javascript
const actionBtn = document.querySelector('.action__btn');
const actionCtn = document.querySelector('.action__content');
const CtnComptStyle = window.getComputedStyle(actionCtn);

function setOpacity() {
  CtnComptStyle.visibility === 'visible'
    ? actionCtn.style.setProperty('visibility', 'hidden')
    : actionCtn.style.setProperty('visibility', 'visible');
}

actionBtn.addEventListener('click', setOpacity);
```

The code above checks the visibility styling of the paragraph element when the button is clicked. By toggling the visibility property between 'visible' and 'hidden', the paragraph is displayed or hidden accordingly.

## [](https://hashnode.mouatezbenariba.me/build-a-button-that-shows-and-hides-a-paragraph-elzero-frontend-challenges#heading-links "Permalink")Links

* Github: [Show/Hide paragraph Challenge](https://github.com/mouatezbenariba/Elzero-Frontend-Challenges/tree/main/show-hide-paragraph)
* Demo: [Show/Hide paragraph Challenge](https://mouatezbenariba.github.io/Elzero-Frontend-Challenges/show-hide-paragraph/)
* Codepen: [Show/Hide paragraph Challenge](https://codepen.io/mouatezbenariba/pen/poxBvga)

## [](https://hashnode.mouatezbenariba.me/build-a-button-that-shows-and-hides-a-paragraph-elzero-frontend-challenges#heading-key-takeaways "Permalink")Key Takeaways

1. Understanding the challenge requirements is crucial for success. Take the time to comprehend the task before diving into implementation.
2. Adopt best practices such as using structured HTML, following naming conventions, and applying appropriate CSS styles.

Use `getComputedStyle` to access and manipulate computed styles of elements dynamically.

## [](https://hashnode.mouatezbenariba.me/build-a-button-that-shows-and-hides-a-paragraph-elzero-frontend-challenges#heading-give-it-a-try "Permalink")Give it a Try!

I invite you to rate my work and give it a try yourself. Engaging in frontend challenges like this one can be an excellent opportunity to enhance your skills, expand your knowledge, and improve your problem-solving abilities.