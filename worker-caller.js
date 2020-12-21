
export var callWorker = function(problem, instance){
    if (window.Worker) {
        const myWorker = new Worker("worker.js")

        myWorker.addEventListener('message', function(e) {
            console.log('Worker said: ', e.data)
            problem.result = e.data
            instance.calculating =  false
          }, false);

        let allArgs = problem.inputs.map(input => input.value)

        myWorker.postMessage({
            func: problem.functionName,
            payload: allArgs // any kind of data, let the function decide whether it's useful
        })
        console.log('Message posted to worker')
    }
    else {
        console.log('Your browser doesn\'t support web workers.')
    }
}