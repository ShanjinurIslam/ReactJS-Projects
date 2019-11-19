//jshint esnext:true
function apiCall(url) {
    return new Promise((resolve, reject) => {
        var request = new XMLHttpRequest();
        request.open("GET", url);
        request.onload = () => {
            if (request.status == 200) {
                resolve(request.response);
            } else {
                reject(Error(request.statusText));
            }
        };
        request.send();
    });
}

apiCall("https://randomuser.me/api/")
    .then(function(response) {
        console.log(response);
    })
    .catch(error => console.log(error));