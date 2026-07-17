/* ==========================================================
   SCRIPT.JS — Hiển thị & lọc danh sách sản phẩm
   Dữ liệu được lấy từ mảng PRODUCTS trong file data.js
   (nhớ nhúng data.js TRƯỚC script.js trong san-pham.html)
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".product-grid");
  const filterBtns = document.querySelectorAll(".filter-btn");
  const searchInput = document.getElementById("search-input");
  const searchClear = document.getElementById("search-clear");
  const resultInfo = document.getElementById("search-result-info");

  let currentFilter = "all";
  let currentSearch = "";

  // Hiển thị toàn bộ sản phẩm khi mới vào trang
  renderProducts(PRODUCTS, grid);

  /** Bỏ dấu tiếng Việt để tìm kiếm không phân biệt dấu */
  function removeAccents(str) {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/Đ/g, "D")
      .toLowerCase();
  }

  /** Áp dụng đồng thời bộ lọc phân khối + từ khóa tìm kiếm, rồi render lại */
  function applyFiltersAndSearch() {
    let result =
      currentFilter === "all"
        ? PRODUCTS
        : PRODUCTS.filter((product) => product.category === currentFilter);

    if (currentSearch.trim() !== "") {
      const keyword = removeAccents(currentSearch.trim());
      result = result.filter((product) =>
        removeAccents(product.name).includes(keyword)
      );
    }

    renderProducts(result, grid);

    // Cập nhật dòng thông báo số kết quả khi đang tìm kiếm
    if (currentSearch.trim() !== "") {
      resultInfo.style.display = "block";
      resultInfo.textContent =
        result.length > 0
          ? `Tìm thấy ${result.length} sản phẩm cho "${currentSearch.trim()}"`
          : `Không tìm thấy sản phẩm nào cho "${currentSearch.trim()}"`;
    } else {
      resultInfo.style.display = "none";
    }
  }

  // Gắn sự kiện lọc cho từng nút filter
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.dataset.filter;
      applyFiltersAndSearch();
    });
  });

  // Gắn sự kiện tìm kiếm theo tên sản phẩm
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      currentSearch = searchInput.value;
      searchClear.classList.toggle("visible", currentSearch.length > 0);
      applyFiltersAndSearch();
    });
  }

  // Nút xóa nhanh nội dung tìm kiếm
  if (searchClear) {
    searchClear.addEventListener("click", () => {
      searchInput.value = "";
      currentSearch = "";
      searchClear.classList.remove("visible");
      applyFiltersAndSearch();
      searchInput.focus();
    });
  }
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