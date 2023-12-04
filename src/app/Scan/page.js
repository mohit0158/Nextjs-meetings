"use client";
import React, { useEffect, useState } from "react";
import sms from "@/assets/images/sms.svg";
import Image from "next/image";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/navigation";

const Scan = () => {
  const router = useRouter();
  const [textInput, setTextInput] = useState("");
  const [errorText, setErrorText] = useState(false);
  const onScan = () => {
    if (textInput !== "") {
      router.push("/Meetings");
    } else {
      setErrorText(true);
    }
  };
  useEffect(() => {
    setTextInput("");
    setErrorText(false);
  }, []);
  return (
    <div>
      <Stack direction="column" alignItems={"center"} className="relative ">
        <div className="bannerImg bg-no-repeat bg-cover mb-56 lg:px-16 md:px-10 lg:py-0 md:py-10 py-10 px-8 lg:h-[425px] md:h-[425px] h-[250px] w-full text-center flex flex-col lg:justify-center md:justify-start justify-start">
          <p className="lg:text-lg md:text-lg text-sm font-semibold text-[#FF6D00] mb-3">
            Scan for
          </p>
          <p className="lg:text-5xl md:text-5xl text-3xl font-semibold">
            Please enter <br className="lg:hidden" /> business address
          </p>
        </div>
        <div className="bg-white lg:w-[675px] md:w-[675px] w-[21rem] lg:h-[340px] md:h-[340px] h-[17rem] shadow-[0px_4px_88px_0px_#0000000F] absolute lg:top-[45%] md:top-[35%] top-[35%] lg:left-[25%] md:left-[6%] 2xl:left-[30%] left-[10%] z-10 lg:p-20 md:p-16 p-10 ">
          <Stack direction="column" alignItems={"center"} >
            <Stack
              direction="row"
              alignItems={"center"}
              spacing={2}
              className=" border border-1 border-gray-400 sm:h-[70px] h-[35px] sm:w-[527px] w-[260px]  rounded-lg p-3 "
            >
              <Image src={sms} alt="sms" className="sm:w-9 w-5 sm:h-9 h-5" />
              <input
                className=" border-none outline-none w-full h-8 sm:placeholder:text-xl"
                type="email"
                placeholder="Enter Business Address"
                onChange={(e) => setTextInput(e.target.value)}
              />
            </Stack>
            <p className={errorText ? "text-[red] mt-1 text-sm block " : "hidden"}>
              Please enter business address
            </p>
            <button
              onClick={onScan}
              className="sm:w-[527px] w-[260px] sm:h-[50px] h-[33px] mt-5 text-white font-semibold rounded-full orangeButton hover:shadow-[0_0_5px_1px_rgba(255,109,0,1)]"
            >
              Scan
            </button>
            <p className="sm:text-base text-sm text-center mt-5">
              All meetings at ZataHub will be summary by Chat GPT 4.0 and
              publish to Harmony main net.
            </p>
          </Stack>
        </div>
      </Stack>
    </div>
  );
};

export default Scan;
