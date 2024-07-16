const uploadController = async (req, res, next) => {
  return res.status(201).send({
    message: "image uploaded",
    image_url: `https://www.api.data.prepaim.com/static/${req.file.filename}`,
  });
};

export default uploadController;
