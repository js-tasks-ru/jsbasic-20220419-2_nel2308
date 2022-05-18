function toggleText() {
  let ttb = document.querySelector('.toggle-text-button');
  let d = document.querySelector('#text');
  ttb.addEventListener('click', function() {
    if(d.hasAttribute('hidden') && d.getAttribute('hidden') === 'hidden') { 
      d.removeAttribute('hidden'); 
  } else {
    d.setAttribute('hidden', 'hidden');
  }
})
}
