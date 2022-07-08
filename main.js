// const promise = new Promise((resolve, reject) => {
//     const error = true
//     if(!error) {
//         resolve('Promise has been fulfilled')
//     }else {
//         reject('Error: Operation has failed')
//     }
// })
// console.log(promise)
// promise
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

function houseOne() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Paper delivered to house 1')
        }, 1000)
    })
}
function houseOne() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Paper delivered to house 2')
        }, 5000)
    })
}
function houseOne() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Paper delivered to house 3')
        }, 2000)
    })
}