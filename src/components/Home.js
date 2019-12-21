import React, { useState, useEffect } from "react";

import InputSearch from "./Search";
import { List } from "./List";
import { search } from "../services";

export default function Home() {
  const [data, setData] = useState({ shows: [] });
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await search(query);
      setData(result);
    };
    fetchData();
  }, [query]);

  return (
    <>
      <InputSearch setQuery={setQuery} />
      <List shows={data.shows} />
    </>
  );
}
