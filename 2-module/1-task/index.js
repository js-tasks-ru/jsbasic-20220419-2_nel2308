  function sumSalary(salaries) {
    let sum = 0;
    for (let k in salaries){
      if(typeof salaries[k] === 'number' && isFinite(salaries[k])) {
        //return typeof salaries[k] === 'number' && isFinite(salaries[k])
        sum += salaries[k];
      }
  } return sum;
  }
