function asyncFunc() {
    return new Promise(function(resolve, reject) {
        result = 200;
        error = 404;
        resolve(result);
        reject(error);
    });
}

asyncFunc()
    .then(result => {
        console.log(result);
    })
    .catch(error);

let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Output"), 1000);
});

myPromise.then(result => {
    console.log(result);
});

//