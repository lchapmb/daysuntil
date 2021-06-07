const todaysDate = new Date();

// takes the holiday and subtracts todays date, returning parsed integer
const daysRemaining = (holiday) => {
  return parseInt((holiday - todaysDate) / (24 * 3600 * 1000));
};

//take the holiday date and a string representing the holiday name, returning a li element with days remaining from todays date until the holiday
const getDifference = (holiday, holName) => {
  return `<li> ${daysRemaining(
    holiday
  ).toString()} days until ${holName} </li>`;
};

$('#trigger').click(function () {
  const christmas = new Date(2021, 12, 25);
  $('#days-until').append(getDifference(christmas, 'Christmas'));
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
