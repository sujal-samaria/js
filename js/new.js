let date = new Date();

let indianDate = date.toLocaleString("en-IN", {
  timeZone: "Asia/Kolkata"
});

console.log(indianDate);