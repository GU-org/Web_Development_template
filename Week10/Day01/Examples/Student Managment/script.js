const nameInput = document.getElementById("nameInput");
const markInput = document.getElementById("markInput");
const addBtn = document.getElementById("addBtn");
const studentList = document.getElementById("studentList");
const totalDisplay = document.getElementById("total");
const averageDisplay = document.getElementById("average");
const searchInput = document.getElementById("searchInput");

let students = [];

addBtn.addEventListener("click", addStudent);
searchInput.addEventListener("input", searchStudents);

function addStudent() {

  const name = nameInput.value;
  const mark = Number(markInput.value);

  if (name === "" || mark === 0) {
    alert("Please enter valid data");
    return;
  }

  const student = {
    name: name,
    mark: mark
  };

  students.push(student);

  nameInput.value = "";
  markInput.value = "";

  displayStudents(students);
  updateStatistics();
}

function displayStudents(list) {

  studentList.innerHTML = "";

  list.forEach((student, index) => {

    const li = document.createElement("li");

    li.textContent = `${student.name} - ${student.mark}`;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.onclick = function () {
      students.splice(index, 1);
      displayStudents(students);
      updateStatistics();
    };

    li.appendChild(deleteBtn);

    studentList.appendChild(li);
  });
}

function updateStatistics() {

  totalDisplay.textContent = students.length;

  if (students.length === 0) {
    averageDisplay.textContent = 0;
    return;
  }

  const totalMarks = students.reduce((sum, s) => sum + s.mark, 0);

  const average = totalMarks / students.length;

  averageDisplay.textContent = average.toFixed(2);
}

function searchStudents() {

  const keyword = searchInput.value.toLowerCase();

  const filtered = students.filter(s =>
    s.name.toLowerCase().includes(keyword)
  );

  displayStudents(filtered);
}