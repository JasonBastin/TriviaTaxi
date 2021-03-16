import axios from "axios";

const easyURL =
  "https://opentdb.com/api.php?amount=4&difficulty=easy&type=multiple";
const mediumURL =
  "https://opentdb.com/api.php?amount=4&difficulty=medium&type=multiple";
const hardURL =
  "https://opentdb.com/api.php?amount=2&difficulty=hard&type=multiple";
const doubleOrNothingURL = "https://opentdb.com/api.php?amount=1&type=multiple";

const fetchQuestions = async (url) => {
  try {
    const {
      data: { results },
    } = await axios.get(url);
    return results;
  } catch (error) {
    console.log(error);
  }
};

export const fetchEasyQuestions = () => fetchQuestions(easyURL);
export const fetchMediumQuestions = () => fetchQuestions(mediumURL);
export const fetchHardQuestions = () => fetchQuestions(hardURL);
export const fetchDoubleOrNothingQuestion = () =>
  fetchQuestions(doubleOrNothingURL);
