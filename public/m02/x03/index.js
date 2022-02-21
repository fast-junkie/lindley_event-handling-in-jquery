(() => {
  const btn = document.getElementById('junkie');
  btn.addEventListener('ping', _ping);

  const pingEvent = new CustomEvent('ping', { detail: { name: 'pong' } });
  btn.dispatchEvent('ping', pingEvent);

  function _ping(event) {
    console.debug('Event detail...', event.detail);
  }
})();
