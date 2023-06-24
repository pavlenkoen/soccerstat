const formatDate = (d) => {
  const date = new Date(d);
  const options = { year: "numeric", month: "numeric", day: "numeric" };
  return date.toLocaleString("ru-Ru", options);
};

export default formatDate;
