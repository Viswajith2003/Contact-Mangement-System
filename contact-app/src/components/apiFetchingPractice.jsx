import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ApiFetch() {
  const [posts, setPosts] = useState([]);
  const fetchApi = async () => {
    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/"
      );
      // const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
      // if (!res.ok) throw new console.error("Error");
      // const data = await res.json();
      setPosts(res.data);
    } catch (error) {
      console.error("Error occur while fetching the posts", error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <div>
      <h1>api fetching practice</h1>
      <ul>
        {posts.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
