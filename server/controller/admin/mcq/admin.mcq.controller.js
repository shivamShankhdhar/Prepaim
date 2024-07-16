import Chapter from "../../../models/mcq/chapter.model.js";
import Question from "../../../models/mcq/question.model.js";
import Comment from "../../../models/mcq/comments.model.js";
import Branch from "../../../models/mcq/branch.model.js";

export const postQuestions = async (req, res) => {
  try {
    const { question } = req.body.question;
    const { subject } = req.body.question;
    const { chapter } = req.body.question;
    const isExists = await Question.find({ question, chapter, subject });
    if (isExists.length === 0) {
      const Que = new Question(req.body.question);
      await Que.save()
        .then((response) => {
          // (response)
          return res.status(201).send({ msg: "Question Saved...!" });
        })
        .catch((error) => {
          error.message;
          return res.status(501).send({ msg: "Question Already Exists...!" });
        });
    } else {
      return res.status(401).send({
        msg: "Question Already Exists try diferrent chapter or subject",
      });
    }
  } catch (error) {
    error.message;
    return res.status(500).send({ msg: "Something went wrong...!" });
  }
};

export const postChapter = async (req, res) => {
  // (req.body);
  try {
    const { name } = req.body.chapterObj;
    // (name);
    const isExists = await Chapter.findOne({ name });
    // (isExists);
    if (isExists === null) {
      const chap = new Chapter(req.body.chapterObj);
      await chap
        .save()
        .then((d) => {
          return res.status(201).send({ msg: "Chapter saved...!" });
        })
        .catch((e) => {
          return res.status(400).send({ error: e.message });
        });
    } else {
      return res.status(400).send({ error: "Chapter already exists...!" });
    }
  } catch (error) {
    return res.status(501).send({ error: error.message });
  }
};
// post brancges
export const postBranch = async (req, res) => {
  const { name } = req.body;
  if (name !== "") {
    const isExists = await Branch.findOne({ name });
    if (isExists === null) {
      try {
        const newBranch = new Branch(req.body);
        await newBranch
          .save()
          .then((data) => {
            return res.status(201).send({ message: "Branch added...!" });
          })
          .catch((e) => {
            e.message;
            return res.status(501).send({ error: e.message });
          });
      } catch (error) {
        error;
        return res.status(501).send({ error: error.message });
      }
    } else {
      return res.status(501).send({ error: "Branch already exists...!" });
    }
  }
};
//post comments

export const getQuestions = async (req, res) => {
  try {
    const data = await Question.find({});
    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).send("Something went wrong...!");
  }
};

export const getQuestionById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Question.find({ _id: id });
    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).send("Something went wrong...!");
  }
};

export const getChapters = async (req, res) => {
  try {
    const subject = req.body.subject;

    await Chapter.find({ subject })
      .then((data) => {
        return res.status(200).send(data);
      })
      .catch((error) => {
        return res.status(404).send(error);
      });
  } catch (error) {
    return res.status(501).send("Something went wrong...!");
  }
};

export const updateQuestion = async (req, res) => {
  const { id } = req.params;
  req.body;

  await Question.findByIdAndUpdate(
    { _id: id },
    {
      question: req.body.updatedQuestion.question,
      answer: req.body.updatedQuestion.answer,
      subject: req.body.updatedQuestion.subject,
      chapter: req.body.updatedQuestion.chapter,
      explanation: req.body.updatedQuestion.explanation,
      level: req.body.updatedQuestion.level,
    }
  )
    .then((response) => {
      response;
      return res.status(201).send(response);
    })
    .catch((err) => {
      err;
      return res.status(400).send(err);
    });
};

export const updateCommentApprovalByCommentId = async (req, res) => {
  const { id } = req.params;
  await Comment.findByIdAndUpdate({ _id: id }, { $set: { isApproved: true } })
    .then((response) => {
      return res.status(200).send({ msg: "Record Updated" });
    })
    .catch((error) => {
      return res.status(401).send({ msg: error.message });
    });
};

export const deleteQuestion = async (req, res) => {
  const { id } = req.params;
  await Question.findByIdAndDelete({ _id: id })
    .then((response) => {
      response;
      return res.status(201).send(response);
    })
    .catch((err) => {
      err;
      return res.status(400).send(err);
    });
};

export const deleteCommentById = async (req, res) => {
  const { id } = req.params;
  await Comment.findByIdAndDelete({ _id: id })
    .then((rersponse) => {
      return res.status(201).send({ msg: "Comment Deleted...!" });
    })
    .catch((err) => {
      return res.status(401).send({ msg: "Something went wrong...!" });
    });
};

export const getAllComments = async (req, res) => {
  try {
    const data = await Comment.find({});
    const sortedByDate = data.sort((a, b) =>
      new Date(a.date_added).getTime() - new Date(b.date_added).getTime()
        ? -1
        : 1
    );
    const sortByApproved = sortedByDate.sort((a, b) =>
      a.isApproved - b.isApproved ? 1 : -1
    );
    return res.status(200).send(sortByApproved);
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const getAllBranches = async (req, res) => {
  try {
    const branches = await Branch.find({});
    const sortedBranches = branches.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    return res.status(200).send(sortedBranches);
  } catch (error) {
    return res.status(200).send({ error: error.message });
  }
};
