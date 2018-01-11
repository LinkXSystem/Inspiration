const surplustime = () => {
  const x = new Date();
  const y = new Date();

  x.setHours(0, 0, 0, 0);

  return 24 * 3600 * 1000 - (y.getTime() - x.getTime());
};

module.exports = {
  surplustime
};

console.log(surplustime());
