document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    // Kiểm tra nếu không nhập đầy đủ tài khoản và mật khẩu
    if (!username || !password) {
      alert("Vui lòng nhập đầy đủ tài khoản và mật khẩu.");
      return;
    }

    // Mã đăng nhập thành công (dành cho ví dụ)
    alert("Đăng nhập thành công!");

    // Ẩn modal đăng nhập
    var loginModal = bootstrap.Modal.getInstance(
      document.getElementById("loginModal")
    );
    loginModal.hide();

    // Hiển thị modal thông báo đăng nhập thành công
    var successModal = new bootstrap.Modal(
      document.getElementById("loginSuccessModal")
    );
    successModal.show();

    // Sau 3 giây (3000 ms), đóng modal và chuyển trang
    setTimeout(function () {
      // Đóng modal thông báo đăng nhập thành công
      successModal.hide();

      // Chuyển hướng đến trang chủ
      window.location.href = "trang-chu.html"; // Bạn có thể thay đổi URL ở đây
    }, 3000); // 3 giây
  });
