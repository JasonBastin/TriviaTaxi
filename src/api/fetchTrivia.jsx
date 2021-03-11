import axios from "axios";

export const fetchEasyQuestions = async () => {
  try {
    const apiURL =
      "https://opentdb.com/api.php?amount=4&difficulty=easy&type=multiple";
    const {
      data: { results: easyQuestions },
    } = await axios.get(apiURL);
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
    const {
      data: { results: mediumQuestions },
    } = await axios.get(apiURL);
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
    const {
      data: { results: hardQuestions },
    } = await axios.get(apiURL);
    return hardQuestions;
  } catch (error) {
    console.log(error);
  }
};
fetchHardQuestions();

export const fetchDoubleOrNothingQuestion = async () => {
  try {
    const apiURL = "https://opentdb.com/api.php?amount=1&type=multiple";
    const {
      data: { results: doubleOrNothingQuestion },
    } = await axios.get(apiURL);
    return doubleOrNothingQuestion;
  } catch (error) {
    console.log(error);
  }
};
fetchDoubleOrNothingQuestion();
