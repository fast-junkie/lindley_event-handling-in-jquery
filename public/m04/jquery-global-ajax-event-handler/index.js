(() => {
  $('#search').on('click', () => search($('#searchInput').val()));
  $('#unluckySearch').on('click', () => cursedSearch($('#searchInput').val()));
  $(document)
    .ajaxComplete(() => increment('.complete--count'))
    .ajaxError(() => increment('.error--count'))
    .ajaxSend(() => increment('.send--count'))
    .ajaxStart(() => increment('.start--count'))
    .ajaxStop(() => increment('.stop--count'))
    .ajaxSuccess(() => increment('.success--count'));

  function increment(selector) {
    const obj = $(selector);
    try {
      const count = parseInt(obj.text(), 10) + 1;
      obj.text(count);
    } catch {
      obj?.text('0');
    }
  }
  function clearResults() {
    $('#results').empty();
  }
  function showNoResults() {
    const result = $('<div>').addClass('my-1 p-3 bg-secondary text-white rounded shadow-sm');
    const title = $('<h6>').append('No results found');
    const description = $('<p>').append("This just looks like it's not your lucky day.");
    result
      .append(title)
      .append(description)
      .appendTo('#results');
  }
  function addToResults(event) {
    const result = $('<div>').addClass('my-1 p-3 bg-light rounded shadow-sm');
    const title = $('<a>').attr('href', event.url).attr('target', '_blank').append($('<h6>').append(event.name));
    const description = $('<p>').append(event.description);
    result
      .append(title)
      .append(description)
      .appendTo('#results');
  }
  function searchFilter(value) {
    return (event) => (!value
      ? true
      : event.name?.toLowerCase()?.includes(value)
            || event.category?.toLowerCase()?.includes(value)
            || event.description?.toLowerCase()?.includes(value));
  }
  function search(value) {
    clearResults();
    $.getJSON('/assets/data/events.json', (data) => {
      const filter = searchFilter(value?.toLowerCase());
      const results = data.events.filter(filter);
      if (results.length === 0) return showNoResults();
      results.forEach(addToResults);
      return false;
    });
  }
  function cursedSearch(_) {
    console.debug('_', _);
    clearResults();
    $.getJSON('/assets/data/native.json', () => {}).fail(showNoResults);
  }
})();
