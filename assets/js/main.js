let inputFields = document.querySelectorAll(".form input");
let textarea = document.querySelector(".form textarea");

let forms = JSON.parse(localStorage.getItem("form-input")) || [];

// Add Message
function sendMessage() {
    let valid = true;

    for (let i = 0; i < inputFields.length; i++) {
        if (inputFields[i].value.trim() === "") {
            valid = false;
        }
    }

    if (textarea.value.trim() === "") {
        valid = false;
    }

    if (valid) {
        let formData = {
            name: inputFields[0].value,
            email: inputFields[1].value,
            subject: inputFields[2].value,
            textarea: textarea.value,
        };

        forms.push(formData);
        localStorage.setItem("form-input", JSON.stringify(forms));
        alert("Sent Successfully");
    } else {
        alert("Please Fill All Fields");
    }
}

let bars=document.querySelector(".bars i")
let menu=document.querySelector(".nav-link")
let logo=document.querySelector(".logo")
bars.addEventListener("click",()=>{
    if(menu.clientHeight==0){
        menu.style.height=`${menu.scrollHeight}px`
        logo.style.display="none"
    }
    else{
        menu.style.height=0
        logo.style.display="block"

    }
});
window.addEventListener("resize",()=>{
    if(window.innerWidth > 780){
        menu.style.height=0
    }
});
