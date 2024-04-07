# Frontend Mentor - Pod request access landing page solution

This is a solution to the [Pod request access landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pod-request-access-landing-page-eyTmdkLSG). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Receive an error message when the form is submitted if:
  - The `Email address` field is empty should show "Oops! Please add your email"
  - The email is not formatted correctly should show "Oops! Please check your email"

### Screenshot

#### Desktop View



#### Tablet View



#### Mobile View



### Links

- [Solution URL](https://github.com/heejung-hong/pod-request-access)
- [Live Site URL](https://heejung-hong.github.io/pod-request-access/)

## My process

### Built with

- HTML
- CSS
- JavaScript
- Flexbox

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

I learned to create specific width points for different screens sizes and to 

To see how you can add code snippets, see below:

```css
/* Mobile View */
@media only screen and (max-width: 600px) {
  
}

/* Tablet View */
@media only screen and (min-width: 600px) and (max-width: 1200px) {

}

/* Desktop View */
@media only screen and (min-width: 1200px) {

}
```
```js
// Separating email logic for empty email field and email not formatted correctly.
if (emailInput.value === "") {
  emailError.innerHTML = "Oops! Please add your email";
  emailError.classList.add("oops");
  subscribeActive.classList.remove("subscribe-active")
  document.getElementById("subscribe").disabled = true;
  return false;
} else if (!emailInput.value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
  emailError.innerHTML = "Oops! Please check your email";
  emailError.classList.add("oops");
  subscribeActive.classList.remove("subscribe-active")
  document.getElementById("subscribe").disabled = true;
  return false;
} 
```

### Useful resources

- [Responsive Web Design](https://stackoverflow.com/questions/13550541/media-min-width-max-width) - This helped me to create specific layout for different device sizes.

## Author

- Website - [Portfolio](https://heejung-hong.github.io/Portfolio/)
- Frontend Mentor - [@heejung-hong](https://www.frontendmentor.io/profile/heejung-hong)
- LinkedIn - [heejung-hong](https://www.linkedin.com/in/heejung-hong/)
