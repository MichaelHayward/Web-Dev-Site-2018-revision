'use strict';document.addEventListener('DOMContentLoaded',function(){contactHide(),hamburger()});function contactHide(){var a=Array.prototype.slice.call(document.querySelectorAll('.email-hide'),0),b=Array.prototype.slice.call(document.querySelectorAll('.phone-hide'),0);0<a.length&&a.forEach(function(c){var g='mikebuildswebsites'+'@'+'gmail'+'.'+'com';c.innerHTML=g,c.setAttribute('href','mailto:'+g)}),0<b.length&&b.forEach(function(c){var d='+44',e='7858750238';c.innerHTML=d+' (0) '+e,c.setAttribute('href','tel:'+(''+d+e))})}function hamburger(){var a=Array.prototype.slice.call(document.querySelectorAll('.navbar__hamburger'),0);0<a.length&&a.forEach(function(b){b.addEventListener('click',function(){var c=document.querySelector('.navbar__menu');b.classList.toggle('is-active'),c.classList.toggle('is-active')})})}
