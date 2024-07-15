import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
import { useEffect, useState } from "react";
axios.defaults.baseURL =
  process.env.AXIOS_BASE_URL || "http://prepaim.com:4000";
console.log(axios.defaults.baseURL);
//custom hook
const useFetch = (query) => {
  // console.log(query);
  const [data, setData] = useState({
    isLoading: false,
    apiData: undefined,
    status: null,
    serverError: null,
  });

  useEffect(() => {
    if (!query) return;
    const fetchData = async () => {
      try {
        setData((prev) => ({ ...prev, isLoading: true }));
        axios
          .get(`${query}`)
          .then((response) => {
            // console.log(response.data);
            setData((prev) => ({
              ...prev,
              isLoading: false,
              apiData: response.data,
              status: response.status,
            }));
          })
          .catch((err) => {
            setData((prev) => ({
              ...prev,
              isLoading: false,
              serverError: err,
            }));
          });
      } catch (error) {
        setData((prev) => ({ ...prev, isLoading: false, serverError: error }));
      }
    };
    fetchData();
  }, [query]);
  // console.log(data);
  return { data, setData };
};

export default useFetch;
