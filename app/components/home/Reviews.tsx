"use client";
import { useState, useRef } from "react";

const reviews = [
  {
    name: "Sogbeye Harry",
    text: "so-track driving school is one of the best driving schools I have known. Their training is thorough and professional. I have referred many people and they all became confident drivers. I highly recommend them to anyone looking to learn how to drive in Port Harcourt.",
    avatar: "S",
    color: "bg-[#ee2026]",
  },
  {
    name: "Solloyd Barango",
    text: "so-track driving school is a great place to learn driving. The office environment is welcoming and the instructors are friendly, patient, and knowledgeable.",
    avatar: "S",
    color: "bg-[#333992]",
  },
  {
    name: "Damabel Lebari",
    text: "At so-track driving school, driving is truly made easy. The instructors are excellent, the staff are helpful, and the reception is warm and professional.",
    avatar: "D",
    color: "bg-[#00a057]",
  },
];

const Stars = () => (
  <div className="flex gap-0.5 mb-4">
    {Array(5)
      .fill(0)
      .map((_, i) => (
        <svg
          key={i}
          className="w-5 h-5 text-[#00a057] fill-[#00a057]"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
  </div>
);

const Reviews = () => {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) {
      if (delta > 0) setCurrent((c) => Math.min(c + 1, reviews.length - 1));
      else setCurrent((c) => Math.max(c - 1, 0));
    }
    touchStartX.current = null;
  };

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-3">
            What Our Students Say
          </h2>
          <p className="text-gray-500 text-base mx-auto">
            Real feedback from students who passed with confidence.
          </p>
        </div>

        {/* ── Desktop: 3 columns ── */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="group relative bg-white border border-gray-100 hover:border-gray-200 hover:shadow-lg rounded-2xl p-6 transition-all duration-300"
            >
              {/* Google icon top-right */}
              <div className="absolute top-5 right-5 opacity-20 group-hover:opacity-40 transition-opacity">
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
              </div>

              <Stars />

              <p className="text-gray-700 text-sm leading-relaxed italic mb-6 min-h-37.5">
                {r.text}
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div
                  className={`w-9 h-9 rounded-full ${r.color} flex items-center justify-center text-white font-bold text-sm shrink-0`}
                >
                  {r.avatar}
                </div>
                <div>
                  <p className="text-gray-900 font-semibold text-sm">
                    {r.name}
                  </p>
                  <p className="text-gray-400 text-xs">Google Review</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Mobile: swipeable single card ── */}
        <div className="md:hidden">
          <div
            className="relative overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {reviews.map((r) => (
                <div key={r.name} className="min-w-full px-1">
                  <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                    {/* Google icon */}
                    <div className="flex justify-between items-start mb-1">
                      <Stars />
                      <svg
                        viewBox="0 0 24 24"
                        className="w-5 h-5 opacity-30 mt-0.5"
                        fill="none"
                      >
                        <path
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          fill="#4285F4"
                        />
                        <path
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          fill="#34A853"
                        />
                        <path
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          fill="#EA4335"
                        />
                      </svg>
                    </div>

                    <p className="text-gray-700 text-sm leading-relaxed italic mb-6 min-h-37.5">
                      {r.text}
                    </p>

                    <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                      <div
                        className={`w-9 h-9 rounded-full ${r.color} flex items-center justify-center text-white font-bold text-sm`}
                      >
                        {r.avatar}
                      </div>
                      <div>
                        <p className="text-gray-900 font-semibold text-sm">
                          {r.name}
                        </p>
                        <p className="text-gray-400 text-xs">Google Review</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile dots + swipe hint */}
          <div className="flex flex-col items-center gap-2 mt-5">
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === current ? "20px" : "8px",
                    height: "8px",
                    backgroundColor: i === current ? "#4f46e5" : "#d1d5db",
                  }}
                />
              ))}
            </div>
            <p className="text-gray-400 text-xs">Swipe to see more</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
