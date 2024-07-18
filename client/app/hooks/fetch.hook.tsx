import axios from "axios";
import { headers } from "next/headers";
import { useEffect, useState } from "react";

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
          .get(`${query}`, {
            headers: { "Application-Type": "application/json" },
          })
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
