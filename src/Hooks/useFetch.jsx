import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (endpoint, initial) => {
  const [data, setData] = useState(initial);

  useEffect(() => {
    let getData = axios.get(endpoint);
    getData
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));
  }, [endpoint]);

  return { data };
};

export default useFetch;
