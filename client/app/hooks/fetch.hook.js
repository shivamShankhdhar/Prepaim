import axios from "axios";
import { useEffect, useState } from "react";
axios.defaults.baseURL = "https://localhost:4000";
//custom hook
const useFetch = (query) => {
  console.log(query);
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
