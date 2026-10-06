const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.15});document.querySelectorAll('.section,.cta').forEach(el=>{el.style.opacity='.01';el.style.transform='translateY(25px)';el.style.transition='opacity .7s ease,transform .7s ease';io.observe(el)});document.head.insertAdjacentHTML('beforeend',`<style>.section.show,.cta.show{opacity:1!important;transform:none!important}</style>`);

// Menu mobile
const menuBtn=document.querySelector('.menu');
const mainNav=document.querySelector('#main-nav');
if(menuBtn&&mainNav){
  const closeMenu=()=>{menuBtn.classList.remove('open');mainNav.classList.remove('open');menuBtn.setAttribute('aria-expanded','false')};
  menuBtn.addEventListener('click',()=>{const open=!mainNav.classList.contains('open');menuBtn.classList.toggle('open',open);mainNav.classList.toggle('open',open);menuBtn.setAttribute('aria-expanded',String(open))});
  mainNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
  document.addEventListener('click',e=>{if(!menuBtn.contains(e.target)&&!mainNav.contains(e.target))closeMenu()});
}
