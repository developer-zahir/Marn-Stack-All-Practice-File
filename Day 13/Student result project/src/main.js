const student_create_form = document.querySelector("#student_create_form");
const photo = document.querySelector(".photo");
const photo_preview = document.querySelector(".photo_preview");
const msg = document.querySelector(".msg");
const all_student_data = document.querySelector(".all-students-data");
const single_student_container = document.querySelector(".single_student_container");

// profile photo preview
photo.onchange = (e) => {
  if (photo) {
    photo_preview.innerHTML = ` <img class="img-thumbnail mt-3 w-100" src="${e.target.value}" >`;
  }
};

// show data
const showData = () => {
  const students = getData("students");
  let content = "";
  if (students.length > 0) {
    students.map((student, index) => {
      content += `
          <tr class="align-middle">
            <td>${index < 9 ? `0${index + 1}` : index + 1}</td>
            <td><img style="width: 60px; object-fit: cover" class="rounded" src="${student.photo}" alt="${student.name}" /></td>
            <td>${student.name}</td>
            <td>${student.roll}</td>
            <td>${student.reg}</td>
            <td>${timeAgo(student.time)}</td>
            <td><button class="btn btn-sm btn-success">Add result</button></td>
            <td>
            <button class="btn btn-sm btn-info" data-bs-toggle="modal" data-bs-target="#show_single_student_modal" onclick="show_student_single_data('${
              student.roll
            }')">
                <i class="fa-solid fa-eye"></i>
            </button>
            <button class="btn btn-sm btn-warning">
                <i class="fa-solid fa-edit"></i>
            </button>
            <button class="btn btn-sm btn-danger" onclick = "deleteStudent('${student.roll}')">
                <i class="fa-solid fa-trash"></i>
            </button>
            </td>
         </tr> 
        `;
    });
  } else {
    content = `
        <tr>
            <td colspan="8" class="text-center bg-danger-subtle">No data found</td>
        </tr>
    `;
  }

  all_student_data.innerHTML = content;
};
showData();

// submite student data and send it to the local storage
student_create_form.onsubmit = (e) => {
  e.preventDefault();

  // get all form data
  const from_data = new FormData(e.target);
  const data = Object.fromEntries(from_data);
  if (!data.name || !data.roll || !data.reg) {
    msg.innerHTML = createAlert("danger", "All fields are required");
  } else if (!isNumber(data.roll)) {
    msg.innerHTML = createAlert("danger", "Roll number must be a number");
  } else if (!isNumber(data.reg)) {
    msg.innerHTML = createAlert("danger", "Registration number must be a number");
  } else if (data.roll.length !== 6 || data.roll.length < 6) {
    msg.innerHTML = createAlert("danger", "Roll number must be 6 characters.");
  } else if (data.reg.length !== 8 || data.reg.length < 8) {
    msg.innerHTML = createAlert("danger", "Reg number must be 8 characters.");
  } else {
    const old_student = getData("students");

    // check roll and registetion number exsist or not
    if (old_student.some((item) => item.roll === data.roll)) {
      msg.innerHTML = createAlert("danger", ` This Roll <b>( ${data.roll} ) </b> already exists`);
    } else if (old_student.some((item) => item.reg === data.reg)) {
      msg.innerHTML = createAlert("danger", ` This Reg No <b>( ${data.reg} ) </b> already exists`);
    } else {
      old_student.push({
        ...data,
        result: null,
        time: Date.now(),
        id: getRandomUniqueID(10),
      });

      setData("students", old_student);
      msg.innerHTML = createAlert("success", ` <b>${data.name}</b> is successfully created`);
      showData();
      e.target.reset();
      photo_preview.innerHTML = "";
    }
  }
};

// delete student from ls list
const deleteStudent = (roll) => {
  const conf = confirm("Are you sure, you want to delete this student from the ls list");
  if (conf) {
    const students = getData("students");
    const update_students = students.filter((data) => data.roll !== roll);
    setData("students", update_students);
    showData();
  } else {
    alert("Your data is safe");
  }
};

// show induvisual student data
const show_student_single_data = (roll) => {
  const students = getData("students");
  const single_student = students.find((data) => data.roll == roll);
  single_student_container.innerHTML = `
  <div class="text-end mb-2"> <button class="btn-close" data-bs-dismiss="modal"></button></div>
  <div class="student-info text-center p-3" style="background:#dddddd80;">
  <img class="img-fluid w-100  " src="${single_student.photo}" alt="${single_student.name}" />
  <h3 class="h3 mb-0 mt-2">${single_student.name}</h3>
  <div class="d-flex gap-2 justify-content-center mt-0">
    <span>Roll: ${single_student.roll}</span>
    <span>Reg: ${single_student.reg}</span>
  </div>
</div>
<div >
  <table class="table table-striped border mt-3">
    <thead class="fw-bold">
      <tr>
        <td>Subject</td>
        <td>Mark</td>
        <td>GPA</td>
        <td>Gread</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Bangla</td>
        <td>52</td>
        <td>2.5</td>
        <td>B</td>
      </tr>
      <tr>
        <td>Bangla</td>
        <td>52</td>
        <td>2.5</td>
        <td>B</td>
      </tr>
    </tbody>
  </table>
</div>
  `;
};
