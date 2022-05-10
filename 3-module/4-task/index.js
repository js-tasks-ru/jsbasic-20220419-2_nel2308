function showSalary(users, age) {
  return users.filter(user => {
    return user.age <= age;
  }).map(user => {
    return user.name + ', ' + user.balance;
  }).join("\n");
}
