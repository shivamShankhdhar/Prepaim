import axios from "axios";
import { useEffect, useState } from "react";
axios.defaults.baseURL = "http://localhost:4000";
//custom hook
const usePost = (query) => {
  const [data, setData] = useState({
    isLoading: false,
    response: undefined,
    status: null,
    serverError: null,
  });

  useEffect(() => {
    if (!query) return;
    const postData = async () => {
      try {
        setData((prev) => ({ ...prev, isLoading: true }));
        axios
          .post(`${query}`)
          .then((response) => {
            console.log(response.data);
            setData((prev) => ({
              ...prev,
              isLoading: false,
              response: response.data,
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
    postData();
  }, [query]);
  console.log(data);
  return { data, setData };
};

export default usePost;
