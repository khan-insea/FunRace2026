import React, { useState, useRef } from 'react';
import { SITE_DATA } from '../data/rvRunnerData';
import { Phone, MapPin, Sparkles, ChevronLeft, ChevronRight, Building2, ImageIcon, Mail } from 'lucide-react';

export const PrizesSection: React.FC = () => {
  const accommodations = SITE_DATA.accommodations || [];
  
  // Chỉ số resort đang xem (giữa 2 resort: Fly Up Resort và Paradise Retreat)
  const [resortIndex, setResortIndex] = useState(0);

  // Chỉ số ảnh đang xem của từng resort
  const [imgIndices, setImgIndices] = useState<Record<number, number>>({ 0: 0, 1: 0 });

  const currentResort = accommodations[resortIndex] || accommodations[0];
  const currentImages = currentResort?.images || [];
  const currentImgIndex = imgIndices[resortIndex] || 0;

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Chuyển resort (CHỈ KHI BẤM NÚT)
  const handleNextResort = () => {
    setResortIndex((prev) => (prev + 1) % accommodations.length);
  };

  const handlePrevResort = () => {
    setResortIndex((prev) => (prev - 1 + accommodations.length) % accommodations.length);
  };

  // Chuyển ảnh trong resort (CHỈ KHI BẤM NÚT)
  const handleNextImg = () => {
    setImgIndices((prev) => ({
      ...prev,
      [resortIndex]: ((prev[resortIndex] || 0) + 1) % currentImages.length,
    }));
  };

  const handlePrevImg = () => {
    setImgIndices((prev) => ({
      ...prev,
      [resortIndex]: ((prev[resortIndex] || 0) - 1 + currentImages.length) % currentImages.length,
    }));
  };

  const handleSelectImg = (idx: number) => {
    setImgIndices((prev) => ({
      ...prev,
      [resortIndex]: idx,
    }));
  };

  // Hỗ trợ vuốt cảm ứng trên mobile cho ảnh
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      handleNextImg();
    } else if (distance < -50) {
      handlePrevImg();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section id="uu-dai" className="w-full bg-[#FAFAFA] py-12 sm:py-16 border-t border-slate-200">
      {/* Container chuẩn max 1386px */}
      <div className="w-full max-w-[1386px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-0 box-border">
        
        {/* Tiêu đề phân đoạn */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>ĐẶC QUYỀN VẬN ĐỘNG VIÊN</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            ƯU ĐÃI NGHỈ DƯỠNG &amp; HOMESTAY RUNNER
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base mt-2">
            Đặc quyền ưu đãi phòng nghỉ và dịch vụ dành riêng cho vận động viên và cổ động viên
          </p>
        </div>

        {/* Thanh chọn chuyển đổi giữa các gói ưu đãi Fly Up Resort (Lướt khi bấm nút) */}
        {accommodations.length > 1 && (
          <div className="max-w-[740px] mx-auto mb-6 flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-2.5 rounded-2xl border border-slate-200/90 shadow-2xs">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 pl-2">
              <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Gói ưu đãi Fly Up Resort ({resortIndex + 1}/{accommodations.length}):</span>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              {accommodations.map((acc, index) => (
                <button
                  key={acc.id}
                  onClick={() => setResortIndex(index)}
                  className={`flex-1 sm:flex-initial text-xs sm:text-sm font-extrabold px-4 py-2 rounded-xl transition-all cursor-pointer ${
                    resortIndex === index
                      ? 'bg-amber-500 text-white shadow-xs'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {acc.tabLabel || acc.discountTitle}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Thẻ Chi tiết Resort Hiện Tại */}
        <div className="max-w-[740px] mx-auto bg-white rounded-[28px] border border-slate-200/90 shadow-sm p-5 sm:p-7 lg:p-8 flex flex-col space-y-5 relative">
          
          {/* Nút lướt chuyển sang Resort khác (ở 2 bên ngoài trên desktop) */}
          {accommodations.length > 1 && (
            <>
              <button
                onClick={handlePrevResort}
                aria-label="Resort trước"
                className="hidden lg:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border border-slate-300 hover:border-amber-500 text-slate-700 hover:text-amber-600 shadow-md items-center justify-center transition-all cursor-pointer hover:scale-110 active:scale-95"
                title="Bấm để xem đơn vị resort khác"
              >
                <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
              </button>

              <button
                onClick={handleNextResort}
                aria-label="Resort tiếp theo"
                className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border border-slate-300 hover:border-amber-500 text-slate-700 hover:text-amber-600 shadow-md items-center justify-center transition-all cursor-pointer hover:scale-110 active:scale-95"
                title="Bấm để xem đơn vị resort khác"
              >
                <ChevronRight className="w-5 h-5 stroke-[2.5]" />
              </button>
            </>
          )}

          {/* 1. HÌNH ẢNH: DẠNG LƯỚT DÀNH CHO NHIỀU ẢNH (Bấm nút mới lướt qua) */}
          <div className="relative w-full">
            <div
              className="w-full rounded-2xl overflow-hidden aspect-[16/9] sm:aspect-[2/1] relative bg-slate-950 shadow-inner group"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Vùng lướt các ảnh */}
              <div
                className="flex h-full transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentImgIndex * 100}%)` }}
              >
                {currentImages.map((img) => (
                  <div key={img.id} className="w-full h-full shrink-0 relative">
                    <img
                      src={img.src}
                      alt={img.title}
                      className="w-full h-full object-cover block"
                    />
                    {/* Chú thích ảnh phía dưới */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-3 sm:p-4 text-white">
                      <div className="text-xs sm:text-sm font-bold drop-shadow">
                        {img.title}
                      </div>
                      <div className="text-[11px] text-white/80 font-medium">
                        {img.caption}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chỉ số ảnh (Ví dụ: 1 / 4) */}
              <div className="absolute top-3 right-3 z-10 inline-flex items-center gap-1.5 bg-black/60 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-full border border-white/20">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>{currentImgIndex + 1} / {currentImages.length}</span>
              </div>

              {/* Nút lướt sang ảnh trước (Nằm trên ảnh) */}
              <button
                onClick={handlePrevImg}
                aria-label="Ảnh trước"
                className="absolute left-2.5 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-xs transition-all cursor-pointer hover:scale-110 active:scale-95 border border-white/20"
                title="Bấm để xem ảnh trước"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Nút lướt sang ảnh tiếp theo (Nằm trên ảnh) */}
              <button
                onClick={handleNextImg}
                aria-label="Ảnh tiếp theo"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center backdrop-blur-xs transition-all cursor-pointer hover:scale-110 active:scale-95 border border-white/20"
                title="Bấm để xem ảnh tiếp theo"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Thanh điều hướng chấm tròn lướt ảnh bên dưới khối ảnh */}
            <div className="mt-3 flex items-center justify-center gap-2">
              {currentImages.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => handleSelectImg(idx)}
                  aria-label={`Xem ảnh ${idx + 1}`}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    currentImgIndex === idx
                      ? 'w-6 h-2 bg-amber-500'
                      : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* 2. TÊN RESORT NẰM DƯỚI ẢNH */}
          <div className="flex items-center gap-3.5 pt-2 pb-3 border-b border-slate-100">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 text-white flex items-center justify-center shrink-0 shadow-sm shadow-orange-500/20">
              <Building2 className="w-6 h-6" />
            </div>
            <div className="min-w-0">
              <span className="inline-block text-[11px] font-black uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full mb-1">
                {currentResort.type}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                {currentResort.name}
              </h3>
            </div>
          </div>

          {/* 3. ƯU ĐÃI */}
          <div className="bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 border-2 border-amber-300/80 rounded-2xl p-4 sm:p-5 text-center sm:text-left shadow-2xs">
            <span className="text-[11px] sm:text-xs font-black text-amber-800 uppercase tracking-wider block mb-1">
              {currentResort.discountBadge}
            </span>
            <div className="text-2xl sm:text-3xl font-black text-rose-600 tracking-tight">
              {currentResort.discountTitle}
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-700 mt-1 leading-relaxed">
              {currentResort.discountDesc}
            </p>
          </div>

          {/* 4. ĐỊA CHỈ & PHƯƠNG THỨC LIÊN LẠC */}
          <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/80 space-y-3.5 text-left">
            {/* Địa chỉ */}
            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
              <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div className="leading-relaxed">
                <strong className="text-slate-900 font-bold">Địa chỉ: </strong>
                <span>Bãi Bấc, Lại Sơn, Đặc Khu Kiên Hải, Tỉnh An Giang</span>
              </div>
            </div>

            {/* Các phương thức liên lạc: SĐT, Hotline, Email */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2.5 border-t border-slate-200/70 text-xs">
              {/* Hotline */}
              <a
                href="tel:0857822822"
                className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200 hover:border-amber-400 text-slate-800 transition-colors shadow-2xs"
                title="Gọi Hotline: 0857 822 822"
              >
                <Phone className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <div className="min-w-0">
                  <span className="text-[10px] text-slate-400 block font-bold uppercase tracking-wider">Hotline</span>
                  <span className="font-extrabold text-amber-700 block truncate text-xs sm:text-sm">0857 822 822</span>
                </div>
              </a>

              {/* Số điện thoại bàn */}
              <a
                href="tel:02973822822"
                className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200 hover:border-sky-400 text-slate-800 transition-colors shadow-2xs"
                title="Gọi SĐT: 0297 3 822 822"
              >
                <Phone className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                <div className="min-w-0">
                  <span className="text-[10px] text-slate-400 block font-bold uppercase tracking-wider">Số điện thoại</span>
                  <span className="font-bold text-slate-800 block truncate text-xs sm:text-sm">0297 3 822 822</span>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:info@flyupresort.com"
                className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200 hover:border-emerald-400 text-slate-800 transition-colors shadow-2xs"
                title="Gửi Email: info@flyupresort.com"
              >
                <Mail className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <div className="min-w-0">
                  <span className="text-[10px] text-slate-400 block font-bold uppercase tracking-wider">Email</span>
                  <span className="font-bold text-slate-800 block truncate text-xs">info@flyupresort.com</span>
                </div>
              </a>
            </div>
          </div>

          {/* 5. BUTTON LIÊN HỆ */}
          <div className="pt-1">
            <a
              href="tel:0857822822"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#0284C7] hover:bg-[#0369A1] active:scale-[0.98] text-white font-extrabold text-sm sm:text-base py-3.5 sm:py-4 px-6 rounded-xl shadow-sm hover:shadow transition-all uppercase tracking-wide cursor-pointer min-h-[46px]"
              title="Gọi Hotline đặt phòng: 0857 822 822"
            >
              <Phone className="w-4 h-4" />
              <span>LIÊN HỆ ĐẶT PHÒNG: 0857 822 822</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
