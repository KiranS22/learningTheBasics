// PROMISES Specail object within JS that has 3 states initallly Pending if sucessful fulfilled. If  not rejected
let data = null;
let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (0 == 0) {
      resolve({ status: "success" });
    } else {
      reject("failed");
    }
  }, 3000);
});

console.log("Day  4 promise", myPromise);

// accessing result .then()
myPromise
  .then((response) => {
    return "message";
  })
  .then((response) => {
    return "hello " + response;
  })
  .then((res) => {
    console.log("Another " + res);
  })
  .catch((err) => {
    console.log("error", err);
  });
/*
Once promise is reesolvesd .then is used to say what to do with it
.catch is used to accseess what to do i f the promise is rejected

caining .then() rens  the returned t= response to the next .then()

if the promise fails, all .then()'s are skipped

*/

// ASYNC AWAIT

const iftrue = async () => {
  try {
    let res = await myPromise;
    console.log("async await promise ", res);
  } catch (err) {
    console.log(err);
  }
};
console.log("async await promise ");
iftrue();
// fetch using .then()

fetch("https://restcountries.com/v3.1/all")
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    data = res;
    console.log("data ", data);
  });

// Fetch Async await

const fetchData = async () => {
  try {
    let data = await fetch("https://restcountries.com/v3.1/all");
    data = await data.json();
    console.log(data);
    let IndependentCountries = data.filter((c)=> c.independent === true)

    console.log("countries array ",IndependentCountries);
  } catch (err) {
    console.log(err);
  }
};
fetchData();
