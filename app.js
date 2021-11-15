let getElmIdLogin = document.querySelector("#login");
let getElmIdRegister = document.querySelector("#Register");
let elementClassBtn__login = document.querySelector(".btn__login");
let elementClassBtn__register = document.querySelector(".btn__register");
let elementClassBtn__bgColor = document.querySelector(".btn__bgColor");
let elementClassBtns = document.querySelectorAll(".btn");
let elementClassBtn__bgColors = document.querySelectorAll(".btn__bgColor");
let getElmIdLinkCovertHtmls = document.querySelectorAll(".link-convert-html");
// hàm hover cho nút Login
function hoverElmClassBtn__bgColor() {
  for (let i = 0; i < 2; i++) {
    elementClassBtns[i].onmouseover = function () {
      elementClassBtn__bgColors[i].style.left = "-100%";
    };
    elementClassBtns[i].onmouseout = function () {
      elementClassBtn__bgColors[i].style.left = "0";
    };
  }
}
//Hàm click để  đóng các thông báo lỗi;
let ElmNameError1s = document.querySelectorAll(".userName-error1");
let ElmNameError2s = document.querySelectorAll(".userName-error2");
let ElmPasswordError1s = document.querySelectorAll(".password-error1");
let ElmPasswordError2s = document.querySelectorAll(".password-error2");
let ElmConfirmPasswordError1 = document.querySelector(
  ".confirm-password-error1"
);
let ElmConfirmPasswordError2 = document.querySelector(
  ".confirm-password-error2"
);

//

function closeNotify() {
  document.querySelector("body").addEventListener("click", function (e) {
    for (let i = 0; i < 2; i++) {
      ElmNameError1s[i].style.display = "none";
      ElmNameError2s[i].style.display = "none";
      ElmPasswordError1s[i].style.display = "none";
      ElmPasswordError2s[i].style.display = "none";
    }
    ElmConfirmPasswordError1.style.display = "none";
    ElmConfirmPasswordError2.style.display = "none";
    e.stopPropagation();
  });
  for (let i = 0; i < 2; i++) {
    elementClassBtns[i].addEventListener("click", function (e) {
      e.stopPropagation();
    });

    getElmIdLinkCovertHtmls[i].addEventListener("click", function (e) {
      e.stopPropagation();
    });
  }
}
// Hàm kiểm tra xem người dùng nhập tên vào nếu chưa đúng thì hiện thông báo lỗi.
let ElmNameInputs = document.querySelectorAll(".userName");
function checkUserName() {
  for (let i = 0; i < 2; i++) {
    elementClassBtns[i].addEventListener("click", function (even) {
      if (ElmNameInputs[i].value.length == 0) {
        even.preventDefault();
        ElmNameError1s[i].style.display = "block";
        setTimeout(function () {
          ElmNameError1s[i].style.display = "none";
        }, 7000);
      } else if (
        ElmNameInputs[i].value.length < 6 &&
        ElmNameInputs[i].value.length > 0
      ) {
        even.preventDefault();
        ElmNameError2s[i].style.display = "block";
        setTimeout(function () {
          ElmNameError2s[i].style.display = "none";
        }, 7000);
      }
    });
  }
}
// Hàm kiểm tra xem người dùng nhập mật khẩu vào nếu chưa đúng thì hiện thông báo lỗi.
let getElmPasswordInputs = document.querySelectorAll(".password");
function checkPassword() {
  for (let i = 0; i < 2; i++) {
    elementClassBtns[i].addEventListener("click", function (even) {
      if (getElmPasswordInputs[i].value.length == 0) {
        even.preventDefault();
        ElmPasswordError1s[i].style.display = "block";
        setTimeout(function () {
          ElmPasswordError1s[i].style.display = "none";
        }, 7000);
      } else if (
        getElmPasswordInputs[i].value.length < 6&&
        getElmPasswordInputs[i].value.length > 0
      ) {
        even.preventDefault();
        ElmPasswordError2s[i].style.display = "block";
        setTimeout(function () {
          ElmPasswordError2s[i].style.display = "none";
        }, 7000);
      }
    });
  }
}
// Hàm kiểm tra xem người dùng nhập lại mật khẩu vào nếu chưa đúng thì hiện thông báo lỗi.
let getElmConfirmPasswordInput = document.querySelector("#confirmPassword");
function checkConfirmPassword() {
  elementClassBtn__register.addEventListener("click", function (even) {
    if (getElmConfirmPasswordInput.value.length == 0) {
      even.preventDefault();
      ElmConfirmPasswordError1.style.display = "block";
      setTimeout(function () {
        ElmConfirmPasswordError1.style.display = "none";
      }, 7000);
    } else if (
      getElmPasswordInputs[1].value != getElmConfirmPasswordInput.value
    ) {
      console.log("xn");
      even.preventDefault();
      ElmConfirmPasswordError2.style.display = "block";
      setTimeout(function () {
        ElmConfirmPasswordError2.style.display = "none";
      }, 7000);
    }
  });
}

