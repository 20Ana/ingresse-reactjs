import React, { useState, useEffect } from "react";

import InputSearch from "components/InputSearch/InputSearch";
import { List } from "components/List/List";
import { search } from "services";

export default function Home() {
  const [data, setData] = useState({ shows: [] });
  const [query, setQuery] = useState(null);

  const fetchData = async () => {
    const result = await search(query);

    if (result !== undefined && result !== null) setData(result);
  };

  useEffect(() => {
    if (query !== null) fetchData();
  }, [query]);

  useEffect(() => {
    const storage = localStorage.getItem("listShows");

    if (storage !== null) setData({ shows: JSON.parse(storage) });
  }, []);

  return (
    <>
      <InputSearch setQuery={setQuery} />
      <List shows={data.shows} />
    </>
  );
}
