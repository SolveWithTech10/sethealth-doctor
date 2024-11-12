import TotalCountCard from "@/components/TotalCountCard";
import { totalDataCountList } from "@/constants";
import React from "react";

const Home = () => {
  return (
    <>
      <div className="w-full grid grid-cols-3 items-center gap-5">
        {totalDataCountList.map((data) => (
          <TotalCountCard {...data} key={data.title}>
            <data.icon className={`h-5 w-5 ${data.iconTextColor}`} />
          </TotalCountCard>
        ))}
      </div>
    </>
  );
};

export default Home;
