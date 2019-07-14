// function ValidateForm(inputText) {
//     var pass = false;
//     pass = ValidateUserName(inputText.urname.value);
//     if (pass) {
//         pass = ValidateEmail(inputText.email);
//     }
//     if (pass) {
//         pass = ValidatePassword(inputText.passwd.value);
//     }
//     if (pass) {
//         pass = ValidatePasswordFinal(inputText.passwd.value, inputText.cpasswd.value);
//     }
//     if (pass) {
//         return true;
//     }
//     return false;
// }

// function ValidateUserName(inputText) {
//     if (inputText !== "") {
//         return true;
//     } else {
//         document.RegistrationForm.urname.focus();
//         document.getElementById("userNameError").innerHTML = "User Name is empty";
//         return false;
//     }
// }

// function ValidateEmail(inputText) {
//     var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


//     if (inputText.value.match(mailformat)) {
//         document.RegistrationForm.email.focus();
//         return true;
//     } else {
//         document.RegistrationForm.email.focus();
//         document.getElementById("emailError").innerHTML = "email is not in correct format";
//         return false;
//     }
// }

// function ValidatePassword(inputPass) {
//     var password = "";
//     password = inputPass;
//     if (inputPass.length == 0) {
//         document.RegistrationForm.passwd.focus();
//         document.getElementById("passwordError").innerHTML = "Password is Required";
//         return false;
//     } else if (password.length < 5 || 15 < password.length) {
//         document.RegistrationForm.passwd.focus();
//         document.getElementById("passwordError").innerHTML = "Password must be less than 15 charcachter and more than 5";
//         return false;
//     }
//     return true;
// }

// function ValidatePasswordFinal(inputPass, inputConfirmPass) {
//     var password = "";
//     password = inputPass;
//     var passwordConfirm = "";
//     passwordConfirm = inputConfirmPass;
//     if (passwordConfirm.length === 0) {
//         document.RegistrationForm.cpasswd.focus();
//         document.getElementById("confirmError").innerHTML = "Password confirmation is Required";
//         return false;
//     } else if (password !== passwordConfirm) {
//         document.RegistrationForm.cpasswd.focus();
//         document.getElementById("confirmError").innerHTML = "pasword and confirmation is not matched";
//         return false;
//     }
//     return true;
// }


// function ValidateLoginForm(inputText) {
//     var pass = false;
//     pass = ValidateLoginFormEmail(inputText.email);
//     if (pass) {
//         pass = ValidateLoginFormPassword(inputText.passwd.value);
//         console.log(pass);
//     }
//     if (pass) {
//         return true;
//     }
//     return false;
// }

// function ValidateLoginFormEmail(inputText) {
//     var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     if (inputText.value.match(mailformat)) {
//         document.loginForm.email.focus();
//         return true;
//     } else {
//         document.loginForm.email.focus();
//         document.getElementById("loginEmailError").innerHTML = "email is not in correct format";
//         return false;
//     }
// }

// function ValidateLoginFormPassword(inputPass) {
//     var password = "";
//     password = inputPass;
//     if (inputPass.length == 0) {
//         document.loginForm.passwd.focus();
//         document.getElementById("loginPasswordError").innerHTML = "Password is Required";
//         return false;
//     } else if (password.length < 5 || 15 < password.length) {
//         document.loginForm.passwd.focus();
//         document.getElementById("loginPasswordError").innerHTML = "Password must be less than 15 charcachter and more than 5";
//         return false;
//     }
//     return true;
// }

// var bool = false;

// $(document).ready(function () {
//     var checkInDate = new Date();
//     checkInDate.setDate(checkInDate.getDate());
//     var checkOutDate = new Date();
//     checkOutDate.setDate(checkInDate.getDate() + 1);

//     $("#endDate").datepicker({
//         startDate: checkInDate,
//         clearBtn: true,
//         autoclose: true
//     });

//     $("#startDate").datepicker({
//         startDate: checkInDate,
//         clearBtn: true,
//         autoclose: true,
//     }).on('changeDate', function (selected) {
//         if (selected.date) {
//             var minDate = new Date(selected.date.valueOf());
//             $('#endDate').datepicker('setStartDate', minDate);
//         }

//     });

//     $("#endDate").datepicker().on('changeDate', function (selected) {
//         if (selected.date) {
//             var minDate = new Date(selected.date.valueOf());
//             $('#startDate').datepicker('setEndDate', minDate);
//         }
//     });

//     $(".nav li").on("click", function () {
//         $(".nav li").removeClass("active");
//         $(this).addClass("active");
//     });

//     $('.selectpicker').selectpicker();

//     $('input:radio[name="inlineRadioOptions"]').change(function () {
//         if ($(this).val() == 'Stars') {
//             $('div[class="select"]').each(function () {
//                 console.log($(this).addClass("hide"));
//             });
//             document.getElementById("SelectByStars").classList.remove("hide");
//         } else if ($(this).val() == 'Raitings') {
//             $('div[class="select"]').each(function () {
//                 console.log($(this).addClass("hide"));
//             });
//             document.getElementById("SelectByRatings").classList.remove("hide");
//         }
//     });

//     $('#star_select').on('change', function () {
//         var url = "https://www.google.com/ "; // get selected value
//         if (url) { // require a URL
//             window.location = url; // redirect
//         }
//         return false;
//     });




// });

// function FilterByStars() {

// }


// function test() {
//     var test = document.getElementById("select");
//     test = $('#select').val();
//     console.log(test);

//     test = $('#star_select').val();
//     console.log(test);

// }