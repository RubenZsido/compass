import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../shared/constants.js";

const usePost = (url, args) => {
  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState("");

  useEffect(() => {
    axios
      .post(baseUrl + url, args)
      .then(res => res.json())
      .then(data => {
        seterror(data.error);
        setdata(data.joke);
        setloading(false);
      });
  }, [url]);

  return { data, loading, error };
};

export default usePost;
