import { response } from "express";
import QuestionForCoding from "../../../models/coding/QuestionForCoding.model.js";
import Language from "../../../models/coding/language.model.js";

export const checkCodingQuestionAvailability = async (req, res) => {
  const { question } = req.params;
  const isExists = await QuestionForCoding.findOne({ question });
  if (isExists === null) {
    return res.status(200).send({ isAvailable: true });
  } else {
    return res.status(200).send({ isAvailable: false });
  }
};
export const postQuestionForCoding = async (req, res) => {
  console.log(req.body);
  if (req.body) {
    try {
      const { question } = req.body.questionObj;
      const isExists = await QuestionForCoding.findOne({ question });
      if (isExists === null) {
        const newObject = new QuestionForCoding(req.body.questionObj);
        await newObject
          .save()
          .then((response) => {
            return res.status(201).send({ msg: "Question added...!" });
          })
          .catch((error) => {
            return res.status(401).send({ error: error.message });
          });
      } else {
        return res
          .status(401)
          .send({ error: "Question already exists in database...!" });
      }
    } catch (error) {
      return res.status(501).send({ error: "Something went wrong" });
    }
  }
};

export const addLanguage = async (req, res) => {
  try {
    const { name } = req.body;
    const isExists = await Language.findOne({ name });
    console.log(isExists);
    if (isExists === null) {
      const obj = new Language(req.body);
      await obj
        .save()
        .then((response) => {
          return res.status(201).send({ msg: "Language added...!" });
        })
        .catch((error) => {
          console.log(error);
          return res.status(401).send({ error: error.message });
        });
    } else {
      return res.status(401).send({ error: "Language already exists...!" });
    }
  } catch (error) {
    console.log(error.message);
    return res.status(501).send({ error: error.message });
  }
};

export const getAllQuestionsFromCoding = async (req, res) => {
  try {
    await QuestionForCoding.find({})
      .then((data) => {
        return res
          .status(200)
          .send(
            data.sort((a, b) =>
              new Date(a.date_added).getTime() -
              new Date(b.date_added).getTime()
                ? -1
                : 1
            )
          );
      })
      .catch((error) => {
        return res.status(401).send({ error: error.message });
      });
  } catch (error) {
    return res.status(401).send({ error: error.message });
  }
};

export const getCodingQuestionById = async (req, res) => {
  const _id = req.params.id;
  try {
    await QuestionForCoding.find({ _id })
      .then((data) => {
        return res.status(200).send(data);
      })
      .catch((error) => {
        return res
          .status(401)
          .send({ error: "No question available for this id" });
      });
  } catch (error) {
    return res.status(401).send({ error: error.message });
  }
};

export const deleteCodingQuestionById = async (req, res) => {
  const { id } = req.params;
  try {
    await QuestionForCoding.findByIdAndDelete({ _id: id })
      .then((data) => {
        return res.status(200).send({ msg: "Question deleted successfully" });
      })
      .catch((error) => {
        return res
          .status(401)
          .send({ error: "No question available for this id" });
      });
  } catch (error) {
    return res.status(401).send({ error: error.message });
  }
};
