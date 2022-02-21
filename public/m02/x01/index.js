(() => {
  const btn = document.getElementById('junkie');
  btn.addEventListener('click', roll);

  function roll(event) {
    console.debug('Never giving you up...', event.target);
  }
})();
