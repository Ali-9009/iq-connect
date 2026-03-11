import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const plans = [1, 2, 3];

function PlanCard() {
  return (
    <div className="bg-white rounded-3xl overflow-hidden flex flex-col shadow-lg h-full">

      {/* Top */}
      <div className="w-full bg-[var(--primary-color)] py-6 flex justify-center">
        <img src="/images/at&t2.png" alt="" />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 justify-between p-6 text-center text-(--primary-color)">
        <h3 className="font-bold">
          Unlimited North America Plan
        </h3>

        <p className="text-3xl font-bold text-[#ED6E4B]">
          $60 <span className="text-lg text-(--primary-color)">/mes</span>
        </p>

        <p className="text-[16px] font-semibold my-4">
          Plus taxes and fees
        </p>

        <ul className="space-y-3 lg:text-[16px] text-sm font-semibold text-start">
          <li className="flex gap-2">
            <img src="/images/badge.png" className="w-4 h-4 mt-1" />
            Unlimited talk, text & data
          </li>
          <li className="flex gap-2">
            <img src="/images/badge.png" className="w-4 h-4 mt-1" />
            AT&T's 5G Network
          </li>
          <li className="flex gap-2">
            <img src="/images/badge.png" className="w-4 h-4 mt-1" />
            10GB hotspot data
          </li>
        </ul>
      </div>
    </div>
  );
}

export default function PlansSection() {
  return (
    <div className="w-full">

      {/* ✅ Mobile Slider only */}
      <div className="md:hidden">
        <Swiper
          className="plans-swiper"
          modules={[Pagination]}
          slidesPerView={1}
          spaceBetween={16}
          pagination={{ clickable: true }}
        >
          {plans.map((_, i) => (
            <SwiperSlide key={i}>
              <PlanCard />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ✅ Tablet + Desktop Grid */}
      <div className="hidden md:grid md:grid-cols-3 gap-6">
        {plans.map((_, i) => (
          <PlanCard key={i} />
        ))}
      </div>

    </div>
  );
}
