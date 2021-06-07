const todaysDate = new Date();

const daysRemaining = (holiday) => {
  return parseInt((holiday - todaysDate) / (24 * 3600 * 1000));
};

$('#trigger').click(function () {
  const christmas = new Date(2021, 12, 25);
  $('#days-until').append(
    '<li>' + daysRemaining(christmas).toString() + ' days until Christmas</li>'
  );
});

$('#trigger').click(function () {
  const newYears = new Date(2022, 01, 01);
  $('#days-until').append(
    '<li>' + daysRemaining(newYears).toString() + ' days until New Year</li>'
  );
});

$('#trigger').click(function () {
  const valentines = new Date(2022, 02, 14);
  $('#days-until').append(
    '<li>' +
      daysRemaining(valentines).toString() +
      ' days until Valentines Day</li>'
  );
});
