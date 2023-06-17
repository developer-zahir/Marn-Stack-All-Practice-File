// Get filter type form user
const filter_type = prompt(`
How do you want to search?
------------------
🔸 ID
🔸 Name
🔸 Age
🔸 Location
🔸 Blood Group
🔸 Phone number
`).toLowerCase();

if (filter_type === "id") {
  const filter_key = prompt("Enter the id: ").toLowerCase();
  let donor = members.find((donor) => donor.id === parseInt(filter_key));
//   Output ------
console.log(`Name: ${donor.name} Age: ${donor.age} Phone: `);

} else if (filter_type === "name") {
  console.log("for name");
} else if (filter_type === "age") {
  console.log("for age");
} else if (filter_type === "location") {
  console.log("for location");
} else if (filter_type === "blood group") {
  console.log("for blood group");
} else if (filter_type === "phone number") {
  console.log("for phone number");
} else {
  console.log(`
  Select a valid search type: 
  ------------------------
  🔸 ID
  🔸 Name
  🔸 Age
  🔸 Location
  🔸 Blood Group
  🔸 Phone number
  
  `); 
}

// console.log(typeof filter_type);
