import React from 'react';
import { SITE_DATA } from '../data/rvRunnerData';
import { ChevronRight, ExternalLink, Calendar, MapPin, ShieldCheck, Flag } from 'lucide-react';
import { EventKVBanner } from './EventKVBanner';
import { EventKeyInfoBar } from './EventKeyInfoBar';

interface BannerHeroProps {
  onJoinClick?: () => void;
}

export const BannerHero: React.FC<BannerHeroProps> = () => {
  return (
    <section id="gioi-thieu" className="w-full bg-white pt-5 lg:pt-8 pb-10 sm:pb-14">
      {/* Container căn giữa rộng tối đa 1386px */}
      <div className="w-full max-w-[1386px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-0 box-border">
        
        {/* Bố cục hai cột chuẩn theo thiết kế:
            - Cột trái: Khối Giới thiệu & Thông tin đơn vị phối hợp tổ chức
            - Cột phải: Banner chính thức (ảnh người dùng đính kèm) & 3 ảnh thực tế
        */}
        <div className="grid grid-cols-1 lg:grid-cols-[462fr_900fr] gap-5 sm:gap-6 lg:gap-7 items-start">
          
          {/* CỘT TRÁI: Khối GIỚI THIỆU và Nút ĐĂNG KÝ NGAY */}
          <div className="w-full min-w-0 flex flex-col">
            
            {/* Khối nền trang trọng kết hợp màu xanh biển đảo & sắc đỏ ấm áp của cờ Tổ quốc */}
            <div className="w-full bg-gradient-to-b from-[#FFF5F5] via-[#F0FDF4] to-[#E0F2FE] border border-red-200/80 rounded-[28px] sm:rounded-[36px] lg:rounded-[44px] px-5 sm:px-7 py-6 sm:py-8 lg:py-9 box-border shadow-xs">
              
              {/* Badge Đơn vị chỉ đạo & phối hợp theo banner */}
              <div className="inline-flex items-center gap-1.5 bg-[#DC2626] text-white text-[10px] sm:text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wider mb-3 shadow-xs">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>GIẢI CHẠY CHÍNH THỨC 2026</span>
              </div>

              {/* Tiêu đề GIỚI THIỆU */}
              <h1 className="text-[#991B1B] font-black text-2xl sm:text-3xl lg:text-[36px] xl:text-[42px] leading-[1.15] mb-2 uppercase tracking-tight">
                VÌ HÒN SƠN XANH 2026
              </h1>

              {/* Tên đầy đủ của giải theo banner */}
              <h2 className="text-[#065F46] font-extrabold text-xs sm:text-sm lg:text-base uppercase tracking-normal mb-3">
                Chung một quyết tâm xây dựng đặc khu Kiên Hải không ma túy
              </h2>

              {/* Mốc thời gian & địa phương theo banner */}
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 bg-white/90 p-2.5 rounded-xl border border-red-100 mb-4">
                <Calendar className="w-4 h-4 text-red-600 shrink-0" />
                <span><strong>An Giang:</strong> Ngày 21 - 22 tháng 11 năm 2026</span>
              </div>

              {/* Slogan chiến dịch */}
              <div className="bg-gradient-to-r from-red-600 to-amber-600 p-3 rounded-xl shadow-xs text-white mb-4">
                <p className="font-black text-xs sm:text-sm lg:text-[14px] italic leading-snug">
                  “{SITE_DATA.event.slogan}”
                </p>
              </div>

              {/* Nội dung chi tiết chuẩn theo ban tổ chức & banner */}
              <div className="space-y-3 sm:space-y-3.5 text-slate-700 text-[13px] sm:text-[14px] lg:text-[16px] xl:text-[17px] leading-[22px] sm:leading-[25px] lg:leading-[28px] text-left md:text-justify font-normal">
                <p>
                  Giải chạy do <strong className="text-slate-900 font-bold">Sở Văn hóa và Thể thao tỉnh An Giang</strong> phối hợp cùng <strong className="text-slate-900 font-bold">UBND Đặc khu Kiên Hải</strong>, <strong className="text-slate-900 font-bold">Công an tỉnh An Giang</strong>, <strong className="text-slate-900 font-bold">Hiệp hội Du lịch An Giang</strong> và <strong className="text-slate-900 font-bold">Fly Up Resort</strong> tổ chức tại đảo Hòn Sơn.
                </p>
                <p>
                  Sự kiện là ngày hội thể thao quy mô lớn biểu dương tinh thần kiên quyết đấu tranh đẩy lùi tệ nạn ma túy, bảo vệ thanh thiếu niên và chung sức xây dựng đặc khu Kiên Hải bình yên, trong sạch, phát triển du lịch xanh.
                </p>
                <p>
                  Quy tụ 3 cự ly thi đấu: <strong className="text-red-700 font-bold">5KM (BIB 5000)</strong>, <strong className="text-emerald-700 font-bold">10KM (BIB 1000)</strong> và <strong className="text-sky-700 font-bold">21KM (BIB 2100)</strong>, mở rộng cho mọi công dân, lực lượng vũ trang, runner và du khách tham dự.
                </p>
              </div>

              {/* Danh sách logo đơn vị tổ chức tóm tắt */}
              <div className="mt-4 pt-3.5 border-t border-slate-200/80 text-[11px] sm:text-xs text-slate-600 space-y-1">
                <span className="font-bold text-slate-800 uppercase block tracking-wider">
                  Đơn vị chỉ đạo & phối hợp:
                </span>
                <p className="italic text-slate-600">
                  Sở VH&TT An Giang • UBND Đặc khu Kiên Hải • Công an tỉnh An Giang • Hiệp hội Du lịch An Giang • Fly Up Resort
                </p>
              </div>
            </div>

            {/* Nút ĐĂNG KÝ NGAY: Dẫn trực tiếp đến FunRace */}
            <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={SITE_DATA.event.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#DC2626] via-[#EA580C] to-[#16A34A] hover:opacity-95 text-white font-black text-sm sm:text-base lg:text-[18px] px-7 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all uppercase tracking-wider cursor-pointer active:scale-95"
                title="Đăng ký giải chạy Vì Hòn Sơn Xanh 2026 trên FunRace"
              >
                <span>ĐĂNG KÝ NGAY TRÊN FUNRACE</span>
                <ExternalLink className="w-5 h-5 stroke-[2.5]" />
              </a>

              <a
                href="#the-le"
                className="inline-flex items-center justify-center gap-1.5 text-slate-700 hover:text-red-700 font-bold text-sm sm:text-base px-5 py-3 rounded-xl border border-slate-300 hover:border-red-400 bg-white hover:bg-red-50/40 transition-colors cursor-pointer"
              >
                <span>Xem thể lệ & lịch trình</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* CỘT PHẢI: Banner chính thức (ảnh người dùng đính kèm) + 3 ảnh phong cảnh thực tế */}
          <div className="w-full min-w-0 flex flex-col">
            
            {/* Key Visual Banner chính thức từ ảnh người dùng đính kèm */}
            <EventKVBanner />

            {/* Ba ảnh sự kiện thực tế phía dưới */}
            <div className="mt-4 sm:mt-5 lg:mt-6 w-full">
              <div className="flex items-stretch gap-2 sm:gap-4 lg:gap-5">
                
                {/* Ảnh 1: Vẻ đẹp đảo Hòn Sơn */}
                <div className="flex-[322] min-w-0 overflow-hidden rounded-xl bg-slate-100 aspect-[322/240] relative group shadow-2xs">
                  <img
                    src="/assets/event_photo_1_monument.png"
                    alt="Đảo ngọc Hòn Sơn Kiên Hải"
                    className="w-full h-full object-cover block group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-2.5 sm:p-3">
                    <span className="text-white text-xs sm:text-sm font-bold drop-shadow">
                      Đảo ngọc Hòn Sơn
                    </span>
                  </div>
                </div>

                {/* Ảnh 2: Không khí vạch về đích */}
                <div className="flex-[207] min-w-0 overflow-hidden rounded-xl bg-slate-100 aspect-[207/240] relative group shadow-2xs">
                  <img
                    src="/assets/event_photo_2_finish.png"
                    alt="Cổng về đích Cảng Bãi Nhà"
                    className="w-full h-full object-cover block group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-2.5 sm:p-3">
                    <span className="text-white text-xs sm:text-sm font-bold drop-shadow">
                      Về đích rạng rỡ
                    </span>
                  </div>
                </div>

                {/* Ảnh 3: Bãi biển và thiên nhiên Lại Sơn */}
                <div className="flex-[323] min-w-0 overflow-hidden rounded-xl bg-slate-100 aspect-[323/240] relative group shadow-2xs">
                  <img
                    src="/assets/event_photo_3_beach.png"
                    alt="Cung đường biển thơ mộng"
                    className="w-full h-full object-cover block group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-2.5 sm:p-3">
                    <span className="text-white text-xs sm:text-sm font-bold drop-shadow">
                      Bãi biển hoang sơ
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Khối Thông tin cốt lõi (Ngày tổ chức • Địa điểm • Hạn đăng ký): Lấp khoảng trống trên PC */}
            <div className="mt-4 sm:mt-5 lg:mt-6 w-full">
              <EventKeyInfoBar />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
