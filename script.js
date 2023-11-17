let interval;

function Start() {
 
  document.getElementById("start-button").setAttribute("disabled", "true");//button start disabled

  interval = setInterval(() => {
    const currentVzlue = document.getElementById("conter").innerHTML;
    const array = currentVzlue.split(":");

    let hour = Number(array[0]);
    let minute = Number(array[1]);
    let second = Number(array[2]);

    if (second < 60) {
      second += 1;
    }

    if (second === 60) {
      second = 0;
      minute += 1;
    }

    if (minute === 60) {
      minute = 0;
      hour += 1;
    }

    document.getElementById("conter").innerHTML =
      (hour < 10 ? "0" + hour : hour) +
      ":" +
      (minute < 10 ? "0" + minute : minute) +
      ":" +
      (second < 10 ? "0" + second : second);
  }, 10);
}

function Stop() {
    document.getElementById("start-button").removeAttribute("disabled")
  clearInterval(interval);
}

function Rest() {
  Stop();
  document.getElementById("conter").innerHTML = "00:00:00";
}
