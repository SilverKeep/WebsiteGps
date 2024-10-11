import { pathFinder } from './path-finder.js';

function runScript() {
    var fr = document.getElementById('from').value;
    var to = document.getElementById('to').value;

    queue.push([parseInt(fr), parseInt(to)]);
    console.log(queue);
}

window.runScript = runScript;

var queue = [];

function processQueue() {
    if (queue.length > 0) {
        const [local_from, local_to] = queue.shift();
        pathFinder(5, local_from, local_to);
    }

    requestAnimationFrame(processQueue);
}

requestAnimationFrame(processQueue);
