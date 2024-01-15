import { useContext, useEffect, useState } from "react";
import { Context } from "../context";
import axios from "../axios";

export function useFetch(url) {
  const { listGoods, setListGoods } = useContext(Context);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const responsive = await axios.get(url);
        setData(responsive.data);
        setListGoods(responsive.data);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };

    fetchData();
  }, [url]);

  return { data, listGoods, loading, error };
}
