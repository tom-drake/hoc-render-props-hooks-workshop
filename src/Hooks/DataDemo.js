import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactJson from "react-json-view";
import CircularProgress from "@material-ui/core/CircularProgress";

const CancelToken = axios.CancelToken;

function useData(url) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [error, setError] = useState();

  useEffect(
    () => {
      let cancelToken;
      axios
        .get(url, {
          cancelToken: new CancelToken(c => (cancelToken = c))
        })
        .then(({ data }) => {
          setLoading(false);
          setData(data);
        })
        .catch(error => {
          setLoading(false);
          if (!axios.isCancel(error)) setError(error);
        });

      return () => cancelToken && cancelToken();
    },
    [url]
  );

  return { loading, data, error };
}

export default function DataDemo() {
  const url = "https://jsonplaceholder.typicode.com/users/1";
  const { data, loading, error } = useData(url);

  if (loading) {
    return <CircularProgress />;
  }
  return <ReactJson src={{ data, error }} />;
}
