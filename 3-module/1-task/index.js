function namify(users) {
  let names = [];
  for (let i in users){
    names.push(users[i].name);
  }
  return names;
}
