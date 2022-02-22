(() => {
  $('#clear')
    .on('click', (event) => {
      console.debug('Clear clicked...');
      event.preventDefault();
      $('tbody').empty();
    });
  $('#clickMe')
    .on('contextmenu mousedown mouseup click dblclick', eventHandler);

  /*
  $('#clickMe')
    .on('contextmenu', eventHandler)
    .on('mousedown', eventHandler)
    .on('mouseup', eventHandler)
    .on('click', eventHandler)
    .on('dblclick', eventHandler);
  */

  function log(...args) {
    $('tbody').append(
      $('<tr>').append(args.map((arg) => `<td>${arg}</td>`).join()),
    );
  }
  function eventHandler(event) {
    console.debug('eventHandler triggered...');
    log(event.target.id, event.type);
  }
})();
