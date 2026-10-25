import React from 'react';
import { SITE_DATA } from '../data/rvRunnerData';
import { EventLogo } from './EventLogo';
import { MapPin, Calendar, ExternalLink, Award, Phone, Mail } from 'lucide-react';

interface ContactAndFooterProps {
  onSelectTab?: (tabId: string) => void;
}

export const ContactAndFooter: React.FC<ContactAndFooterProps> = ({ onSelectTab }) => {
  return (
    <footer id="ho-tro" className="w-full bg-[#0B1329] text-slate-300 border-t border-slate-800">
      {/* Container chuẩn max 1386px */}
      <div className="w-full max-w-[1386px] mx-auto pt-10 sm:pt-14 pb-8 px-4 sm:px-6 lg:px-8 2xl:px-0 box-border">
        
        {/* Dàn lại bố cục 2 cột cân đối (Ảnh 6 & Ảnh 7) - Bỏ khối Đối tác nghỉ dưỡng ở footer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-slate-800/80 items-start">
          
          {/* CỘT 1: THÔNG TIN SỰ KIỆN & LIÊN KẾT NHANH (7/12 cột) */}
          <div className="lg:col-span-7 flex flex-col space-y-4 text-left">
            
            {/* Logo sự kiện với độ tương phản cao cho nền tối (Fix Ảnh 6) */}
            <div className="w-fit">
              <EventLogo isDarkBg={true} />
            </div>

            <p className="text-sm sm:text-base font-semibold text-slate-100 leading-relaxed max-w-2xl">
              {SITE_DATA.event.fullName}
            </p>

            <div className="bg-slate-900/90 border-l-4 border-amber-400 p-3 rounded-r-xl max-w-xl shadow-xs">
              <p className="text-amber-300 font-bold text-xs sm:text-sm italic">
                “{SITE_DATA.event.slogan}”
              </p>
            </div>

            {/* Chi tiết địa điểm & thời gian */}
            <div className="space-y-2 text-xs sm:text-sm text-slate-300 pt-1">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Địa điểm:</strong> {SITE_DATA.event.location}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Calendar className="w-4 h-4 text-sky-400 shrink-0" />
                <span>
                  <strong>Thời gian:</strong> 22/11/2026 (Hoạt động: 21–22/11/2026)
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span>
                  <strong>Cự ly thi đấu:</strong> 5KM • 10KM • 21KM
                </span>
              </div>
            </div>

            {/* Danh mục liên kết nhanh */}
            <div className="pt-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                Liên kết nhanh:
              </span>
              <div className="flex flex-wrap gap-2 text-xs">
                {SITE_DATA.navigation.map((nav) => (
                  <button
                    key={nav.id}
                    onClick={() => onSelectTab && onSelectTab(nav.id)}
                    className="bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white px-3 py-1.5 rounded-lg transition-colors cursor-pointer border border-slate-700/60 min-h-[36px]"
                  >
                    {nav.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* CỘT 2: CỔNG ĐĂNG KÝ TRỰC TUYẾN FUNRACE & THÔNG TIN HỖ TRỢ (5/12 cột) */}
          <div className="lg:col-span-5 flex flex-col space-y-4 text-left">
            <h4 className="text-white font-extrabold text-base sm:text-lg tracking-wide uppercase flex items-center gap-2">
              <span className="w-2 h-4 bg-sky-400 rounded-full inline-block" />
              <span>Cổng đăng ký chính thức</span>
            </h4>

            <div className="bg-slate-900/80 border border-slate-700/80 rounded-2xl p-4 sm:p-5 space-y-3.5 shadow-xs">
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Đăng ký thi đấu chính thức cho cả 3 cự ly 5KM, 10KM và 21KM qua cổng điện tử FunRace.
              </p>

              <a
                href={SITE_DATA.event.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0284C7] to-[#16A34A] hover:from-[#0369A1] hover:to-[#15803D] text-white font-black text-xs sm:text-sm py-3 px-4 rounded-xl shadow-md transition-all uppercase tracking-wide cursor-pointer min-h-[44px]"
              >
                <span>VÀO CỔNG ĐĂNG KÝ FUNRACE</span>
                <ExternalLink className="w-4 h-4 stroke-[2.5]" />
              </a>

              <div className="text-xs text-slate-300 pt-2 border-t border-slate-800 space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>
                    Hotline sự kiện:{' '}
                    <a href="tel:0984501536" className="text-white font-bold hover:underline">
                      0984 501 536
                    </a>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>
                    Email hỗ trợ:{' '}
                    <strong className="text-white">support@funrace.id.vn</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Dòng bản quyền sự kiện ở đáy */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <p className="text-center sm:text-left">
            © 2026 GIẢI CHẠY VÌ HÒN SƠN XANH. ĐẶC KHU KIÊN HẢI, TỈNH AN GIANG.
          </p>
          <div className="flex items-center gap-1 text-slate-400 text-center sm:text-right">
            <span>Sống chất theo cách của bạn • Chung tay vì biển đảo xanh</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
