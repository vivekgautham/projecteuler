
export var callWorker = function(problem, instance){
    if (window.Worker) {
        const myWorker = new Worker("worker.js")

        myWorker.addEventListener('message', function(e) {
            console.log('Worker said: ', e.data)
            instance.end()
            problem.result = e.data
            instance.calculating =  false
          }, false);

        let allArgs = problem.inputs.map(input => input.value)

        myWorker.postMessage({
            func: problem.functionName,
            payload: allArgs
        })
        console.log('Message posted to worker')
        instance.start()
    }
    else {
        console.log('Your browser doesn\'t support web workers.')
    }
}