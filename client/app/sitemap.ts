import axios from "axios";

const baseURL = "https://www.prepaim.com"

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
        url: `${baseURL}/${subject.name}/chapters`,
        lastModified: new Date().toISOString(),
      };
    }
  );

  let urlSetTestPreprationMode = [{}]
  let urlSetPreprationMode = [{}]

  const questionUrls = allSubjectsFromApi.map((subject: any) => {
    return allChaptersFromApi.map((chapter: any) => {
      return allQuestionsFromApi.filter((q: any) => q.chapter === chapter.name && q.subject === subject.name).map((question: any, index: any) => {
        // console.log(`http://localhost:3000/mcq/v1/Test-Prepration-Mode/${subject.name}/${chapter.name}/${index + 1}`)
        urlSetTestPreprationMode = urlSetTestPreprationMode.concat({
          url: `${baseURL}/mcq/v1/${subject.name.replaceAll(" ", "-")}/${chapter.name.replaceAll(" ", "-")}/Test-Prepration-Mode/${index + 1}`,
          lastModified:question.date_added,
        })
        return urlSetTestPreprationMode;
      })
    })
  })


  const questionUrlsPreprationUrls = allSubjectsFromApi.map((subject: any) => {
    return allChaptersFromApi.map((chapter: any) => {
      return allQuestionsFromApi.filter((q: any) => q.chapter === chapter.name && q.subject === subject.name).map((question: any, index: any) => {
        // console.log(`http://localhost:3000/mcq/v1/Test-Prepration-Mode/${subject.name}/${chapter.name}/${index + 1}`)
        urlSetPreprationMode = urlSetPreprationMode.concat({
          url: `${baseURL}/mcq/v1/${subject.name.replaceAll(" ", "-")}/${chapter.name.replaceAll(" ", "-")}/Prepration-Mode/${index + 1}`,
          lastModified:question.date_added,
        })
        return urlSetPreprationMode;
      })
    })
  })

  // questionUrlsPreprationUrls()
  // questionUrls()
  
  return [
    {
      url: `${baseURL}`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseURL}/about`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseURL}/contact`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseURL}/privacy`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseURL}/terms-of-services`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseURL}/mcq/v1/subjects`,
      lastModified: new Date().toISOString(),
    },
    ...allChaptersForSpecificSubject,
    ...urlSetTestPreprationMode,
    ...urlSetPreprationMode
  ];
}
