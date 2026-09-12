import React from "react";
import Signup from "@/components/Auth/Signup";
import { FaShieldAlt, FaBolt } from "react-icons/fa";

const SignupPage = () => {
  return (
    <div className="h-screen w-full flex">

      <div className="hidden lg:flex bg-blue-300 lg:w-[106%] 2xl:w-[95%]  h-full relative overflow-hidden">
        <div className="relative z-10 w-full px-8 lg:px-12 py-8 lg:py-10 flex flex-col">
          <div className="flex items-center gap-3">
            <div className="text-3xl lg:text-4xl">
              🏔️
            </div>

            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-[#16385A]">
                Scheme<span className="text-[#16806B]">Setu</span>
              </h1>

              <p className="text-xs lg:text-sm text-[#34495E]">
                Connecting Citizens to the Benefits They Deserve
              </p>
            </div>
          </div>

          <div className="mt-12 lg:mt-16 ml-0 lg:ml-2">

            <h2 className="text-4xl lg:text-5xl leading-tight font-bold text-[#16385A]">
              Your Future
              <br />
              <span className="text-[#16806B]">Starts Here</span>
            </h2>

            <p className="mt-4 text-base lg:text-xl leading-relaxed text-[#34495E] max-w-">
              Create your account and get personalized government scheme
              recommendations powered by AI.
            </p>

            <div className="mt-7 lg:mt-8 space-y-4 lg:space-y-5">

              <div className="flex items-center gap-3 lg:gap-4">
                <div className="w-10 h-10 lg:w-12 lg:h-12 shrink-0 rounded-full bg-[#E4F4EF] flex items-center justify-center text-[#16806B] shadow-sm">
                  <FaShieldAlt />
                </div>

                <div>
                  <h3 className="text-sm  lg:text-base font-semibold text-[#263B52]">
                    Personalized Recommendations
                  </h3>

                  <p className="text-xs lg:text-sm text-[#526174]">
                    Schemes based on your profile
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 lg:gap-4">
                <div className="w-10 h-10 lg:w-12 lg:h-12 shrink-0 rounded-full bg-[#E4F4EF] flex items-center justify-center text-[#16806B] shadow-sm">
                  <FaShieldAlt />
                </div>

                <div>
                  <h3 className="text-sm lg:text-base font-semibold text-[#263B52]">
                    Trusted & Reliable
                  </h3>

                  <p className="text-xs lg:text-sm text-[#526174]">
                    Official government schemes
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 lg:gap-4">
                <div className="w-10 h-10 lg:w-12 lg:h-12 shrink-0 rounded-full bg-[#E4F4EF] flex items-center justify-center text-[#16806B] shadow-sm">
                  <FaBolt />
                </div>

                <div>
                  <h3 className="text-sm lg:text-base font-semibold text-[#263B52]">
                    Easy Access
                  </h3>

                  <p className="text-xs lg:text-sm text-[#526174]">
                    Apply directly through official links
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Signup />

    </div>
  );
};

export default SignupPage;
