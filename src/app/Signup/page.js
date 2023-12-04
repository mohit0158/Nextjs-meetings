"use client";
import React from "react";
import googleIcon from "@/assets/images/googleIcon.svg";
import appleIconD from "@/assets/images/appleIconD.svg";
import Image from "next/image";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/navigation";
const SignUp = () => {
     const router = useRouter();
     const pageRedirect = (page) => {
       router.push(page, { scroll: false });
     };
  return (
    <div>
      <Stack direction="column" alignItems={"center"} className="relative ">
        <div className="bannerImg bg-no-repeat lg:bg-cover md:bg-contain bg-cover  lg:px-16 md:px-10 lg:py-0 md:py-10 py-10 px-8 lg:h-[425px] md:h-[400px] h-[250px] w-full text-center flex flex-col lg:justify-center md:justify-start justify-start">
          <p className="lg:text-lg md:text-base text-sm font-semibold text-[#FF6D00] mb-3">
            Sign up
          </p>
          <p className="lg:text-5xl md:text-4xl text-3xl font-semibold">
            A secure online <br />
            meeting platform
          </p>
        </div>
        <div className="bg-white lg:w-[660px] md:w-[660px] w-[21rem] lg:h-[215px] md:h-[200px] h-[11rem] shadow-[0px_4px_88px_0px_#0000000F] absolute lg:top-[21rem] md:top-[11rem] top-52 lg:left-[25%] md:left-[8%] 2xl:left-[30%]  left-[10%] z-10 lg:py-20 md:py-20 py-10">
          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignItems={"center"}
            spacing={2}
            justifyContent={"center"}
          >
            <div>
              <button
                className="sm:w-72 w-64 h-11  text-orange-500 border-orange-500 border rounded-full font-semibold  flex justify-center items-center gap-2 hover:bg-[#FFF0E5] "
                
              >
                <Image src={googleIcon} alt="googleIcon" className="w-6 h-6 " />
                <div>Signup with Google</div>
              </button>
            </div>
            <div>
              <button
                className="sm:w-72 w-64 h-11  text-orange-500 border-orange-500 border rounded-full  font-semibold  flex justify-center items-center gap-2 hover:bg-[#FFF0E5]"
                onClick={()=>alert("This feature is in development")}
              >
                <Image src={appleIconD} alt="appleIconD" className="w-6 h-6 " />
                <div>Signup with Apple</div>
              </button>
            </div>
          </Stack>
        </div>
      </Stack>
      <p className="sm:text-base text-sm text-center lg:mt-36 md:mt-0 mt-20 lg:mb-0 md:mb-72 mb-5">
        Already have an account?
        <span
          onClick={() => pageRedirect("/Signin")}
          className="cursor-pointer  text-orange-500  ml-1 font-semibold   border-b border-orange-500 "
        >
          Login
        </span>
      </p>
    </div>
  );
};

export default SignUp;
