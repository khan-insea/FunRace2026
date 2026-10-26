import React, { useState } from 'react';
import { SITE_DATA, NewsItem } from '../data/rvRunnerData';
import { Calendar, ChevronRight, MapPin, Clock, Phone, ExternalLink, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { EventKeyInfoBar } from './EventKeyInfoBar';

interface SubpageViewsProps {
  currentTab: string;
  onBackToHome: () => void;
}

export const SubpageViews: React.FC<SubpageViewsProps> = ({ currentTab, onBackToHome }) => {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  // 1. GIAO DIỆN TAB: "Thể lệ"
  if (currentTab === 'the-le') {
    return (
      <div className="py-8 sm:py-14 bg-[#F8FAFC] min-h-[75vh]">
        <div className="max-w-[1386px] mx-auto px-4 sm:px-6">
          
          {/* Header Thể lệ */}
          <div className="text-center max-w-4xl mx-auto mb-10">
            <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-3">
              QUY ĐỊNH THI ĐẤU CHÍNH THỨC
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight">
              THỂ LỆ GIẢI CHẠY VÌ HÒN SƠN XANH 2026
            </h1>
            <p className="text-slate-600 text-sm sm:text-base mt-3 italic max-w-2xl mx-auto">
              “{SITE_DATA.event.slogan}”
            </p>
          </div>

          {/* Thanh thông tin cốt lõi sự kiện */}
          <EventKeyInfoBar className="mb-8 sm:mb-10" />

          {/* Khối cự ly thi đấu */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {SITE_DATA.raceDistances.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-3xl font-black text-slate-900">{item.distance}</span>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${item.tagBg}`}>
                      {item.highlight}
                    </span>
                  </div>
                  <h3 className="font-extrabold text-slate-800 text-base mb-2">{item.name}</h3>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-amber-700 bg-amber-50 p-2 rounded-lg mb-3">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Xuất phát: {item.startTime}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                    {item.description}
                  </p>
                  <p className="text-xs text-slate-500 italic">
                    {item.suitableFor}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100">
                  <a
                    href={SITE_DATA.event.registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs sm:text-sm font-bold py-2.5 rounded-xl transition-colors"
                  >
                    <span>Đăng ký cự ly này</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Quy định chi tiết */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-8">
            <div>
              <h3 className="text-lg sm:text-xl font-black text-[#064E3B] mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>1. Mục đích và ý nghĩa giải chạy</span>
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Giải chạy &quot;Vì Hòn Sơn Xanh – Chung một quyết tâm xây dựng đặc khu Kiên Hải không ma túy&quot; năm 2026 được tổ chức nhằm phát động phong trào toàn dân rèn luyện thân thể, nâng cao thể lực và sức khỏe, gắn kết tình yêu biển đảo quê hương, đồng thời tuyên truyền sâu rộng trong quần chúng nhân dân về tác hại của tệ nạn ma túy, chung tay bảo vệ môi trường và xây dựng đảo Hòn Sơn an toàn, văn minh, phát triển xanh và bền vững.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-100">
              <h3 className="text-lg sm:text-xl font-black text-[#064E3B] mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>2. Quy định số BIB và trang phục thi đấu</span>
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-slate-700">
                <li>Vận động viên phải mang số BIB chính thức do Ban tổ chức cung cấp gắn ở mặt trước áo đấu trong suốt quá trình chạy.</li>
                <li>Không được gập, cắt ngắn hoặc làm hỏng chip time điện tử gắn trên BIB.</li>
                <li>Mặc trang phục thể thao lịch sự, phù hợp với thuần phong mỹ tục và hoạt động thể thao ngoài trời.</li>
              </ul>
            </div>

            <div className="pt-6 border-t border-slate-100">
              <h3 className="text-lg sm:text-xl font-black text-[#064E3B] mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>3. Trạm tiếp nước, y tế và an toàn đường chạy</span>
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-slate-700">
                <li>Ban tổ chức bố trí các trạm tiếp nước, điện giải và hoa quả cách nhau từ 2km đến 3km dọc theo cung đường thi đấu.</li>
                <li>Đội ngũ y tế lưu động, cano cứu hộ và tình nguyện viên luôn túc trực tại các điểm trọng yếu để kịp thời hỗ trợ vận động viên khi cần thiết.</li>
                <li>Vận động viên chủ động bảo vệ sức khỏe cá nhân, tuân thủ hiệu lệnh của trọng tài và lực lượng điều phối giao thông trên đảo.</li>
              </ul>
            </div>

            <div className="pt-6 border-t border-slate-100 text-center">
              <a
                href={SITE_DATA.event.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0284C7] to-[#16A34A] text-white font-extrabold text-base px-8 py-3.5 rounded-xl shadow hover:shadow-md transition-all uppercase"
              >
                <span>ĐĂNG KÝ THAM GIA TRÊN CỔNG FUNRACE</span>
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>
      </div>
    );
  }

  // 2. GIAO DIỆN TAB: "Lịch trình"
  if (currentTab === 'lich-trinh') {
    return (
      <div className="py-8 sm:py-14 bg-[#F8FAFC] min-h-[75vh]">
        <div className="max-w-[1386px] mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-4xl mx-auto mb-10">
            <span className="inline-block bg-sky-100 text-sky-800 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-3">
              TIMELINE HOẠT ĐỘNG
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight">
              LỊCH TRÌNH 2 NGÀY SỰ KIỆN TẠI HÒN SƠN
            </h1>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Thời gian chi tiết cho ngày phát Race Kit và ngày thi đấu chính thức (21 – 22/11/2026)
            </p>
          </div>

          {/* Thanh thông tin cốt lõi sự kiện */}
          <EventKeyInfoBar className="mb-8 sm:mb-10" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            
            {/* Ngày 1: Nhận Race Kit */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-100 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center font-black text-lg shadow-sm">
                  21
                </div>
                <div>
                  <h3 className="font-black text-slate-900 text-lg sm:text-xl">
                    {SITE_DATA.timeline.day1.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-700 font-semibold flex items-center gap-1.5 mt-0.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{SITE_DATA.timeline.day1.location}</span>
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {SITE_DATA.timeline.day1.events.map((evt, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="bg-emerald-50 text-emerald-800 font-extrabold text-xs px-3 py-1.5 rounded-lg shrink-0 mt-0.5 border border-emerald-200/60">
                      {evt.time}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm sm:text-base">{evt.title}</h4>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">{evt.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Ngày 2: Race Day */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-100 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-sky-600 text-white flex items-center justify-center font-black text-lg shadow-sm">
                  22
                </div>
                <div>
                  <h3 className="font-black text-slate-900 text-lg sm:text-xl">
                    {SITE_DATA.timeline.day2.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-sky-700 font-semibold flex items-center gap-1.5 mt-0.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{SITE_DATA.timeline.day2.location}</span>
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                {SITE_DATA.timeline.day2.events.map((evt, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="bg-sky-50 text-sky-800 font-extrabold text-xs px-3 py-1.5 rounded-lg shrink-0 mt-0.5 border border-sky-200/60 min-w-[95px] text-center">
                      {evt.time}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm sm:text-base">{evt.title}</h4>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">{evt.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    );
  }

  // 3. GIAO DIỆN TAB: "Hướng dẫn tham gia"
  if (currentTab === 'huong-dan') {
    return (
      <div className="py-8 sm:py-14 bg-white min-h-[75vh]">
        <div className="max-w-[1386px] mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-3">
              CỔNG ĐĂNG KÝ FUNRACE
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight">
              HƯỚNG DẪN THAM GIA GIẢI CHẠY VÌ HÒN SƠN XANH 2026
            </h1>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Quy trình 5 bước từ đăng ký trực tuyến đến khi chinh phục vạch đích vinh quang
            </p>
          </div>

          {/* 5 Bước quy trình */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
            {[
              {
                step: '01',
                title: 'Truy cập FunRace',
                desc: 'Vào cổng đăng ký chính thức tại https://funrace.id.vn/races/14',
              },
              {
                step: '02',
                title: 'Lựa chọn cự ly',
                desc: 'Chọn cự ly phù hợp: 5KM (trải nghiệm), 10KM (bứt phá) hoặc 21KM (bán marathon).',
              },
              {
                step: '03',
                title: 'Điền thông tin & Size áo',
                desc: 'Cung cấp họ tên, số điện thoại, CCCD và kích cỡ áo đấu mong muốn.',
              },
              {
                step: '04',
                title: 'Nhận Race Kit (21/11)',
                desc: 'Có mặt tại Fly Up Resort Hòn Sơn ngày 21/11 để nhận áo, số BIB và quà tặng.',
              },
              {
                step: '05',
                title: 'Xuất phát & Về đích (22/11)',
                desc: 'Có mặt tại Cảng Bãi Nhà từ 04:30 sáng 22/11, hòa mình vào không khí ngày hội!',
              },
            ].map((s) => (
              <div
                key={s.step}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex flex-col justify-between hover:bg-emerald-50/50 transition-colors"
              >
                <div>
                  <span className="text-3xl font-black text-[#16A34A] block mb-2">{s.step}</span>
                  <h4 className="font-extrabold text-slate-900 text-base mb-2">{s.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="bg-gradient-to-r from-emerald-600 to-sky-700 rounded-3xl p-8 sm:p-12 text-white text-center max-w-4xl mx-auto shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-black uppercase mb-3">
              SẴN SÀNG CHINH PHỤC CUNG ĐƯỜNG ĐẢO NGỌC HÒN SƠN?
            </h3>
            <p className="text-sky-100 text-sm sm:text-base max-w-xl mx-auto mb-6">
              Đăng ký ngay hôm nay để nhận quyền lợi trọn gói, bảo hiểm sự kiện và ưu đãi giảm 20% tại Paradise Retreat Hòn Sơn!
            </p>
            <a
              href={SITE_DATA.event.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-base px-8 py-4 rounded-xl shadow-lg transition-transform hover:scale-105 uppercase"
            >
              <span>MỞ CỔNG ĐĂNG KÝ FUNRACE</span>
              <ExternalLink className="w-5 h-5 stroke-[2.5]" />
            </a>
          </div>

        </div>
      </div>
    );
  }

  // 4. GIAO DIỆN TAB: "Tin tức" (với Modal xem chi tiết bài viết)
  if (currentTab === 'tin-tuc') {
    const featuredNews = SITE_DATA.news[0];
    const otherNews = SITE_DATA.news.slice(1);

    return (
      <div className="py-8 sm:py-14 bg-white min-h-[75vh]">
        <div className="max-w-[1386px] mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-2">
              BẢN TIN SỰ KIỆN
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight">
              TIN TỨC & THÔNG BÁO MỚI NHẤT
            </h1>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Cập nhật thông tin chính thống về giải chạy Vì Hòn Sơn Xanh 2026
            </p>
          </div>

          {/* Tin nổi bật số 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12 p-6 sm:p-8 bg-slate-50 rounded-3xl border border-slate-200">
            <div className="lg:col-span-6 rounded-2xl overflow-hidden aspect-[16/10] bg-slate-900">
              <img
                src={featuredNews.image}
                alt={featuredNews.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-md">
                  {featuredNews.category}
                </span>
                <span className="text-xs text-slate-500 ml-3">{featuredNews.date}</span>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 mt-3 leading-snug">
                  {featuredNews.title}
                </h2>
                <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed text-left md:text-justify">
                  {featuredNews.summary}
                </p>
              </div>

              <div>
                <button
                  onClick={() => setSelectedNews(featuredNews)}
                  className="inline-flex items-center gap-1.5 bg-[#16A34A] hover:bg-[#15803D] text-white font-bold text-sm px-6 py-2.5 rounded-xl shadow-xs transition-colors cursor-pointer"
                >
                  <span>Đọc toàn bộ bài viết</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* 2 Tin tức tiếp theo */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherNews.map((news) => (
              <div
                key={news.id}
                onClick={() => setSelectedNews(news)}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs hover:shadow-md transition-shadow cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="aspect-[16/10] bg-slate-100 overflow-hidden">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                      <span className="font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded">
                        {news.category}
                      </span>
                      <span>{news.date}</span>
                    </div>
                    <h3 className="font-extrabold text-slate-900 text-lg leading-snug group-hover:text-[#0284C7] transition-colors">
                      {news.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                      {news.summary}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <span className="text-xs font-bold text-[#16A34A] inline-flex items-center gap-1 group-hover:underline">
                    Xem chi tiết bài viết <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Modal xem bài viết chi tiết */}
          {selectedNews && (
            <div
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
              onClick={() => setSelectedNews(null)}
            >
              <div
                className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedNews(null)}
                  className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 text-sm font-bold bg-slate-100 hover:bg-slate-200 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer"
                >
                  ✕
                </button>
                <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2">
                  {selectedNews.category} • {selectedNews.date}
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 leading-snug">
                  {selectedNews.title}
                </h3>
                <div className="rounded-2xl overflow-hidden mb-6 aspect-[16/10] bg-slate-100">
                  <img
                    src={selectedNews.image}
                    alt={selectedNews.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed text-left md:text-justify">
                  {selectedNews.content.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href={SITE_DATA.event.registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#16A34A] text-white font-bold text-sm px-6 py-2.5 rounded-xl shadow"
                  >
                    <span>Đăng ký tham gia giải</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => setSelectedNews(null)}
                    className="text-sm font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
                  >
                    Đóng cửa sổ
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    );
  }

  // 5. GIAO DIỆN TAB: "Hỗ trợ"
  if (currentTab === 'ho-tro') {
    return (
      <div className="py-8 sm:py-16 bg-[#F8FAFC] min-h-[75vh]">
        <div className="max-w-[1386px] mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-2">
              BAN TỔ CHỨC & ĐỐI TÁC
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight">
              THÔNG TIN LIÊN HỆ & HỖ TRỢ VẬN ĐỘNG VIÊN
            </h1>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Chúng tôi luôn sẵn sàng hỗ trợ bạn về đăng ký, nhận Race Kit và đặt phòng lưu trú
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Cột 1: Hỗ trợ đăng ký FunRace & Kỹ thuật */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-sky-500 text-white flex items-center justify-center mb-4">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-extrabold text-slate-900 text-xl mb-2">
                  Ban Tổ Chức Giải Chạy Vì Hòn Sơn Xanh
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm mb-6 leading-relaxed">
                  Giải đáp thông tin cự ly, điều lệ thi đấu, quy trình nhận Race Kit và hỗ trợ tài khoản trên hệ thống FunRace.
                </p>

                <div className="space-y-3 text-sm text-slate-700">
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-slate-500 shrink-0" />
                    <span>Cảng Bãi Nhà, tiểu khu Lại Sơn, đặc khu Kiên Hải, An Giang</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[#0284C7] shrink-0" />
                    <span>
                      Hotline: <a href="tel:0984501536" className="font-bold text-[#0284C7] hover:underline">0984 501 536</a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <a
                  href={SITE_DATA.event.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold text-sm py-3 rounded-xl transition-colors"
                >
                  <span>MỞ TRANG FUNRACE</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Cột 2: Đối tác lưu trú Paradise Retreat Hòn Sơn */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center mb-4">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-extrabold text-slate-900 text-xl mb-2">
                  Paradise Retreat Hòn Sơn
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm mb-6 leading-relaxed">
                  Đơn vị đồng hành lưu trú & nghỉ dưỡng chính thức. Ưu đãi giảm ngay 20% cho runner và gia đình tham dự sự kiện.
                </p>

                <div className="space-y-3 text-sm text-slate-700">
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-slate-500 shrink-0" />
                    <span>Ấp Bãi Nhà B, đặc khu Kiên Hải, tỉnh An Giang</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>
                      Hotline đặt phòng: <a href="tel:0984501536" className="font-bold text-emerald-600 hover:underline">0984 501 536</a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <a
                  href="tel:0984501536"
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm py-3 rounded-xl transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>GỌI HOTLINE ĐẶT PHÒNG 0984 501 536</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    );
  }

  return null;
};
