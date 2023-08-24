// Node js  এর ফাইল সিস্টেম ব্যবহার করে ,  আমরা যে কোন ফাইল তৈরি করতে পারিঃ
const fs = require("fs");
fs.writeFileSync("music.mp3", "");

// কোন একটি ফাইল তৈরি করা আছে, সেটিকে ডিলিট করতে চাইলেঃ
fs.unlinkSync("music.mp3");

// Node js ব্যবহার করে কোন একটি ফোল্ডার তৈরি করার জন্যঃ
fs.mkdirSync("assets");
fs.mkdirSync("assets/css");

// Node js ব্যবহার করে কোন একটি  ফাইল rename করার জন্যঃ
fs.renameSync("music.mp3", "video.mp4");

// Node js ব্যবহার করে কোন একটি ফাইল এর ভিতরে থাকা,  text  পরিবর্তন করে  নতুন কোন text  add করতে পারি। (  এক্ষেত্রে ওই ফাইলের  আগের ডাটা,  নতুন ডাটা দিয়ে রিপ্লেস হয়ে যাবে )
fs.writeFilesync("note.txt", "I Love Node js");

// Node js ব্যবহার করে কোন একটি ফাইল এর ভিতরে থাকা text  এর সাথে   নতুন text  add করতে পারি।
fs.appendFilesync("note.txt", "I Love Node js");

// Node js ব্যবহার করে কোন একটি ফাইল এর ভিতরে থাকা text নিয়ে screen এ show করাতে পারিঃ
const data = fs.readFilesync("note.txt");
console.log(data.toString());
