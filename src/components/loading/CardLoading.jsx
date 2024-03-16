import React from "react";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const CardLoading = () => {
  return (
    <SkeletonTheme baseColor="grey">
      <div className="shadow-xl group cursor-pointer">
        <div>
          <div className="img relative overflow-hidden">
            <div>
              <Skeleton height={250} width={400}></Skeleton>
            </div>
          </div>
          <div className="desc my-4 flex flex-col justify-between">
            <h1 className="font-poppins font-semibold text-xl">
              <Skeleton count={2}></Skeleton>
            </h1>
            <p className="text-xs text-slate-600">
              <Skeleton count={1}></Skeleton>
            </p>
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default CardLoading;
