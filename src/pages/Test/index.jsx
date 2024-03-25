import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

const Test = () => {
  return (
    <>
      <div className="mb-1 text-base font-medium dark:text-white">Dark</div>
      <ProgressBar
        completed={45}
        bgColor="#4B5563"
        baseBgColor="#9CA3AF"
        height="2.5rem"
        borderRadius="9999px"
        transitionDuration="0.5s"
        labelAlignment="center"
        labelColor="#D1D5DB"
        labelPadding="0.5rem"
        labelSize="base"
        trackPathColor="transparent"
      />
      <div className="mb-1 text-base font-medium text-blue-700 dark:text-blue-500">
        Blue
      </div>
      <ProgressBar
        completed={45}
        bgColor="#4B5563"
        baseBgColor="#9CA3AF"
        height="2.5rem"
        borderRadius="9999px"
        transitionDuration="0.5s"
        labelAlignment="center"
        labelColor="#D1D5DB"
        labelPadding="0.5rem"
        labelSize="base"
        trackPathColor="transparent"
      />
      <div className="mb-1 text-base font-medium text-red-700 dark:text-red-500">
        Red
      </div>
      <ProgressBar
        completed={45}
        bgColor="#4B5563"
        baseBgColor="#9CA3AF"
        height="2.5rem"
        borderRadius="9999px"
        transitionDuration="0.5s"
        labelAlignment="center"
        labelColor="#D1D5DB"
        labelPadding="0.5rem"
        labelSize="base"
        trackPathColor="transparent"
      />
      <div className="mb-1 text-base font-medium text-green-700 dark:text-green-500">
        Green
      </div>
      <ProgressBar
        completed={45}
        bgColor="#4B5563"
        baseBgColor="#9CA3AF"
        height="2.5rem"
        borderRadius="9999px"
        transitionDuration="0.5s"
        labelAlignment="center"
        labelColor="#D1D5DB"
        labelPadding="0.5rem"
        labelSize="base"
        trackPathColor="transparent"
      />
      <div className="mb-1 text-base font-medium text-yellow-700 dark:text-yellow-500">
        Yellow
      </div>
      <ProgressBar
        completed={45}
        bgColor="#4B5563"
        baseBgColor="#9CA3AF"
        height="2.5rem"
        borderRadius="9999px"
        transitionDuration="0.5s"
        labelAlignment="center"
        labelColor="#D1D5DB"
        labelPadding="0.5rem"
        labelSize="base"
        trackPathColor="transparent"
      />
      <div className="mb-1 text-base font-medium text-indigo-700 dark:text-indigo-500">
        Indigo
      </div>
      <ProgressBar
        completed={45}
        bgColor="#4B5563"
        baseBgColor="#9CA3AF"
        height="2.5rem"
        borderRadius="9999px"
        transitionDuration="0.5s"
        labelAlignment="center"
        labelColor="#D1D5DB"
        labelPadding="0.5rem"
        labelSize="base"
        trackPathColor="transparent"
      />
      <div className="mb-1 text-base font-medium text-purple-700 dark:text-purple-500">
        Purple
      </div>
      <ProgressBar
        completed={45}
        bgColor="#4B5563"
        baseBgColor="#9CA3AF"
        height="0.5rem"
        borderRadius="9999px"
        transitionDuration="0.5s"
        labelAlignment="center"
        labelColor="#D1D5DB"
        labelPadding="0.5rem"
        labelSize="base"
        trackPathColor="transparent"
      />
    </>
  );
};

export default Test;
