(() => {
  const list = document.querySelector('ul');
  list.addEventListener('click', _click);

  function _click(event) {
    event.stopPropagation();
    const { reaction } = event.target.dataset;
    if (!reaction) return;
    console.debug(`${event.type}:${reaction}`);
  }
})();
