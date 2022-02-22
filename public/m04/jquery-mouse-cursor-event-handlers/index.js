(() => {
  $('#mouseenterTarget')
    .on('mouseenter', () => increment('.mouseenter--count'))
    .on('mouseleave', () => increment('.mouseleave--count'));

  $('#mouseoverTarget')
    .on('mouseover', () => increment('.mouseover--count'))
    .on('mouseout', () => increment('.mouseout--count'));

  $('#mousemoveTarget')
    .on('mousemove', (event) => {
      increment('.mousemove--count');
      updatePosition('.mousemove--position', event);
    });

  $('.child')
    .on('mouseenter', function _mouseEnter() {
      $(this).toggleClass('border-dark').toggleClass('shadow border-primary');
    })
    .on('mouseleave', function _mouseLeave() {
      $(this).toggleClass('border-dark').toggleClass('shadow border-primary');
    });

  function increment(selector) {
    const obj = $(selector);
    try {
      const count = parseInt(obj.text(), 10) + 1;
      obj.text(count);
    } catch (err) {
      obj.text('0');
    }
  }
  function updatePosition(selector, event) {
    const { pageX, pageY } = event ?? {};
    $(selector).text(`${pageX ?? 0}, ${pageY ?? 0}`);
  }
})();
