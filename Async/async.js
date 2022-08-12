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

const request = new XMLHttpRequest();

const getInfo = (resource) => {
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

getInfo("https://jsonplaceholder.typicode.com/todos/")
  .then((data) => {
    console.log("data retrieved:", data);
  })
  .catch((err) => {
    console.log(err);
  });
