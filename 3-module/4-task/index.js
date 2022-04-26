function showSalary(users, upperAge) {
  let appropriateUsers = users
    .filter(({ age }) => age <= upperAge)
    .map( ({ name, balance }) => [ name, balance ].join(", "));
  return(appropriateUsers.join("\n"));
}