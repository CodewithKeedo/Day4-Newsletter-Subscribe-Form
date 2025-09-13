 document.addEventListener('DOMContentLoaded', ()=>{
    const form = document.getElementById("subscribeForm");
    const emailInput = document.getElementById("emailInput");
    const formMessage = document.getElementById("formMessage");
    const successState = document.getElementById("successState");

    form.addEventListener("submit", e => {
      e.preventDefault();

      const emailValue = emailInput.value.trim();
      const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

      if(!emailValue){
        formMessage.textContent = "Email is required";
        emailInput.style.borderColor = "#dc2626";
        formMessage.className = "message error";
        formMessage.style.display = "block";
        return;
      }
      else if (!emailPattern.test(emailValue)) {
        formMessage.textContent = "❌ Please enter a valid email address.";
        formMessage.className = "message error";
        formMessage.style.display = "block";
        emailInput.style.borderColor = "#dc2626";
        return;
      }


      // Success
      form.style.display = "none";
      successState.style.display = "block";
    });
    });
