export const convertMilisecToTime = (milisec) => {
  //conver milisec to hh:mm format
  const day = new Date(milisec * 1000);
  if (day.getMinutes().toString().length != 2) {
    return day.getHours() + ":0" + day.getMinutes();
  } else {
    return day.getHours() + ":" + day.getMinutes();
  }
};

//---- BELOW ---- divide data from a weather api call into separate objects that are easier to work with

export const transformWeatherData = (data) => {
  //refractor data from a weather api call into an object that is easier to work with
  const formattedWeatherData = {};
  data.forEach((item) => {
    if (formattedWeatherData.hasOwnProperty(item.dt_txt.slice(0, 10))) {
      formattedWeatherData[item.dt_txt.slice(0, 10)][item.dt_txt.slice(11)] = {
        temp: item.main.temp,
        icon: item.weather[0].icon,
      };
    } else {
      formattedWeatherData[item.dt_txt.slice(0, 10)] = new Object();
      formattedWeatherData[item.dt_txt.slice(0, 10)][item.dt_txt.slice(11)] = {
        temp: item.main.temp,
        icon: item.weather[0].icon,
      };
    }
  });
  return formattedWeatherData;
};

export const createTimeLineWeather = (data) => {
  //push into 'timeLineWeather array' 8 time stamps for displaying them on a timeLine
  data = transformWeatherData(data);

  const timeLineWeather = [];
  let k = 0;
  for (let key in data) {
    for (let key2 in data[key]) {
      if (k == 9) {
        break;
      }
      k++;
      timeLineWeather.push({
        time: key2.slice(0, 5),
        temp: Math.round(data[key][key2].temp),
        icon: data[key][key2].icon,
      });
    }
  }
  return timeLineWeather;
};

var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const createNextDaysWeather = (data) => {
  //push into 'nextDaysWeather array' objects that contain 'name of a day' and 'temperature information'
  data = transformWeatherData(data);

  const nextDaysWeather = [];
  for (let key in data) {
    let day = new Date(key);
    let dayOfWeek = days[day.getDay()];
    let avg = 0;
    let keysAmount = 0;
    for (let key2 in data[key]) {
      avg += data[key][key2].temp;
      keysAmount += 1;
    }
    nextDaysWeather.push({
      day: dayOfWeek,
      temp: Math.round(avg / keysAmount),
    });
  }
  return nextDaysWeather;
};

//---- ABOVE ---- divide data from a weather api call into separate objects that are easier to work with
