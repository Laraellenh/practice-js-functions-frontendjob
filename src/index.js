import "./styles.css";
// practice for JS assessment/frontend job
// write a function that adds two numbers
function sum(num1, num2) {
  return num1 + num2;
}
console.log(sum(4, 5));

// function takes any number of arguments and sums all of them
function addAll(...args) {
  // ..args will spread the arguments into an array
  // iterate over the elements, use variable to hold sum as it accumulates, return that sum
  let addAll = 0;
  for (let i = 0; i < args.length; i++) {
    addAll += args[i];
  }
  return addAll;
}
console.log("addAll", addAll(4, 6, 7, 3));
// does first string contain second (not case sensitve)
// make it all lowercase first, then use the icludes string method to get a boolean value
// toLowerCase returns a new string
function stringIncludes(str1, str2) {
  let strone = str1.toLowerCase();
  let strtwo = str2.toLowerCase();
  return strone.includes(strtwo);
}
stringIncludes("I drove to New York in a van", "new");
console.log(
  "stringIncludes",
  stringIncludes("I drove to New York in a van", "new")
);

function getNames(arrayOfObjects) {
  let results = [];
  // takes an array of objects and returns as array of the values for the name property if they have one
  // iterate through array of objects, if key = name, return value
  for (let i = 0; i < arrayOfObjects.length - 1; i++) {
    // hasOwnProperty() method returns a boolean indicating whether obj has specified property
    if (arrayOfObjects[i].hasOwnProperty("name")) {
      results.push(arrayOfObjects[i].name);
    }
  }
  return results;
}
console.log(
  "GetNames",
  getNames([{ a: 1 }, { name: "Jane" }, {}, { name: "Mark" }, { b: 2 }])
);
// expects ["Jane, "Mark]
document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
