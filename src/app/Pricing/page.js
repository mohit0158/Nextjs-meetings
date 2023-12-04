"use client";
import React, { useState } from "react";
import tickIcon from "@/assets/images/tickIcon.svg";
import Image from "next/image";
import SwitchButton from "@/utils/switchButtonTheme";
import Stack from "@mui/material/Stack";

const Pricing = () => {
  const [checked, setChecked] = useState(true);
  const [pricingType, setPricingType] = useState("yearly");
  const handleSwitch = (event) => {
    setChecked(event.target.checked);
    if (event.target.checked) {
      setPricingType("yearly");
    } else {
      setPricingType("monthly");
    }
  };

  return (
    <div>
      <Stack direction="column">
        <div className="bannerImg lg:px-16 md:px-16 px-4 lg:py-0 md:py-10 py-10 bg-no-repeat  lg:bg-cover md:bg-contain bg-cover  lg:h-[425px] md:h-[350px] h-[300px] text-center flex flex-col lg:justify-center md:justify-start justify-center">
          <p className="lg:text-lg md:text-base text-sm font-semibold text-[#FF6D00] mb-3">
            Plans & Pricing for
          </p>
          <p className="lg:text-5xl md:text-4xl text-2xl  lg:px-40 md:px-0 px-0 font-semibold">
            Business, Financial, Technology <br />
            and Healthcare
          </p>
        </div>
        <Stack
          direction="column"
          className="py-10 sm:px-16 px-8 "
          alignItems={"center"}
          spacing={1}
        >
          <div className="text-center ">
            <p className="lg:text-lg md:text-base text-sm font-semibold text-[#FF6D00]">
              Pricing
            </p>
            <p className="lg:text-4xl md:text-3xl text-2xl font-semibold leading-normal mb-3">
              Pricing Plans
            </p>
            <p className="lg:text-xl md:text-lg text-base ">
              First 30 days absolutely free for any plan, no credit card
              required to get started.
            </p>
          </div>
          <Stack
            direction="row"
            alignItems={"center"}
            justifyContent={"center"}
          >
            <span
              className={
                pricingType === "monthly"
                  ? "lg:text-xl md:text-base sm:text-sm font-semibold"
                  : "lg:text-xl md:text-base sm:text-sm"
              }
            >
              Monthly
            </span>
            <span>
              <SwitchButton checked={checked} onChange={handleSwitch} />
            </span>
            <span
              className={
                pricingType === "yearly"
                  ? "lg:text-xl md:text-base text-sm font-semibold"
                  : "lg:text-xl md:text-base text-sm"
              }
            >
              Yearly
            </span>
          </Stack>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignItems={"center"}
            justifyContent={"center"}
            spacing={2}
          >
            <div className="w-[350px] h-[550px] leading-loose py-10 px-10">
              <div>
                <br />
                <p className="lg:text-2xl md:text-xl text-lg  font-semibold text-[#FF6D00] mt-2">
                  Basic
                </p>
                <p className="lg:text-xl md:text-lg text-base font-semibold">
                  Free
                </p>
                <button className="w-[150px] h-[44px] my-5 text-orange-500 font-semibold rounded-full border border-[#FF6D00] hover:bg-[#FFF0E5] ">
                  Sign up
                </button>
              </div>
              <div>
                <div className="flex items-baseline gap-3">
                  <Image
                    src={tickIcon}
                    alt="tickMark"
                    className="w-[12px] h-[8px]"
                  />
                  <span className="text-base my-1 font-semibold ">Meetings</span>
                  <span className="text-[12px] text-[#8B8F93]">
                    Up to 2 hours per meeting
                  </span>
                </div>
                <div className="flex items-baseline gap-3">
                  <Image
                    src={tickIcon}
                    alt="tickMark"
                    className="w-[12px] h-[8px]"
                  />
                  <span className="text-base my-1 font-semibold ">
                    10 meetings
                  </span>
                  <span className="text-[12px] text-[#8B8F93]">Per week</span>
                </div>
                <div className="flex items-baseline gap-3">
                  <Image
                    src={tickIcon}
                    alt="tickMark"
                    className="w-[12px] h-[8px]"
                  />
                  <span className="text-base my-1 font-semibold ">ChatGPT</span>
                  <span className="text-[12px] text-[#8B8F93]">
                    to summary the meeting
                  </span>
                </div>
                <div className="flex items-baseline gap-3">
                  <Image
                    src={tickIcon}
                    alt="tickMark"
                    className="w-[12px] h-[8px]"
                  />
                  <span className="text-base my-1 font-semibold ">Team Chat</span>
                </div>
                <div className="flex items-baseline gap-3">
                  <Image
                    src={tickIcon}
                    alt="tickMark"
                    className="w-[12px] h-[8px]"
                  />
                  <span className="text-base my-1 font-semibold ">
                    Mail & Calendar
                  </span>
                </div>
                <div className="flex items-baseline gap-3">
                  <Image
                    src={tickIcon}
                    alt="tickMark"
                    className="w-[12px] h-[8px]"
                  />
                  <span className="text-base my-1 font-semibold ">Fast</span>
                </div>
                <div className="flex items-baseline gap-3">
                  <Image
                    src={tickIcon}
                    alt="tickMark"
                    className="w-[12px] h-[8px]"
                  />
                  <span className="text-base my-1 font-semibold ">
                    Turn on caption
                  </span>
                </div>
                <div className="flex items-baseline gap-3">
                  <Image
                    src={tickIcon}
                    alt="tickMark"
                    className="w-[12px] h-[8px]"
                  />
                  <span className="text-base my-1 font-semibold ">
                    Setting background in video call
                  </span>
                </div>
              </div>
            </div>
            <div className="w-[350px] h-[550px] leading-loose shadow-[0px_4px_88px_0px_#0000000F] py-10 px-10">
              <div>
                <p className="lg:text-sm md:text-xs text-xs text-[#8B8F93] md:mb-4">
                  {pricingType === "yearly"
                    ? `$10 savings monthly - SAVE UP TO 35%`
                    : <br/>}
                </p>
                <p className="lg:text-xl md:text-lg text-base font-semibold text-[#FF6D00] mt-2">
                  Premium
                </p>
                <div className="flex items-baseline gap-2 ">
                  <p className="lg:text-xl md:text-lg text-base font-semibold">
                    {pricingType === "yearly" ? `$228` : `$29`}
                  </p>
                  <span className="lg:text-xs md:text-xs text-xs text-[#8B8F93]">
                    {pricingType === "yearly" ? `Yearly` : `/Monthly`}
                  </span>
                </div>

                <button className="w-[150px] h-[44px] my-5 text-white font-semibold rounded-full orangeButton hover:shadow-[0_0_5px_1px_rgba(255,109,0,1)]">
                  Buy Now
                </button>
              </div>
              <div>
                <div className="flex items-baseline gap-3">
                  <Image
                    src={tickIcon}
                    alt="tickMark"
                    className="w-[12px] h-[8px]"
                  />
                  <span className=" text-base my-1 font-semibold">Meetings</span>
                  <span className="text-[12px] text-[#8B8F93]">
                    Unlimited hours
                  </span>
                </div>
                <div className="flex items-baseline gap-3">
                  <Image
                    src={tickIcon}
                    alt="tickMark"
                    className="w-[12px] h-[8px]"
                  />
                  <span className=" text-base my-1 font-semibold">
                    Unlimited Meeting
                  </span>
                  <span className="text-[12px] text-[#8B8F93]">Per week</span>
                </div>
                <div className="flex items-baseline gap-3">
                  <Image
                    src={tickIcon}
                    alt="tickMark"
                    className="w-[12px] h-[8px]"
                  />
                  <span className=" text-base my-1 font-semibold">ChatGPT</span>
                  <span className="text-[12px] text-[#8B8F93]">
                    to summary the meeting
                  </span>
                </div>
                <div className="flex items-baseline gap-3">
                  <Image
                    src={tickIcon}
                    alt="tickMark"
                    className="w-[12px] h-[8px]"
                  />
                  <span className=" text-base my-1 font-semibold">Team Chat</span>
                </div>
                <div className="flex items-baseline gap-3">
                  <Image
                    src={tickIcon}
                    alt="tickMark"
                    className="w-[12px] h-[8px]"
                  />
                  <span className=" text-base my-1 font-semibold">
                    Mail & Calendar
                  </span>
                </div>
                <div className="flex items-baseline gap-3">
                  <Image
                    src={tickIcon}
                    alt="tickMark"
                    className="w-[12px] h-[8px]"
                  />
                  <span className=" text-base my-1 font-semibold">Fast</span>
                </div>
                <div className="flex items-baseline gap-3">
                  <Image
                    src={tickIcon}
                    alt="tickMark"
                    className="w-[12px] h-[8px]"
                  />
                  <span className=" text-base my-1 font-semibold">
                    Turn on caption
                  </span>
                </div>
                <div className="flex items-baseline gap-3">
                  <Image
                    src={tickIcon}
                    alt="tickMark"
                    className="w-[12px] h-[8px]"
                  />
                  <span className=" text-base my-1 font-semibold">
                    Setting background in video call
                  </span>
                </div>
              </div>
            </div>
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};

export default Pricing;
