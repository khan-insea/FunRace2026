/**
 * Dữ liệu tập trung cho website chính thức:
 * GIẢI CHẠY “VÌ HÒN SƠN XANH – CHUNG MỘT QUYẾT TÂM XÂY DỰNG ĐẶC KHU KIÊN HẢI KHÔNG MA TÚY” NĂM 2026
 */

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface RaceDistance {
  id: string;
  distance: string;
  name: string;
  highlight: string;
  startTime: string;
  description: string;
  suitableFor: string;
  color: string;
  tagBg: string;
}

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  content: string[];
  date: string;
  image: string;
  featured?: boolean;
  category: string;
}

export interface TimelineScheduleItem {
  time: string;
  title: string;
  location: string;
  desc: string;
}

export interface TestimonialItem {
  id: number;
  quote: string;
  author: string;
  avatar: string;
  role: string;
}

export const SITE_DATA = {
  // Thông tin thương hiệu sự kiện chuẩn
  event: {
    fullName: "GIẢI CHẠY “VÌ HÒN SƠN XANH – CHUNG MỘT QUYẾT TÂM XÂY DỰNG ĐẶC KHU KIÊN HẢI KHÔNG MA TÚY” NĂM 2026",
    shortName: "Vì Hòn Sơn Xanh 2026",
    slogan: "SỐNG CHẤT THEO CÁCH CỦA BẠN – ĐỪNG ĐỂ MA TÚY LẤY ĐI TƯƠNG LAI!",
    year: "2026",
    mainDate: "22/11/2026",
    activitiesDate: "21–22/11/2026",
    location: "Cảng Bãi Nhà, tiểu khu Lại Sơn, đặc khu Kiên Hải, tỉnh An Giang",
    raceKitLocation: "Fly Up Resort, đảo Hòn Sơn, đặc khu Kiên Hải, tỉnh An Giang",
    distances: ["5KM", "10KM", "21KM"],
    // Cổng đăng ký duy nhất và bắt buộc
    registrationUrl: "https://funrace.id.vn/races/14",
    registrationDeadline: "05/11/2026",
    targetCountdownDate: "2026-11-22T05:00:00+07:00",
    bannerImage: "/assets/aistudio/race_92be563d-46df-4bc7-8df5-4708a4882910_9feb732a.png",
    organizers: [
      "Sở Văn hóa và Thể thao tỉnh An Giang",
      "UBND Đặc khu Kiên Hải",
      "Công an tỉnh An Giang",
      "Hiệp hội Du lịch An Giang",
      "Fly Up Resort",
    ],
  },

  // Menu điều hướng trên thanh Header
  navigation: [
    { id: "gioi-thieu", label: "Giới thiệu", href: "#gioi-thieu" },
    { id: "the-le", label: "Thể lệ", href: "#the-le" },
    { id: "lich-trinh", label: "Lịch trình", href: "#lich-trinh" },
    { id: "huong-dan", label: "Hướng dẫn tham gia", href: "#huong-dan" },
    { id: "tin-tuc", label: "Tin tức", href: "#tin-tuc" },
    { id: "ho-tro", label: "Hỗ trợ", href: "#ho-tro" },
  ] as NavItem[],

  // Các cự ly thi đấu chính thức
  raceDistances: [
    {
      id: "5km",
      distance: "5KM",
      name: "Chạy Trải Nghiệm - Gắn Kết Biển Đảo",
      highlight: "Dễ tiếp cận - Trọn vẹn niềm vui",
      startTime: "06:30 - Ngày 22/11/2026",
      description: "Cung đường ven biển êm đềm, ngắm nhìn nhịp sống bình dị tại cảng Bãi Nhà và làng chài Lại Sơn thơ mộng trong ánh nắng mai rực rỡ.",
      suitableFor: "Phù hợp mọi vận động viên, gia đình, người mới chạy bộ và thanh thiếu niên.",
      color: "#059669",
      tagBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
    {
      id: "10km",
      distance: "10KM",
      name: "Thử Thách Bứt Phá - Vươn Tầm Sức Khỏe",
      highlight: "Năng động - Vượt dốc ven biển",
      startTime: "06:00 - Ngày 22/11/2026",
      description: "Cung đường uốn lượn theo bờ biển trong xanh ngắt, xen lẫn các đoạn dốc thoải thử thách thể lực và mở rộng tầm nhìn toàn cảnh vịnh biển.",
      suitableFor: "Lý tưởng cho runner có kinh nghiệm chạy phong trào muốn bứt phá giới hạn bản thân.",
      color: "#0284C7",
      tagBg: "bg-sky-50 text-sky-700 border-sky-200",
    },
    {
      id: "21km",
      distance: "21KM",
      name: "Chinh Phục Đảo Ngọc - Bản Lĩnh Vươn Xa",
      highlight: "Bán Marathon - Cung đường đảo ngọc",
      startTime: "05:30 - Ngày 22/11/2026",
      description: "Hành trình bán marathon ngoạn mục ôm trọn cung đường đảo Hòn Sơn hùng vĩ giữa biển trời Tây Nam, đòi hỏi sự bền bỉ và ý chí kiên định phi thường.",
      suitableFor: "Dành cho chân chạy đam mê cự ly dài và khát khao chinh phục đỉnh cao mới.",
      color: "#D97706",
      tagBg: "bg-amber-50 text-amber-700 border-amber-200",
    },
  ] as RaceDistance[],

  // Danh sách các gói ưu đãi Fly Up Resort Hòn Sơn dành cho runner
  accommodations: [
    {
      id: "fly-up-goi-20",
      name: "Fly Up Resort Hòn Sơn",
      tabLabel: "Ưu đãi Giảm 20%",
      type: "Đơn vị phối hợp tổ chức & Điểm phát Race Kit",
      images: [
        {
          id: 1,
          src: "/assets/event_photo_3_beach.png",
          title: "Không gian bãi biển & khuôn viên Fly Up Resort thơ mộng",
          caption: "Bãi biển riêng nước trong xanh tại Bãi Bấc",
        },
        {
          id: 2,
          src: "/assets/event_photo_1_monument.png",
          title: "Khung cảnh thiên nhiên biển đảo Hòn Sơn hùng vĩ",
          caption: "Vị trí đắc địa ngắm trọn bình minh và hoàng hôn",
        },
        {
          id: 3,
          src: "/assets/event_photo_2_finish.png",
          title: "Sảnh đón tiếp & Khu vực phát Race Kit ngày 21/11/2026",
          caption: "Điểm tiếp đón runner và nhận bộ kit thi đấu chính thức",
        },
        {
          id: 4,
          src: "/assets/banner_kv_main.png",
          title: "Đơn vị đồng hành chính thức giải chạy Vì Hòn Sơn Xanh 2026",
          caption: "Đồng hành mang đến trải nghiệm thi đấu và nghỉ dưỡng trọn vẹn",
        },
      ],
      discountBadge: "ĐẶC QUYỀN CHO VẬN ĐỘNG VIÊN & CỔ ĐỘNG VIÊN",
      discountTitle: "ƯU ĐÃI GIẢM 20%",
      discountDesc: "Áp dụng cho dịch vụ phòng lưu trú và nghỉ dưỡng dành riêng cho người tham gia giải chạy Vì Hòn Sơn Xanh 2026.",
      address: "Bãi Bấc, Lại Sơn, Đặc Khu Kiên Hải, Tỉnh An Giang",
      phone: "0297 3 822 822",
      hotline: "0857 822 822",
      email: "info@flyupresort.com",
    },
    {
      id: "fly-up-goi-15",
      name: "Fly Up Resort Hòn Sơn",
      tabLabel: "Ưu đãi Giảm 15%",
      type: "Đơn vị phối hợp tổ chức & Điểm phát Race Kit",
      images: [
        {
          id: 1,
          src: "/assets/event_photo_3_beach.png",
          title: "Khu vực ẩm thực & tiệc nướng BBQ bãi biển ven vịnh",
          caption: "Hải sản tươi sống đặc sản biển đảo Hòn Sơn",
        },
        {
          id: 2,
          src: "/assets/slide1_test.png",
          title: "Phòng nghỉ tiện nghi hiện đại và ấm cúng",
          caption: "Đầy đủ tiện ích tiêu chuẩn cao cấp dành cho gia đình và runner",
        },
        {
          id: 3,
          src: "/assets/event_photo_1_monument.png",
          title: "Cung đường ven biển kết nối thuận tiện đến trung tâm",
          caption: "Gần cảng Bãi Nhà và các điểm du lịch khám phá đảo",
        },
      ],
      discountBadge: "ƯU ĐÃI DỊCH VỤ & TIỆN ÍCH RUNNER",
      discountTitle: "ƯU ĐÃI GIẢM 15%",
      discountDesc: "Áp dụng cho ẩm thực hải sản, tiệc nướng và các dịch vụ tiện ích nghỉ dưỡng dành cho vận động viên và người thân.",
      address: "Bãi Bấc, Lại Sơn, Đặc Khu Kiên Hải, Tỉnh An Giang",
      phone: "0297 3 822 822",
      hotline: "0857 822 822",
      email: "info@flyupresort.com",
    },
  ],

  // Đối tác đồng hành nghỉ dưỡng chính thức
  partner: {
    name: "Fly Up Resort Hòn Sơn",
    role: "Đơn vị đồng hành lưu trú & nghỉ dưỡng chính thức",
    discountOffer: "Ưu đãi giảm 20% toàn bộ dịch vụ",
    description: "Giảm 20% chi phí lưu trú, ăn uống và các dịch vụ nghỉ dưỡng cao cấp dành riêng cho vận động viên, người thân và cổ động viên tham gia giải chạy Vì Hòn Sơn Xanh 2026.",
    phone: "0297 3 822 822",
    hotline: "0857 822 822",
    email: "info@flyupresort.com",
    address: "Bãi Bấc, Lại Sơn, Đặc Khu Kiên Hải, Tỉnh An Giang",
    highlights: [
      "View biển tuyệt đẹp ngắm trọn bình minh và hoàng hôn Hòn Sơn",
      "Ẩm thực hải sản tươi ngon đặc sản đảo ngọc Kiên Hải",
      "Không gian nghỉ ngơi thư thái giúp VĐV phục hồi thể lực tối ưu",
      "Vị trí thuận tiện kết nối đến khu vực phát Race Kit và vạch xuất phát",
    ],
  },

  // Lịch trình hoạt động 2 ngày (21 - 22/11/2026)
  timeline: {
    day1: {
      date: "Thứ Bảy, ngày 21/11/2026",
      title: "NGÀY 1: TIẾP ĐÓN RUNNERS & PHÁT RACE KIT",
      location: "Fly Up Resort, đảo Hòn Sơn, đặc khu Kiên Hải, tỉnh An Giang",
      events: [
        {
          time: "08:00 - 18:00",
          title: "Phát Race Kit và kiểm tra BIB thi đấu",
          location: "Fly Up Resort",
          desc: "Vận động viên xuất trình email xác nhận từ FunRace (hoặc CCCD) để nhận bộ kit thi đấu gồm: Áo sự kiện, số BIB gắn chip time và quà tặng kỷ niệm.",
        },
        {
          time: "14:00 - 17:00",
          title: "Phổ biến kỹ thuật và giao lưu cộng đồng runner",
          location: "Hội trường Fly Up Resort",
          desc: "Ban tổ chức hướng dẫn sơ đồ đường chạy, các trạm tiếp nước y tế, phổ biến thông điệp chiến dịch 'Vì Hòn Sơn Xanh - Đặc khu Kiên Hải không ma túy'.",
        },
      ] as TimelineScheduleItem[],
    },
    day2: {
      date: "Chủ Nhật, ngày 22/11/2026",
      title: "NGÀY 2: RACE DAY - NGÀY THI ĐẤU CHÍNH THỨC",
      location: "Cảng Bãi Nhà, tiểu khu Lại Sơn, đặc khu Kiên Hải, tỉnh An Giang",
      events: [
        {
          time: "04:30 - 05:00",
          title: "Tập trung VĐV & Gửi đồ cá nhân",
          location: "Quảng trường Cảng Bãi Nhà",
          desc: "Đón tiếp các đoàn vận động viên, gửi đồ tại khu vực ký gửi an toàn và nhận nước khởi động.",
        },
        {
          time: "05:00 - 05:25",
          title: "Lễ Khai mạc chính thức & Khởi động toàn thể",
          location: "Sân khấu chính Cảng Bãi Nhà",
          desc: "Nghi thức khai mạc trang trọng với thông điệp: 'SỐNG CHẤT THEO CÁCH CỦA BẠN – ĐỪNG ĐỂ MA TÚY LẤY ĐI TƯƠNG LAI!', khởi động làm nóng cùng HLV chuyên nghiệp.",
        },
        {
          time: "05:30",
          title: "Xuất phát Cự ly 21KM",
          location: "Cổng xuất phát Cảng Bãi Nhà",
          desc: "Vận động viên bán marathon chính thức bước vào hành trình chinh phục cung đường đảo ngọc.",
        },
        {
          time: "06:00",
          title: "Xuất phát Cự ly 10KM",
          location: "Cổng xuất phát Cảng Bãi Nhà",
          desc: "Các vận động viên cự ly 10KM bắt đầu tranh tài trên cung đường ven biển tuyệt đẹp.",
        },
        {
          time: "06:30",
          title: "Xuất phát Cự ly 5KM",
          location: "Cổng xuất phát Cảng Bãi Nhà",
          desc: "Đoàn vận động viên phong trào, gia đình và thanh thiếu niên sải bước truyền cảm hứng.",
        },
        {
          time: "08:30 - 09:30",
          title: "Đón runners về đích & Phục hồi thể lực",
          location: "Khu vực Finish Line Cảng Bãi Nhà",
          desc: "Trao huy chương hoàn thành (Finisher Medal), thưởng thức nước ép trái cây, điện giải và nghỉ ngơi giãn cơ.",
        },
        {
          time: "09:30 - 10:30",
          title: "Lễ Bế mạc & Vinh danh giải thưởng",
          location: "Sân khấu chính Cảng Bãi Nhà",
          desc: "Tổng kết ngày hội chạy bộ, trao kỷ niệm chương vinh danh và kết thúc thành công sự kiện thể thao ý nghĩa.",
        },
      ] as TimelineScheduleItem[],
    },
  },

  // 3 Bài viết tin tức chính thức
  news: [
    {
      id: "tin-phat-dong-giai-chay",
      title: "Chính thức phát động Giải chạy 'Vì Hòn Sơn Xanh – Chung một quyết tâm xây dựng đặc khu Kiên Hải không ma túy' năm 2026",
      summary: "Ngày hội thể thao biển đảo quy mô lớn tại Hòn Sơn (An Giang) chính thức mở cổng đăng ký, hướng tới mục tiêu lan tỏa phong trào rèn luyện sức khỏe, bảo vệ cảnh quan môi trường và xây dựng một cộng đồng văn minh, bài trừ tệ nạn ma túy.",
      content: [
        "Nhằm đẩy mạnh phong trào rèn luyện thân thể theo gương Bác Hồ vĩ đại, đồng thời nâng cao nhận thức của cộng đồng và thế hệ trẻ về tác hại khôn lường của ma túy, UBND đặc khu Kiên Hải cùng các đơn vị phối hợp long trọng tổ chức Giải chạy 'Vì Hòn Sơn Xanh – Chung một quyết tâm xây dựng đặc khu Kiên Hải không ma túy' năm 2026.",
        "Sự kiện sẽ chính thức diễn ra trong hai ngày 21 và 22/11/2026 tại đảo Lại Sơn (Hòn Sơn) – một trong những hòn đảo hoang sơ và quyến rũ bậc nhất vùng biển Tây Nam. Với thông điệp xuyên suốt: 'SỐNG CHẤT THEO CÁCH CỦA BẠN – ĐỪNG ĐỂ MA TÚY LẤY ĐI TƯƠNG LAI!', giải chạy quy tụ 3 cự ly thi đấu: 5KM, 10KM và 21KM, mở rộng cho mọi công dân và du khách yêu thích chạy bộ.",
        "Toàn bộ vận động viên hoàn thành cự ly hợp lệ sẽ nhận được Huy chương hoàn thành (Finisher Medal) cùng nhiều phần quà lưu niệm mang đậm dấu ấn biển đảo Hòn Sơn. Cổng đăng ký trực tuyến hiện đã mở tại địa chỉ: https://funrace.id.vn/races/14.",
      ],
      date: "20/10/2026",
      image: "/assets/banner_kv_main.png",
      featured: true,
      category: "Sự kiện nổi bật",
    },
    {
      id: "tin-huong-dan-dang-ky-funrace",
      title: "Hướng dẫn đăng ký tham gia qua cổng FunRace và lưu ý nhận Race Kit",
      summary: "Các bước đăng ký nhanh chóng trên nền tảng FunRace, lựa chọn cự ly thích hợp và quy trình nhận trọn bộ Race Kit tại Fly Up Resort vào ngày 21/11/2026.",
      content: [
        "Để đảm bảo quyền lợi thi đấu và công tác chuẩn bị chu đáo nhất, Ban tổ chức khuyến khích tất cả vận động viên đăng ký sớm thông qua hệ thống cổng điện tử chính thức: https://funrace.id.vn/races/14.",
        "Quy trình đăng ký gồm 3 bước đơn giản: 1. Truy cập liên kết giải chạy trên FunRace; 2. Chọn cự ly mong muốn (5KM, 10KM hoặc 21KM) và điền đầy đủ thông tin cá nhân (Họ tên, ngày sinh, số CCCD, kích thước áo thi đấu); 3. Hoàn tất xác nhận đăng ký.",
        "Bộ Race Kit chính thức bao gồm: Áo thi đấu Singlet/T-shirt chất liệu thể thao cao cấp thoáng khí, số BIB gắn chip đo thời gian điện tử, túi rút thể thao, và bảo hiểm sự kiện. Thời gian nhận Race Kit diễn ra từ 08:00 đến 18:00 ngày 21/11/2026 tại Fly Up Resort Hòn Sơn.",
      ],
      date: "22/10/2026",
      image: "/assets/event_photo_2_finish.png",
      category: "Hướng dẫn Runner",
    },
    {
      id: "tin-uu-dai-fly-up-resort",
      title: "Fly Up Resort Hòn Sơn đồng hành ưu đãi 20% cho toàn bộ vận động viên giải chạy",
      summary: "Khu nghỉ dưỡng cao cấp Fly Up Resort Hòn Sơn triển khai gói ưu đãi giảm giá 20% lưu trú, ẩm thực và dịch vụ nghỉ dưỡng dành riêng cho các chân chạy và gia đình tham gia sự kiện.",
      content: [
        "Đồng hành cùng Giải chạy Vì Hòn Sơn Xanh 2026, Fly Up Resort Hòn Sơn tự hào là đơn vị lưu trú và nghỉ dưỡng đối tác chiến lược kiêm địa điểm phát Race Kit, mang đến không gian nghỉ ngơi thư thái và điều kiện hồi phục thể lực tốt nhất cho các vận động viên.",
        "Theo chương trình hợp tác, tất cả vận động viên sở hữu BIB thi đấu hoặc email đăng ký thành công trên FunRace sẽ được giảm ngay 20% trên giá niêm yết cho các dịch vụ: Phòng lưu trú hướng biển, ẩm thực hải sản tươi sống và các tiện ích nghỉ dưỡng trong suốt thời gian diễn ra giải.",
        "Vận động viên vui lòng liên hệ trực tiếp Hotline: 0984 501 536 để được tư vấn và giữ phòng sớm, hoặc đến trực tiếp tại địa chỉ: Bãi Bấc, đảo Hòn Sơn, đặc khu Kiên Hải, tỉnh An Giang.",
      ],
      date: "24/10/2026",
      image: "/assets/event_photo_3_beach.png",
      category: "Ưu đãi Đối tác",
    },
  ] as NewsItem[],

  // Thông điệp & Cảm nhận người tham gia (Testimonials)
  testimonials: [
    {
      id: 0,
      quote: "“Được sải bước trên cung đường biển ngọc Hòn Sơn hoang sơ và hùng vĩ là trải nghiệm khó quên. Mỗi bước chạy là lời cam kết mạnh mẽ của thế hệ trẻ Kiên Hải: Sống chất, sống lành mạnh và kiên quyết nói không với ma túy!”",
      author: "VĐV Cự ly 21KM – Đại diện Hội Liên hiệp Thanh niên đặc khu Kiên Hải",
      avatar: "/assets/avatar_dan.png",
      role: "Vận động viên 21KM",
    },
    {
      id: 1,
      quote: "“Giải chạy Vì Hòn Sơn Xanh 2026 lan tỏa năng lượng tích cực đến từng gia đình và người dân đảo Lại Sơn. Chúng tôi vô cùng tự hào khi quê hương tổ chức một ngày hội thể thao văn minh, xanh - sạch - đẹp và giàu ý nghĩa như thế này.”",
      author: "Đại diện cư dân tiểu khu Lại Sơn – Đặc khu Kiên Hải, tỉnh An Giang",
      avatar: "/assets/avatar_thu.png",
      role: "Cư dân đảo Hòn Sơn",
    },
    {
      id: 2,
      quote: "“Không khí biển đảo trong lành, cảnh sắc hoang sơ mê hoặc lòng người, dịch vụ tại Fly Up Resort Hòn Sơn rất chu đáo. Hãy cùng nhau sống chất theo cách của bạn – Đừng để ma túy lấy đi tương lai!”",
      author: "VĐV Cự ly 10KM – Câu lạc bộ Chân Chạy Miền Tây",
      avatar: "/assets/runner_avatar.png",
      role: "Vận động viên phong trào",
    },
  ] as TestimonialItem[],

  // Thông tin hỗ trợ và liên hệ
  contact: {
    eventOffice: "Ban Tổ chức Giải chạy Vì Hòn Sơn Xanh 2026",
    location: "Cảng Bãi Nhà, tiểu khu Lại Sơn, đặc khu Kiên Hải, tỉnh An Giang",
    hotlineRegistration: "0984 501 536",
    hotlineResort: "0857 822 822",
    phoneResort: "0297 3 822 822",
    emailResort: "info@flyupresort.com",
    addressResort: "Bãi Bấc, Lại Sơn, Đặc Khu Kiên Hải, Tỉnh An Giang",
    registrationPortal: "https://funrace.id.vn/races/14",
    emailSupport: "support@funrace.id.vn",
  },
  support: {
    eventOffice: "Ban Tổ chức Giải chạy Vì Hòn Sơn Xanh 2026",
    location: "Cảng Bãi Nhà, tiểu khu Lại Sơn, đặc khu Kiên Hải, tỉnh An Giang",
    hotlineRegistration: "0984 501 536",
    hotlineResort: "0857 822 822",
    phoneResort: "0297 3 822 822",
    emailResort: "info@flyupresort.com",
    addressResort: "Bãi Bấc, Lại Sơn, Đặc Khu Kiên Hải, Tỉnh An Giang",
    registrationPortal: "https://funrace.id.vn/races/14",
    emailSupport: "support@funrace.id.vn",
  },
};
