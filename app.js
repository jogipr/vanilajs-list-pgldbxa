window.addEventListener('load', registerApp());

var workProcess;
function registerApp() {
  if (Worker) {
    workProcess = new Worker('worker.js');

    workProcess.onmessage = function (event) {
      console.log(`message from worker---${event.data}`);
      document.querySelector('#counter').innerHTML = event.data;
      if (event.data === '50') {
        workProcess.postMessage('Stop counter after count of 50');
      }
    };
  }
}

function stopWorker() {
  workProcess.postMessage('Stop counter');
}
