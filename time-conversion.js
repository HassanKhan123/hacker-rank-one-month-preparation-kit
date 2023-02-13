// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

const timeConverter = time => {
  let timeArr = time.split(":");
  const hour = timeArr[0];
  const format = timeArr[timeArr.length - 1].slice(timeArr.length - 1);

  let newHour;

  if (Number(hour) < 12 && format === "PM") {
    newHour = Number(hour) + 12;
  } else if (Number(hour) === 12 && format === "PM") {
    newHour = Number(hour);
  } else if (Number(hour) === 12 && format === "AM") {
    newHour = "00";
  } else if (Number(hour) < 10 && format === "AM") {
    newHour = "0" + Number(hour);
  } else {
    newHour = Number(hour);
  }

  timeArr[0] = newHour;
  const timeStr = timeArr.join(":");

  console.log(timeStr.slice(0, timeStr.length - 2));
  return timeStr.slice(0, timeStr.length - 2);
};

timeConverter("06:40:03AM");
