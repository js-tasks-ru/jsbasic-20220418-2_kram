function showSalary(users, age) {
  let appropriateUsers = [];
  for (const user of users){
    if (user.age < age){
      appropriateUsers.push([user.name,user.balance].join(", "));
    }
  }
  return(appropriateUsers.join("\n"));
}