// hàm hiển thị mật khẩu hoặc ẩn đi cho phần nhập mật khẩu
function changeViewIcon() {
  let viewOns = document.querySelectorAll(".view-icon");
  for (let i = 0; i < 2; i++) {
    viewOns[i].onclick = function () {
      if (viewOns[i].innerHTML.trim() == '<i class="far fa-eye-slash"></i>') {
        viewOns[i].innerHTML = '<i class="far fa-eye"></i>';
        getElmPasswordInputs[i].type = "text";
      } else {
        viewOns[i].innerHTML = '<i class="far fa-eye-slash"></i>';
        getElmPasswordInputs[i].type = "password";
      }
    };
  }
}
//// hàm hiển thị mật khẩu hoặc ẩn đi cho phần xác nhận lại mật khẩu
function changeViewIconConfirmPassword() {
  let getElmClassViewIconConfirm = document.querySelector(".view-icon-confirm");
  let getElmInputConfirmPassword = document.getElementById("confirmPassword");
  getElmClassViewIconConfirm.onclick = function () {
    if (
      getElmClassViewIconConfirm.innerHTML.trim() ==
      '<i class="far fa-eye-slash"></i>'
    ) {
      getElmClassViewIconConfirm.innerHTML = '<i class="far fa-eye"></i>';
      getElmInputConfirmPassword.type = "text";
    } else {
      getElmClassViewIconConfirm.innerHTML = '<i class="far fa-eye-slash"></i>';
      getElmInputConfirmPassword.type = "password";
    }
  };
}
// Hàm thay đổi HTML của trang login thành  register
let getElmTitle = document.querySelector("title");
let getElmClassCreateAccountLink = document.querySelector(
  ".create-account-link"
);
let getElmClassPagesLoginLink = document.querySelector(
  ".pagesLogIn-link"
);
function toConvertRegister() {
  getElmClassCreateAccountLink.onclick = function () {
    getElmTitle.innerText = "Register";
    getElmIdLogin.style.display = "none";
    getElmIdRegister.style.display = "block";
  };
}
//Hàm thay đổi HTML của trang register thành trang login
function toConvertLogin() {
  getElmClassPagesLoginLink.onclick = function () {
    getElmTitle.innerText = "Log In";
    getElmIdLogin.style.display = "block";
    getElmIdRegister.style.display = "none";
  };
}
//Hàm kiểm tra thông tin người dùng nhập vào để đăng kí đúng hay sai;
let user_name = document.querySelectorAll(".input-userName>input")[1];
let password = document.querySelectorAll(".input-password>input")[1];
let confirmPassword = document.querySelector(
  ".input-password-confirm>input"
);
function isCheckInfoRegister() {
  console.log(password)
  console.log(confirmPassword)
  return (
    user_name.value.length >= 6 &&
    user_name.value.length < 32 &&
    password.value.length >=6 &&
    password.value.length < 32 &&
    password.value == confirmPassword.value
    
  );
}
// hàm cho phép gửi dữ liệu vào thông báo đăng kí thành công nếu thông tin người dùng nhập vào đúng
function tosSendInfoRegister() {
  elementClassBtn__register.onclick = function (e) {
    e.preventDefault();
    if (isCheckInfoRegister()) {
      document.querySelectorAll(".imageBgColor1")[1].classList.remove(
        "imageBgColor1"
      );
      document.querySelectorAll(".imageBgColor2")[1].classList.remove(
        "imageBgColor2"
      );
      document.querySelectorAll(".imageBgColor3")[1].classList.remove(
        "imageBgColor3"
      );
      document.querySelector(".main").style.backgroundImage =
        "URL('anhnen.jpg')";
      document.querySelector(".main").style.height = "100vh";
      document.querySelectorAll(".container")[1].outerHTML =
        '<h2 style="text-align:center;color:blue;font-size:50px;line-height:100vh">SUCCESS</h2>';
    
    
    setTimeout(function () {
      alert("Register account success !");
    }, 500);
    
  }
}
}
checkUserName();
checkPassword();
checkConfirmPassword();
closeNotify();
changeViewIcon();
changeViewIconConfirmPassword();
hoverElmClassBtn__bgColor();
tosSendInfoRegister();
toConvertLogin();
toConvertRegister();