import axios from "axios";

// Science API
export const fetchScienceTrivia = async () => {
  try {
    const apiURL =
      "https://opentdb.com/api.php?amount=11&category=17&type=multiple";
    const { data } = await axios.get(apiURL);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// Math API
export const fetchMathTrivia = async () => {
  try {
    const apiURL =
      "https://opentdb.com/api.php?amount=11&category=19&type=multiple";
    const { data } = await axios.get(apiURL);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// History API
export const fetchHistoryTrivia = async () => {
  try {
    const apiURL =
      "https://opentdb.com/api.php?amount=11&category=23&type=multiple";
    const { data } = await axios.get(apiURL);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// Movies API
export const fetchMoviesTrivia = async () => {
  try {
    const apiURL =
      "https://opentdb.com/api.php?amount=11&category=11&type=multiple";
    const { data } = await axios.get(apiURL);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// Sports API
export const fetchSportsTrivia = async () => {
  try {
    const apiURL =
      "https://opentdb.com/api.php?amount=11&category=21&type=multiple";
    const { data } = await axios.get(apiURL);
    return data;
  } catch (error) {
    console.log(error);
  }
};
