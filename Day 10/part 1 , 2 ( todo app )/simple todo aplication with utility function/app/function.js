// get all data
const get_all_data_from_ls = (key) => {
  let todos_data = [];
  if (localStorage.getItem(key)) {
    todos_data = JSON.parse(localStorage.getItem(key));
  }
  return todos_data;
};

//  set data -----------
const set_data = (kye, data) => {
 return localStorage.setItem(kye, JSON.stringify(data));
};
