import QuestionForCoding from "../../models/coding/QuestionForCoding.model.js";
import Language from "../../models/coding/language.model.js";

export const getAllLanguages = async (req, res) => {
  try {
    const data = await Language.find({})
      .then((response) => {
        response;
        return res.status(201).send(response);
      })
      .catch((error) => {
        return res.status(401).send({ error: error.message });
      });
  } catch (error) {
    return res.status(501).send({ error: error.message });
  }
};
export const getQuestionsFromCodingByQuestionName = async (req, res) => {
  try {
    const { questionName } = req.params;
    await QuestionForCoding.find({ question: questionName })
      .then((data) => {
        data;
        return res.status(200).send(data);
      })
      .catch((error) => {
        return res.status(401).send({ error: error.message });
      });
  } catch (error) {
    return res.status(401).send({ error: error.message });
  }
};
