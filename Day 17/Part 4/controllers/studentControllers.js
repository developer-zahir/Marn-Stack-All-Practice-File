// get all student data
export const getAllStudent = (req, res) => {
  res.send("Well done, your successfully send the request");
};

// add student data
export const addStudent = (req, res) => {
  res.send("Student added");
  console.log(req.body);
};


// delete student data
export const deleteStudent = (req, res)=>{
  res.send('You successfully deleted the student');
}