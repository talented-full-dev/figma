import React from "react";
import StaticPaper from "../components/paper/StaticPaper";
import VSPaper from "../components/paper/VSPaper";

export default function Home() {
  return (
    <div className="sm:pl-4">
      <StaticPaper />
      <VSPaper />
    </div>
  );
}
