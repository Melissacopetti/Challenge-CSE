import axios from "axios";
import { useEffect, useState } from "react";

export const useRequestData = (initialData, url) => {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
        alert("An error has occurred, please try again");
      });
  }, [url]);

  return data;
};
