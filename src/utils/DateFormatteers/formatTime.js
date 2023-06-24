const formatTime = (t) => {
  const date = new Date(t);
  const options = { hour: "numeric", minute: "numeric" };
  return date.toLocaleString("ru-Ru", options);
};

export default formatTime;
