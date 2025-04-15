const logo = document.querySelector("header h1");
const menu = document.querySelectorAll(".gnb li");
const bgVideo = document.querySelector("video");
const title = document.querySelector(".textBox h2");
const btnOpen = document.querySelector(".btnOpen");


// scss에서 초기 위치 값을 수정하는 것이 아닌 set으로 초기위치값 변경
gsap.set(logo, {y:-100, opacity:0})
gsap.set(menu, {y:-100, opacity:0})
gsap.set(bgVideo, {opacity:1})
gsap.set(title, {y:-100, opacity:0})
gsap.set(btnOpen, {scale:5, opacity:0} )

gsap.to(logo, {y:0, opacity:1, duration:1, delay:2})
gsap.to(menu[0], {y:0, opacity:1, duration:1, delay:2})
gsap.to(menu[1], {y:0, opacity:1, duration:1, delay:2.5})
gsap.to(menu[2], {y:0, opacity:1, duration:1, delay:3})
gsap.to(menu[3], {y:0, opacity:1, duration:1, delay:3.5})
gsap.to(menu[4], {y:0, opacity:1, duration:1, delay:4.5})
gsap.to(bgVideo, {opacity:0.5, duration:5} )
gsap.to(title, {y:0, opacity:1, duration:1, delay:1} )
gsap.to(btnOpen, {scale:1, opacity:1, duration:1, delay:1.5} )