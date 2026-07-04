/* ==========================================================
   SCRIPT.JS — Hiển thị & lọc danh sách sản phẩm
   Dữ liệu được lấy từ mảng PRODUCTS trong file data.js
   (nhớ nhúng data.js TRƯỚC script.js trong san-pham.html)
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".product-grid");
  const filterBtns = document.querySelectorAll(".filter-btn");

  // Hiển thị toàn bộ sản phẩm khi mới vào trang
  renderProducts(PRODUCTS, grid);

  // Gắn sự kiện lọc cho từng nút filter
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;
      const filtered =
        filter === "all"
          ? PRODUCTS
          : PRODUCTS.filter((product) => product.category === filter);

      renderProducts(filtered, grid);
    });
  });
});

/** Tạo HTML cho một thẻ sản phẩm */
function createProductCard(product) {
  return `
    <div class="product-card" data-category="${product.category}">
      <img src="${product.image}" alt="${product.name}" class="product-img">
      <div class="product-info">
        <h3>${product.name}</h3>
        <p class="weight-tag">${product.displacement}</p>
        <p class="price">${formatPrice(product.price)}</p>
        <a href="chi-tiet.html?product=${product.id}" class="btn">Xem Chi Tiết</a>
      </div>
    </div>
  `;
}

/** Render danh sách sản phẩm vào lưới .product-grid */
function renderProducts(products, grid) {
  if (products.length === 0) {
    grid.innerHTML = `<p style="text-align:center; grid-column: 1 / -1;">Không có sản phẩm phù hợp.</p>`;
    return;
  }
  grid.innerHTML = products.map(createProductCard).join("");
}
