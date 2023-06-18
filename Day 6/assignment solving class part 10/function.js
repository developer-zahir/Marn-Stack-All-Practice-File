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
  const filter_key = prompt("Enter the id: ");
  const donor = members.find((donor) => donor.id === parseInt(filter_key.trim()));
  //   Output ------
  console.log(`Name: ${donor.name} Age: ${donor.age} Phone: ${donor.phone_number}`);
  // donation history
  donor.donation_history.map((patient) => {
    console.log(` 
   Patient ${patient.id} 
   Name: ${patient.name} Age: ${patient.age} Donate date: ${patient.donate_date}
    `);
  });
} else if (filter_type === "name") {
  const filter_key = prompt("Enter the donor name: ").toLowerCase();
  const donors = members.filter((patient) => patient.name.toLowerCase() === filter_key.trim());
  donors.map((donor) => {
    console.log(`Name: ${donor.name} Age: ${donor.age} Phone: ${donor.phone_number}`);
    // donation history
    donor.donation_history.map((patient) => {
      console.log(` 
   Patient ${patient.id} 
   Name: ${patient.name} Age: ${patient.age} Donate date: ${patient.donate_date}
    `);
    });
  });
} else if (filter_type === "age") {
  const filter_key = prompt("Enter the donor age: ");
  const donors = members.filter((patient) => patient.age === parseInt(filter_key.trim()));
  donors.map((donor) => {
    console.log(`Name: ${donor.name} Age: ${donor.age} Phone: ${donor.phone_number}`);
    // donation history
    donor.donation_history.map((patient) => {
      console.log(` 
   Patient ${patient.id} 
   Name: ${patient.name} Age: ${patient.age} Donate date: ${patient.donate_date}
    `);
    });
  });
} else if (filter_type === "location") {
  const filter_key = prompt("Enter the donor location: ").toLowerCase();
  const donors = members.filter((patient) => patient.location.toLowerCase() === filter_key.trim());
  donors.map((donor) => {
    console.log(`Name: ${donor.name} Age: ${donor.age} Phone: ${donor.phone_number}`);
    // donation history
    donor.donation_history.map((patient) => {
      console.log(` 
   Patient ${patient.id} 
   Name: ${patient.name} Age: ${patient.age} Donate date: ${patient.donate_date}
    `);
    });
  });
} else if (filter_type === "blood group") {
  const filter_key = prompt("Enter the donor blood group: ").toLowerCase();
  const donors = members.filter((patient) => patient.blood_group.toLowerCase() === filter_key.trim());
  donors.map((donor) => {
    console.log(`Name: ${donor.name} Age: ${donor.age} Phone: ${donor.phone_number}`);
    // donation history
    donor.donation_history.map((patient) => {
      console.log(` 
   Patient ${patient.id} 
   Name: ${patient.name} Age: ${patient.age} Donate date: ${patient.donate_date}
    `);
    });
  });
} else if (filter_type === "phone number") {
  const filter_key = prompt("Enter the donor phone number: ");
  const donor = members.find((donor) => donor.phone_number === filter_key.trim());
  //   Output ------
  console.log(`Name: ${donor.name} Age: ${donor.age} Phone: ${donor.phone_number}`);
  // donation history
  donor.donation_history.map((patient) => {
    console.log(` 
   Patient ${patient.id} 
   Name: ${patient.name} Age: ${patient.age} Donate date: ${patient.donate_date}
    `);
  });
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
