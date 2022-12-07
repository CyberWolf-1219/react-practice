import React from "react";

function useFetch(URL: string, HEADERS: Object) {
  async function execute(DATA: any) {
    console.log(`Executing...`);

    const reqInit = {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify(DATA),
    };

    try {
      const fetchResult = await fetch(URL, reqInit as RequestInit);
      console.log(`UseFetch:`, fetchResult);
      const jsonDecoded = await fetchResult.json();
      console.log(`UseFetch:`, jsonDecoded);
      return jsonDecoded;
    } catch (error) {
      console.error(`THIS WAS NOT SUPPOSED TO HAPPEN: ${error}`);
    }
  }

  return [execute];
}

export default useFetch;
