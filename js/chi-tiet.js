/* ==========================================================
   CHI-TIET.JS — Hiển thị chi tiết một sản phẩm
   Lấy id sản phẩm từ query string (?product=...) rồi tìm
   trong mảng PRODUCTS (data.js) để đổ dữ liệu ra trang.
   (nhớ nhúng data.js TRƯỚC chi-tiet.js trong chi-tiet.html)
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("product");
  const product = getProductById(productId);

  const container = document.querySelector(".detail-container");

  if (!product) {
    container.innerHTML = `
      <p style="padding: 20px;">
        Không tìm thấy sản phẩm bạn yêu cầu.
        <a href="san-pham.html">Quay lại danh sách sản phẩm</a>
      </p>`;
    return;
  }

  document.title = `${product.name} - BIG BIKE`;

  const img = document.getElementById("prod-img");
  img.src = product.image;
  img.alt = product.name;

  document.getElementById("prod-title").textContent = product.name;
  document.getElementById("prod-price").textContent = formatPrice(product.price);
  document.getElementById("prod-weight").textContent = product.displacement;
  document.getElementById("prod-desc").textContent = product.description;
  document.getElementById("prod-ingredients").textContent = product.specs;
});
