import React from 'react';
import { SITE_DATA } from '../data/rvRunnerData';
import { Phone, MapPin, Sparkles, Bed, Check } from 'lucide-react';

export const PrizesSection: React.FC = () => {
  return (
    <section id="uu-dai" className="w-full bg-white py-12 sm:py-16">
      {/* Container chuẩn max 1386px */}
      <div className="w-full max-w-[1386px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-0 box-border">
        
        {/* Tiêu đề phân đoạn - Chỉ nói về ưu đãi runner theo Ảnh 5 */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>ĐẶC QUYỀN VẬN ĐỘNG VIÊN</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            ƯU ĐÃI DÀNH RIÊNG CHO RUNNER
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base mt-2">
            Đặc quyền ưu đãi nghỉ dưỡng từ đối tác Paradise Retreat Hòn Sơn dành cho vận động viên và cổ động viên
          </p>
        </div>

        {/* Khối ưu đãi duy nhất được dàn cân đối ở trung tâm, không để trống cột */}
        <div className="max-w-[760px] mx-auto">
          <div className="border border-slate-200/90 rounded-[24px] overflow-hidden bg-white shadow-xs flex flex-col justify-between">
            
            {/* Khối đầu thẻ màu vàng kem với biểu tượng đối tác nghỉ dưỡng */}
            <div className="w-full bg-[#FEEDC7] py-6 sm:py-8 flex flex-col items-center justify-center px-4">
              <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-[#0284C7] text-white flex items-center justify-center shadow-md">
                <Bed className="w-8 h-8 sm:w-9 sm:h-9" />
              </div>
              <h3 className="text-[#A77A00] font-black text-2xl sm:text-3xl lg:text-[32px] text-center mt-3.5 tracking-tight">
                Paradise Retreat Hòn Sơn
              </h3>
              <p className="text-slate-700 italic text-center text-xs sm:text-sm mt-1">
                (Đơn vị đồng hành lưu trú &amp; nghỉ dưỡng chính thức)
              </p>
            </div>

            {/* Thân thẻ: Chi tiết ưu đãi 20% & Liên hệ */}
            <div className="p-6 sm:p-8 lg:p-10 flex-1 flex flex-col justify-between space-y-6">
              
              {/* Highlight Ưu đãi giảm 20% */}
              <div className="bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 border-2 border-amber-300 rounded-2xl p-4 sm:p-5 text-center shadow-2xs">
                <span className="text-xs font-black text-amber-800 uppercase tracking-widest block mb-1">
                  ĐẶC QUYỀN CHO VẬN ĐỘNG VIÊN &amp; CỔ ĐỘNG VIÊN
                </span>
                <span className="text-3xl sm:text-4xl font-black text-rose-600 block">
                  ƯU ĐÃI GIẢM 20%
                </span>
                <p className="text-xs sm:text-sm font-semibold text-slate-700 mt-1.5">
                  Áp dụng cho dịch vụ phòng lưu trú, ăn uống và tiện ích nghỉ dưỡng
                </p>
              </div>

              {/* Điểm nổi bật khu nghỉ dưỡng */}
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 text-left">
                {SITE_DATA.partner.highlights.map((h, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              {/* Thông tin liên hệ đặt phòng */}
              <div className="pt-4 border-t border-slate-100 space-y-2 text-xs sm:text-sm text-slate-700 text-left">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                  <span><strong>Địa chỉ:</strong> {SITE_DATA.partner.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>
                    <strong>Hotline đặt phòng:</strong>{' '}
                    <a
                      href={`tel:${SITE_DATA.partner.hotline.replace(/\s+/g, '')}`}
                      className="text-rose-600 font-black text-sm sm:text-base hover:underline"
                    >
                      {SITE_DATA.partner.hotline}
                    </a>
                  </span>
                </div>
              </div>

              {/* Nút gọi hotline ngay */}
              <div className="pt-2">
                <a
                  href={`tel:${SITE_DATA.partner.hotline.replace(/\s+/g, '')}`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#0284C7] hover:bg-[#0369A1] text-white font-extrabold text-sm sm:text-base py-3.5 px-4 rounded-xl shadow-xs transition-colors min-h-[44px]"
                >
                  <Phone className="w-4 h-4" />
                  <span>LIÊN HỆ ĐẶT PHÒNG PARADISE RETREAT</span>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
