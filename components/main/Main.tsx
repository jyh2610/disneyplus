"use client";
import React, { useCallback } from "react";
import axios from "axios";

function Main() {
  const api = process.env.NEXT_PUBLIC_ACCESS;

  const callApi = useCallback(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${api}`,
      },
    };
    axios
      .get("https://api.themoviedb.org/3/genre/movie/list", options)
      .then((response) => console.log(response.data))
      .catch((err) => console.error(err));
  }, [api]);

  return (
    <div>
      <button onClick={callApi}>main</button>
    </div>
  );
}

export default Main;
