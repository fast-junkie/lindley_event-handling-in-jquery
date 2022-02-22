(() => {
  $('#keyboardInput')
    .on('keydown', (event) => {
      increment('.keydown--count');
      updateKeyValue('.keydown--which', event);
    })
    .on('keypress', (event) => {
      increment('.keypress--count');
      updateKeyValue('.keypress--which', event);
    })
    .on('keyup', (event) => {
      increment('.keyup--count');
      updateKeyValue('.keyup--which', event);
    });

  function increment(selector) {
    const obj = $(selector);
    try {
      const count = parseInt(obj.text(), 10) + 1;
      obj.text(count);
    } catch {
      obj?.text('0');
    }
  }
  function updateKeyValue(selector, event) {
    $(selector).text(event.which);
  }
})();
