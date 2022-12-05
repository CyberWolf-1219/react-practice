import React from "react";

function useFetch(
  URL: string,
  HEADERS: Object,
  setStateFunc: React.Dispatch<any>
) {
  async function search(DATA: string) {
    console.log(`SEARCHING...`);

    const reqInit = {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify(DATA),
    };

    try {
      const fetchResult = await fetch(URL, reqInit as RequestInit);
      const jsonDecoded = await fetchResult.json();
      console.log(`UseFetch:`, jsonDecoded);
      console.log(`UPDATING DATA STATE...`);
      setStateFunc(jsonDecoded);
    } catch (error) {
      console.error(`THIS WAS NOT SUPPOSED TO HAPPEN: ${error}`);
    }
  }

  return [search];
}

export default useFetch;
