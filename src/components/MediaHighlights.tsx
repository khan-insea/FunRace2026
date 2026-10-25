import React from 'react';
import { Camera, MapPin, Compass } from 'lucide-react';

export const MediaHighlights: React.FC = () => {
  const highlights = [
    {
      id: 'scenery',
      title: 'Cung đường đảo ngọc Hòn Sơn hoang sơ và kỳ vĩ',
      desc: 'Đảo Lại Sơn (Hòn Sơn) được mệnh danh là viên ngọc thô của vịnh Tây Nam với nước biển trong vắt và núi rừng nguyên sinh.',
      thumb: '/assets/banner_kv_main.png',
      tag: 'Cung đường chạy',
    },
    {
      id: 'finish-line',
      title: 'Cảng Bãi Nhà – Nơi xuất phát bùng nổ năng lượng thể thao',
      desc: 'Quảng trường trung tâm Cảng Bãi Nhà rực rỡ cờ hoa, đón chào hàng ngàn vận động viên xuất phát và cán đích vinh quang.',
      thumb: '/assets/event_photo_2_finish.png',
      tag: 'Khu vực thi đấu',
    },
    {
      id: 'paradise-retreat',
      title: 'Paradise Retreat Hòn Sơn – Điểm hẹn nghỉ dưỡng lý tưởng',
      desc: 'Không gian lưu trú ven biển tuyệt đẹp tại Ấp Bãi Nhà B, đồng hành ưu đãi 20% cho runner phục hồi thể lực hoàn hảo.',
      thumb: '/assets/event_photo_3_beach.png',
      tag: 'Nghỉ dưỡng & Ẩm thực',
    },
  ];

  return (
    <section id="hinh-anh" className="w-full bg-white">
      {/* Dải tiêu đề xanh lá nhạt toàn chiều ngang theo mẫu gốc */}
      <div className="w-full bg-[#D7F5A3] py-5 sm:py-6 text-center border-y border-[#C8E892]">
        <div className="inline-flex items-center gap-2 text-[#285A14] font-black text-xl sm:text-2xl lg:text-[32px] tracking-wider uppercase">
          <Camera className="w-6 h-6 text-[#285A14]" />
          <span>HÌNH ẢNH & KHOẢNH KHẮC HÒN SƠN</span>
        </div>
      </div>

      {/* Danh sách 3 hình ảnh nổi bật */}
      <div className="w-full max-w-[1386px] mx-auto py-10 sm:py-14 px-4 sm:px-6 lg:px-8 2xl:px-0 box-border">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {highlights.map((item) => (
            <div
              key={item.id}
              className="flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow group"
            >
              {/* Khung ảnh tỷ lệ 16:10 */}
              <div className="w-full aspect-[16/10] overflow-hidden bg-slate-900 relative">
                <img
                  src={item.thumb}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 bg-black/60 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-md">
                  {item.tag}
                </span>
              </div>

              {/* Thông tin mô tả bên dưới */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-slate-900 font-extrabold text-base sm:text-lg lg:text-[19px] leading-snug group-hover:text-[#0284C7] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
