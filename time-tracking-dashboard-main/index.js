var daily = document.getElementById('dailyButton');
var weekly = document.getElementById('weeklyButton');
var monthly = document.getElementById('monthlyButton');

var workTime = document.getElementById('work');
var playTime = document.getElementById('play');
var studyTime = document.getElementById('study');
var excersiseTime = document.getElementById('excersise');
var socialTime = document.getElementById('social');
var selfCareTime = document.getElementById('self');

daily.addEventListener('click', function () {
  daily.style.color = 'white';
  weekly.style.color = 'hsl(236, 100%, 87%)';
  monthly.style.color = 'hsl(236, 100%, 87%)';

  workTime.getElementsByTagName('h2')[0].innerText = '5hrs';
  workTime.getElementsByTagName('p')[0].innerText = 'Yesterday - 7hrs'

  playTime.getElementsByTagName('h2')[0].innerText = '1hr';
  playTime.getElementsByTagName('p')[0].innerText = 'Yesterday - 2hrs'

  studyTime.getElementsByTagName('h2')[0].innerText = '0hrs';
  studyTime.getElementsByTagName('p')[0].innerText = 'Yesterday - 1hr';

  excersiseTime.getElementsByTagName('h2')[0].innerText = '1hr';
  excersiseTime.getElementsByTagName('p')[0].innerText = 'Yesterday - 1hr';

  socialTime.getElementsByTagName('h2')[0].innerText = '1hr';
  socialTime.getElementsByTagName('p')[0].innerText = 'Yesterday - 3hrs';

  selfCareTime.getElementsByTagName('h2')[0].innerText = '0hrs';
  selfCareTime.getElementsByTagName('p')[0].innerText = 'Yesterday - 1hr';
});

weekly.addEventListener('click', function () {
  daily.style.color = 'hsl(236, 100%, 87%)';
  weekly.style.color = 'white';
  monthly.style.color = 'hsl(236, 100%, 87%)';

  workTime.getElementsByTagName('h2')[0].innerText = '32hrs';
  workTime.getElementsByTagName('p')[0].innerText = 'Last Month - 36hrs'

  playTime.getElementsByTagName('h2')[0].innerText = '10hrs';
  playTime.getElementsByTagName('p')[0].innerText = 'Last Month - 8hrs'

  studyTime.getElementsByTagName('h2')[0].innerText = '4hrs';
  studyTime.getElementsByTagName('p')[0].innerText = 'Last Month - 7hrs';

  excersiseTime.getElementsByTagName('h2')[0].innerText = '4hrs';
  excersiseTime.getElementsByTagName('p')[0].innerText = 'Last Month - 5hrs';

  socialTime.getElementsByTagName('h2')[0].innerText = '5hrs';
  socialTime.getElementsByTagName('p')[0].innerText = 'Last Month - 10hrs';

  selfCareTime.getElementsByTagName('h2')[0].innerText = '2hrs';
  selfCareTime.getElementsByTagName('p')[0].innerText = 'Last Month - 2hrs';
});

monthly.addEventListener('click', function () {
  daily.style.color = 'hsl(236, 100%, 87%)';
  weekly.style.color = 'hsl(236, 100%, 87%)';
  monthly.style.color = 'white';

  workTime.getElementsByTagName('h2')[0].innerText = '103hrs';
  workTime.getElementsByTagName('p')[0].innerText = 'Last Month - 128hrs'

  playTime.getElementsByTagName('h2')[0].innerText = '23hrs';
  playTime.getElementsByTagName('p')[0].innerText = 'Last Month - 29hrs'

  studyTime.getElementsByTagName('h2')[0].innerText = '13hrs';
  studyTime.getElementsByTagName('p')[0].innerText = 'Last Month - 19hrs';

  excersiseTime.getElementsByTagName('h2')[0].innerText = '11hrs';
  excersiseTime.getElementsByTagName('p')[0].innerText = 'Last Month - 18hrs';

  socialTime.getElementsByTagName('h2')[0].innerText = '21hrs';
  socialTime.getElementsByTagName('p')[0].innerText = 'Last Month - 23hrs';

  selfCareTime.getElementsByTagName('h2')[0].innerText = '7hrs';
  selfCareTime.getElementsByTagName('p')[0].innerText = 'Last Month - 11hrs';
});
