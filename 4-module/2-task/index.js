function makeDiagonalRed(table) {
  
  tbody = table.querySelector("tbody");
  for (let i = 0; i < tbody.children.length; i++)
    
    tbody.children[i].children[i].style.backgroundColor = "red";
}
