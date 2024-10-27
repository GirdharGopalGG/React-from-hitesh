import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   async function fetchGithubData() {
  //     const response = await fetch(
  //       "https://api.github.com/users/girdhargopalgg"
  //     );
  //     const json = await response.json();
  //     setData(json);
  //   }
  //   fetchGithubData();
  // }, []);

  return (
    <div className="">
      <div>Name: {data.name}</div>
      <div>
        <img
          className="rounded-full"
          src={data.avatar_url}
          width={300}
          alt=""
        />
      </div>
      <div>Followers: {data.followers}</div>
    </div>
  );
}

export const githubLoader = async () => {
  const response = await fetch("https://api.github.com/users/girdhargopalgg");
  return response.json();
};
