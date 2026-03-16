
// simple fade-in animation
const els = document.querySelectorAll('.card, .editorial');
window.addEventListener('scroll',()=>{
els.forEach(el=>{
let rect = el.getBoundingClientRect();
if(rect.top < window.innerHeight-80){
el.style.opacity=1;
el.style.transform='translateY(0)';
}
});
});
