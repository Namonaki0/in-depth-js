// const request = new XMLHttpRequest();

// const getInfo = (callback) => {
//   request.addEventListener("readystatechange", () => {
//     if (request.readyState === 4 && request.status === 200) {
//       const data = JSON.parse(request.responseText);
//       callback(undefined, data);
//     } else if (request.readyState === 4) {
//       callback("could not fetch data", undefined);
//     }
//   });
// };

// getInfo((err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("data retrieved", data);
//   }
// });

// request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
// request.send();

// const dataTest = () => {
//   return new Promise((res, rej) => {
//     res("data retrieved");
//     rej("data rejected");
//   });
// };

// dataTest()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// #######################################################

//? PROMISES
const request = new XMLHttpRequest();

const retrieveInfo = (resource) => {
  return new Promise((resolve, reject) => {
    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject("data could not be retrieved");
      }
    });

    request.open("GET", resource);
    request.send();
  });
};

retrieveInfo("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => {
    console.log("PROMISES:", data);
  })
  .catch((err) => {
    console.log(err);
  });

// #######################################################

//? PROMISE CHAINING
const requests = new XMLHttpRequest();

const getInfo = (resource) => {
  return new Promise((resolve, reject) => {
    requests.addEventListener("readystatechange", () => {
      if (requests.readyState === 4 && requests.status === 200) {
        const data = JSON.parse(requests.responseText);
        resolve(data);
      } else if (requests.readyState === 4) {
        reject("REJECTED");
      }
    });
    requests.open("GET", resource);
    requests.send();
  });
};

getInfo("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => {
    console.log("PROMISE CHAINING:");
    console.log("data 1 retrieved:", data);
    return getInfo("https://jsonplaceholder.typicode.com/todos/2");
  })
  .then((data) => {
    console.log("data 2 retrieved:", data);
    return getInfo("https://jsonplaceholder.typicode.com/todos/3");
  })
  .then((data) => {
    console.log("data 3 retrieved:", data);
  })
  .catch((err) => {
    console.log("data could not be retrieved:", err);
  });

// #######################################################

//? FETCH API
fetch("https://jsonplaceholder.typicode.com/todos/")
  .then((response) => {
    console.log("FETCH API:");
    return response.json();
  })
  .then((data) => {
    console.log("data retrieved:", data);
  })
  .catch((err) => {
    console.log("REJECTED:", err);
  });

// #######################################################

//? ASYNC & AWAIT
const fetchData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/");

  if (response.status !== 200) {
    throw new Error("could not get data!");
  }

  const data = await response.json();

  return data;
};

fetchData()
  .then((data) => {
    console.log("ASYNC & AWAIT:");
    console.log(data);
  })
  .catch((err) => {
    console.log("REJECTED:", err.message);
  });
