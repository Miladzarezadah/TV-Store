///////////////////////Variables/////////////////////////
let $= document;
let body = $.body;
let LoginI = $.querySelector(".Icon-Account");
///////////////////////Modal/////////////////////////
let modal = $.querySelector(".modal");
let container = $.querySelector(".container");
///////////////////////َGroup/////////////////////////
let listGroup = $.querySelector(".list-Group");
let Grouping = $.querySelector(".Grouping");
let Group = $.querySelector(".Group");
///////////////////////Login Form/////////////////////////
let Form = $.querySelector(".Login");
let Close = $.querySelectorAll(".X");
let usernameL = $.querySelector(".Login-text");
let PasswordL = $.querySelector(".Login-Password");
let Passwordin = PasswordL.querySelector("input");
let Loginbtn = $.querySelector(".btn-Login");
let notAccount = $.querySelector(".notAccount");
let visibilitybtn = $.querySelectorAll(".visibility");
let unvisibilitybtn = $.querySelectorAll(".unvisibility");
let EPass = $.querySelector(".errorpass");
let Exit = $.querySelector(".Exit");
let Exita = Exit.querySelector("a");
let LoginABtn = $.querySelector(".haveAccount");
///////////////////////signup Form/////////////////////////
let signup = $.querySelector(".signup");
let Emailsignup = $.querySelector(".signup-Email");
let usernameS = $.querySelector(".signup-text");
let PasswordS = $.querySelector(".signup-Password");
let PasswordinS = PasswordS.querySelector("input");
let RePassword = $.querySelector(".RepeatPassword");
let RePasswordin = RePassword.querySelector("input");
let signupbtn = $.querySelector(".btn-signup");
let EPassSignup = $.querySelector(".errorpass-signup");
///////////////////////َArray/////////////////////////
let Admins = [
  {
    name: "Farshad",
    Username: "Farshad",
    password: "farshad1374",
  },
  {
    name: "Masoud",
    Username: "Masoud",
    password: "masoud1374",
  },
  {
    name: "Farhad",
    Username: "Farhad",
    password: "farhad1374",
  },
];
let UserS = [
  {
    name: "Milad",
    Username: "Milad",
    password: "mili.67213@",
    email: "mili67213@gmail.com",
  },
];

///////////////////////َGroup/////////////////////////
listGroup.addEventListener("mouseover", openGroup);
Group.addEventListener("mouseleave", closeGroup);
///////////////////////Login Form/////////////////////////
LoginI.addEventListener("click", openForm);
body.addEventListener("keydown", keyHandler);
Close[0].addEventListener("click", closeform);
Loginbtn.addEventListener("click", loginHandler);
Exit.addEventListener("click", Exitf);
LoginABtn.addEventListener("click", openLogin);
///////////////////////signup Form/////////////////////////
notAccount.addEventListener("click", OpenSignup);
Close[1].addEventListener("click", CloseSignup);
signupbtn.addEventListener("click", signuoHandler);
///////////////////////Code/////////////////////////

function openGroup() {
  Grouping.style.display = "block";
}

function closeGroup() {
  Grouping.style.display = "none";
}

function openForm(event) {
  Form.style.display = "flex";
  modal.style.filter = "blur(5px)";
}

function closeform() {
  Form.style.display = "none";
  modal.style.filter = "blur(0px)";
}

visibilitybtn.forEach(function (Icon) {
  Icon.addEventListener("click", function () {
    Icon.nextElementSibling.nextElementSibling.type = "text";
    Icon.style.display = "none";
    Icon.nextElementSibling.style.display = "block";
  });
});

unvisibilitybtn.forEach(function (Icon) {
  Icon.addEventListener("click", function () {
    Icon.nextElementSibling.type = "password";
    Icon.style.display = "none";
    Icon.previousElementSibling.style.display = "block";
  });
});

function loginHandler() {
  if (usernameL.value.length == "") {
    EPass.innerHTML = "لطفا نام کاربری را وارد کنید";
  } else if (Passwordin.value.length <= 7) {
    EPass.innerHTML = "گذرواژه باید حداقل 8 کاراکتر  باشد";
  } else {
    EPass.innerHTML = "";
    Admins.forEach(function (user) {
      if (
        usernameL.value == user.Username &&
        Passwordin.value == user.password
      ) {
        Form.style.display = "none";
        modal.style.filter = "blur(0px)";
        Exita.style.display = "block";
        LoginI.removeEventListener("click", openForm);
      } else {
        EPass.innerHTML = "لطفا اطلاعات را صحیح وارد کنید";
      }
    });
    UserS.forEach(function (user) {
      if (
        usernameL.value == user.Username &&
        Passwordin.value == user.password
      ) {
        Form.style.display = "none";
        modal.style.filter = "blur(0px)";
        Exita.style.display = "block";
        LoginI.removeEventListener("click", openForm);
      } else {
        EPass.innerHTML = "لطفا اطلاعات را صحیح وارد کنید";
      }
    });
  }
}

function keyHandler(event) {
  if (Form.style.display == "flex") {
    if (event.key == "Escape") {
      Form.style.display = "none";
      modal.style.filter = "blur(0px)";
    } else if (event.key == "Enter") {
      loginHandler();
    }
  } else if (signup.style.display == "flex") {
    if (event.key == "Escape") {
      signup.style.display = "none";
      modal.style.filter = "blur(0px)";
    } else if (event.key == "Enter") {
      signuoHandler();
    }
  }
}
function Exitf() {
  Exita.style.display = "none";
  EPass.innerHTML = "";
  EPassSignup.innerHTML = "";
}

function OpenSignup(event) {
  event.preventDefault();
  Form.style.display = "none";
  signup.style.display = "flex";
  modal.style.filter = "blur(5px)";
}

function CloseSignup(event) {
  Form.style.display = "none";
  signup.style.display = "none";
  modal.style.filter = "blur(0px)";
}

function signuoHandler() {
  if (
    Emailsignup.value.indexOf("gmail.com") == -1 &&
    Emailsignup.value.indexOf("email.com") == -1
  ) {
    EPassSignup.innerHTML = "لطفا ایمیل را صحیح وارد کنید";
  } else if (usernameS.value.length < 3) {
    EPassSignup.innerHTML = "لطفا نام کاربری را صحیح وارد کنید";
  } else if (PasswordinS.value.length <= 7) {
    EPassSignup.innerHTML = "گذروژاه حدقل باید 8 کاراکتر باشد";
  } else if (
    PasswordinS.value == PasswordinS.value ||
    PasswordinS.value.length <= 7
  ) {
    EPassSignup.innerHTML = "";
    UserS.forEach(function (user) {
      if (usernameS.value == user.Username) {
        EPassSignup.innerHTML = "این نام کاربری در سایت وجود دارد";
      } else if (usernameS.value !== user.Username) {
        let newUser = {
          Username: usernameS.value,
          password: PasswordinS.value,
          email: Emailsignup.value,
          name: usernameS.value,
        };
        UserS.push(newUser);
        console.log(UserS);
        signup.style.display = "none";
        Exit.style.display = "block";
        modal.style.filter = "blur(0px)";
        LoginI.removeEventListener("click", openForm);
      }
    });
  } else {
    EPassSignup.innerHTML = "تکرار گذرواژه با گذرواژه مطابقت ندارد";
  }
}

function openLogin(event) {
  event.preventDefault();
  Form.style.display = "flex";
  signup.style.display = "none";
  modal.style.filter = "blur(5px)";
}
