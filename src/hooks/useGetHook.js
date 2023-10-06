import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../shared/constants.js";
const useGet = url => {
  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState("");

  useEffect(() => {
    axios
      .get(baseUrl + url)
      .then(res => res.json())
      .then(data => {
        seterror(data.error);
        setdata(data.joke);
        setloading(false);
      });
  }, [url]);

  return { data, loading, error };
};

export default useGet;
