const promise = new Promise((resolve, reject) => {
    const error = true
    if(!error) {
        resolve('Promise has been fulfilled')
    }else {
        reject('Error: Operation has failed')
    }
})
console.log(promise)
promise
    .then(data => console.log(data))
    .catch(err => console.log(err))

