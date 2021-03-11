import axios from "axios";

// Science API
export const fetchEasyQuestions = async () => {
  try {
    const apiURL =
      "https://opentdb.com/api.php?amount=4&difficulty=easy&type=multiple";
    const { data: easyQuestions } = await axios.get(apiURL);
    console.log("easy:", easyQuestions);
    return easyQuestions;
  } catch (error) {
    console.log(error);
  }
};
fetchEasyQuestions();

export const fetchMediumQuestions = async () => {
  try {
    const apiURL =
      "https://opentdb.com/api.php?amount=4&difficulty=medium&type=multiple";
    const { data: mediumQuestions } = await axios.get(apiURL);
    console.log("medium: ", mediumQuestions);
    return mediumQuestions;
  } catch (error) {
    console.log(error);
  }
};
fetchMediumQuestions();

export const fetchHardQuestions = async () => {
  try {
    const apiURL =
      "https://opentdb.com/api.php?amount=2&difficulty=hard&type=multiple";
    const { data: hardQuestions } = await axios.get(apiURL);
    console.log("hard: ", hardQuestions);
    return hardQuestions;
  } catch (error) {
    console.log(error);
  }
};
fetchHardQuestions();

export const fetchDoubleOrNothingQuestion = async () => {
  try {
    const apiURL = "https://opentdb.com/api.php?amount=1&type=multiple";
    const { data: doubleOrNothingQuestion } = await axios.get(apiURL);
    console.log("DblOrNot: ", doubleOrNothingQuestion);
    return doubleOrNothingQuestion;
  } catch (error) {
    console.log(error);
  }
};
fetchDoubleOrNothingQuestion();
