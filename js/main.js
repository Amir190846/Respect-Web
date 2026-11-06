(function(){
  var root=document.documentElement,hdr=document.querySelector('.hdr');
  function scrolled(){hdr.classList.toggle('scrolled',window.scrollY>12)}
  scrolled();window.addEventListener('scroll',scrolled,{passive:true});
  document.getElementById('theme').addEventListener('click',function(){
    var dark=root.classList.toggle('dark');
    try{localStorage.setItem('respect-hosting-theme',dark?'dark':'light')}catch(e){}
  });
  document.getElementById('menu').addEventListener('click',function(){document.getElementById('nav').classList.toggle('open')});
  var els=document.querySelectorAll('.rev');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.1});
    els.forEach(function(el,i){el.style.transitionDelay=(i%5)*80+'ms';io.observe(el)});
  }else els.forEach(function(el){el.classList.add('in')});
  var form=document.getElementById('authForm');
  if(form)form.addEventListener('submit',function(e){
    e.preventDefault();var m=document.getElementById('msg');
    m.textContent=form.checkValidity()?'تم استلام البيانات. اربط النموذج بخدمة المصادقة لتفعيله.':'يرجى تعبئة جميع الحقول.';
  });
})();
