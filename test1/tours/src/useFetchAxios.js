import { useEffect, useState } from "react";
import axios from "axios";

const useFetchAxios = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios(url);
      setLoading(false);
      setData(res.data);
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [loading, data, error];
};

export default useFetchAxios;
