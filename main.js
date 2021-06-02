let dateBirth = document.getElementById('dateBirth'),
  currentDate = document.getElementById('currentDate'),
  output = document.querySelector('.output');

// set Current Date Dynamic
let date = new Date();
let todayDate = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
if (date.getDate() < 10) {
  todayDate = `${date.getFullYear()}-${date.getMonth()+1}-0${date.getDate()}`;
}
if (date.getMonth() < 10) {
  todayDate = `${date.getFullYear()}-0${date.getMonth()+1}-${date.getDate()}`;
}
if (date.getDate() < 10 && date.getMonth() < 10) {
  todayDate = `${date.getFullYear()}-0${date.getMonth()+1}-0${date.getDate()}`;
}
currentDate.value = todayDate;

function getDate() {
  //date of birth
  let dateOfBirth = new Date(dateBirth.value),
    day = dateOfBirth.getDate(),
    month = dateOfBirth.getMonth() + 1,
    year = dateOfBirth.getFullYear();

  //current date
  let today = new Date(currentDate.value),
    currentDay = today.getDate(),
    currentMonth = today.getMonth() + 1,
    currentYear = today.getFullYear();

  //=>=>=> /**** calculate age ****/
  let ageD;
  if (currentDay < day) {
    currentDay += 30;
    ageD = currentDay - day;
    currentMonth -= 1;
  } else {
    ageD = currentDay - day;
  }

  let ageM;
  if (currentMonth < month) {
    currentMonth += 12;
    ageM = currentMonth - month;
    currentYear -= 1;
  } else {
    ageM = currentMonth - month;
  }

  let ageY;
  ageY = currentYear - year;

  document.getElementById('YY').textContent = ageY;
  document.getElementById('MM').textContent = ageM;
  document.getElementById('DD').textContent = ageD;

  //=>=>=> /**** calculate Next Birthday ****/
  //getting the months until next birthday
  let arr = [];
  for (let i = ageM; i < 11; i++) {
    arr.push(i)
  }
  document.getElementById('Bmonth').textContent = arr.length
  // getting days until next birthday
  let arr2 = [];
  let DOM = 28;
  if (
    month == 1 ||
    month == 3 ||
    month == 5 ||
    month == 7 ||
    month == 8 ||
    month == 10 ||
    month == 12
  ) {
    DOM = 31;
  } else if (
    // month == 2 ||
    month == 4 ||
    month == 6 ||
    month == 9 ||
    month == 11
  ) {
    DOM = 30;
  };
  for (let i = ageD; i < DOM; i++) {
    arr2.push(i)
  };
  document.getElementById('Bdays').textContent = arr2.length

  //getting the day of birthday
  let mn = today.getMonth() + 1,
    curYr = today.getFullYear();
  if (month <= mn) {
    curYr++
    console.log(true)
  }
  let x = new Date(`${month} ${day}, ${curYr}`);
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var dayName = days[x.getDay()];
  document.getElementById('dayName').textContent = dayName;

  //=>=>=> /**** getting summary ****/
  let msBetweenBdayAnd1970 = Date.parse(dateBirth.value);
  let msBetweenTodayAnd1970 = Date.now();
  let ms = msBetweenTodayAnd1970 - msBetweenBdayAnd1970;

  let sec = 1000,
    min = sec * 60,
    hour = min * 60,
    daye = hour * 24,
    week = daye * 7,
    mon = week * 4.34,
    yer = mon * 12;

  //let the age conversion begin
  var years = Math.floor(ms / yer);
  var months = Math.floor(ms / mon);
  var weeks = Math.floor(ms / week);
  var days = Math.floor(ms / daye);
  var hours = Math.floor(ms / hour);
  var minutes = Math.floor(ms / min);
  var seconds = Math.floor(ms / sec);

  document.getElementById('years').textContent = ageY;
  document.getElementById('months').textContent = months;
  document.getElementById('weeks').textContent = weeks;
  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
}
let toggel = document.querySelector('.toggel');
let colors = document.querySelector('.colors');
let color = document.querySelectorAll('.colors li');

color.forEach((li) => {
  li.style.backgroundColor = `rgba(${li.dataset.color}, 100%)`;
  li.addEventListener('click', (col) => {
    col.stopPropagation();
    document.documentElement.style.setProperty('--color', col.target.dataset.color);
  })
})

document.addEventListener('click', (e) => {
  e.stopPropagation();
  if (e.target == toggel || e.target == colors) {
    colors.style.width = '165px'
  } else {
    colors.style.width = '0px'
  }
});

