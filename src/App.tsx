import axios from "axios";
import "./App.css";
//for get or delete requests - useQuery
//for post or put requests - useMutation

import { useMutation, useQuery } from "@tanstack/react-query";
import { usePost } from "./hooks/usePost";

type Data = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

function App() {
  // const wait = (ms: number) =>
  //   new Promise((resolve) => setTimeout(resolve, ms));
  // const myvar = "";
  // const myvar2 = "";

  //query function
  /* const { data, isLoading } = useQuery({
    // queryKey: ["myquery", { myvar, myvar2 }],
    queryFn: async () => {
      await wait(1000);
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      return data as Data;
    },
  }); */

  //mutation function
  /* const { data, isLoading } = useMutation({
    mutationFn: async () => {
      const { data } = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        { myval: "string" }
      );
      return data as Data;
    },
  }); */

  const { data, isLoading } = usePost(1);

  return <div>{isLoading ? "Content is loading" : JSON.stringify(data)}</div>;
}

export default App;
