
 setTimeout(()=> {
    console.log('in the time out');
    clearInterval(interval);
}, 3000)

const interval = setInterval(()=> {
console.log ('in the interval')
}, 1000)