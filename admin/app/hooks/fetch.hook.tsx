import axios from "axios";
import { useEffect, useState } from "react";
const default_backend_url =
  process.env.AXIOS_BASE_URL || "https://api.data.prepaim.com";
axios.defaults.baseURL = default_backend_url;
// (default_backend_url);
//custom hook
const useFetch = (query: any) => {
  // (query);
  const [data, setData] = useState<any>({
    isLoading: false,
    apiData: undefined,
    status: null,
    serverError: null,
  });

  useEffect(() => {
    if (!query) return;
    const fetchData = async () => {
      try {
        setData((prev: any) => ({ ...prev, isLoading: true }));
        axios
          .get(`${query}`)
          .then((response) => {
            // (response.data);
            setData((prev: any) => ({
              ...prev,
              isLoading: false,
              apiData: response.data,
              status: response.status,
            }));
          })
          .catch((err) => {
            setData((prev: any) => ({
              ...prev,
              isLoading: false,
              serverError: err,
            }));
          });
      } catch (error) {
        setData((prev: any) => ({
          ...prev,
          isLoading: false,
          serverError: error,
        }));
      }
    };
    fetchData();
  }, [query]);
  // (data);
  return { data, setData };
};

export default useFetch;
