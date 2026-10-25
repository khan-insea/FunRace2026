import React from 'react';

export const EventKVBanner: React.FC = () => {
  return (
    <div className="w-full overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl border border-red-200/80 bg-red-950 select-none group">
      <img
        src="/assets/aistudio/race_92be563d-46df-4bc7-8df5-4708a4882910_9feb732a.png"
        alt="Giải chạy Vì Hòn Sơn Xanh - Chung một quyết tâm xây dựng đặc khu Kiên Hải không ma túy năm 2026 (21 - 22/11/2026)"
        className="w-full h-auto block object-contain transition-transform duration-500 group-hover:scale-[1.01]"
      />
    </div>
  );
};
