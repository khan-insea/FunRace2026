import React from 'react';
import { SITE_DATA } from '../data/rvRunnerData';
import { ExternalLink, CheckCircle2, Award, Sparkles } from 'lucide-react';

export const AppAndStravaGuide: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#D7F5A3] via-[#CBF38C] to-[#BEEB74] py-8 sm:py-12 border-y border-[#B5E46A]">
      {/* Container chuẩn max 1386px */}
      <div className="w-full max-w-[1386px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-0 box-border">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* CỘT TRÁI: Tiêu đề hướng dẫn tham gia & Thông điệp */}
          <div className="flex flex-col text-center lg:text-left max-w-2xl">
            <div className="inline-flex items-center gap-1.5 bg-white/70 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-black text-[#285A14] w-fit mx-auto lg:mx-0 uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CỔNG ĐĂNG KÝ CHÍNH THỨC</span>
            </div>

            <h2 className="text-[#285A14] font-black text-2xl sm:text-3xl lg:text-[38px] leading-tight tracking-tight">
              ĐĂNG KÝ THAM GIA TRÊN FUNRACE
            </h2>

            <p className="text-[#2E6817] font-semibold text-sm sm:text-base lg:text-[18px] mt-2 leading-relaxed">
              Chỉ 3 bước nhanh chóng để sở hữu số BIB chính thức và cùng hàng ngàn runner sải bước trên đảo ngọc Hòn Sơn ngày 22/11/2026!
            </p>

            {/* 3 Bước tóm tắt */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4 text-left">
              <div className="bg-white/80 backdrop-blur-xs rounded-xl p-3 border border-emerald-300/40">
                <span className="text-xs font-black text-[#16A34A] block">BƯỚC 1</span>
                <span className="text-xs sm:text-sm font-bold text-slate-800">Chọn cự ly 5KM, 10KM hoặc 21KM</span>
              </div>
              <div className="bg-white/80 backdrop-blur-xs rounded-xl p-3 border border-emerald-300/40">
                <span className="text-xs font-black text-[#16A34A] block">BƯỚC 2</span>
                <span className="text-xs sm:text-sm font-bold text-slate-800">Điền thông tin và kích cỡ áo đấu</span>
              </div>
              <div className="bg-white/80 backdrop-blur-xs rounded-xl p-3 border border-emerald-300/40">
                <span className="text-xs font-black text-[#16A34A] block">BƯỚC 3</span>
                <span className="text-xs sm:text-sm font-bold text-slate-800">Nhận xác nhận BIB và ngày hội nhận Kit</span>
              </div>
            </div>
          </div>

          {/* CỘT PHẢI: Nút bấm đăng ký lớn dẫn trực tiếp FunRace */}
          <div className="flex flex-col items-center shrink-0 w-full sm:w-auto">
            <a
              href={SITE_DATA.event.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#1B5E20] hover:bg-[#144718] text-white font-black text-base sm:text-lg lg:text-[20px] px-8 sm:px-10 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all uppercase tracking-wider cursor-pointer active:scale-95 text-center"
              title="Đến trang đăng ký FunRace Vì Hòn Sơn Xanh 2026"
            >
              <span>ĐĂNG KÝ NGAY BÂY GIỜ</span>
              <ExternalLink className="w-5 h-5 stroke-[2.5]" />
            </a>

            <span className="text-xs font-bold text-[#285A14] mt-2.5 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
              <span>Cổng FunRace xác thực thông tin tự động</span>
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
