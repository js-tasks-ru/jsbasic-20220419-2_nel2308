function hideSelf() {
  let hsb = document.querySelector('.hide-self-button');
  hsb.addEventListener('click', function() {
    hsb.setAttribute('hidden', 'hidden');
  }
  );
}
