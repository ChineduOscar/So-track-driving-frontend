import { FiTarget, FiEye } from "react-icons/fi";

const MissionVision = () => {
  return (
    <section className="bg-[#f8f9fc] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Mission */}
        <div className="flex flex-col items-start">
          <div className="w-14 h-14 rounded-2xl bg-[#1a2d56] flex items-center justify-center mb-5">
            <FiTarget className="text-white text-2xl" />
          </div>
          <p className="text-[#22c55e] text-xs font-semibold tracking-widest uppercase mb-2">
            Our Mission
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4 leading-snug">
            Making driving simple,{" "}
            <span className="text-[#1a2d56]">safe and fun</span> for everyone
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            At DriveRight, we make driving simple, safe, and enjoyable through
            certified instructors, modern vehicles, and government-approved
            training designed to fit real life.
          </p>
        </div>

        {/* Vertical divider on large screens, horizontal on mobile */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200" />
        <div className="block lg:hidden border-t border-gray-200" />

        {/* Vision */}
        <div className="flex flex-col items-start">
          <div className="w-14 h-14 rounded-2xl bg-[#22c55e] flex items-center justify-center mb-5">
            <FiEye className="text-white text-2xl" />
          </div>
          <p className="text-[#1a2d56] text-xs font-semibold tracking-widest uppercase mb-2">
            Our Vision
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4 leading-snug">
            A community where every driver feelsprepared and responsible
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            We envision a world where every new driver hits the road with
            confidence and a deep sense of responsibility — not just to pass the
            test, but to stay safe for life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
