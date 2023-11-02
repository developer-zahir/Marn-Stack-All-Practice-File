import Student from "../models/Student.js";

// create student
export const createStudent = async (req, res) => {
  await Student.create(req.body);
  res.status(200).json(req.body);
};

// get all students
export const getAllStudents = async (req, res) => {
  const students = await Student.find();
  if (!students) return res.status(404).json({ message: "No students found" });
  res.status(200).json(students);
};

// get single data
export const getSingelData = async (req, res) => {
  const { id } = req.params;

  const student = await Student.findOne({ _id: id });
  res.status(200).json(student);
};

// delete student
export const deleteStudent = async (req, res) => {
  const { id } = req.params;

  const student = await Student.deleteOne({ _id: id });
  res.status(200).json(student);
};
