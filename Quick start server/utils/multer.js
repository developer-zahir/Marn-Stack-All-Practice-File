import multer  from "multer";


//  create storage 
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images")
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "_"+ file.originalname)
    }

})


export const profileImage = multer({ storage: storage}).single("profileImage")