import React, { useState, useEffect } from 'react';
import { SITE_DATA } from '../data/rvRunnerData';
import { Calendar, MapPin, Users, ExternalLink, Timer, Clock, AlertCircle } from 'lucide-react';

export const EligibilityAndTimeline: React.FC = () => {
  // Countdown to 22/11/2026 05:00:00 GMT+7 (Asia/Ho_Chi_Minh)
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2026-11-22T05:00:00+07:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="the-le" className="w-full bg-[#F8FAFC] py-10 sm:py-16 border-t border-slate-200">
      {/* Container chuẩn max 1386px */}
      <div className="w-full max-w-[1386px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-0 box-border">
        
        {/* Tiêu đề phân đoạn - Fix rớt chữ "PHÁT" (Ảnh 2) */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 px-2">
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2.5">
            <Timer className="w-3.5 h-3.5" />
            <span>THÔNG TIN THI ĐẤU</span>
          </div>

          {/* Tiêu đề giữ cụm "XUẤT PHÁT" cùng dòng, cân đối trên desktop và mobile */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] xl:text-[36px] font-black text-slate-900 tracking-tight leading-snug">
            <span className="inline-block">ĐỐI TƯỢNG, ĐỊA ĐIỂM</span>{' '}
            <span className="inline-block">&amp; ĐẾM NGƯỢC <span className="whitespace-nowrap">XUẤT PHÁT</span></span>
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm md:text-base mt-2">
            Cùng đếm ngược từng khoảnh khắc hướng về đảo ngọc Hòn Sơn xinh đẹp ngày 22/11/2026
          </p>
        </div>

        {/* 2 Cột:
            - Cột trái: Đối tượng tham gia & Địa điểm & Mã QR đăng ký
            - Cột phải: GỘP LỊCH TRÌNH CHI TIẾT 2 NGÀY VÀ ĐỒNG HỒ ĐẾM NGƯỢC (Ảnh 3 và 4)
        */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-10 items-start">
          
          {/* CỘT TRÁI: Đối tượng tham gia & Địa điểm tổ chức */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-8 border border-slate-200/90 shadow-xs flex flex-col justify-between">
            <div>
              {/* Tiêu đề Đối tượng */}
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-sm shadow-emerald-500/20">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-slate-900 font-extrabold text-lg sm:text-xl md:text-2xl">
                    Đối tượng tham gia
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-700 font-medium">
                    Mở rộng cho tất cả người yêu chạy bộ trong và ngoài nước
                  </p>
                </div>
              </div>

              {/* Chi tiết đối tượng */}
              <div className="space-y-2.5 text-slate-700 text-xs sm:text-sm md:text-base leading-relaxed mb-6 text-left">
                <p className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold shrink-0">✓</span>
                  <span>Mọi công dân Việt Nam và người nước ngoài đủ 16 tuổi trở lên có đam mê thể thao và rèn luyện sức khỏe.</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold shrink-0">✓</span>
                  <span>Cán bộ, chiến sĩ, đoàn viên thanh niên và người dân đặc khu Kiên Hải, tỉnh An Giang.</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold shrink-0">✓</span>
                  <span>Các câu lạc bộ chạy bộ phong trào, nhóm bạn bè, gia đình mong muốn cùng lan tỏa thông điệp sống không ma túy.</span>
                </p>
              </div>

              {/* Địa điểm tổ chức */}
              <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-4 sm:p-5 space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm md:text-base">
                      Địa điểm Ngày thi đấu chính thức (22/11/2026):
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-700 mt-0.5">
                      {SITE_DATA.event.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2.5 border-t border-emerald-200/60">
                  <MapPin className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm md:text-base">
                      Địa điểm Nhận Race Kit (21/11/2026):
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-700 mt-0.5">
                      {SITE_DATA.event.raceKitLocation}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Khối quét mã QR FunRace */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-4 bg-slate-50 p-4 rounded-2xl">
              {/* QR Code Container */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white p-1.5 border border-slate-200 rounded-xl shadow-2xs shrink-0 flex items-center justify-center">
                <svg className="w-full h-full text-slate-900" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm-2 10h8v8H2v-8zm2 2v4h4v-4H4zm10-14h8v8h-8V2zm2 2v4h4V4h-4zm-1 9h2v2h-2v-2zm3 0h3v2h-3v-2zm-3 3h2v2h-2v-2zm2 2h3v2h-3v-2zm2-2h2v2h-2v-2zm0-5h2v2h-2v-2zm-2 5h2v2h-2v-2zM5 5h2v2H5V5zm0 12h2v2H5v-2zm12-12h2v2h-2V5z" />
                </svg>
              </div>

              <div className="text-center sm:text-left flex-1 min-w-0">
                <div className="font-extrabold text-slate-900 text-xs sm:text-sm md:text-base">
                  Cổng đăng ký FunRace chính thức
                </div>
                <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 mb-2.5">
                  Quét mã QR hoặc nhấn vào nút bên dưới để chọn cự ly và đăng ký trực tuyến
                </p>
                <a
                  href={SITE_DATA.event.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-bold px-3.5 py-2 rounded-lg shadow-2xs transition-colors min-h-[38px]"
                >
                  <span>Mở trang đăng ký FunRace</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

          {/* CỘT PHẢI: GỘP LỊCH TRÌNH CHI TIẾT TỪNG NGÀY & ĐỒNG HỒ ĐẾM NGƯỢC (Ảnh 3 + Ảnh 4) */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-8 border border-slate-200/90 shadow-xs flex flex-col justify-between">
            <div>
              {/* Tiêu đề Lịch trình & Thời gian gộp */}
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-sky-500 text-white flex items-center justify-center shrink-0 shadow-sm shadow-sky-500/20">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-slate-900 font-extrabold text-lg sm:text-xl md:text-2xl">
                    Lịch Trình Chi Tiết Sự Kiện
                  </h3>
                  <p className="text-xs sm:text-sm text-sky-700 font-medium">
                    Diễn ra trong 2 ngày 21 – 22 tháng 11 năm 2026 tại đảo Hòn Sơn
                  </p>
                </div>
              </div>

              {/* LỊCH TRÌNH NGÀY 1 & NGÀY 2 (GỘP TỪ ẢNH 4 LÊN) */}
              <div className="space-y-3.5 mb-6">
                
                {/* Khối Ngày 1: Nhận Race Kit */}
                <div className="p-3.5 sm:p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/70">
                  <div className="flex items-center justify-between gap-2 mb-1.5 flex-wrap">
                    <span className="font-black text-[#065F46] text-xs sm:text-sm md:text-base">
                      NGÀY 1: 21/11/2026 • FLY UP RESORT
                    </span>
                    <span className="bg-emerald-200/80 text-emerald-900 text-[10px] sm:text-[11px] font-extrabold px-2 py-0.5 rounded-full shrink-0">
                      Phát Race Kit
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-left">
                    <strong className="text-slate-900">08:00 – 18:00:</strong> Tiếp đón vận động viên, phát áo thi đấu, số BIB gắn chip time và quà tặng kỷ niệm tại Fly Up Resort.
                  </p>
                </div>

                {/* Khối Ngày 2: Ngày thi đấu chính thức (Race Day) */}
                <div className="p-3.5 sm:p-4 rounded-2xl bg-sky-50/70 border border-sky-200/70">
                  <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                    <span className="font-black text-[#0369A1] text-xs sm:text-sm md:text-base">
                      NGÀY 2: 22/11/2026 • CẢNG BÃI NHÀ
                    </span>
                    <span className="bg-sky-200/80 text-sky-900 text-[10px] sm:text-[11px] font-extrabold px-2 py-0.5 rounded-full shrink-0">
                      Race Day
                    </span>
                  </div>

                  {/* Lịch trình các mốc giờ ngày 2 */}
                  <div className="space-y-1.5 text-xs sm:text-sm text-slate-700 leading-relaxed text-left">
                    <div className="flex items-start gap-2">
                      <span className="font-bold text-slate-900 shrink-0">04:30 – 05:00:</span>
                      <span>Tập trung VĐV, gửi đồ và khởi động làm nóng.</span>
                    </div>

                    {/* Khai mạc 05:00 được phân biệt rõ với giờ xuất phát */}
                    <div className="flex items-start gap-2 bg-amber-100/70 text-amber-950 p-1.5 rounded-lg font-semibold">
                      <span className="font-black text-amber-900 shrink-0">05:00 – 05:25:</span>
                      <span>Lễ Khai mạc chính thức giải chạy.</span>
                    </div>

                    {/* 3 mốc giờ xuất phát riêng biệt */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 pt-1">
                      <div className="bg-white/90 p-2 rounded-lg border border-sky-200/60">
                        <span className="text-[10px] text-slate-500 font-bold block">XUẤT PHÁT 21KM</span>
                        <span className="font-black text-rose-600 text-sm">05:30</span>
                      </div>
                      <div className="bg-white/90 p-2 rounded-lg border border-sky-200/60">
                        <span className="text-[10px] text-slate-500 font-bold block">XUẤT PHÁT 10KM</span>
                        <span className="font-black text-sky-600 text-sm">06:00</span>
                      </div>
                      <div className="bg-white/90 p-2 rounded-lg border border-sky-200/60">
                        <span className="text-[10px] text-slate-500 font-bold block">XUẤT PHÁT 5KM</span>
                        <span className="font-black text-emerald-600 text-sm">06:30</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 pt-1">
                      <span className="font-bold text-slate-900 shrink-0">09:30:</span>
                      <span>Lễ Tổng kết, bế mạc và vinh danh trao kỷ niệm chương.</span>
                    </div>
                  </div>
                </div>

                {/* Lưu ý nhận Race Kit */}
                <div className="text-[11px] sm:text-xs text-slate-500 italic flex items-center gap-1.5 bg-slate-50 p-2.5 rounded-xl border border-slate-200/60 text-left">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>* Vui lòng mang theo email xác nhận FunRace hoặc CCCD khi đến nhận Race Kit.</span>
                </div>

              </div>

              {/* ĐỒNG HỒ ĐẾM NGƯỢC THỜI GIAN THỰC (Mốc khai mạc 05:00 ngày 22/11/2026) */}
              <div className="mt-2 pt-4 border-t border-slate-100">
                <div className="text-[11px] sm:text-xs font-black text-slate-600 uppercase tracking-wider text-center mb-3">
                  ĐẾM NGƯỢC ĐẾN THỜI KHẮC KHAI MẠC (05:00 - 22/11/2026)
                </div>

                {/* 4 Ô đếm ngược: Co giãn linh hoạt, không bị vỡ trên màn hình hẹp 320px */}
                <div className="grid grid-cols-4 gap-2 sm:gap-3 max-w-[440px] mx-auto">
                  
                  {/* Ngày */}
                  <div className="bg-gradient-to-b from-slate-50 to-emerald-50/50 rounded-xl sm:rounded-2xl border-2 border-emerald-300 p-2 sm:p-3 flex flex-col items-center justify-center shadow-2xs">
                    <span className="text-xl sm:text-3xl lg:text-[36px] font-black text-[#064E3B] leading-none">
                      {timeLeft.days}
                    </span>
                    <span className="text-[10px] sm:text-xs text-slate-500 font-bold uppercase mt-1">
                      Ngày
                    </span>
                  </div>

                  {/* Giờ */}
                  <div className="bg-gradient-to-b from-slate-50 to-sky-50/50 rounded-xl sm:rounded-2xl border-2 border-sky-300 p-2 sm:p-3 flex flex-col items-center justify-center shadow-2xs">
                    <span className="text-xl sm:text-3xl lg:text-[36px] font-black text-[#0369A1] leading-none">
                      {String(timeLeft.hours).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] sm:text-xs text-slate-500 font-bold uppercase mt-1">
                      Giờ
                    </span>
                  </div>

                  {/* Phút */}
                  <div className="bg-gradient-to-b from-slate-50 to-amber-50/50 rounded-xl sm:rounded-2xl border-2 border-amber-300 p-2 sm:p-3 flex flex-col items-center justify-center shadow-2xs">
                    <span className="text-xl sm:text-3xl lg:text-[36px] font-black text-[#B45309] leading-none">
                      {String(timeLeft.minutes).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] sm:text-xs text-slate-500 font-bold uppercase mt-1">
                      Phút
                    </span>
                  </div>

                  {/* Giây */}
                  <div className="bg-gradient-to-b from-slate-50 to-rose-50/50 rounded-xl sm:rounded-2xl border-2 border-rose-300 p-2 sm:p-3 flex flex-col items-center justify-center shadow-2xs">
                    <span className="text-xl sm:text-3xl lg:text-[36px] font-black text-[#BE123C] leading-none">
                      {String(timeLeft.seconds).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] sm:text-xs text-slate-500 font-bold uppercase mt-1">
                      Giây
                    </span>
                  </div>

                </div>
              </div>
            </div>

            {/* 3 Cự ly thi đấu tóm tắt */}
            <div className="pt-4 mt-4 border-t border-slate-100 grid grid-cols-3 gap-2">
              {SITE_DATA.raceDistances.map((item) => (
                <div
                  key={item.id}
                  className="bg-slate-50 hover:bg-emerald-50/40 border border-slate-200 rounded-xl p-2 sm:p-2.5 text-center transition-colors"
                >
                  <span className="text-sm sm:text-base font-black text-slate-900 block">
                    {item.distance}
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-slate-500 block truncate">
                    {item.startTime.split(' - ')[0]}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
