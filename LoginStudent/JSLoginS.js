let signupBtnStudent = document.getElementById("signupBtnStudent");
let signupBtnCompany = document.getElementById("signupBtnCompany");
let signinBtnStudent = document.getElementById("signinBtnStudent");
let signinBtnCompany = document.getElementById("signinBtnCompany");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");

signinBtnStudent.onclick = function(){
    nameField.style.maxHeight= "0";
    title.innerHTML = "Sign In as a Student";
    signupBtnStudent.classList.add("disable");
    signinBtnStudent.classList.remove("disable");
    signupBtnCompany.classList.add("disable");
    signinBtnCompany.classList.add("disable");
};

signinBtnCompany.onclick = function(){
    nameField.style.maxHeight= "0";
    title.innerHTML = "Sign In as a Company";
    signupBtnCompany.classList.add("disable");
    signinBtnCompany.classList.remove("disable");
    signupBtnStudent.classList.add("disable");
    signinBtnStudent.classList.add("disable");
};

signupBtnStudent.onclick = function(){
    nameField.style.maxHeight= "60px";
    title.innerHTML = "Sign Up as a Student";
    signupBtnStudent.classList.remove("disable");
    signinBtnStudent.classList.add("disable");
    signupBtnCompany.classList.add("disable");
    signinBtnCompany.classList.add("disable");
};

signupBtnCompany.onclick = function(){
    nameField.style.maxHeight= "60px";
    title.innerHTML = "Sign Up as a Company";
    signupBtnCompany.classList.remove("disable");
    signinBtnCompany.classList.add("disable");
    signupBtnStudent.classList.add("disable");
    signinBtnStudent.classList.add("disable");
};
