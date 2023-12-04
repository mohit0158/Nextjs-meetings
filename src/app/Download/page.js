"use client";
import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Unstable_Grid2";
import appleIcon from "@/assets/images/appleIcon.svg";
import appStoreIcon from "@/assets/images/appStoreIcon.svg";
import playstoreIcon from "@/assets/images/playstoreIcon.svg";
import winStoreIcon from "@/assets/images/winStoreIcon.svg";
import downloadIcon from "@/assets/images/downloadIcon.svg";
import Image from "next/image";

const Download = () => {
  return (
    <div>
      <Stack direction="column">
        <div className="bannerImg lg:px-16 md:px-10 px-5 bg-no-repeat lg:bg-cover md:bg-contain bg-contain md:py-10  lg:h-[425px] md:h-[250px] h-[130px] text-center flex flex-col lg:justify-center md:justify-start justify-center">
          <p className="sm:text-lg text-sm font-semibold text-[#FF6D00] mb-3">
            Download
          </p>
          <p className="sm:text-5xl text-3xl  sm:px-40 px:0 font-semibold">
            Download Center
          </p>
        </div>
        <div className="lg:pl-80  md:pl-12 pl-8 lg:pr-60  md:pr-12 pr-8  lg:py-16 md:py-16 py-8">
          <Grid
            container
            spacing={{ xs: 3, sm: 5, md: 12 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid xs={4} sm={4} md={4}>
              <p className="sm:text-2xl text-xl  leading-snug ">
                Windows 10/11
              </p>
              <Stack
                direction={"row"}
                alignItems={"center"}
                spacing={1}
                className="my-4"
              >
                <button className="w-52 h-11  text-white  rounded-full orangeButton flex justify-center items-center gap-2 hover:shadow-[0_0_5px_1px_rgba(255,109,0,1)] ">
                  <Image
                    src={downloadIcon}
                    alt="downloadIcon"
                    className="w-6 h-6 "
                  />
                  <div>Download Now</div>
                </button>
                <Image
                  src={winStoreIcon}
                  alt="winStoreIcon"
                  className="w-32 h-11 "
                  priority
                />
              </Stack>
              <p className="sm:text-base text-sm leading-snug">
                Supporting Windows 10/11
              </p>
            </Grid>
            <Grid xs={4} sm={4} md={4} className="">
              <p className="sm:text-2xl text-xl  leading-snug ">MacOS</p>
              <Stack
                direction={"row"}
                alignItems={"center"}
                spacing={1}
                className="my-4"
              >
                <button className="w-52 h-11 text-white  rounded-full orangeButton flex justify-center items-center gap-2 hover:shadow-[0_0_5px_1px_rgba(255,109,0,1)]">
                  <Image
                    src={downloadIcon}
                    alt="downloadIcon"
                    className="w-6 h-6 "
                  />
                  <div>Download Now</div>
                </button>
                <Image
                  src={appStoreIcon}
                  alt="appStoreIcon"
                  className="w-32 h-11 "
                  priority
                />
              </Stack>
              <p className="sm:text-base text-sm leading-snug">MacOS desktop</p>
            </Grid>
            <Grid xs={4} sm={4} md={4} className="">
              <p className="sm:text-2xl text-xl  leading-snug ">Ubuntu</p>
              <button
                className="w-48 h-11 my-4 text-white  rounded-full bg-[#736D83]  flex justify-center items-center gap-2 "
                disabled
              >
                <Image
                  src={downloadIcon}
                  alt="downloadIcon"
                  className="w-6 h-6 "
                />
                <div>Download Now</div>
              </button>
              <p className="sm:text-base text-sm leading-snug">
                Expected to release in March 2024
              </p>
            </Grid>
            <Grid xs={4} sm={4} md={4} className="">
              <p className="sm:text-2xl text-xl  leading-snug ">Mobile</p>
              <Stack direction={"row"} alignItems={"center"} spacing={2}>
                <div>
                  <button
                    className="lg:w-40 md:w-40 w-40 h-11 my-4  text-white  rounded-full bg-[#736D83] flex justify-center items-center gap-2  "
                    disabled
                  >
                    <Image
                      src={appleIcon}
                      alt="appleIcon"
                      className="w-6 h-6 "
                    />
                    <div>App Store</div>
                  </button>
                  <p className="sm:text-sm text-xs tx-[#736D83] leading-snug">
                    Expected to release by end of January 2024
                  </p>
                </div>
                <div>
                  <button
                    className="lg:w-40 md-40 w-40 h-11 my-4 text-white  rounded-full bg-[#736D83] flex justify-center items-center gap-2 "
                    disabled
                  >
                    <Image
                      src={playstoreIcon}
                      alt="playstoreIcon"
                      className="w-6 h-6 "
                    />
                    <div>Google Play</div>
                  </button>
                  <p className="sm:text-sm text-xs tx-[#736D83] leading-snug">
                    Expected to release by end of December 2023
                  </p>
                </div>
              </Stack>
            </Grid>
          </Grid>
        </div>
      </Stack>
    </div>
  );
};

export default Download;
