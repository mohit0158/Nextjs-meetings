"use client";
import React, { useState, useEffect } from "react";
import apostrophyIcon from "@/assets/images/apostrophyIcon.svg";
import homeBanner1 from "@/assets/images/homeBanner1.svg";
import homeBanner2a from "@/assets/images/homeBanner2a.svg";
import homeBanner2b from "@/assets/images/homeBanner2b.svg";
import homeBanner2c from "@/assets/images/homeBanner2c.svg";
import homeBanner2d from "@/assets/images/homeBanner2d.svg";
import homeBanner3a from "@/assets/images/homeBanner3a.svg";
import homeBanner3b from "@/assets/images/homeBanner3b.svg";
import homeBanner3c from "@/assets/images/homeBanner3c.svg";
import homeBanner3d from "@/assets/images/homeBanner3d.svg";
import homeBanner4 from "@/assets/images/homeBanner4.svg";
import homeBanner5 from "@/assets/images/homeBanner5.svg";
import partner1 from "@/assets/images/partner1.svg";
import partner2 from "@/assets/images/partner2.svg";
import partner3 from "@/assets/images/partner3.svg";
import partner4 from "@/assets/images/partner4.svg";
import partnerNw1 from "@/assets/images/partnersNw1.svg";
import partnerNw2 from "@/assets/images/partnersNw2.svg";
import partnerNw3 from "@/assets/images/partnersNw3.svg";
import partnerNw4 from "@/assets/images/partnersNw4.svg";
import partnerNw5 from "@/assets/images/partnersNw5.svg";
import downloadIcon from "@/assets/images/downloadIcon.svg";
import teacherIconD from "@/assets/images/teacherIconD.svg";
import teacherIconL from "@/assets/images/teacherIconL.svg";
import chartsquareIconD from "@/assets/images/chartsquareIconD.svg";
import chartsquareIconL from "@/assets/images/chartsquareIconL.svg";
import devicesIconD from "@/assets/images/devicesIconD.svg";
import devicesIconL from "@/assets/images/devicesIconL.svg";
import hospitalIconD from "@/assets/images/hospitalIconD.svg";
import hospitalIconL from "@/assets/images/hospitalIconL.svg";
import star from "@/assets/images/star.svg";
import Stack from "@mui/material/Stack";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/navigation";

import Image from "next/image";

