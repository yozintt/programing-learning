function greaterOrLess(n1, n2) {
  if (typeof n1 !== "number" || typeof n2 !== "number") {
    return false;
  } else {
    return n1 >= n2 ? true : false;
  }
}
console.log(greaterOrLess(2, "2"));
