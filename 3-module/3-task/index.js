function camelize(str) {
  let arr = str.split('-');
  for (let i = 1; i < arr.length; i++) {
    arr[i] = (arr[i])[0].toUpperCase()+arr[i].slice(1);
  }
  str = arr.join('');
  return str;
}
