import { FiShield } from "react-icons/fi";

const instructors = [
  {
    initials: "DO",
    name: "David Owens",
    role: "Lead Instructor",
    years: 18,
  },
  {
    initials: "ML",
    name: "Maria Lopez",
    role: "Defensive Driving",
    years: 12,
  },
  {
    initials: "TB",
    name: "Tom Becker",
    role: "Test Prep Specialist",
    years: 9,
  },
  {
    initials: "AK",
    name: "Aisha Khan",
    role: "Beginner Coach",
    years: 7,
  },
];

const Team = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-[#22c55e] text-xs font-semibold tracking-widest uppercase mb-3">
          Our Team
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
          Meet our instructors
        </h2>
        <p className="text-gray-500 text-base mb-12">
          Government-certified, friendly and genuinely invested in your
          progress.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {instructors.map(({ initials, name, role, years }) => (
            <div
              key={name}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col items-center text-center"
            >
              {/* Avatar */}
              <div className="w-14 h-14 rounded-full bg-[#1a2d56] flex items-center justify-center mb-4">
                <span className="text-white text-sm font-bold">{initials}</span>
              </div>

              {/* Name & Role */}
              <h3 className="text-sm font-bold text-gray-900 mb-1">{name}</h3>
              <p className="text-xs text-gray-400 mb-4">
                {role} · {years} yrs
              </p>

              {/* Certified Badge */}
              <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-600 text-xs font-semibold px-3 py-1 rounded-full">
                <FiShield className="text-sm" />
                Certified
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
