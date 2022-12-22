import React from "react";
import PodcastCard from "./PodcastCard";
import { AllPodcastProvider } from "../context/AllContext";

//ui
import { Divider } from "@nextui-org/react";

const AllPodcast = () => {
  return (
    <div>
      <Divider/>
      <AllPodcastProvider>
        <PodcastCard />
      </AllPodcastProvider>
    </div>
  );
};

export default AllPodcast;
