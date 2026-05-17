/* ========================= */
/* ELEMENTS */
/* ========================= */

const form =document.querySelector(".contactForm");
const firstName =document.querySelector(".firstName");
const lastName =document.querySelector(".lastName");
const email =document.querySelector(".email");
const phone =document.querySelector(".phone");
const inquiryType =document.querySelector(".inquiryType");
const hearAbout =document.querySelector(".hearAbout");
const message =document.querySelector(".message");
const terms =document.querySelector(".terms");
const submitBtn =document.querySelector(".submitBtn");

/* ========================= */
/* VALIDATE EMAIL */
/* ========================= */
const validateEmail = (emailValue) => {
    return emailValue.includes("@");
};

/* ========================= */
/* SUBMIT FORM */
/* ========================= */

const submitForm = async (e) => {

    e.preventDefault();
    /* ========================= */
    /* VALIDATION */
    /* ========================= */

    if (firstName.value.trim() === "") {
        alert("Enter first name");
        return;
    }

    if (lastName.value.trim() === "") {
        alert("Enter last name");
        return;
    }

    if (email.value.trim() === "") {
        alert("Enter email");
        return;
    }

    if (!validateEmail(email.value)) {
        alert("Enter valid email");
        return;
    }

    if (phone.value.trim() === "") {
        alert("Enter phone number");
        return;
    }
    if (message.value.trim() === "") {
        alert("Enter message");
        return;
    }
    if (!terms.checked) {
        alert("Accept terms first");
        return;
    }

    /* ========================= */
    /* FORM DATA */
    /* ========================= */

    const formData = {
        firstName:firstName.value,
        lastName:lastName.value,
        email:email.value,
        phone:phone.value,
        inquiryType:inquiryType.value,
        hearAbout:hearAbout.value,
        message:message.value
    };

    console.log(formData);
    /* ========================= */
    /* LOADING STATE */
    /* ========================= */
    submitBtn.disabled = true;
    submitBtn.innerText ="Sending...";

    try {
        /* ========================= */
        /* SEND DATA */
        /* ========================= */
        const response = await axios.post("http://localhost/real-estate-project/api/create-contact.php",formData);

        console.log(response.data);

        /* ========================= */
        /* SUCCESS */
        /* ========================= */
        alert("Message sent successfully");

        /* ========================= */
        /* RESET FORM */
        /* ========================= */

        form.reset();

    } catch (error) {
        console.log(error);
        alert("Something went wrong");

    } finally {
        submitBtn.disabled = false;
        submitBtn.innerText ="Send Your Message";
    }
};

/* ========================= */
/* EVENT */
/* ========================= */

form.addEventListener("submit",submitForm);

AOS.init();


    const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");
    const closeMenu = document.getElementById("closeMenu");
    const overlay = document.getElementById("overlay");

    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.remove("translate-x-full");
        overlay.classList.remove("hidden");
    });

    closeMenu.addEventListener("click", closeSidebar);
    overlay.addEventListener("click", closeSidebar);

    function closeSidebar() {
        mobileMenu.classList.add("translate-x-full");
        overlay.classList.add("hidden");
    }


    const btnClose = document.getElementById("btnClose");
btnClose.addEventListener("click", function () {
    const note = document.getElementById("note");
    note.classList.add("hidden");
});