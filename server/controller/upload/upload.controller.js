const uploadController = async (req, res, next) => {
  return res.status(201).send({
    message: "image uploaded",
    image_url: `http://www.prepaim.com:4000/static/${req.file.filename}`,
  });
};

export default uploadController;
