module.exports = (line) => {
  var obj = {};
  line.split(" ").forEach((current, indx, arr)=> {
    if (current.toLowerCase() === "leave" || current.toLowerCase() === "absent") {
      obj[current] = obj[current] ? ++obj[current] : 1;
    }
  });
  return obj;
}
