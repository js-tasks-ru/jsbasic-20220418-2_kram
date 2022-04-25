function sumSalary(salaries) {
  let sumSalaries = 0;
  for (key in salaries){
    if (Number.isFinite(salaries[key])){
      sumSalaries+=salaries[key]
    }
  }
  return sumSalaries
}