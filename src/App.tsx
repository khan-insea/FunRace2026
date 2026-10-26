/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { BannerHero } from './components/BannerHero';
import { EligibilityAndTimeline } from './components/EligibilityAndTimeline';
import { AppAndStravaGuide } from './components/AppAndStravaGuide';
import { PrizesSection } from './components/PrizesSection';
import { MediaHighlights } from './components/MediaHighlights';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactAndFooter } from './components/ContactAndFooter';
import { SubpageViews } from './components/SubpageViews';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('the-le')) return 'the-le';
      if (hash.includes('lich-trinh')) return 'lich-trinh';
      if (hash.includes('huong-dan')) return 'huong-dan';
      if (hash.includes('tin-tuc')) return 'tin-tuc';
      if (hash.includes('ho-tro')) return 'ho-tro';
    }
    return 'gioi-thieu';
  });

  useEffect(() => {
    if (activeTab === 'gioi-thieu') {
      if (window.location.hash) {
        window.history.pushState(null, '', '/');
      }
    } else {
      window.history.pushState(null, '', `/#${activeTab}`);
    }
  }, [activeTab]);

  useEffect(() => {
    const handleUrlChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('the-le')) {
        setActiveTab('the-le');
      } else if (hash.includes('lich-trinh')) {
        setActiveTab('lich-trinh');
      } else if (hash.includes('huong-dan')) {
        setActiveTab('huong-dan');
      } else if (hash.includes('tin-tuc')) {
        setActiveTab('tin-tuc');
      } else if (hash.includes('ho-tro')) {
        setActiveTab('ho-tro');
      } else {
        setActiveTab('gioi-thieu');
      }
    };

    window.addEventListener('popstate', handleUrlChange);
    window.addEventListener('hashchange', handleUrlChange);
    return () => {
      window.removeEventListener('popstate', handleUrlChange);
      window.removeEventListener('hashchange', handleUrlChange);
    };
  }, []);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleJoinClick = () => {
    const el = document.getElementById('the-le');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-emerald-500/20 selection:text-emerald-900 overflow-x-hidden w-full">
      
      {/* Header thanh điều hướng sự kiện */}
      <Header
        activeTab={activeTab}
        onSelectTab={handleTabChange}
      />

      {/* Vùng nội dung chính */}
      <main className="flex-1">
        {activeTab === 'gioi-thieu' ? (
          /* TRANG CHỦ GIỚI THIỆU: Chuỗi section mạch lạc, thu hút */
          <>
            {/* 1. Phần Giới thiệu & Banner chính + 3 ảnh biển đảo */}
            <BannerHero onJoinClick={handleJoinClick} />

            {/* 2. Đối tượng & Địa điểm + Đếm ngược thời gian thực đến ngày 22/11/2026 */}
            <EligibilityAndTimeline />

            {/* 3. Dải xanh Hướng dẫn & Nút đăng ký cổng FunRace */}
            <AppAndStravaGuide />

            {/* 4. Thẻ Ưu đãi nghỉ dưỡng Fly Up Resort Hòn Sơn */}
            <PrizesSection />

            {/* 5. Dải Hình ảnh & Khoảnh khắc Hòn Sơn */}
            <MediaHighlights />

            {/* 6. Slider Cảm nhận & Thông điệp phòng chống ma túy trên nền đường chạy */}
            <TestimonialsSection />

            {/* 7. Chân trang sự kiện Vì Hòn Sơn Xanh 2026 */}
            <ContactAndFooter onSelectTab={handleTabChange} />
          </>
        ) : (
          /* CÁC TRANG CON: Thể lệ, Lịch trình, Hướng dẫn, Tin tức, Hỗ trợ */
          <>
            <SubpageViews
              currentTab={activeTab}
              onBackToHome={() => handleTabChange('gioi-thieu')}
            />
            <ContactAndFooter onSelectTab={handleTabChange} />
          </>
        )}
      </main>

    </div>
  );
}
