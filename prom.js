let myFirstPromise = new Promise((resolve, reject) => {

  setTimeout(function(){
    resolve("Success!");
  }, 1250);
});

myFirstPromise.then((successMessage) => {
  console.log("Yay! " + successMessage);
});



//////
function http(url,method) {
    var promise = new Promise (function(resolve, reject) {
setTimeout(function() {      
 var data = 'the answer';
        if (data) {
            resolve(data);
        }
        else{
            reject('No data');
        }
    },1000);
});
return promise;
}
 http("http://google.com" , "GET");
.then(function(data) {
    return data.toUpperCase();
})
.then(function)(modifiedData) {
    console.log(modifiedData);
    return modifiedData;
})
.then(function(data) {
    console.log(data);
})
.catch(function(err) {
    console.log('catch:', err);
});




///////////
let X, Y, Z;

function addAsync(num1, num2) {

    return Promise.resolve(num1 + num2);
}

addAsync(1, 2)
	.then(success => {
		X = success;
        return X;
	})
	.then(success => addAsync(success, 3))
	.then(success => {
		Y = success;
        return Y;
	})
	.then(success => addAsync(success, 4))
	.then(success => {
		Z = success;
        return Z;
	})
    .then(success => {
        console.log('total: ' + success)
        console.log(X, Y, Z)
    });                        ////// o/p will be 3,6,10