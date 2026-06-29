import { FiHeart, FiShield, FiAward } from "react-icons/fi";

const values = [
  {
    icon: FiHeart,
    title: "Patience",
    description:
      "Every learner moves at their own pace and we celebrate every milestone.",
  },
  {
    icon: FiShield,
    title: "Safety First",
    description:
      "We instil road-safety habits that last a lifetime, not just for the test.",
  },
  {
    icon: FiAward,
    title: "Excellence",
    description:
      "Continuously trained instructors and a 94% first-time pass rate.",
  },
];

const CoreValues = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-[#22c55e] text-xs font-semibold tracking-widest uppercase mb-3">
          Core Values
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-12">
          What we stand for
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {values.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-gray-100 shadow-sm p-8 flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mb-5">
                <Icon className="text-green-500 text-2xl" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">
                {title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
