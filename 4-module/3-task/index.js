function highlight(table) {
  // Дополнительно, упражнения для, сделал проверку на то, какую колонку мы берём. Теперь их можно поменять местами, но при этом должно работать :)
  let cellNamesObj = [...table.querySelector("thead tr").children];
  let cellNamesList = [];
  for (let i = 0; i < cellNamesObj.length; i++) {
    cellNamesList.push(cellNamesObj[i].textContent.toLowerCase());
  }

  let tbodyChildren = table.querySelector("tbody").children;
  for (row of tbodyChildren) {
    for (let i = 0; i < row.children.length; i++) {
      if (cellNamesList[i] == "gender") {
        if (row.children[i].textContent == "m") {
          row.classList.add("male")
        }
        if (row.children[i].textContent == "f") {
          row.classList.add("female")
        }
      }

      if (cellNamesList[i] == "age") {
        if (Number(row.children[i].textContent) < 18) {
          row.style.textDecoration = "line-through"
        }
        
      }

      if (cellNamesList[i] == "status") {
        if (!row.children[i].dataset.available) {
          row.hidden = true
        }
        else if (row.children[i].dataset.available == "true") {
          row.classList.add("available")
        }
        else {
          row.classList.add("unavailable")
        }
      }
    }
  }
}
