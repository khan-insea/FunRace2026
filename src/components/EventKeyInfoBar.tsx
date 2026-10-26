import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

interface EventKeyInfoBarProps {
  className?: string;
}

export const EventKeyInfoBar: React.FC<EventKeyInfoBarProps> = ({ className = '' }) => {
  return (
    <div
      className={`w-full bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-sm p-4 sm:p-5 lg:p-6 transition-all ${className}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
        
        {/* Mục 1: Ngày tổ chức / Event Date */}
        <div className="flex items-center gap-3.5 sm:gap-4 pt-3 first:pt-0 md:pt-0 md:px-3 first:md:pl-0">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#FFF3EB] border border-[#FFE2D1] flex items-center justify-center shrink-0 text-[#F97316]">
            <Calendar className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
          </div>
          <div className="min-w-0">
            <span className="text-xs sm:text-[13px] text-slate-400 font-medium block">
              Ngày tổ chức / Event Date
            </span>
            <span className="text-base sm:text-lg font-bold text-slate-900 block truncate">
              22/11/2026
            </span>
          </div>
        </div>

        {/* Mục 2: Địa điểm / Location */}
        <div className="flex items-center gap-3.5 sm:gap-4 pt-3 md:pt-0 md:px-3">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#FFF3EB] border border-[#FFE2D1] flex items-center justify-center shrink-0 text-[#F97316]">
            <MapPin className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
          </div>
          <div className="min-w-0">
            <span className="text-xs sm:text-[13px] text-slate-400 font-medium block">
              Địa điểm / Location
            </span>
            <span className="text-base sm:text-lg font-bold text-slate-900 block leading-snug">
              Hòn Sơn, đặc khu Kiên Hải, An Giang
            </span>
          </div>
        </div>

        {/* Mục 3: Hạn đăng ký / Deadline */}
        <div className="flex items-center gap-3.5 sm:gap-4 pt-3 md:pt-0 md:px-3 last:md:pr-0">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#FFF3EB] border border-[#FFE2D1] flex items-center justify-center shrink-0 text-[#F97316]">
            <Clock className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
          </div>
          <div className="min-w-0">
            <span className="text-xs sm:text-[13px] text-slate-400 font-medium block">
              Hạn đăng ký / Deadline
            </span>
            <span className="text-base sm:text-lg font-bold text-slate-900 block truncate">
              05/11/2026
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};
