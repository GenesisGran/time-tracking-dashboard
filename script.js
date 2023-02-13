workTime = document.getElementById("work-time");
playTime = document.getElementById("play-time");
studyTime = document.getElementById("study-time");
exerciseTime = document.getElementById("exercise-time");
socialTime = document.getElementById("social-time");
selfCareTime = document.getElementById("selfCare-time");

workLastTime = document.getElementById("work-lastTime");
playLastTime = document.getElementById("play-lastTime");
studyLastTime = document.getElementById("study-lastTime");
exerciseLastTime = document.getElementById("exercise-lastTime");
socialLastTime = document.getElementById("social-lastTime");
selfCareLastTime = document.getElementById("selfCare-lastTime");

dailyBtn = document.querySelector("#daily-btn");
weeklyBtn = document.querySelector("#weekly-btn");
monthlyBtn = document.querySelector("#monthly-btn");

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    dailyBtn.addEventListener("click", function () {
      dailyBtn.classList.add("active");
      weeklyBtn.classList.remove("active");
      monthlyBtn.classList.remove("active");
      workTime.innerHTML = data[0].timeframes.daily.current + "hrs";
      playTime.innerHTML = data[1].timeframes.daily.current + "hrs";
      studyTime.innerHTML = data[2].timeframes.daily.current + "hrs";
      exerciseTime.innerHTML = data[3].timeframes.daily.current + "hrs";
      socialTime.innerHTML = data[4].timeframes.daily.current + "hrs";
      selfCareTime.innerHTML = data[5].timeframes.daily.current + "hrs";
      workLastTime.innerHTML =
        "Yesterday - " + data[0].timeframes.daily.previous + "hrs";
      playLastTime.innerHTML =
        "Yesterday - " + data[1].timeframes.daily.previous + "hrs";
      studyLastTime.innerHTML =
        "Yesterday - " + data[2].timeframes.daily.previous + "hrs";
      exerciseLastTime.innerHTML =
        "Yesterday - " + data[3].timeframes.daily.previous + "hrs";
      socialLastTime.innerHTML =
        "Yesterday - " + data[4].timeframes.daily.previous + "hrs";
      selfCareLastTime.innerHTML =
        "Yesterday - " + data[5].timeframes.daily.previous + "hrs";
    });
    weeklyBtn.addEventListener("click", function () {
      dailyBtn.classList.remove("active");
      weeklyBtn.classList.add("active");
      monthlyBtn.classList.remove("active");
      workTime.innerHTML = data[0].timeframes.weekly.current + "hrs";
      playTime.innerHTML = data[1].timeframes.weekly.current + "hrs";
      studyTime.innerHTML = data[2].timeframes.weekly.current + "hrs";
      exerciseTime.innerHTML = data[3].timeframes.weekly.current + "hrs";
      socialTime.innerHTML = data[4].timeframes.weekly.current + "hrs";
      selfCareTime.innerHTML = data[5].timeframes.weekly.current + "hrs";
      workLastTime.innerHTML =
        "Last Week - " + data[0].timeframes.weekly.previous + "hrs";
      playLastTime.innerHTML =
        "Last Week - " + data[1].timeframes.weekly.previous + "hrs";
      studyLastTime.innerHTML =
        "Last Week - " + data[2].timeframes.weekly.previous + "hrs";
      exerciseLastTime.innerHTML =
        "Last Week - " + data[3].timeframes.weekly.previous + "hrs";
      socialLastTime.innerHTML =
        "Last Week - " + data[4].timeframes.weekly.previous + "hrs";
      selfCareLastTime.innerHTML =
        "Last Week - " + data[5].timeframes.weekly.previous + "hrs";
    });
    monthlyBtn.addEventListener("click", function () {
      dailyBtn.classList.remove("active");
      weeklyBtn.classList.remove("active");
      monthlyBtn.classList.add("active");
      workTime.innerHTML = data[0].timeframes.monthly.current + "hrs";
      playTime.innerHTML = data[1].timeframes.monthly.current + "hrs";
      studyTime.innerHTML = data[2].timeframes.monthly.current + "hrs";
      exerciseTime.innerHTML = data[3].timeframes.monthly.current + "hrs";
      socialTime.innerHTML = data[4].timeframes.monthly.current + "hrs";
      selfCareTime.innerHTML = data[5].timeframes.monthly.current + "hrs";
      workLastTime.innerHTML =
        "Last Monthly - " + data[0].timeframes.monthly.previous + "hrs";
      playLastTime.innerHTML =
        "Last Monthly - " + data[1].timeframes.monthly.previous + "hrs";
      studyLastTime.innerHTML =
        "Last Monthly - " + data[2].timeframes.monthly.previous + "hrs";
      exerciseLastTime.innerHTML =
        "Last Monthly - " + data[3].timeframes.monthly.previous + "hrs";
      socialLastTime.innerHTML =
        "Last Monthly - " + data[4].timeframes.monthly.previous + "hrs";
      selfCareLastTime.innerHTML =
        "Last Monthly - " + data[5].timeframes.monthly.previous + "hrs";
    });
  });
