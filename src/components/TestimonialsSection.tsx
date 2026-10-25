import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { SITE_DATA } from '../data/rvRunnerData';

export const TestimonialsSection: React.FC = () => {
  const testimonials = SITE_DATA.testimonials;
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Tự động trượt slide liên tục mỗi 4 giây theo đúng yêu cầu
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(timer);
  }, [currentIndex, testimonials.length]);

  // Hỗ trợ vuốt trượt trên thiết bị di động
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      nextSlide();
    } else if (distance < -50) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      id="cam-nhan"
      className="w-full relative min-h-[410px] lg:h-[410px] flex items-center justify-center overflow-hidden select-none py-10 lg:py-0"
      style={{
        backgroundImage: "url('/assets/running_track_bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* 1. Nút bấm lùi (Previous Arrow) - Đặt sát lề trái, hoàn toàn ngoài card */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Cảm nhận trước đó"
        className="w-11 h-11 sm:w-14 sm:h-14 lg:w-[78px] lg:h-[78px] rounded-full bg-white text-[#212529] flex items-center justify-center shadow-[0_4px_14px_rgba(0,0,0,0.15)] hover:bg-gray-50 active:scale-95 transition-all absolute left-2 sm:left-4 lg:left-6 xl:left-[30px] top-1/2 -translate-y-1/2 z-20 cursor-pointer"
      >
        <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 stroke-[2.75]" />
      </button>

      {/* 2. Nút bấm tiến (Next Arrow) - Đặt sát lề phải, hoàn toàn ngoài card */}
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Cảm nhận tiếp theo"
        className="w-11 h-11 sm:w-14 sm:h-14 lg:w-[78px] lg:h-[78px] rounded-full bg-white text-[#212529] flex items-center justify-center shadow-[0_4px_14px_rgba(0,0,0,0.15)] hover:bg-gray-50 active:scale-95 transition-all absolute right-2 sm:right-4 lg:right-6 xl:right-[30px] top-1/2 -translate-y-1/2 z-20 cursor-pointer"
      >
        <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 stroke-[2.75]" />
      </button>

      {/* 3. Khung trung tâm chứa Slider Viewport và Pagination Dots */}
      <div className="w-full flex flex-col items-center justify-center relative z-10 px-2 sm:px-4">
        
        {/* Slider Viewport: Chiều rộng 82% và tối đa 1550px, overflow-hidden */}
        <div
          className="w-[calc(100%-110px)] sm:w-[calc(100%-150px)] lg:w-[calc(100%-200px)] xl:w-[82%] max-w-[1550px] mx-auto overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Sliding Track */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((item) => (
              <div key={item.id} className="w-full shrink-0 flex-none box-border">
                {/* Active Testimonial Card: Nền màu kem (#FAF8EB), bo góc 5px */}
                <div className="w-full bg-[#FAF8EB] rounded-[5px] p-6 sm:p-7 lg:py-[26px] lg:px-[34px] shadow-[0_4px_16px_rgba(0,0,0,0.08)] flex flex-col justify-between min-h-[190px] lg:min-h-[200px]">
                  
                  {/* Lời trích dẫn: chữ tối (#212529), in đậm nghiêng, cỡ ~21px trên desktop */}
                  <p className="text-[#212529] italic font-bold text-[15px] sm:text-[18px] lg:text-[21px] leading-relaxed lg:leading-[32px] text-left">
                    {item.quote}
                  </p>

                  {/* Thông tin tác giả: avatar tròn 52px và họ tên căn ngang */}
                  <div className="flex items-center gap-3.5 mt-4 sm:mt-5">
                    <div className="w-[52px] h-[52px] rounded-full overflow-hidden shrink-0 border border-emerald-200/80 shadow-xs">
                      <img
                        src={item.avatar}
                        alt={item.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[#333333] font-bold italic text-[14px] sm:text-[15px] lg:text-[16px]">
                        {item.author}
                      </span>
                      <span className="text-emerald-700 font-semibold text-xs sm:text-sm">
                        {item.role}
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>

        {/* 4. Nhóm nút tròn phân trang căn giữa bên dưới card */}
        <div className="flex items-center justify-center gap-2.5 mt-5 sm:mt-6">
          {testimonials.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Chuyển đến cảm nhận ${idx + 1}`}
              className={`w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full transition-all cursor-pointer ${
                currentIndex === idx
                  ? 'bg-white shadow-[0_0_8px_rgba(255,255,255,0.9)] scale-110'
                  : 'bg-white/60 hover:bg-white/80'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
