var modal = document.getElementById('id01');

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function check(form) {
    if (form.uname.value == "admin" && form.psw.value == "123456") {
        alert("Đăng nhập thành công!")
    }
    else if (form.uname.value == "admin") {
        alert("Sai mật khẩu!")
    }
    else {
        alert("Tài khoản không tồn tại!")
    }
}