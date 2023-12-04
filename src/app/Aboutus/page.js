"use client";
import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Unstable_Grid2";
import aboutUsBanner from "@/assets/images/aboutUsBanner.svg";
import ceoImg from "@/assets/images/ceoImg.svg";
import ctoImg from "@/assets/images/ctoImg.svg";
import domImg from "@/assets/images/domImg.svg";
import swe1Img from "@/assets/images/swe1Img.svg";
import swe2Img from "@/assets/images/swe2Img.svg";
import linkdinIcon from "@/assets/images/linkdinIcon.svg";
import Image from "next/image";

const Aboutus = () => {
  return (
    <div>
      <Stack direction="column">
        <div className="bannerImg lg:px-16 md:px-10 px-5 bg-no-repeat lg:bg-cover md:bg-contain bg-contain md:py-10  lg:h-[425px] md:h-[250px] h-[130px] text-center flex flex-col lg:justify-center md:justify-start justify-center">
          <p className="sm:text-lg text-sm font-semibold text-[#FF6D00] mb-3">
            About Us
          </p>
          <p className="sm:text-5xl text-3xl  sm:px-40 px:0 font-semibold">
            What We Do
          </p>
        </div>
        <section className="h-full py-16 sm:px-16 px-8 ">
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-evenly"
            alignItems="center"
          >
            <div className="lg:w-1/2 md:w-1/2 w-full lg:px-20 md:px-1 px-1 ">
              <p className="lg:text-lg md:text-base text-base  text-[#FF6D00] font-semibold mb-3 ">
                Zatahub
              </p>
              <p className="lg:text-4xl md:text-3xl test-3xl font-semibold mb-3">
                Welcome to our virtual meeting platform for online gatherings!
              </p>
              <p className="lg:text-lg md:text-base text-base">
                At our company, we understand the importance of effective
                communication and collaboration in today&#39;s digital world.
                Our platform is designed to provide a seamless and interactive
                experience for all participants, allowing them to connect and
                engage from anywhere in the world.
                <br />
                <br />
                With advanced features and user-friendly interface, our virtual
                meeting platform offers a range of tools and functionalities to
                enhance productivity and facilitate efficient meetings. Whether
                you are a small business looking for a cost-effective solution
                or a large corporation in need of a robust platform, we have got
                you covered. Trust us to provide you with a reliable and secure
                virtual meeting experience that will surpass your expectations.
              </p>
            </div>
            <div className="lg:w-1/2 md:w-1/2 w-full">
              <Image
                src={aboutUsBanner}
                alt="aboutUsBanner"
                width={700}
                height={500}
                priority
                className="m-auto"
              />
            </div>
          </Stack>
        </section>
        <div className="sm:px-16 px-8 sm:py-20 py-8 bg-[#F3F4F6]">
          <Grid
            container
            spacing={{ xs: 3, md: 5 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid
              xs={4}
              sm={4}
              md={4}
              className="text-center sm:p-20 2xl:p-20 p-10 "
            >
              <p className="sm:text-lg text-base  text-[#FF6D00] font-semibold mb-3">
                ZataHub Team
              </p>
              <p className="sm:text-3xl text-2xl font-semibold mb-3">
                We care with leadership
              </p>
              <button className="w-40 h-11 mt-3 text-orange-500 font-semibold rounded-full border border-[#FF6D00] hover:bg-[#FFF0E5]">
                view all team
              </button>
            </Grid>
            <Grid xs={4} sm={4} md={4}>
              <Image
                src={ceoImg}
                alt="ceoImg"
                width={350}
                height={700}
                priority
                className="m-auto"
              />
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                className="px-4"
              >
                <div>
                  <p className="sm:text-xl text-lg text-[#736D83]  my-2 leading-snug ">
                    John carvan
                  </p>
                  <p className="sm:text-2xl text-xl font-semibold leading-snug">
                    CEO
                  </p>
                </div>
                <div>
                  <Image
                    src={linkdinIcon}
                    alt="linkdinIcon"
                    width={32}
                    height={32}
                    priority
                    className="m-auto"
                  />
                </div>
              </Stack>
            </Grid>
            <Grid xs={4} sm={4} md={4}>
              <Image
                src={ctoImg}
                alt="ctoImg"
                width={350}
                height={400}
                priority
                className="m-auto"
              />
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                className="px-4"
              >
                <div>
                  <p className="sm:text-xl text-lg text-[#736D83]  my-2 leading-snug ">
                    Anne Hathaway
                  </p>
                  <p className="sm:text-2xl text-xl font-semibold leading-snug">
                    CTO
                  </p>
                </div>
                <div>
                  <Image
                    src={linkdinIcon}
                    alt="linkdinIcon"
                    width={32}
                    height={32}
                    priority
                    className="m-auto"
                  />
                </div>
              </Stack>
            </Grid>
            <Grid xs={4} sm={4} md={4}>
              <Image
                src={swe1Img}
                alt="swe1Img"
                width={350}
                height={400}
                priority
                className="m-auto"
              />
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                className="px-4"
              >
                <div>
                  <p className="sm:text-xl text-lg text-[#736D83]  my-2 leading-snug ">
                    Natali Craig
                  </p>
                  <p className="sm:text-2xl text-xl font-semibold leading-snug">
                    Software Engineer
                  </p>
                </div>
                <div>
                  <Image
                    src={linkdinIcon}
                    alt="linkdinIcon"
                    width={32}
                    height={32}
                    priority
                    className="m-auto"
                  />
                </div>
              </Stack>
            </Grid>
            <Grid xs={4} sm={4} md={4}>
              <Image
                src={domImg}
                alt="domImg"
                width={350}
                height={400}
                priority
                className="m-auto"
              />
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                className="px-4"
              >
                <div>
                  <p className="sm:text-xl text-lg text-[#736D83]  my-2 leading-snug ">
                    Oriando Diggs
                  </p>
                  <p className="sm:text-2xl text-xl font-semibold leading-snug">
                    Director Of Marketing
                  </p>
                </div>
                <div>
                  <Image
                    src={linkdinIcon}
                    alt="linkdinIcon"
                    width={32}
                    height={32}
                    priority
                    className="m-auto"
                  />
                </div>
              </Stack>
            </Grid>
            <Grid xs={4} sm={4} md={4}>
              <Image
                src={swe2Img}
                alt="swe2Img"
                width={350}
                height={400}
                priority
                className="m-auto"
              />
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                className="px-4"
              >
                <div>
                  <p className="sm:text-xl text-lg text-[#736D83] my-2 leading-snug ">
                    Drew cano
                  </p>
                  <p className="sm:text-2xl text-xl font-semibold leading-snug">
                    Software Engineer
                  </p>
                </div>
                <div>
                  <Image
                    src={linkdinIcon}
                    alt="linkdinIcon"
                    width={32}
                    height={32}
                    priority
                    className="m-auto"
                  />
                </div>
              </Stack>
            </Grid>
          </Grid>
        </div>
      </Stack>
    </div>
  );
};

export default Aboutus;
