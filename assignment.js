const bloodDonationClubMembers = [
    {
      name: "John Doe",
      bloodGroup: "A+",
      phoneNumber: "1234567890",
      donationHistory: ["2021-05-10", "2022-02-15", "2023-01-20"]
    },
    {
      name: "Jane Smith",
      bloodGroup: "B-",
      phoneNumber: "9876543210",
      donationHistory: ["2021-07-05", "2022-12-10"]
    },
    {
      name: "Mike Johnson",
      bloodGroup: "O+",
      phoneNumber: "5551234567",
      donationHistory: ["2022-09-30", "2023-03-25"]
    },
    // Add more members as needed
  ];
  

  function findMembersByBloodGroup(bloodGroup) {
    const members = bloodDonationClubMembers.filter(member => member.bloodGroup === bloodGroup);
    return members;
  }
  
  const bloodGroup = "A+";
  const membersToDonate = findMembersByBloodGroup(bloodGroup);
  console.log(`Members with blood group ${bloodGroup} who are ready to donate:`);
  console.log(membersToDonate);
  
