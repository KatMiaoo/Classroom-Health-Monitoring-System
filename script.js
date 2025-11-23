let editIndex = null;

function addStudent() {
    let surname = document.getElementById("surname").value;
    let firstName = document.getElementById("firstName").value;
    let mi = document.getElementById("MI").value;
    let temp = document.getElementById("temperature").value;

    let sicknessList = [];
    let checkboxes = document.getElementsByClassName("sickOption");

    for (let box of checkboxes) {
        if (box.checked) {
            sicknessList.push(box.value);
        }
    }

    let manual = document.getElementById("manualSickness").value;
    if (manual !== "") sicknessList.push(manual);

    if (surname === "" || firstName === "" || mi === "" || temp === "") {
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
        row.insertCell(0).innerHTML = surname;
        row.insertCell(1).innerHTML = firstName;
        row.insertCell(2).innerHTML = mi;
        row.insertCell(3).innerHTML = temp;
        row.insertCell(4).innerHTML = sicknessText;
        row.insertCell(5).innerHTML = `
            <button class='btn-edit' onclick='editStudent(this)'>Edit</button>
            <button class='btn-delete' onclick='deleteStudent(this)'>Delete</button>
        `;
    } else {
        let row = table.rows[editIndex];
        row.cells[0].innerHTML = surname;
        row.cells[1].innerHTML = firstName;
        row.cells[2].innerHTML = mi;
        row.cells[3].innerHTML = temp;
        row.cells[4].innerHTML = sicknessText;
        editIndex = null;
    }

    clearInputs();
}

function editStudent(button) {
    let row = button.parentNode.parentNode;
    editIndex = row.rowIndex - 1;

    document.getElementById("surname").value = row.cells[0].innerHTML;
    document.getElementById("firstName").value = row.cells[1].innerHTML;
    document.getElementById("MI").value = row.cells[2].innerHTML;
    document.getElementById("temperature").value = row.cells[3].innerHTML;

    let sicknesses = row.cells[4].innerHTML.split(", ");

    let checkboxes = document.getElementsByClassName("sickOption");
    for (let box of checkboxes) box.checked = false;

    sicknesses.forEach(s => {
        for (let box of checkboxes) {
            if (box.value === s) box.checked = true;
        }
    });

    document.getElementById("manualSickness").value = "";
}

function deleteStudent(button) {
    if (confirm("Delete this student?")) {
        let row = button.parentNode.parentNode;
        row.parentNode.removeChild(row);
    }
}

function clearInputs() {
    document.getElementById("surname").value = "";
    document.getElementById("firstName").value = "";
    document.getElementById("MI").value = "";
    document.getElementById("temperature").value = "";
    document.getElementById("manualSickness").value = "";

    let checkboxes = document.getElementsByClassName("sickOption");
    for (let box of checkboxes) box.checked = false;
}
