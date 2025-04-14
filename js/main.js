const wrap = document.querySelector('#wrap');
const btnMove = document.querySelector('.btnMove');
const btnReset = document.querySelector('.btnReset');

btnMove.addEventListener('click', ()=>{
  gsap.to('.box', {x: 300, y: 200, opacity:0, rotation: 360, duration: 1});
})

btnReset.addEventListener('click', ()=>{
  gsap.to('.box', {x: 0, y: 0, opacity:1, rotation: 0});
})
