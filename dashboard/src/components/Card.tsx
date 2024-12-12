import React from "react";
import { data } from "../data/sample-data";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';




export default function Card() {
  return (
    <>
      {data.platforms.map((platform, index) => {
        const [key, value] = Object.entries(platform)[0]; // Extract key and value for each platform
        return (
          <div
            key={index} // Key should be unique per card
            className={`flex flex-col px-10 py-6 border-t-4 rounded-lg 
                bg-darkDesaturatedBlueCardBG text-whiteText items-center space-y-2
                ${
                  key === "facebook"
                    ? "border-t-facebook text-facebook"
                    : key === "twitter"
                    ? "border-t-twitter text-twitter"
                    : key === "instagram"
                    ? "border-t-instagram text-instagram"
                    : "border-t-youtube text-youtube"
                }`}
          >
            {/* Card header */}
            <div className="div flex flex-row gap-1 items-center">
              <span className={` text-${key}`} >
              {
          key === "facebook" ? <FacebookIcon sx={{ fontSize: 40 }} /> :
          key === "instagram" ? <InstagramIcon  sx={{ fontSize: 40 }}/> :
          key === "youtube" ? <YouTubeIcon sx={{ fontSize: 40 }} /> :
          key === "twitter" ? <TwitterIcon  sx={{ fontSize: 40 }}/> :
          null 


                }

              </span>
              <h4 className="text-sm text-desaturatedBlueText">
                @{value.name}
              </h4>
            </div>

            {/* Followers */}
            <div className="flex flex-col items-center">
              <h1 className="text-white text-5xl font-bold">{value.followers}</h1>
              <p className="uppercase text-desaturatedBlueText tracking-[3px] text-sm">
                followers
              </p>
            </div>

            {/* Card footer */}
            <div
              className={`flex flex-row text-xs items-center ${
                value.difference > 0 ? "text-limeGreen" : "text-brightRed"
              }`}
            >
              <span className="material-icons">
                {value.difference > 0 ? "arrow_drop_up" : "arrow_drop_down"}
              </span>
              <span className="font-bold">{Math.abs(value.difference)}</span>
              <span className="font-bold ml-1">Today</span>
            </div>
          </div>
        );
      })}
    </>
  );
}
