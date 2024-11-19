import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";

export default function Services() {
  const [posts, setPosts] = useState([]);

  const Api = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(response.data); 
      console.log(response.data);

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    Api(); 
  }, []);

  return (
    <>
      <Header />
      <div className="mt-10 w-[90%] m-auto p-5 flex flex-wrap justify-between bg-white shadow-lg rounded-lg">
        {posts.map((item, index) => (
          <div key={index} className="flex-1 min-w-[30%] p-5 bg-gray-100 shadow-md rounded-lg m-2 p-4">
            <h2 className="font-bold text-xl mb-2 text-gray-800">{item.title}</h2>
            <p className="text-gray-700 text-base">{item.body}</p>
          </div>
        ))}
      </div>
    </>
  );
}
