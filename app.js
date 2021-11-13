function hoverElmClassBtn__bgColor() {
  let elementClassBtn__login = document.querySelector(".btn__login");
  let elementClassBtn__bgColor = document.querySelector(".btn__bgColor");
  elementClassBtn__login.onmouseover = function () {
    elementClassBtn__bgColor.style.left = "-100%";
  };
  elementClassBtn__login.onmouseout = function () {
    elementClassBtn__bgColor.style.left = "0";
  };
}
function hoverInputBorder() {
  let ElmNameInput = document.querySelector(".input-userName>input");
  let ElmPasswordInput = document.querySelector(".input-password>input");
  let ElmConfirmPasswordInput = document.querySelector(
    ".input-password-confirm>input"
  );
  ElmNameInput.onclick = function () {
    ElmNameInput.style.borderColor = "#333";
    ElmPasswordInput.style.borderColor = "#888";
    ElmConfirmPasswordInput.style.borderColor = "#888";
  };
  ElmPasswordInput.onclick = function () {
    ElmPasswordInput.style.borderColor = "#333";
    ElmNameInput.style.borderColor = "#888";
    ElmConfirmPasswordInput.style.borderColor = "#888";
  };
  if (ElmConfirmPasswordInput) {
    ElmConfirmPasswordInput.onclick = function () {
      ElmPasswordInput.style.borderColor = "#888";
      ElmNameInput.style.borderColor = "#888";
      ElmConfirmPasswordInput.style.borderColor = "#333";
    };
  }
}
hoverInputBorder();
//
function changeViewIcon() {
  let viewOn = document.querySelector(".view-icon");
  let elementPassword = document.getElementById("password");
  viewOn.onclick = function () {
    if (viewOn.innerHTML == '<i class="far fa-eye-slash"></i>') {
      viewOn.innerHTML = '<i class="far fa-eye"></i>';
      elementPassword.type = "";
    } else {
      viewOn.innerHTML = '<i class="far fa-eye-slash"></i>';
      elementPassword.type = "password";
    }
  };
}
//
function changeViewIconConfirmPassword() {
  let viewOn = document.querySelector(".view-icon-confirm");
  let elementPassword = document.getElementById("confirmPassword");
  viewOn.onclick = function () {
    if (viewOn.innerHTML == '<i class="far fa-eye-slash"></i>') {
      viewOn.innerHTML = '<i class="far fa-eye"></i>';
      elementPassword.type = "";
    } else {
      viewOn.innerHTML = '<i class="far fa-eye-slash"></i>';
      elementPassword.type = "password";
    }
  };
}

let pagesLogInHtml = document.querySelector(".content").innerHTML;
//
function changeHTML() {
  document.querySelector("#link-convert-html").onclick = function () {
    if (
      document.querySelector("#link-convert-html").classList.value ==
      "create-account-link"
    ) {
      document.querySelector(".content").innerHTML = `
<div class="content__title"><h1>Register</h1></div>

<label class="header-userName" for="userName"> User Name </label>
<div  class="input-userName">
<input minlength="6" maxlength="32" type="text" required name="userName" id="userName" placeholder="Type your username"/>
 <i class="user-icon fas fa-user"></i>
</div>
<label class="header-password" for="password" >Password</label>
<div class="input-password">
<input minlength="6" maxlength="32" type="password" required name="password" id="password" placeholder="Type your password"/>
<i class="password-icon fas fa-lock"></i>
 <div class="view-icon">
       <i class="far fa-eye-slash"></i>
 </div> 
 <label class="header-confirmPassword" for="confirmPassword" >Confirm Password</label>
 <div class="input-password-confirm">
<input minlength="6" maxlength="32" type="password" required name="confirmPassword" id="confirmPassword" placeholder="Type your password"/>
<i class="password-icon fas fa-lock"></i>
 <div class="view-icon-confirm">
       <i class="far fa-eye-slash"></i>
 </div> 
</div>
<div class="big-btn">
  <div class="btn__bgColor"></div>
  <input class="btn__login" type="submit" value="REGISTER">
</div>
</form>
<div class="social">
    <div class="socials__header"><p>Or Using</p></div>
</div>
<div class="social__container">
<div class="social__item facebook-item">
  <i class="social__facebook-icon fab fa-facebook-f"></i>
  <p class="social__text">Facebook</p>
</div>
<div class="social__item google-item">
  <i class="social__google-icon fab fa-google"></i>
  <p class="social__text">Google</p>
</div>
<div class="social__item twitter-item">
  <i class="social__twitter-icon fab fa-twitter"></i>
  <p class="social__text">Twitter</p>
</div>
</div>
<div class="create-account">
  <p class="create-account__text">Already have an account?
      <span id='link-convert-html' class="pagesLogIn-link">Log In</span>
  </p>
</div>

`;
      hoverElmClassBtn__bgColor();
      changeViewIcon();
      changeViewIconConfirmPassword();
      tosSendInfoRegister();
      hoverInputBorder();
    } else {
      document.querySelector(".content").innerHTML = pagesLogInHtml;
      return;
    }
  };
}
//

hoverElmClassBtn__bgColor();
changeViewIcon();
changeHTML();
tosSendInfoRegister();
//
// var user_name = document.querySelector(".input-userName>input");
// phải khai báo bên trong hàm ko gia trị =undefine;
function checkInfoRegister() {
  let user_name = document.querySelector(".input-userName>input").value;
  let password = document.querySelector(".input-password>input").value;
  let confirmPassword = document.querySelector(
    ".input-password-confirm>input"
  ).value;
  return (
    user_name.length > 6 &&
    user_name.length < 32 &&
    password.length > 6 &&
    password.length < 32 &&
    confirmPassword.length > 6 &&
    confirmPassword.length < 32 &&
    password === confirmPassword
  );
}
//
function tosSendInfoRegister() {
  if (document.querySelector(".content__title>h1").innerText == "Register") {
    let user_name = document.querySelector(".input-userName>input").value;
    let password = document.querySelector(".input-password>input").value;
    let confirmPassword = document.querySelector(
      ".input-password-confirm>input"
    ).value;
    let containerHTML = document.querySelector(".container").innerHTML;
    document.querySelector(".btn__login").onclick = function () {
      if (checkInfoRegister()) {
        document
          .querySelector(".imageBgColor1")
          .classList.remove("imageBgColor1");
        document
          .querySelector(".imageBgColor2")
          .classList.remove("imageBgColor2");
        document
          .querySelector(".imageBgColor3")
          .classList.remove("imageBgColor3");
        document.querySelector(".main").style.backgroundImage =
          "URL('anhnen.jpg')";
        document.querySelector(".main").style.height = "100vh";
        document.querySelector(".container").outerHTML =
          '<h2 style="text-align:center;color:blue;font-size:50px;line-height:100vh">SUCCESS</h2>';
      } else {
        alert("Name or passwordWord or confirm is not correct !");
        return;
        // Dùng vòng lặp lồng nhau ko chay;
        // if (userName.length > 6 && userName.length < 32==false) {
        //   alert("Tên nhập vào chưa đúng");
        // } else if (!password.length > 6 && password.length < 32) {
        //   alert("Password nhập vào chưa đúng");
        // } else if (!confirmPassword.length > 6 && confirmPassword.length < 32) {
        //   alert("confirmPassword nhập vào chưa đúng");
        // } else if (!password === confirmPassword) {
        //   alert("Password và confirmPassword khác nhau");
        // }
      }
      setTimeout(function () {
        alert("Register account success !");
      }, 500);
    };
  }
}
