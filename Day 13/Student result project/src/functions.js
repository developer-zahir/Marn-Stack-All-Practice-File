// set data to the local storage
const setData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

// get data from the local storage
const getData = (key) => {
  if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key)).reverse();
  } else {
    return [];
  }
};

// create alert
const createAlert = (type, message) => {
  return `
    <div class="alert alert-${type} alert-dismissible fade show" role="alert">
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        <p class="m-0">${message}</p>
     </div>
    `;
};

// check submite value is number or not
const isNumber = (number) => {
  const partran = /^[0-9]{1,}$/;
  return partran.test(number);
};

// time ago function
function timeAgo(timestamp) {
  const currentTimestamp = Date.now();
  const timeDifference = currentTimestamp - timestamp;

  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (years >= 1) {
    return years === 1 ? "1 year ago" : `${years} years ago`;
  } else if (months >= 1) {
    return months === 1 ? "1 month ago" : `${months} months ago`;
  } else if (weeks >= 1) {
    return weeks === 1 ? "1 week ago" : `${weeks} weeks ago`;
  } else if (days >= 1) {
    return days === 1 ? "1 day ago" : `${days} days ago`;
  } else if (hours >= 1) {
    return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
  } else if (minutes >= 1) {
    return minutes === 1 ? "1 minute ago" : `${minutes} minutes ago`;
  } else {
    return seconds === 1 ? "1 second ago" : `${seconds} seconds ago`;
  }
}

// genarate unique random identifier
const getRandomUniqueID = (length = 10) => {
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const cryptoObj = window.crypto || window.msCrypto; // For browser compatibility

  if (!cryptoObj || !cryptoObj.getRandomValues) {
    throw new Error("Your browser does not support secure random number generation.");
  }

  const randomArray = new Uint32Array(length);
  cryptoObj.getRandomValues(randomArray);

  let result = "";
  for (let i = 0; i < length; i++) {
    result += charset[randomArray[i] % charset.length];
  }

  return result;
};

// try {
//   const uniqueID = getRandomUniqueID();
//   console.log(uniqueID);
// } catch (error) {
//   console.error(error);
// }