const Home = () => {
  const router = useRouter();
  const pageRedirect = (page) => {
    router.push(page);
  };
  const [activeTab, setActiveTab] = useState("educationIndustry");
  const starList = [];
  for (let i = 0; i < 5; i++) {
    starList.push(
      <Image src={star} alt="star" className="w-[20px] h-[20px]" />
    );
  }
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <div>
      <section className="h-full 2xl:px-32 lg:px-20 md:px-12 px-8  py-5">
        <Stack
          className="homeBg1 bg-contain bg-no-repeat bg-center pt-5 w-full"
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-evenly"
          alignItems="center"
          spacing={2}
        >
          <div
            className="sm:w-1/2 w-full "
            data-aos="zoom-in-right"
            data-aos-easing="linear"
          >
            <p className=" text-orange-500 lg:text-lg md:text-base text-base  leading-snug mb-5">
              Virtual Meeting Assistance
            </p>
            <p className="lg:text-5xl md:text-3xl text-3xl font-semibold !leading-snug mb-5 ">
              Virtual
              <span className=" text-white rounded orangeButton my-3 mb-3 px-1 py-1 lg:text-6xl  md:text-3xl text-3xl font-semibold">
                Meeting
              </span>
              <br />
              Platform For Online Conferenced Video
            </p>
            <p className="lg:text-xl  md:text-lg text-lg leading-snug mb-5">
              Replace formal video conferences with a tranquil,<br/> user-centric
              solution seamlessly incorporated into<br/> your platform through
              <span className="sm:text-xl text:lg font-semibold"> ZATAHUB</span>
            </p>
            <button className="md:w-40 w-40 md:h-11 h-8 mt-3 text-white font-semibold rounded-full orangeButton hover:shadow-[0_0_5px_1px_rgba(255,109,0,1)] flex justify-center items-center gap-2 ">
              <Image
                src={downloadIcon}
                alt="downloadIcon"
                className="w-6 h-6"
              />
              <div>Download</div>
            </button>
          </div>
          <div
            className="sm:w-1/2 w-full relative"
            data-aos="zoom-in-left"
            data-aos-easing="linear"
          >
            <Image
              src={homeBanner1}
              alt="banner1"
              width={800}
              height={500}
              className="m-auto"
            />
          </div>
        </Stack>
        <Stack
          className="py-5"
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          data-aos="zoom-in-up"
          data-aos-easing="linear"
          spacing={2}
        >
          <Image
            src={partner3}
            alt="partners"
            className="lg:w-56 md:w-44 w-20  lg:h-24 md:h-32 h-10"
          />
          <Image
            src={partner1}
            alt="partners"
            className="lg:w-56 md:w-44 w-20  lg:h-24 md:h-32 h-10"
          />
          <Image
            src={partner2}
            alt="partners"
            className="lg:w-56 md:w-44 w-20  lg:h-24 md:h-32 h-10"
          />
          <Image
            src={partner4}
            alt="partners"
            className="lg:w-56 md:w-44 w-20  lg:h-24 md:h-32 h-10"
          />
        </Stack>
      </section>

      <section className="h-full 2xl:px-32 lg:px-20 md:px-10 px-8 lg:py-16 md:py-10 py-8 homeBg2 bg-cover bg-no-repeat bg-center">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-evenly"
          alignItems="center"
          spacing={4}
        >
          <div
            className="sm:w-1/2 w-full"
            data-aos="zoom-in-right"
            data-aos-easing="linear"
          >
            <p className="lg:text-4xl md:text-3xl text-3xl leading-normal font-semibold mb-3 ">
              What Advantages Of Using Our Application
            </p>
            <p className="sm:text-xl md:text-lg text-lg leading-normal ">
              This video conferencing platform distinguishes itself through its
              unique advantages, prioritizing user comfort as a paramount
              objective.
            </p>
            <button className="w-40 h-11 mt-5 text-white font-semibold rounded-full orangeButton hover:shadow-[0_0_5px_1px_rgba(255,109,0,1)] ">
              Learn More
            </button>
          </div>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignItems="center"
            spacing={{ xs: 3, sm: 3, md: 3 }}
            className="sm:w-1/2 w-full"
            data-aos="zoom-in-left"
            data-aos-easing="linear"
          >
            <Stack
              direction={"column"}
              spacing={{ xs: 3, sm: 3, md: 3 }}
              className="m-auto"
            >
              <Image
                src={homeBanner2a}
                alt="banner2"
                width={400}
                height={400}
                className="lg:p-5 md:p-0 p-2"
              />
              <Image
                src={homeBanner2c}
                alt="banner2"
                width={400}
                height={400}
                className="lg:p-5 md:p-0 p-2"
              />
            </Stack>
            <Stack
              direction={"column"}
              spacing={{ xs: 3, sm: 3, md: 3 }}
              className="m-auto"
            >
              <Image
                src={homeBanner2b}
                alt="banner2"
                width={400}
                height={400}
                className="lg:p-5 md:p-0 p-2"
              />
              <Image
                src={homeBanner2d}
                alt="banner2"
                width={400}
                height={400}
                className="lg:p-5 md:p-0 p-2"
              />
            </Stack>
          </Stack>
        </Stack>
      </section>

      <section className="h-full py-16 2xl:px-32 lg:px-20 md:px-12 px-8  ">
        <Stack
          direction={"column"}
          justifyContent="space-evenly"
          alignItems="center"
          spacing={4}
        >
          <div
            className="lg:px-16 md:px-12 px-8"
            data-aos="zoom-in"
            data-aos-easing="linear"
          >
            <p className="lg:text-4xl md:text-3xl text-3xl  font-semibold leading-snug text-center ">
              How to empower your
              <span className="lg:text-4xl md:text-3xl text-3xl text-white rounded font-semibold orangeButton mx-1 px-1 py-1 leading-snug">
                organization
              </span>
              with <br /> cross-industry and cross-border solutions
            </p>
          </div>
          <Stack
            direction={{ xs: "column", md: "row" }}
            alignItems="center"
            justifyContent={"space-evenly"}
            spacing={{ xs: 1, sm: 2, md: 10 }}
            className="pt-5 "
          >
            <Stack
              direction={{ xs: "row", md: "column" }}
              justifyContent="space-evenly"
              alignItems="center"
              spacing={{ xs: 1, sm: 2, md: 2 }}
              data-aos="zoom-in-right"
              data-aos-easing="linear"
            >
              <div
                className={
                  activeTab === "educationIndustry"
                    ? "sm:w-40 w-1/2 sm:h-28 h-16 sm:px-5 px-4 py-3 rounded-xl shadow-[4px_4px_16px_0px_rgba(255,109,0,0.2)] orangeButton cursor-pointer hover:shadow-[0_0_5px_1px_rgba(255,109,0,1)]] "
                    : "sm:w-40 w-1/2 sm:h-28 h-16 sm:px-5 px-4 py-3 rounded-xl shadow-[4px_4px_16px_0px_rgba(0,0,0,0.06)] cursor-pointer hover:bg-[#FFF0E5]"
                }
                onClick={() => setActiveTab("educationIndustry")}
              >
                <Image
                  src={
                    activeTab === "educationIndustry"
                      ? teacherIconL
                      : teacherIconD
                  }
                  alt="teacherIcon"
                  className="sm:w-6 w-4 sm:h-6 h-4"
                />
                <div
                  className={
                    activeTab === "educationIndustry"
                      ? "sm:text-lg text-xs font-medium text-white"
                      : "sm:text-lg text-xs font-medium"
                  }
                >
                  Education <br /> Industry
                </div>
              </div>
              <div
                className={
                  activeTab === "financialServices"
                    ? "sm:w-40 w-1/2 sm:h-28 h-16 sm:px-5 px-4 py-3 rounded-xl shadow-[4px_4px_16px_0px_rgba(255,109,0,0.2)] orangeButton cursor-pointer hover:shadow-[0_0_5px_1px_rgba(255,109,0,1)]] "
                    : "sm:w-40 w-1/2 sm:h-28 h-16 sm:px-5 px-4 py-3 rounded-xl shadow-[4px_4px_16px_0px_rgba(0,0,0,0.06)] cursor-pointer hover:bg-[#FFF0E5] "
                }
                onClick={() => setActiveTab("financialServices")}
              >
                <Image
                  src={
                    activeTab === "financialServices"
                      ? chartsquareIconL
                      : chartsquareIconD
                  }
                  alt="chartsquareIcon"
                  className="sm:w-6 w-4 sm:h-6 h-4"
                />
                <div
                  className={
                    activeTab === "financialServices"
                      ? "sm:text-lg text-xs font-medium text-white"
                      : "sm:text-lg text-xs font-medium"
                  }
                >
                  Financial <br /> Services
                </div>
              </div>
              <div
                className={
                  activeTab === "technologyIndustry"
                    ? "sm:w-40 w-1/2 sm:h-28 h-16 sm:px-5 px-4 py-3 rounded-xl shadow-[4px_4px_16px_0px_rgba(255,109,0,0.2)] orangeButton cursor-pointer hover:shadow-[0_0_5px_1px_rgba(255,109,0,1)]]"
                    : "sm:w-40 w-1/2 sm:h-28 h-16 sm:px-5 px-4 py-3 rounded-xl shadow-[4px_4px_16px_0px_rgba(0,0,0,0.06)] cursor-pointer hover:bg-[#FFF0E5] "
                }
                onClick={() => setActiveTab("technologyIndustry")}
              >
                <Image
                  src={
                    activeTab === "technologyIndustry"
                      ? devicesIconL
                      : devicesIconD
                  }
                  alt="devicesIcon"
                  className="sm:w-6 w-4 sm:h-6 h-4"
                />
                <div
                  className={
                    activeTab === "technologyIndustry"
                      ? "sm:text-lg text-xs font-medium text-white"
                      : "sm:text-lg text-xs font-medium"
                  }
                >
                  Technology <br /> Industry
                </div>
              </div>
              <div
                className={
                  activeTab === "healthCare"
                    ? "sm:w-40 w-1/2 sm:h-28 h-16 sm:px-5 px-4 py-3 rounded-xl shadow-[4px_4px_16px_0px_rgba(255,109,0,0.2)] orangeButton cursor-pointer hover:shadow-[0_0_5px_1px_rgba(255,109,0,1)]] "
                    : "sm:w-40 w-1/2 sm:h-28 h-16 sm:px-5 px-4 py-3 rounded-xl shadow-[4px_4px_16px_0px_rgba(0,0,0,0.06)] cursor-pointer hover:bg-[#FFF0E5] "
                }
                onClick={() => setActiveTab("healthCare")}
              >
                <Image
                  src={
                    activeTab === "healthCare" ? hospitalIconL : hospitalIconD
                  }
                  alt="hospitalIcon"
                  className="sm:w-6 w-4 sm:h-6 h-4"
                />
                <div
                  className={
                    activeTab === "healthCare"
                      ? "sm:text-lg text-xs font-medium text-white"
                      : "sm:text-lg text-xs font-medium"
                  }
                >
                  Health <br /> Care
                </div>
              </div>
            </Stack>
            {activeTab === "educationIndustry" ? (
              <Stack
                direction={{ xs: "column", sm: "row" }}
                alignItems="center"
                justifyContent={"space-evenly"}
                spacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Image
                  src={homeBanner3a}
                  alt="homeBanner3a"
                  width={700}
                  height={500}
                  className="md:w-1/2"
                  data-aos="zoom-in-up"
                  data-aos-easing="linear"
                />
                <div
                  className="md:w-1/2"
                  data-aos="zoom-in-left"
                  data-aos-easing="linear"
                >
                  <p className="sm:text-2xl text-xl font-semibold mb-5">
                    Education Industry
                  </p>
                  <p className="sm:text-base text-sm">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                    <br />
                    <br />
                    The point of using Lorem Ipsum is that it has a more-or-less
                    normal distribution of letters, as opposed to using &#39;
                    Content here, content here &#39;, making it look like
                    readable English.
                  </p>
                  <button className="w-40 h-11 mt-5 text-orange-500 font-semibold rounded-full border border-[#FF6D00]  hover:bg-[#FFF0E5]">
                    Learn More
                  </button>
                </div>
              </Stack>
            ) : null}
            {activeTab === "financialServices" ? (
              <Stack
                direction={{ xs: "column", sm: "row" }}
                alignItems="center"
                justifyContent={"space-evenly"}
                spacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Image
                  src={homeBanner3b}
                  alt="homeBanner3b"
                  width={700}
                  height={500}
                  className="md:w-1/2"
                  data-aos="zoom-in-up"
                  data-aos-easing="linear"
                />
                <div
                  className="md:w-1/2"
                  data-aos="zoom-in-left"
                  data-aos-easing="linear"
                >
                  <p className="sm:text-2xl text-xl font-semibold mb-5">
                    Financial Services
                  </p>
                  <p className="sm:text-base text-sm">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                    <br />
                    <br />
                    The point of using Lorem Ipsum is that it has a more-or-less
                    normal distribution of letters, as opposed to using &#39;
                    Content here, content here &#39;, making it look like
                    readable English.
                  </p>
                  <button className="w-40 h-11 mt-5 text-orange-500 font-semibold rounded-full border border-[#FF6D00] hover:bg-[#FFF0E5]">
                    Learn More
                  </button>
                </div>
              </Stack>
            ) : null}
            {activeTab === "technologyIndustry" ? (
              <Stack
                direction={{ xs: "column", sm: "row" }}
                alignItems="center"
                justifyContent={"space-evenly"}
                spacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Image
                  src={homeBanner3c}
                  alt="homeBanner3c"
                  width={700}
                  height={500}
                  className="md:w-1/2"
                  data-aos="zoom-in-up"
                  data-aos-easing="linear"
                />
                <div
                  className="md:w-1/2"
                  data-aos="zoom-in-left"
                  data-aos-easing="linear"
                >
                  <p className="sm:text-2xl text-xl font-semibold mb-5">
                    Technology Industry
                  </p>
                  <p className="sm:text-base text-sm">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                    <br />
                    <br />
                    The point of using Lorem Ipsum is that it has a more-or-less
                    normal distribution of letters, as opposed to using &#39;
                    Content here, content here &#39;, making it look like
                    readable English.
                  </p>
                  <button className="w-40 h-11 mt-5 text-orange-500 font-semibold rounded-full border border-[#FF6D00] hover:bg-[#FFF0E5] ">
                    Learn More
                  </button>
                </div>
              </Stack>
            ) : null}
            {activeTab === "healthCare" ? (
              <Stack
                direction={{ xs: "column", sm: "row" }}
                alignItems="center"
                justifyContent={"space-evenly"}
                spacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Image
                  src={homeBanner3d}
                  alt="homeBanner3d"
                  width={700}
                  height={500}
                  className="md:w-1/2"
                  data-aos="zoom-in-up"
                  data-aos-easing="linear"
                />
                <div
                  className="md:w-1/2"
                  data-aos="zoom-in-left"
                  data-aos-easing="linear"
                >
                  <p className="sm:text-2xl text-xl font-semibold mb-5">
                    Health Care
                  </p>
                  <p className="sm:text-base text-sm">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                    <br />
                    <br />
                    The point of using Lorem Ipsum is that it has a more-or-less
                    normal distribution of letters, as opposed to using &#39;
                    Content here, content here &#39;, making it look like
                    readable English.
                  </p>
                  <button className="w-40 h-11 mt-5 text-orange-500 font-semibold rounded-full border border-[#FF6D00] hover:bg-[#FFF0E5]">
                    Learn More
                  </button>
                </div>
              </Stack>
            ) : null}
          </Stack>
        </Stack>
      </section>

      <section className="h-full bg-[#F3F4F6] py-16 2xl:px-32 lg:px-20 md:px-12 px-8 ">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-evenly"
          alignItems="center"
        >
          <div
            className="lg:w-1/2  md:w-1/2 sm:w-full"
            data-aos="zoom-in-right"
            data-aos-easing="linear"
          >
            <p className="lg:text-lg md:text-base text-base  text-[#FF6D00] font-semibold mb-3 ">
              About Us
            </p>
            <p className="lg:text-4xl md:test-3xl test-3xl font-semibold mb-3">
              What We Do
            </p>
            <p className="lg:text-lg md:text-base text-base">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using &#39;Content here,
              content here&#39;, making it look like readable English.
              <br />
              <br />
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for
              &#39;lorem ipsum&#39; will uncover many web sites.
            </p>
            <button
              onClick={() => pageRedirect("/Aboutus")}
              className="w-40 h-11 mt-5 text-orange-500 rounded-full border font-semibold border-[#FF6D00] hover:bg-[#FFF0E5]"
            >
              Learn More
            </button>
          </div>
          <div
            className="lg:w-1/2  md:w-1/2 sm:w-full"
            data-aos="zoom-in-left"
            data-aos-easing="linear"
          >
            <Image
              src={homeBanner4}
              alt="banner4"
              width={800}
              height={500}
              className="m-auto"
            />
          </div>
        </Stack>
      </section>

      <section className="h-full py-16 2xl:px-32 lg:px-20 md:px-12 px-8">
        <Stack
          direction={{ xs: "column", md: "row", sm: "column" }}
          justifyContent="space-evenly"
          alignItems="center"
          spacing={4}
        >
          <div
            className="sm:w-1/4 md:w-full lg:w-1/4 w-full"
            data-aos="zoom-in-right"
            data-aos-easing="linear"
          >
            <p className="lg:text-lg md:text-base text-base text-[#FF6D00] font-semibold  lg:text-left text-center">
              Partners
            </p>
            <p className="lg:text-4xl md:text-3xl text-3xl font-semibold lg:text-left text-center">
              Trusted Global Partners Network
            </p>
          </div>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="center"
            alignItems="center"
            spacing={{ xs: 6, sm: 4, md: 8 }}
            className="lg:w-3/4 md:w-full w-full"
            data-aos="zoom-in-left"
            data-aos-easing="linear"
          >
            <Stack
              direction="row"
              justifyContent="space-evenly"
              alignItems="center"
              spacing={{ xs: 6, sm: 5, md: 8 }}
            >
              <Image
                src={partnerNw1}
                alt="partnerNw1"
                className="lg:w-40 md:w-36 w-24 lg:h-20 md:h-16 h-14"
              />
              <Image
                src={partnerNw2}
                alt="partnerNw2"
                className="lg:w-24 md:w-20 w-14 lg:h-24 md:h-20 h-14"
              />
              <Image
                src={partnerNw3}
                alt="partnerNw3"
                className="lg:w-40 md:w-36 w-24 lg:h-24 md:h-20 h-14"
              />
            </Stack>
            <Stack
              direction="row"
              justifyContent="space-evenly"
              alignItems="center"
              spacing={{ xs: 6, sm: 5, md: 8 }}
            >
              <Image
                src={partnerNw4}
                alt="partnerNw4"
                className="lg:w-24 md:w-20 w-16 lg:h-24 md:h-20 h-16"
              />
              <Image
                src={partnerNw5}
                alt="partnerNw5"
                className="lg:w-36 md:w-28 w-18 lg:h-20 md:h-12 h-12"
              />
            </Stack>
          </Stack>
        </Stack>
      </section>

      <section className="h-full bg-[#b4a6ff24] py-10 2xl:px-32 lg:px-20 md:px-12 px-8">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="center"
          alignItems="center"
          spacing={{ xs: 8, sm: 4, md: 8 }}
        >
          <Stack
            direction="column"
            justifyContent="space-evenly"
            alignItems={{ xs: "center", sm: "flex-start" }}
            spacing={4}
            className="lg:w-1/2 md:w-1/2 w-full"
            data-aos="zoom-in-right"
            data-aos-easing="linear"
          >
            <div>
              <p className="lg:text-lg md:text-base text-base  text-[#FF6D00] font-semibold mb-3">
                Testimonials
              </p>
              <p className="lg:text-3xl md:text-2xl text-2xl font-semibold mb-3">
                Bringing value across different brands.
              </p>
              <button className="w-60 h-11 mt-3 text-orange-500 font-semibold rounded-full border border-[#FF6D00] hover:bg-[#FFF0E5]">
                Read Success Stories
              </button>
            </div>
            <div>
              <Image src={homeBanner5} alt="banner4" width={700} height={500} />
            </div>
          </Stack>
          <div
            className="relative bottom-16 lg:w-1/2 md:w-1/2 w-full lg:py-10 md:py-10 py-5 "
            data-aos="zoom-in-left"
            data-aos-easing="linear"
          >
            <Image
              src={apostrophyIcon}
              alt="apostrophyIcon"
              className="lg:w-12 md:w-10 w-8 lg:h-9 md:h-7 h-5 my-3"
            />
            <p className="lg:text-3xl md:text-xl text-lg font-semibold">
              Smooth Audio And Video Quality
            </p>
            <p className="lg:text-lg md:text-base text-base">
              I can&#39;t contain my excitement when it comes to the virtual
              meeting assistance provided by this incredible platform.
              <br />
              <br />
              The testimonials for this virtual meeting platform have been
              absolutely phenomenal! Users are raving about how seamlessly it
              allows them to conduct meetings online. They are thrilled with the
              smooth audio and video quality, as well as the user-friendly
              interface.
            </p>
            <div className="flex">{starList}</div>
            <p className="text-px-5 font-semibold">John Doe</p>
            <p className="text-[16px] ">-TeleFigon</p>
          </div>
        </Stack>
      </section>
    </div>
  );
};

export default Home;
