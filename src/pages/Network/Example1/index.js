/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();



function Example() {
  const { isLoading, error, data, isFetching } = useQuery("repoData", () =>
    fetch(
      `/devApi/api/services/statistics?type=router&access_token=ddeb4c61-f5a5-4045-9a96-0700f8469bc8`
    ).then((res) =>{
        console.log(res);
        return res.json()
    })
  );

  const {data:aa} = useQuery("repoData1", () =>
    fetch(
      `/devApi/api/services/statistics?type=router&access_token=ddeb4c61-f5a5-4045-9a96-0700f8469bc8`
    ).then((res) =>{
        console.log(res);
        return res.json()
    })
  );//data解构重命名为aa了

  console.log(aa)

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{" "}
      <strong>✨ {data.stargazers_count}</strong>{" "}
      <strong>🍴 {data.forks_count}</strong>
      <div>{isFetching ? "Updating..." : ""}</div>
      <ReactQueryDevtools initialIsOpen />
    </div>
  );
}

export default function App() {
    return (
      <QueryClientProvider client={queryClient}>
        <Example />
      </QueryClientProvider>
    );
  }



