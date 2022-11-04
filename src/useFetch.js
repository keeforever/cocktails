import { useState, useEffect } from "react";

const useFetch = (url, dependencies) => {
  const { searchValue } = dependencies;
  const [apiData, setApiData] = useState([]);
  const [isError, setIsError] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const fetchApi = async () => {
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        setApiData(data);
        setIsLoading(false);
        setIsError(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setIsError(true);
      });
  };

  useEffect(() => {
    setIsError(true);
    setIsLoading(true);
    fetchApi();
  }, [url, searchValue]);

  return { apiData, isError, isLoading };
};
export default useFetch;
