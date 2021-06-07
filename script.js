const todaysDate = new Date();

$('#trigger').click(function () {
  const christmas = new Date(2021, 12, 25);
  const daysRemaining = parseInt((christmas - todaysDate) / (24 * 3600 * 1000));

  $('#days-until').append(
    '<li>' + daysRemaining.toString() + ' days until Christmas</li>'
  );
});

$('#trigger').click(function () {
  const newYears = new Date(2022, 01, 01);
  const daysRemaining = parseInt((newYears - todaysDate) / (24 * 3600 * 1000));

  $('#days-until').append(
    '<li>' + daysRemaining.toString() + ' days until New Year</li>'
  );
});

$('#trigger').click(function () {
  const valentines = new Date(2022, 02, 14);
  const daysRemaining = parseInt(
    (valentines - todaysDate) / (24 * 3600 * 1000)
  );

  $('#days-until').append(
    '<li>' + daysRemaining.toString() + ' days until Valentines Day</li>'
  );
});
