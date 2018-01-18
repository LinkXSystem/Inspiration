const style = dom => {
  return window.getComputedStyle(dom);
};

const event = dom => {
  return dom.nativeEvent;
};

export default { style, event };
