import {splitText} from "./splitText.js";

const logo = document.querySelector("header h1");
const menu = document.querySelectorAll(".gnb li");
const bgVideo = document.querySelector("video");
const title = document.querySelector(".textBox h2");
const btnOpen = document.querySelector(".btnOpen");
const line = document.querySelector(".line");
const sns = document.querySelectorAll(".sns li");
const copyright = document.querySelector("footer p");

const slogan = document.querySelector(".textBox h2");
splitText(slogan);
const letters = document.querySelectorAll(".textBox h2 span");


// 각 모션을 동기화 처리하기 위해 timeline객체 생성후 변수에 할당
const tl = gsap.timeline();


// scss에서 초기 위치 값을 수정하는 것이 아닌 set으로 초기위치값 변경
gsap.set(logo, {y:-100, opacity:0})
gsap.set(menu, {y:-100, opacity:0})
gsap.set(bgVideo, {opacity:1})
gsap.set(letters, {opacity:0, scale:3})
gsap.set(btnOpen, {scale:3, opacity:0} )
gsap.set(line, {width:"0%"} )
gsap.set(sns, {y:-100} )
gsap.set(copyright, {y:-100} )


gsap.to(bgVideo, {opacity:0.5, duration:5} )
tl.to(letters, {scale:1, opacity:1, duration:1, delay: 1, stagger: 0.1} )
tl.to(btnOpen, {scale:1, opacity:1, duration:1} )


tl.to(logo, {y:0, opacity:1, duration:1})
tl.to(menu, {y:0, opacity:1, duration:1, stagger:0.2})
tl.to(line, {width:"100%", duration:1} )
tl.to(sns, {y:0, duration:0.5, stagger:0.2} )
tl.to(copyright, {y:0, duration:0.5} )

// gsap.to(menu[0], {y:0, opacity:1, duration:1, delay:2})
// gsap.to(menu[1], {y:0, opacity:1, duration:1, delay:2.5})
// gsap.to(menu[2], {y:0, opacity:1, duration:1, delay:3})
// gsap.to(menu[3], {y:0, opacity:1, duration:1, delay:3.5})
// gsap.to(menu[4], {y:0, opacity:1, duration:1, delay:4.5})