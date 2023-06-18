/** class topic -
 * what is json.
 * why json
 * array to json
 * json to array
 * how to write json data
 *
 */

const members = [
    {
      id: 1,
      name: "Zahir",
      age: 20,
      blood_group: "A+",
      location: "Dhaka",
      phone_number: "01775425643",
      last_donate_date: "Februaty 18, 2022",
      donation_history: [
        {
          id: 1,
          name: "Rofik",
          age: 35,
          donate_date: "January 12, 2021",
        },
        {
          id: 2,
          name: "Robin",
          age: 22,
          donate_date: "Februaty 18, 2022",
        },
      ],
    },
  ];

// convert ( any ) data to json
const json_data = JSON.stringify(members);
console.log(json_data);

const members_json_format = `[{"id":1,"name":"Zahir","age":20,"blood_group":"A+","location":"Dhaka","phone_number":"01775425643","last_donate_date":"Februaty 18, 2022","donation_history":[{"id":1,"name":"Rofik","age":35,"donate_date":"January 12, 2021"},{"id":2,"name":"Robin","age":22,"donate_date":"Februaty 18, 2022"}]}]`;

// convert json to data
const json_to_data = JSON.parse(members_json_format);
console.log(json_to_data);
