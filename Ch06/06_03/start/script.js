
//
// const spacePeople = () => {
//   return new Promise((resolves, rejects) => {
//     const api =
//       "http://api.open-notify.org/astros.json";
//     const request = new XMLHttpRequest();
//     request.open("GET", api);
//     request.onload = () => {
//       if (request.status === 200) {
//         resolves(JSON.parse(request.response));
//       } else {
//         rejects(Error(request.statusText));
//       }
//     };
//     request.onerror = (err) => rejects(err);
//     request.send();
//   });
// };

// spacePeople().then(
//   (spaceData) => console.log(spaceData),
//   (err) =>
//     console.error(new Error("Can't load people"))
// );


fetch(
  "http://api.open-notify.org/astros.json"
).then(console.log);

console.log("PURE FETCH ABOVE");

// This fetch will return the spacePeople values
fetch(
  "http://api.open-notify.org/astros.json")
  .then((res) => res.json())
  .then(console.log);

  console.log("Fetch with res.json")

// function to get all space people
let getSpacePeople = () => fetch("http://api.open-notify.org/astros.json")
  .then((res) => res.json());


  getSpacePeople().then(console.log);

// function to retrieve only NAMES
let spaceNames = () => 
  getSpacePeople()
  .then(json => json.people)
  .then(people => people.map((p) => p.name))
  .then((names) => names.join (", "));

  spaceNames().then(console.log);