!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=27)}({1:function(e,t,n){"use strict";var o,r,i,s,a,c,l,d,u,f;(o=document.getElementsByTagName("*"),document.getElementsByTagName("canvas")[0],r=document.querySelector(".js-preloader"),i=document.querySelector(".js-preloader-text"),s=/background-image: url\(['"]?(.*?)['"]?\)/i,a=document.querySelector(".wrapper"),c=[],l=0,d=void 0,u=void 0,f=void 0,{shadowImgAdd:function(){(f=document.createElement("img")).setAttribute("src",d),c.push(f)},show:function(){var e=this;return new Promise(function(t){for(var n=0;n<o.length;n++){o[n].matches("img")?(d=o[n].getAttribute("src"),e.shadowImgAdd()):o[n].hasAttribute("style")&&s.test(o[n].getAttribute("style"))&&(d=o[n].getAttribute("style").slice(22,-1),e.shadowImgAdd()),u=100/c.length;for(var r=0;r<c.length;r++)c[r].onload=function(){(l+=u)<100?i.textContent=Math.ceil(l)+"%":(l=100,i.textContent=l+"%"),100===Math.ceil(l)&&t()}}}).then(function(){r.style.display="none",a.classList.remove("wrapper-hidden")})}}).show()},2:function(e,t,n){"use strict";for(var o=document.querySelector(".hamburger"),r=document.querySelector(".fixed-menu"),i=document.body,s=window.location.href,a=document.querySelectorAll(".fixed-menu__link"),c=0;c<a.length;c++){var l=a[c],d=l.parentElement;l.href===s&&d.classList.add("fixed-menu__item--active")}o.addEventListener("click",function(){o.classList.contains("hamburger--active")?(o.classList.remove("hamburger--active"),r.style.left="-100%",i.classList.remove("offscroll")):(o.classList.add("hamburger--active"),r.style.left=0,i.classList.add("offscroll"))})},27:function(e,t,n){"use strict";n(2),n(3),n(28),n(4),n(1)},28:function(e,t,n){"use strict";var o=document.querySelector(".js-aside"),r=document.querySelector(".js-aside-open"),i=document.querySelector(".js-aside-list"),s=document.querySelectorAll(".blog-menu__item"),a=document.querySelectorAll(".blog-menu__btn"),c=document.querySelectorAll(".post"),l=Array.from(a),d=Array.from(c),u="blog-menu__item--active";function f(e){for(var t=(e=e||window.event).target.parentNode,n=0;n<s.length;n++){s[n].classList.remove(u)}t.classList.add(u)}function m(e){for(var t=(e=e||window.event).target.dataset.id,n=0;n<c.length;n++){var o=c[n],r=o.clientHeight;o.dataset.id===t&&window.scrollTo({top:o.offsetTop+r,behavior:"smooth"})}}function v(){for(var e=0;e<a.length;e++){a[e].onclick=function(){f(),m()}}}function y(){var e=o.clientWidth;o.style.left=-e+"px"}function p(){var e=document.querySelector(".header"),t=window.pageYOffset,n=e.clientHeight,o=window.innerWidth;t>n/2&&o<768&&(r.style.display="flex"),t<n/2&&!r.classList.contains("js-aside-open")&&(r.style.display="none"),o>768&&(r.style.display="none")}function g(){r.classList.remove("js-aside-open")}r.addEventListener("click",function(){r.classList.contains("js-aside-open")?(r.classList.remove("js-aside-open"),y()):(r.classList.add("js-aside-open"),o.style.left=0)}),window.addEventListener("resize",function(){g(),y(),p(),v()}),window.addEventListener("load",function(){i.children[0].classList.add(u),g(),y(),p(),v()}),window.addEventListener("scroll",function(){var e;p(),e=window.pageYOffset,d.map(function(e){return{coordY:e.offsetTop+e.children[0].offsetHeight}}).forEach(function(t,n){var o=l[n],r=o.parentElement;if(e>=t.coordY&&o){var i=!0,s=!1,a=void 0;try{for(var c,d=l[Symbol.iterator]();!(i=(c=d.next()).done);i=!0)c.value.parentElement.classList.remove(u)}catch(e){s=!0,a=e}finally{try{!i&&d.return&&d.return()}finally{if(s)throw a}}r.classList.add(u)}})})},3:function(e,t,n){"use strict";var o=document.querySelector(".footer"),r=document.querySelectorAll(".js-add-padding");function i(){for(var e=o.clientHeight,t=0;t<r.length;t++){r[t].style.paddingBottom=e+"px"}}window.addEventListener("resize",i),window.addEventListener("load",i)},4:function(e,t,n){"use strict";var o,r,i=(o=document.querySelector(".js-parallax-image"),r=document.querySelector(".js-parallax-user"),{move:function(e,t,n){var o="translate3d(0, "+t/-n+"%, 0)",r=e.style;r.transform=o,r.webkitTransform=o},init:function(e){this.move(o,e,30),this.move(r,e,20)}});window.onscroll=function(){var e=window.pageYOffset;i.init(e)}}});