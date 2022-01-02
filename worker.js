const interval = (function () {
  let count = 0;
  let interval = setInterval(() => {
    postMessage(`${count++}`);
  }, 1000);

  return interval;
})();

onmessage = function (event) {
  console.log(`message from main thread--${event.data}`);
  clearInterval(interval);
};
