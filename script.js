const showHide = document.querySelector(".showHide"),
      password = document.querySelector(".password");


      showHide.addEventListener("click",()=>{
        if(password.type === "password"){
            password.type = "text";
            showHide.classList.replace("uil-eye-slash","uil-eye");
        }else{
            password.type ="password";
            showHide.classList.replace("uil-eye","uil-eye-slash");
        }
      });