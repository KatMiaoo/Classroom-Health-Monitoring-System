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

    let manual = document.getElementById("manualSickness").value;
    if (manual !== "") sicknessList.push(manual);

    if (name === "" || temp === "") {
        alert("Please fill all fields!");
        return;
    }

    if (sicknessList.length === 0) {
        sicknessList.push("None");

    }


    let sicknessText = sicknessList.join(", ");

    let table = document.getElementById("studentTable");

    if (editIndex === null) {
        let row = table.insertRow();
        
    }
    



}