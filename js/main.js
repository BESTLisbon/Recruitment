//Credits: https://www.w3schools.com/howto/howto_js_countdown.asp
// Set the date we're counting down to
var countDownDate = new Date("Apr 11, 2021 23:59:59").getTime();

// Update the count down every 1 second
var x = setInterval(function() {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  document.getElementById("days").innerText = Math.floor(distance / (day)),
  document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
  document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
  document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = 0;
    document.getElementById("hours").innerHTML = 0;
    document.getElementById("minutes").innerHTML = 0;
    document.getElementById("seconds").innerHTML = 0;
  }
}, 1000);
