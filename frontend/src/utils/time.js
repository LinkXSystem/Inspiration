function minute(sec) {
  const time = Math.floor(sec / 60);
  return time < 10 ? `0${time}` : `${time}`;
}

function second(sec) {
  const time = sec % 60;
  return time < 10 ? `0${time}` : `${time}`;
}

function build(sec) {
  const time = Math.ceil(sec);
  return `${minute(time)}:${second(time)}`;
}

export default build;
