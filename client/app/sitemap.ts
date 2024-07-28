import axios from "axios";
import { useState } from "react";

const allSubjects = async () => {
  const subjects = await axios.get(
    "https://api.data.prepaim.com/mcq/getallsubjects"
  );
  return subjects.data;
};

const allChaptersBySubjectName = async (subjectName: string) => {
  const chapters = await axios.get(
    `https://api.data.prepaim.com/mcq/getallchaptersbysubject/${subjectName}`
  );
  return chapters.data;
};

const allQuestions = async () => {
  const questions = await axios.get(
    "https://api.data.prepaim.com/mcq/getallquestions"
  );
  return questions.data;
};

const allChaptersForSpecificSubjectForQuestions = async (subjectName: any) => {
  const chapters = await axios.get(
    `https://api.data.prepaim.com/mcq/getallchaptersbysubject/`
  );
  return chapters.data;
};

const allChaptersBySubjectNameForFilteredQuestions = async (subjectName: any) => {
  const chapters = await axios.get(
    `https://api.data.prepaim.com/mcq/getallchaptersbysubject/${subjectName}`
  );
  return chapters.data;
}

const allChapters = async () => {
  const chapters = await axios.get(`https://api.data.prepaim.com/mcq/getallchapters`);
  return chapters.data
}


export default async function sitemap() {
  const allSubjectsFromApi = await allSubjects();

  const allQuestionsFromApi = await allQuestions();
  
  const allChaptersFromApi = await allChapters()

  const allChaptersForSpecificSubject = allSubjectsFromApi.map(
    (subject: any) => {
      return {
        url: `http://localhost:3000/mcq/v1/${subject.name}/chapters`,
        lastModified: new Date().toISOString(),
      };
    }
  );


  return [
    {
      url: "http://localhost:3000/",
      lastModified: new Date().toISOString(),
    },
    {
      url: "http://localhost:3000/about",
      lastModified: new Date().toISOString(),
    },
    {
      url: "http://localhost:3000/contact",
      lastModified: new Date().toISOString(),
    },
    {
      url: "http://localhost:3000/privacy",
      lastModified: new Date().toISOString(),
    },
    {
      url: "http://localhost:3000/terms-of-services",
      lastModified: new Date().toISOString(),
    },
    {
      url: "http://localhost:3000/mcq/v1/subjects",
      lastModified: new Date().toISOString(),
    },
    ...allChaptersForSpecificSubject,
    // ...allQuetionsRoutes,
  ];
}
