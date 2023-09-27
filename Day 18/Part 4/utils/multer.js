import multer from "multer";

// disk storage setup
const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + Math.floor(Math.random() * 10000) + "_" + file.originalname);
  },

  destination: (req, file, cb) => {
    if (file.fieldname === "custommerPhoto") {
      cb(null, "public/custommer_photo");
    } else if (file.fieldname === "studentPhoto") {
      cb(null, "public/student_photo");
    } else if (file.fieldname === "galleryPhoto") {
      cb(null, "public/gallery_photo");
    } else if (file.fieldname === "userPhoto") {
      cb(null, "public/user/user_photo");
    } else if (file.fieldname === "userCV") {
      cb(null, "public/user/user_cv");
    }
  },
});

// create custommer multer muddleware
export const createCustommerMulter = multer({ storage }).single("custommerPhoto");

// create student multer muddleware
export const createStudentMulter = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      cb(null, true);
    } else {
      cb(new Error("File type is not supported"));
    }
  },
  limits: {
    fileSize: 10,
  },
}).single("studentPhoto");

// create gallery multer muddleware
export const createGalleryMulter = multer({ storage }).array("galleryPhoto", 5);

// create user multer muddleware
export const userCreateMulter = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (file.fieldname === "userPhoto") {
      // Check if the file has a jpg or png extension
      if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        cb(null, true);
      } else {
        cb(new Error("Only jpg and png files are allowed for userPhoto."), false);
      }
    } else if (file.fieldname === "userCV") {
      // Check if the file has a pdf extension
      if (file.mimetype === "application/pdf") {
        cb(null, true);
      } else {
        cb(new Error("Only pdf files are allowed for userCV."), false);
      }
    } else {
      cb(new Error("Unknown fieldname"), false);
    }
  },
}).fields([
  {
    name: "userPhoto",
    maxCount: 1,
  },
  {
    name: "userCV",
    maxCount: 1,
  },
]);
