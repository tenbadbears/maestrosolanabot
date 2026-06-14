(function(){
  var modal=document.getElementById('launch-modal');
  if(!modal)return;
  function open(){modal.setAttribute('data-open','true');modal.setAttribute('aria-hidden','false');document.body.classList.add('lm-lock');}
  function close(){modal.removeAttribute('data-open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('lm-lock');}
  document.addEventListener('click',function(e){
    var t=e.target;
    if(t.closest&&t.closest('[data-open-launch-modal]')){e.preventDefault();open();}
    else if(t.closest&&t.closest('[data-close-launch-modal]')){e.preventDefault();close();}
  });
  document.addEventListener('keydown',function(e){if(e.key==='Escape')close();});
})();
