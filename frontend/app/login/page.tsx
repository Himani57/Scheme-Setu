import Login from "@/components/Login"
import { FaBolt, FaWandMagicSparkles } from "react-icons/fa6";

const features = [
  { icon: FaWandMagicSparkles, label: "Personalized recommendations based on your profile" },
  // { icon: FaShieldAlt, label: "Verified, official government scheme data" },
  { icon: FaBolt, label: "Apply directly through official portals" },
];

const page = () => {
  return (
    <div className="flex h-screen w-full">
       <div className="relative hidden lg:w-[95%] md:flex-col md:w-1/2 lg:flex lg:border-2  h-full bg-[#0F2A43] flex-col justify-between overflow-hidden px-16 py-12">

      <div className="relative z-10">
        <div className="flex items-center gap-3">
          <div>
            <h1 className="text-white text-2xl font-serif leading-none">
              Scheme<span className="text-[#E8873A]">Setu</span>
            </h1>
            <p className="text-xs text-white/60 mt-1">
              Connecting citizens to the benefits they deserve
            </p>
          </div>
        </div>

        <div className="mt-20 max-w-md">
          <h2 className="text-white text-4xl font-serif leading-tight">
            Government schemes,
          </h2>
          <h2 className="text-[#E8873A] text-4xl font-serif leading-tight">
            made simple for you
          </h2>
          <p className="text-white/70 mt-4 max-w-sm leading-relaxed">
            Discover schemes, check eligibility, and get personalized
            recommendations — all in one place.
          </p>
        </div>

        <div className="flex flex-col gap-6 mt-14">
          {features.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-start gap-4 max-w-sm">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <Icon className="text-[#E8873A] text-sm" />
              </div>
              <p className="text-sm text-white/80 leading-relaxed pt-2">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="relative z-10 text-xs text-white/40">
        Trusted by citizens across India
      </p>
    </div>

    <Login/>
    </div>
   
  );
};

export default page;





