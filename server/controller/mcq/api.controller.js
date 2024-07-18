import Chapter from "../../models/mcq/chapter.model.js";
import Question from "../../models/mcq/question.model.js";
import Subject from "../../models/admin/subject.model.js";
import Comment from "../../models/mcq/comments.model.js";
// post api
// post questions

// post subjects

// post subjects

//get api
// get all questions
export const postComment = async (req, res) => {
  if (req.body) {
    try {
      const comment = new Comment(req.body);
      await comment
        .save()
        .then((data) => {
          return res.status(201).send({ msg: "Comment saved...!" });
        })
        .catch((e) => {
          return res.status(400).send({ msg: "something went wrong...!" });
        });
    } catch (error) {}
  }
};
// get questions according to the subject and chapters
export const getQuestionsBySubjectAndChapter = async (req, res) => {
  let { subject } = req.params;
  let { chapter } = req.params;
("hitting api");
  subject = subject.replace("-", " ");
  chapter = chapter.replace("-", " ");

  try {
    const data = await Question.find({ subject, chapter });
    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

// get all subjects

// search subjects by branch
export const getSubjectsByBranchAndSubject = async (req, res) => {
  const { branch } = req.params;
  const { subject } = req.params;
  try {
    await Subject.find({ branch, subject })
      .then((data) => {
        return res.status(200).send(data);
      })
      .catch((error) => {
        return res.status(404).send({ error });
      });
  } catch (error) {
    return res.status(501).send("Something went wrong...!");
  }
};

// get all chapters

export const getAllChaptersBySubject = async (req, res) => {
  const { subject } = req.params;
  if (subject !== "") {
    try {
      await Chapter.find({ subject: subject })
        .then((data) => {
          return res.status(200).send(data);
        })
        .catch((e) => {
          return res.status(400).send(e);
        });
    } catch (error) {
      return res.status(500).send(error);
    }
  } else {
    return res.status(404).send("Please input a valid subject.");
  }
};

export const getCommentByQuestion = async (req, res) => {
  const { question } = req.params;
  try {
    const data = await Comment.find({ question, isApproved: true });
    // const approvedComments = data.filter(comment => comment.isApproved === true)
    const sortedByDate = data.sort((a, b) =>
      new Date(a.date_added).getTime() - new Date(b.date_added).getTime()
        ? -1
        : 1
    );
    return res.status(200).send(sortedByDate);
  } catch (error) {
    return res.status(500).send(error);
  }
};

// get all branches

// get all comments

//update query
