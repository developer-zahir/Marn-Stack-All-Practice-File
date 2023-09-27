import axios from "axios";

// get all student
export const get_all_student = (req, res) => {
  res.send("Get all student");
};

// add student
export const add_student = (req, res) => {
  res.send("Add student");
};

// update student
export const update_student = (req, res) => {
  res.send("Update student");
};

// delete student
export const delete_student = () => {
  res.send("Delete student");
};

// register student
export const register = async (req, res) => {
  await axios.get(
    `http://bulksmsbd.net/api/smsapi?api_key=HQ3D5mrMbskrsvkGEyGU&type=text&number=${req.body.phone})&senderid=8809617613059&message=(Hi ${req.body.name}, you are ${req.body.age} Years Old and You are ${req.body.skill} Developer`
  );

  res.status(200).json(req.body);
};
