!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=4)}([function(e,t){const n=document.querySelector(".preloader");if(n){let e=0;const t=[],r=document.querySelector(".preloader__title");document.querySelectorAll("img").forEach(e=>{t.push(e.src)}),document.querySelectorAll("*").forEach(e=>{const n=getComputedStyle(e).getPropertyValue("background-image");n&&"none"!==n&&t.push(n.replace('url("',"").replace('")',""))}),t.length&&t.forEach(o=>{(o=o,new Promise(e=>{let t=document.createElement("img");t.src=o,t.addEventListener("load",()=>{e()}),t.addEventListener("error",()=>{e()})})).then(()=>{e++,function(e,t){const o=Math.ceil(t/e*100);r.innerText=o+"%",o>=100&&n.classList.add("preloader--hide")}(t.length,e)})})}var r},function(e,t){function n(e,t){const n=document.querySelector("."+e);t.forEach(e=>{const t=document.createElement("li"),r=document.createElement("a");t.classList.add("window__item"),r.classList.add("window__link"),r.href=e.href,r.text=e.title,r.setAttribute("target","_blank"),t.appendChild(r),n.appendChild(t)})}n("prod",[{href:"http://app.swapwallet.com",title:"SWAP Wallet"},{href:"https://dogovor24.ru",title:"Договор 24"}]),n("pets",[{href:"https://stepanomelchenko.github.io/portfolio/build/",title:"Portfolio (adp.)"},{href:"https://stepanomelchenko.github.io/burger/build/",title:"BurgerShop (adp.)"},{href:"https://stepanomelchenko.github.io/coworking/build/",title:"Coworking"},{href:"https://stepanomelchenko.github.io/airplanet/build/",title:"Airplanet"}])},function(e,t){const n=document.querySelector(".parallax"),r=[];for(let e=1;e<=7;e++){const t=document.createElement("li");t.classList.add("parallax__item","parallax__item--layer"+e),r.push(t),n.appendChild(t)}window.addEventListener("mousemove",e=>{const t=window.innerWidth/2-e.pageX,n=window.innerHeight/2-e.pageY;r.forEach((e,r)=>{const o=r/100,i=t*o,l=n*o;e.style.transform=`translate(${i}px, ${l}px)`})})},function(e,t,n){e.exports=n.p+"/css/main.css"},function(e,t,n){"use strict";n.r(t);n(3),n(2),n(15),n(1),n(0)},,,,,,,,,,,function(e,t){const n=document.querySelector(".links");[{title:"linkedin",href:"https://www.linkedin.com/in/stepan-omelchenko",prefix:"->"},{title:"telegram",href:"https://t.me/StepanOmelchenko",prefix:"->"},{title:"github",href:"https://github.com/StepanOmelchenko",prefix:"->"}].forEach(e=>{const t=document.createElement("a"),r=document.createElement("li"),o=document.createElement("span"),i=document.createElement("span");i.textContent=e.title,o.classList.add("window__link-prefix"),o.textContent=e.prefix,t.classList.add("window__link"),t.href=e.href,t.setAttribute("target","_blank"),t.appendChild(o),t.appendChild(i),r.appendChild(t),n.appendChild(r)})}]);