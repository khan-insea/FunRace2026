import React, { useState } from 'react';
import { SITE_DATA } from '../data/rvRunnerData';
import { EventLogo } from './EventLogo';
import { Search, Menu, X, ExternalLink } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  onSelectTab: (id: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, onSelectTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleTabClick = (tabId: string) => {
    onSelectTab(tabId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#F8FAFC]/95 backdrop-blur-md border-b border-slate-200 transition-all">
      {/* Container căn giữa rộng tối đa 1386px */}
      <div className="max-w-[1386px] w-full mx-auto px-3.5 sm:px-6 lg:px-8 2xl:px-0 py-2.5 sm:py-3 lg:py-3.5 box-border">
        
        {/* Hàng chính: Logo sự kiện, Menu Desktop, Action Buttons */}
        <div className="flex items-center justify-between gap-2 sm:gap-4 min-w-0">
          
          {/* Nhóm Logo và Menu Desktop */}
          <div className="flex items-center gap-4 lg:gap-6 xl:gap-8 min-w-0">
            <EventLogo onClick={() => handleTabClick('gioi-thieu')} />

            {/* Menu điều hướng trên màn hình Desktop (>= lg) */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {SITE_DATA.navigation.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleTabClick(item.id)}
                    className={`cursor-pointer text-[14px] xl:text-[15px] 2xl:text-[16px] font-bold transition-all px-3 py-1.5 rounded-lg whitespace-nowrap ${
                      isActive
                        ? 'bg-[#16A34A] text-white shadow-2xs'
                        : 'text-slate-700 hover:text-[#16A34A] hover:bg-emerald-50/60'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Nhóm nút bên phải: Search, Đăng ký (tablet/desktop) và Hamburger menu (mobile) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            
            {/* Nút Đăng ký trên Tablet và Desktop (>= sm) */}
            <a
              href={SITE_DATA.event.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-[#0284C7] to-[#16A34A] hover:from-[#0369A1] hover:to-[#15803D] text-white font-extrabold text-xs sm:text-sm lg:text-[15px] px-3.5 sm:px-4.5 py-2 sm:py-2.5 rounded-xl shadow-xs hover:shadow-md transition-all active:scale-95 uppercase tracking-wide cursor-pointer min-h-[44px]"
              title="Đăng ký giải chạy Vì Hòn Sơn Xanh 2026 trên FunRace"
            >
              <span>ĐĂNG KÝ NGAY</span>
              <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
            </a>

            {/* Nút tìm kiếm (ẩn trên mobile hẹp, có sẵn trong menu mobile) */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="w-10 h-10 sm:w-10 sm:h-10 rounded-xl bg-slate-200/80 hover:bg-slate-300 text-slate-700 flex items-center justify-center transition-colors cursor-pointer min-w-[40px] min-h-[40px]"
              aria-label="Tìm kiếm thông tin giải chạy"
              title="Tìm kiếm"
            >
              <Search className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-slate-700" />
            </button>

            {/* Nút menu hamburger trên thiết bị di động (< lg) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-11 h-11 flex items-center justify-center text-slate-800 hover:bg-slate-200/80 rounded-xl cursor-pointer min-w-[44px] min-h-[44px]"
              aria-label="Mở menu điều hướng"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Hàng riêng cho nút ĐĂNG KÝ NGAY trên Mobile (< sm) để ưu tiên logo không bị ép dòng */}
        <div className="sm:hidden pt-2">
          <a
            href={SITE_DATA.event.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#0284C7] to-[#16A34A] active:opacity-95 text-white font-black text-xs py-2.5 px-3 rounded-xl shadow-xs uppercase tracking-wide min-h-[44px]"
            title="Đăng ký giải chạy Vì Hòn Sơn Xanh 2026 trên FunRace"
          >
            <span>ĐĂNG KÝ NGAY TRÊN FUNRACE</span>
            <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
          </a>
        </div>

      </div>

      {/* Thanh tìm kiếm thả xuống */}
      {searchOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-3 shadow-md animate-fadeIn">
          <div className="max-w-[1386px] mx-auto flex items-center gap-2">
            <Search className="w-4 h-4 text-slate-400 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm: cự ly, lịch trình 21-22/11, ưu đãi Paradise Retreat..."
              className="w-full text-sm outline-none py-1.5 text-slate-800 placeholder-slate-400"
              autoFocus
            />
            <button
              onClick={() => setSearchOpen(false)}
              className="text-xs text-slate-600 hover:text-slate-900 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 rounded-lg cursor-pointer min-h-[36px]"
            >
              Đóng
            </button>
          </div>
        </div>
      )}

      {/* Menu mobile trượt mở */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-5 space-y-2 shadow-xl animate-fadeIn">
          {/* Ô tìm kiếm nhanh trong menu mobile */}
          <div className="flex items-center gap-2 bg-slate-100 px-3 py-2 rounded-xl mb-3">
            <Search className="w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm thông tin giải..."
              className="w-full bg-transparent text-sm outline-none text-slate-800 placeholder-slate-400"
            />
          </div>

          {SITE_DATA.navigation.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`w-full text-left px-3.5 py-3 rounded-xl text-sm sm:text-base font-bold flex items-center justify-between min-h-[44px] ${
                  isActive
                    ? 'bg-[#16A34A] text-white'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <span>{item.label}</span>
              </button>
            );
          })}

          <div className="pt-2">
            <a
              href={SITE_DATA.event.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#0284C7] to-[#16A34A] text-white font-bold py-3 px-4 rounded-xl text-center text-sm uppercase shadow min-h-[44px]"
            >
              <span>VÀO CỔNG ĐĂNG KÝ FUNRACE</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
