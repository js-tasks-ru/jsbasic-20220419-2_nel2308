function highlight(table) {
  let row = table.querySelectorAll('tbody > tr');
  for (let i = 0; i < row.length; i++){
    let tr = row[i];
    console.log(tr);
    if(tr.cells[3].hasAttribute("data-available")){
      if(tr.cells[3].getAttribute("data-available") === 'true'){
        tr.classList.add("available");
      }
      if(tr.cells[3].getAttribute("data-available") === 'false'){
        tr.classList.add("unavailable");
      }
  } else {
    tr.setAttribute("hidden", "hidden");
  }
    if(tr.cells[2].innerText === 'f') {
      tr.classList.add('female');
    }

    if(tr.cells[2].innerText === 'm') {
      tr.classList.add('male');
    }

    
    if(parseInt(tr.cells[1].innerText) < 18) {
      tr.style.textDecoration = 'line-through';
    }

  }

}