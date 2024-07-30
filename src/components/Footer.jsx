import { Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div className="my-4 px-4 md:px-8 xl:mx-24 xl:px-4 mt-10 text-center">
      <Typography className="pb-5">
        Made with &#10084;&#65039; in India
      </Typography>
      <div className="border-gray-700 border-t border-b">
        <div className="text-xs text-center text-[#818c94] py-4 px-4 md:px-8 xl:px-24 md:flex md:items-start md:justify-between ">
          <p className="md:w-2/3 text-center md:text-left text-sm">
            KukuFM is your ultimate destination for the best audio content, from
            trending podcasts to captivating audiobooks. Stream your favorite
            podcasts and audiobooks online for free or download them to enjoy
            offline. Explore a library of over 10,000 hours of content in Hindi,
            English, and various regional languages. Discover the latest,
            popular, and timeless audio stories, all in one place.
          </p>
          <p className="mt-4 md:w-1/3 text-center md:text-right md:mt-0 whitespace-nowrap text-sm">
            2023 © All rights reserved | Mebigo Labs Private limited
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
