!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/dist/",r(r.s=4)}([function(e,t){const r=document.querySelector("#preloader");if(r){let e=0;const t=[];let n=document.querySelector("#preloader-title");document.querySelectorAll("img").forEach(e=>{t.push(e.src)}),document.querySelectorAll("*").forEach(e=>{let r=getComputedStyle(e).getPropertyValue("background-image");r&&"none"!==r&&t.push(r.replace('url("',"").replace('")',""))}),t.length&&t.forEach(o=>{(o=o,new Promise(e=>{let t=document.createElement("img");t.src=o,t.addEventListener("load",()=>{e()}),t.addEventListener("error",()=>{e()})})).then(()=>{e++,function(e,t){const o=Math.ceil(t/e*100);n.innerText=o+"%",o>=100&&r.classList.add("preloader--hide")}(t.length,e)})})}var n},function(e,t){function r(e,t){const r=document.querySelector("."+e);t.forEach(e=>{const t=document.createElement("li"),n=document.createElement("a");t.classList.add("window__item"),n.classList.add("window__link"),n.href=e.href,n.text=e.title,n.setAttribute("target","_blank"),t.appendChild(n),r.appendChild(t)})}r("prod",[{href:"http://app.swapwallet.com",title:"SWAP Wallet"},{href:"https://dogovor24.ru",title:"Договор 24"}]),r("pets",[{href:"https://stepanomelchenko.github.io/portfolio/build/",title:"Portfolio (adp.)"},{href:"https://stepanomelchenko.github.io/burger/build/",title:"BurgerShop (adp.)"},{href:"https://stepanomelchenko.github.io/coworking/build/",title:"Coworking"},{href:"https://stepanomelchenko.github.io/airplanet/build/",title:"Airplanet"}])},function(e,t){const r=document.querySelector(".parallax"),n=[];for(let e=1;e<=7;e++){const t=document.createElement("li");t.classList.add("parallax__item","parallax__item--layer"+e),n.push(t),r.appendChild(t)}window.addEventListener("mousemove",e=>{const t=window.innerWidth/2-e.pageX,r=window.innerHeight/2-e.pageY;n.forEach((e,n)=>{const o=n/100,l=t*o,i=r*o;e.style.transform=`translate(${l}px, ${i}px)`})})},function(e,t,r){e.exports=r.p+"/css/main.css"},function(e,t,r){"use strict";r.r(t);r(3),r(2),r(1),r(0)}]);