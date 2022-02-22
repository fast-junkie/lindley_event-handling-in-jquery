(() => {
  $('#keyboardInput')
    .on('focusin focus focusout blur select change', eventHandler);

  $('#setFocus').on('click', () => $('#keyboardInput').trigger('focus'));
  $('#submitForm').on('click', () => $('#form').trigger('submit'));

  $('#clear')
    .on('click', (event) => {
      event.preventDefault();
      $('tbody').empty();
    });

  function log(...args) {
    $('tbody').append(
      $('<tr>').append(args.map((arg) => `<td>${arg}</td>`).join()),
    );
  }
  function eventHandler(event) {
    log(event.type, 'fired');
  }
})();
