import { useState, useEffect } from "react";

export function useMovieDetails(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };
    try {
      setIsLoading(true);
      setError(null);
      const result = await fetch(url, options);
      if (!result.ok) {
        throw new Error(
          `Something went wrong with fetching movie details: ${result.status}.`
        );
      }
      const data = await result.json();

      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, isLoading, error, fetchData };
}
