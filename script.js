let editIndex = null;

function addStudent() {
    let name = document.getElementById("studentName").value;
    let temp = document.getElementById("temperature").value;

    let sicknessList = [];
    let checkboxes = document.getElementById("sickOption");

    for(let box of checkboxes) {
        if (box.checked) {
            sicknessList.push(box.value);
        }
    }

    
    



}