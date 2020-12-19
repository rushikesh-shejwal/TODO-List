var put = document.getElementById("submit_btn");

put.addEventListener("click", ()=>{
    console.log("Running Successfuly");
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var mark = document.getElementById('marks').value;
    var itemJsonArray, itemJsonArrayStr
    if (localStorage.getItem('itemsJson')==null){
        itemJsonArray = [];
        itemJsonArray.push([fname, lname, mark]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    }
    else{
        itemJsonArrayStr = localStorage.getItem('itemsJson');
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([fname ,lname , mark]);    
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    }

    let tableBody = document.getElementById("table-bd")
    let str = "";
    itemJsonArray.forEach((element, index) => {
        str += `
        <tr>
        <th>${index + 1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td>${element[2]}</td>
      </tr>        
        `

    });
    tableBody.innerHTML = str;
});