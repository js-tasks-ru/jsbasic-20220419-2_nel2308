function makeFriendsList(friends) {
    let ul = document.createElement('ul');
  for(let v in friends) {
    let li = document.createElement('li');
    li.innerHTML = friends[v].firstName + ' ' + friends[v].lastName;
    ul.appendChild(li);
  }
  return ul;
};
