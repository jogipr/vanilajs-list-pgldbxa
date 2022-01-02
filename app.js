window.addEventListener('load', registerApp());

function registerApp() {
  if (Worker) {
    let workProcess = new Worker('worker.js');

    workProcess.onmessage = function (event) {
      console.log(`message from worker---${event.data}`);
      document.querySelector('#counter').innerHTML = event.data;
      if (event.data === '10') {
        workProcess.postMessage('Stop counter after count of 2');
      }
    };
  }
}
