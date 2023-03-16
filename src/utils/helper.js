import axios from "axios";

const fetchData = async (start, end) => {
  const url = "https://jsonplaceholder.typicode.com/photos";
  const response = await axios.get(url);
  const { data } = response;

  const result = data.slice(start, end);
  return result;
};

export default fetchData;
