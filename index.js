const {
  Worker, isMainThread, parentPort, workerData
} = require('worker_threads');

const worker = new Worker(__dirname + '/benchmark.js');

worker.on('message', (args) => {
  console.log(args);
});
