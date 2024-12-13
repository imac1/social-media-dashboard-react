import FacebookIcon from "@mui/icons-material/Facebook";
import { data } from "../data/sample-data";
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import React, { useState } from "react";

export default function SecondContainer() {

    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
      setIsVisible((prev) => !prev);
    };
  return (
    <>
      <h3 className="font-bold text-2xl text-whiteText mt-6" onClick={toggleVisibility}>Overview Today</h3>
      <div className={`small-cards-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 ${
          isVisible ? "" : "invisible"
        }`}>
        {data.events.map(({ platform, type, amount, modifier }, index) => (
          <div
            key={index}
            className="small-card flex flex-col bg-darkDesaturatedBlueCardBG p-6 rounded"
          >
            <div className="small-card-first-row flex flex-row items-center justify-between gap-10">
              <span className="text-desaturatedBlueText font-semibold">
                {type}
              </span>
              <span className={`text-${platform}`}>
                {platform === "facebook" ? <FacebookIcon /> : 
                 platform === "youtube" ? <YouTubeIcon /> :
                 platform === "instagram" ? <InstagramIcon /> :
                 platform === "twitter" ? <TwitterIcon /> :
                 null}
               
              </span>
            </div>
            <div className="small-card-second-row flex flex-row items-center justify-between gap-10 mt-10">
              <span className="text-white font-semibold text-3xl">{amount}</span>
              <span
                className={`${
                  modifier >= 0 ? "text-limeGreen" : "text-brightRed"
                } flex items-center`}
              >
                <span className="material-icons">
                  {modifier >= 0 ? "arrow_drop_up" : "arrow_drop_down"}
                </span>
                <span className="text-xs">{Math.abs(modifier)}%</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
