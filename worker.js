
self.addEventListener('message', onMessage);

function onMessage(e) {
    console.log("Message Received")
    console.log(e.data)
    importScripts("solutions.js")
    const result = self.solutions[e.data.func](...e.data.payload)
    postMessage(result)
}
