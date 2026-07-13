/* ==========================================================
   DATA.JS — Kho dữ liệu sản phẩm của BIG BIKE
   Mọi trang (san-pham.html, chi-tiet.html, index.html...)
   đều lấy dữ liệu xe từ đây, giúp việc thêm/sửa/xoá xe
   chỉ cần chỉnh SỬA MỘT NƠI DUY NHẤT.
   ========================================================== */

const PRODUCTS = [
  {
    id: "h2r",
    name: "Kawasaki Ninja H2R",
    image: "../assets/img/h2r.jpg",
    price: 1875000000,
    displacement: "998cc – Tăng áp",
    category: "600-1000",
    description:
      "Kawasaki Ninja H2R là siêu mô tô sản xuất giới hạn dành riêng cho đường đua, sở hữu động cơ tăng áp cơ khí cho công suất vượt trội cùng khí động học đỉnh cao.",
    specs: "Động cơ 4 xi-lanh thẳng hàng, tăng áp cơ khí (supercharger), công suất hơn 300 mã lực, khung nhôm Trellis."
  },
  {
    id: "z1000",
    name: "Kawasaki Z1000",
    image: "../assets/img/images.jpg",
    price: 515000000,
    displacement: "1043cc",
    category: "600-1000",
    description:
      "Kawasaki Z1000 là mẫu naked bike mang phong cách 'Sugomi' đặc trưng, thiết kế hầm hố cùng khối động cơ 4 xi-lanh mạnh mẽ.",
    specs: "Động cơ 4 xi-lanh thẳng hàng 1043cc, làm mát bằng dung dịch, hộp số 6 cấp."
  },
  {
    id: "s1000rr",
    name: "BMW S1000RR",
    image: "../assets/img/bmw.jpg",
    price: 916000000,
    displacement: "999cc",
    category: "600-1000",
    description:
      "BMW S1000RR là dòng sportbike đầu bảng với hệ thống điện tử hiện đại, khả năng vận hành đỉnh cao trên cả đường trường lẫn đường đua.",
    specs: "Động cơ 4 xi-lanh 999cc, công suất hơn 200 mã lực, hệ thống treo DDC, ShiftCam."
  },
  {
    id: "z900",
    name: "Kawasaki Z900",
    image: "../assets/img/z900.jpg",
    price: 320000000,
    displacement: "948cc",
    category: "600-1000",
    description:
      "Kawasaki Z900 kết hợp giữa sức mạnh của khối động cơ lớn và trọng lượng nhẹ, phù hợp cho cả di chuyển hàng ngày lẫn đam mê tốc độ.",
    specs: "Động cơ 4 xi-lanh 948cc, khung thép ống, hệ thống phanh ABS."
  },
  {
    id: "zx10r",
    name: "Kawasaki Ninja ZX-10R",
    image: "../assets/img/ninja.jpg",
    price: 729000000,
    displacement: "998cc",
    category: "600-1000",
    description:
      "Kawasaki Ninja ZX-10R là mẫu superbike công nghệ đua MotoGP, mang lại trải nghiệm lái đỉnh cao cho người dùng chuyên nghiệp.",
    specs: "Động cơ 4 xi-lanh 998cc, hệ thống điện tử Bosch IMU, phanh Brembo."
  },
  {
    id: "zx6r",
    name: "Kawasaki Ninja ZX-6R",
    image: "../assets/img/zx-6r.jpg",
    price: 270000000,
    displacement: "636cc",
    category: "600-1000",
    description:
      "Kawasaki Ninja ZX-6R là lựa chọn lý tưởng cho người mới làm quen với dòng sportbike phân khối lớn nhờ khả năng vận hành linh hoạt.",
    specs: "Động cơ 4 xi-lanh 636cc, khung nhôm, hệ thống treo Showa SFF-BP."
  },
  {
    id: "cbr650r",
    name: "Honda CBR650R",
    image: "../assets/img/cbr.jpg",
    price: 254000000,
    displacement: "649cc",
    category: "600-1000",
    description:
      "Honda CBR650R sở hữu thiết kế thể thao cùng khối động cơ 4 xi-lanh vận hành mượt mà, phù hợp cho người dùng phổ thông.",
    specs: "Động cơ 4 xi-lanh 649cc, hệ thống phanh ABS 2 kênh, đồng hồ full LCD."
  },
  {
    id: "ninja400",
    name: "Kawasaki Ninja 400",
    image: "../assets/img/ninja 400.jpg",
    price: 165000000,
    displacement: "399cc",
    category: "150-600",
    description:
      "Kawasaki Ninja 400 là mẫu xe thể thao cỡ trung được yêu thích nhờ thiết kế trẻ trung và khả năng vận hành cân bằng.",
    specs: "Động cơ 2 xi-lanh song song 399cc, trọng lượng nhẹ, khung ống thép."
  },
  {
    id: "cb500f",
    name: "Honda CB500F",
    image: "../assets/img/cb500.jpg",
    price: 195000000,
    displacement: "471cc",
    category: "150-600",
    description:
      "Honda CB500F là dòng naked bike cỡ trung dễ điều khiển, thích hợp cho người mới chuyển từ xe phổ thông lên phân khối lớn.",
    specs: "Động cơ 2 xi-lanh 471cc, hệ thống phun xăng điện tử PGM-FI."
  },
  {
    id: "mt15",
    name: "Yamaha MT-15",
    image: "../assets/img/mt15.jpg",
    price: 79000000,
    displacement: "155cc",
    category: "150-600",
    description:
      "Yamaha MT-15 mang phong cách naked bike 'Dark Side of Japan' với thiết kế cơ bắp, phù hợp cho đô thị.",
    specs: "Động cơ VVA 155cc, hộp số 6 cấp, phanh ABS."
  },
  {
    id: "cbr150r",
    name: "Honda CBR150R",
    image: "../assets/img/cbr150.jpg",
    price: 92000000,
    displacement: "149cc",
    category: "150-600",
    description:
      "Honda CBR150R là mẫu sportbike cỡ nhỏ với thiết kế khí động học, phù hợp cho các bạn trẻ yêu thích tốc độ.",
    specs: "Động cơ 1 xi-lanh 149cc, khung Diamond, phanh đĩa trước sau."
  },
  {
    id: "winnerx",
    name: "Honda Winner X",
    image: "../assets/img/winner.jpg",
    price: 46000000,
    displacement: "150cc",
    category: "gia-hoi",
    description:
      "Honda Winner X là mẫu xe côn tay giá tốt, tiết kiệm nhiên liệu và bền bỉ, phù hợp cho nhu cầu di chuyển hàng ngày.",
    specs: "Động cơ 150cc PGM-FI, hộp số 6 cấp, tiết kiệm nhiên liệu."
  },
  {
    id: "exciter155",
    name: "Yamaha Exciter 155",
    image: "../assets/img/155.jpg",
    price: 52000000,
    displacement: "155cc",
    category: "gia-hoi",
    description:
      "Yamaha Exciter 155 là mẫu xe côn tay quốc dân, được ưa chuộng nhờ thiết kế thể thao và giá thành hợp lý.",
    specs: "Động cơ VVA 155cc, khung Deltabox, phanh ABS (bản cao cấp)."
  },
  {
    id: "raider150",
    name: "Suzuki Raider R150",
    image: "../assets/img/rider.jpg",
    price: 58000000,
    displacement: "150cc",
    category: "gia-hoi",
    description:
      "Suzuki Raider R150 nổi bật với thiết kế sắc sảo cùng động cơ bốc, là lựa chọn giá hời cho người yêu tốc độ.",
    specs: "Động cơ 150cc làm mát bằng dung dịch, hộp số 6 cấp."
  }
];

/** Định dạng số tiền theo chuẩn Việt Nam, ví dụ: 515000000 -> "515.000.000 VND" */
function formatPrice(amount) {
  return amount.toLocaleString("vi-VN") + " VND";
}

/** Tìm một sản phẩm theo id (dùng cho trang chi-tiet.html) */
function getProductById(id) {
  return PRODUCTS.find((product) => product.id === id);
}