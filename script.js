const todaysDate = new Date();
const christmas = new Date(2021, 11, 25);
const newYear = new Date(2022, 00, 01);
const valentines = new Date(2022, 01, 14);

// takes the holiday and subtracts todays date, returning the result as a number rounded up to the next integer
const daysRemaining = (holiday) => {
  return Math.ceil((holiday - todaysDate) / (24 * 3600 * 1000));
};

// takes the holiday date and a string representing the holiday name, returning an li element with days remaining from todays date until the holiday
const getDifference = (holiday, holName) => {
  return `<li> ${daysRemaining(holiday)} days until ${holName} </li>`;
};

$('#trigger').click(function () {
  $('#days-until').append(getDifference(christmas, 'Christmas'));
});

$('#trigger').click(function () {
  $('#days-until').append(getDifference(newYear, 'New Year'));
});

$('#trigger').click(function () {
  $('#days-until').append(getDifference(valentines, 'Valentines Day'));
});
