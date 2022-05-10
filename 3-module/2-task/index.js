function filterRange(arr, a, b) {
  return arr.filter(function(e){
    return e >= a && e <= b;
  });
}
