const todaysDate = new Date();
const christmas = new Date(2021, 12, 25);
const newYear = new Date(2022, 01, 01);
const valentines = new Date(2022, 02, 14);

// takes the holiday and subtracts todays date, returning parsed integer
const daysRemaining = (holiday) => {
  return parseInt((holiday - todaysDate) / (24 * 3600 * 1000));
};

// takes the holiday date and a string representing the holiday name, returning a li element with days remaining from todays date until the holiday
const getDifference = (holiday, holName) => {
  return `<li> ${daysRemaining(
    holiday
  ).toString()} days until ${holName} </li>`;
};

$('#trigger').click(function () {
  $('#days-until').append(getDifference(christmas, 'Christmas'));
  $('#days-until').append(getDifference(newYear, 'New Year'));
  $('#days-until').append(getDifference(valentines, 'Valentines Day'));
});
