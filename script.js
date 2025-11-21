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
        row.insertCell(0).innerHTML = name;
        row.insertCell(1).innerHTML = temp;
        row.insertCell(2).innerHTML = sicknessText;
        row.insertCell(3).innerHTML = `
        <button class='btn-edit' onclick='editStudent(this)'>Edit</button>
        <button class='btn-delete' onclick='deleteStudent(this)'>Delete</button>
        `;
    } else {
        let row = table.rows[editIndex];
        row.cells[0].innerHTML = name;
        row.cells[1].innerHTML = temp;
        row.cells[2].innerHTML = sicknessText;
        editIndex = null;
    }

    clearInputs();
    



}