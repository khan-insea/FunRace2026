import React from 'react';

interface EventLogoProps {
  className?: string;
  onClick?: () => void;
  isDarkBg?: boolean;
}

export const EventLogo: React.FC<EventLogoProps> = ({
  className = '',
  onClick,
  isDarkBg = false,
}) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-2 sm:gap-3 cursor-pointer group select-none min-w-0 ${className}`}
      title="Giải chạy Vì Hòn Sơn Xanh 2026"
    >
      {/* Biểu tượng Runner & Sóng biển / Núi đảo Hòn Sơn */}
      <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#0284C7] via-[#059669] to-[#10B981] flex items-center justify-center shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform shrink-0">
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 text-white fill-current"
          viewBox="0 0 24 24"
        >
          {/* Runner icon */}
          <path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.8-1.6 8.1-4.9-.9-.4 2 6.5 1.2.6-2.4z" />
          {/* Wave line */}
          <path
            d="M3 21c3-1 5 1 8 0s5-1 8 0"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>

      {/* Tên giải chạy */}
      <div className="flex flex-col text-left min-w-0">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span
            className={`font-black text-[14px] sm:text-[17px] lg:text-[20px] leading-tight tracking-tight whitespace-nowrap ${
              isDarkBg
                ? 'text-white'
                : 'text-slate-900 group-hover:text-[#0284C7] transition-colors'
            }`}
          >
            VÌ HÒN SƠN XANH
          </span>
          <span className="bg-[#16A34A] text-white text-[9px] sm:text-[11px] font-extrabold px-1.5 py-0.5 rounded leading-none uppercase tracking-wider shrink-0">
            2026
          </span>
        </div>
        <span
          className={`text-[10px] sm:text-[11px] lg:text-[12px] font-bold tracking-normal whitespace-nowrap mt-0.5 ${
            isDarkBg ? 'text-emerald-400' : 'text-emerald-700'
          }`}
        >
          KIÊN HẢI KHÔNG MA TÚY
        </span>
      </div>
    </div>
  );
};
