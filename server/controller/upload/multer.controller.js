import multer from "multer";

const multerUpload = () => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/images");
    },
    filename: function (req, file, cb) {
      // console.log(file);
      const extension = file.originalname.split(".").pop();
      const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
      cb(null, file.fieldname + "-" + `${uniqueSuffix}.${extension}`);
    },
  });

  const upload = multer({ storage: storage });
  return upload;
};

export default multerUpload;
