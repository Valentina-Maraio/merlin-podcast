import axios from "axios";
import React, { useState, useEffect, createContext } from "react";
import merlinPodcast from "../api/apiCall";

export const AllPodcastContext = createContext();

export const AllPodcastProvider = ({ children }) => {
  const [allPods, setAllPods] = useState([]);

  useEffect(() => {
    getAllPodcast();
  }, []);

  const getAllPodcast = async () => {
    try {
      const response = await axios.get(merlinPodcast.allPodcast);
      setAllPods(response.data.feed);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AllPodcastContext.Provider value={[allPods, setAllPods]}>
      {children}
    </AllPodcastContext.Provider>
  );
};
