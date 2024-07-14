import Subject from "../../models/admin/subject.model.js";

export const postSubject = async (req, res) => {
  // console.log(req.body);
  try {
    if (req.body) {
      const { name } = req.body.subjectObj;
      const token = req.body.token;
      const isExists = await Subject.findOne({ name });
      if (isExists === null) {
        const subj = new Subject(req.body.subjectObj);
        await subj
          .save()
          .then((d) => {
            return res.status(201).send({ msg: "Subject saved...!" });
          })
          .catch((e) => {
            return res.status(400).send({ error: e.message });
          });
      } else {
        return res.status(400).send({ error: "Subject already exists...!" });
      }
    }
  } catch (error) {
    return res.status(501).send({ error: "Something went wrong" });
  }
};

export const getSubjects = async (req, res) => {
  try {
    await Subject.find({})
      .then((data) => {
        return res.status(200).send(data);
      })
      .catch((error) => {
        console.log(error.message);
        return res.status(404).send({ error });
      });
  } catch (error) {
    console.log(error.message);
    return res.status(501).send("Something went wrong...!");
  }
};

export const checkSubjectAvailability = async (req, res) => {
  const { name } = req.params;
  const isExists = await Subject.findOne({ name });
  if (isExists === null) {
    return res.status(200).send({ isSubjectAvailable: false });
  } else {
    return res.status(200).send({ isSubjectAvailable: true });
  }
};
