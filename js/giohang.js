const gioHang = [];

function themVaoGioHang(sanPham) {
  gioHang.push(sanPham);
  // Cập nhật giao diện giỏ hàng ở đây
  renderGioHang();
}

function renderGioHang() {
  const gioHangElement = document.getElementById("gio-hang");
  gioHangElement.innerHTML = "";
  gioHang.forEach((sanPham) => {
    // Tạo thẻ HTML cho mỗi sản phẩm và thêm vào gioHangElement
  });
}

// Hàm thêm sản phẩm vào giỏ hàng
function themVaoGioHang(id, ten, gia, hinhAnh) {
  // Tìm xem sản phẩm đã có trong giỏ hàng chưa
  const index = gioHang.findIndex((item) => item.id === id);

  if (index !== -1) {
    // Nếu đã có, tăng số lượng lên 1
    gioHang[index].soLuong++;
  } else {
    // Nếu chưa có, thêm vào mảng
    gioHang.push({
      id,
      ten,
      gia,
      hinhAnh,
      soLuong: 1,
    });
  }

  // Cập nhật lại giao diện giỏ hàng
  renderGioHang();
}

// Hàm vẽ lại giỏ hàng
function renderGioHang() {
  const tbody = document.getElementById("gio-hang").querySelector("tbody");
  tbody.innerHTML = "";

  let tongTien = 0;
  gioHang.forEach((sanPham) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td><img src="${sanPham.hinhAnh}" alt="${
      sanPham.ten
    }" width="50"> ${sanPham.ten}</td>
            <td><input type="number" value="${
              sanPham.soLuong
            }" min="1" data-id="${sanPham.id}"></td>
            <td>${sanPham.gia} VNĐ</td>
            <td>${sanPham.gia * sanPham.soLuong} VNĐ</td>
            <td><button class="btn btn-danger btn-xoa" data-id="${
              sanPham.id
            }">Xóa</button></td>
        `;
    tbody.appendChild(row);

    tongTien += sanPham.gia * sanPham.soLuong;
  });

  document.getElementById("tong-tien").textContent = tongTien + " VNĐ";
}

// Sự kiện khi click vào nút "Thêm vào giỏ hàng" (bạn cần thêm vào HTML)
document.querySelectorAll(".btn-add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    const id = button.dataset.id;
    const ten = button.dataset.ten;
    const gia = button.dataset.gia;
    const hinhAnh = button.dataset.hinhAnh;
    themVaoGioHang(id, ten, gia, hinhAnh);
  });
});

// Sự kiện khi thay đổi số lượng sản phẩm
document.getElementById("gio-hang").addEventListener("change", (event) => {
  if (event.target.tagName === "INPUT") {
    const id = event.target.dataset.id;
    const soLuongMoi = event.target.value;
    const sanPham = gioHang.find((item) => item.id === id);
    sanPham.soLuong = soLuongMoi;
    renderGioHang();
  }
});

// Sự kiện khi click vào nút "Xóa"
document.getElementById("gio-hang").addEventListener("click", (event) => {
  if (event.target.classList.contains("btn-xoa")) {
    const id = event.target.dataset.id;
    gioHang = gioHang.filter((item) => item.id !== id);
    renderGioHang();
  }
});
