

/* ========================= */
/* ELEMENTS */
/* ========================= */

const searchInput = document.querySelector(".searchInput");
const findBtn = document.querySelector(".findBtn");
const cardJs = document.querySelector(".cardJS");
const leftArrow = document.querySelector(".leftArrow");
const rightArrow = document.querySelector(".rightArrow");
const cardCounter = document.querySelector(".cardCounter");
const locationSelect =document.querySelector(".locationSelect");
const typeSelect =document.querySelector(".typeSelect");
const priceSelect =document.querySelector(".priceSelect");

/* ========================= */
/* DATA */
/* ========================= */

let products = [];
let filteredProducts = [];
let currentIndex = 0;

/* ========================= */
/* GET DATA */
/* ========================= */

const getProducts = async () => {

    try {
        const response = await axios.get("http://localhost/real-estate-project/api/properties.php");
        return response.data;

    } catch (error) {
        console.log(error);
    }
};


/* ========================= */
/* RESPONSIVE */
/* ========================= */

const getCardsPerView = () => {

    if (window.innerWidth >= 1280) {
        return 3;

    } else if (window.innerWidth >= 640) {
        return 2;
    } else {
        return 1;
    }
};


/* ========================= */
/* DISPLAY CARDS */
/* ========================= */

const displayCards = (filteredProducts) => {

    const cardsPerView = getCardsPerView();
    const visibleCards =filteredProducts.slice(currentIndex,currentIndex + cardsPerView);

    const cards =
        visibleCards.map((card) => `

        <div class="property-card property-card--desktop card-js">
                <div>
                    <img src="${card.image}" class="rounded-xl">
                </div>
                <div>
                    <div class="pb-5 flex">
                        <p class="2xl:text-lg text-sm px-3.5 py-2 bg-background-secondary rounded-full">
                            ${card.title2}
                        </p>
                    </div>
                    <h3 class="property-title pb-1.5">${card.title}</h3>
                    <p class="property-desc">
                        ${card.description}
                        <a href="#" class="property-readmore">Read
                            More.</a>
                    </p>
                </div>
                <div class="flex gap-7.5 flex-wrap">
                    <div>
                        <span class="price-label">Price</span>
                        <span class="price-value">$${card.price}</span>
                    </div>
                    <div class="w-full">
                        <button class="btn-secondary property-btn hover:bg-btnSecondary/60">
                            <a href="property-details.html?id=${card.id}">View Property Details</a></button>
                    </div>
                </div>
            </div>
    `);

    cardJs.innerHTML = cards.join("");
    updateCounter();
};


/* ========================= */
/* COUNTER */
/* ========================= */

const updateCounter = () => {

    const cardsPerView = getCardsPerView();


    const totalPages = Math.ceil(filteredProducts.length / cardsPerView);
    const currentPage = Math.floor(currentIndex / cardsPerView) + 1;


    cardCounter.innerHTML = `<span>${currentPage.toString().padStart(2, "0")}</span> of ${totalPages}`;
};


/* ========================= */
/* SEARCH */
/* ========================= */

const searchProperties = async () => {

    try {

        const location =locationSelect.value;
        const type =typeSelect.value;
        const price =priceSelect.value;

        const response =await axios.get("http://localhost/real-estate-project/api/filter-properties.php",
                {
                    params: {
                        location,
                        type,
                        price
                    }
                }
            );
        filteredProducts =response.data;
        currentIndex = 0;
        displayCards(filteredProducts);
    } catch (error) {
        console.log(error);
    }
};

/* ========================= */
/* NEXT */
/* ========================= */

rightArrow.addEventListener("click", () => {

    const cardsPerView = getCardsPerView();
    if (currentIndex + cardsPerView < filteredProducts.length) {
        currentIndex += cardsPerView;
        displayCards(filteredProducts);
    }
}
);

/* ========================= */
/* PREVIOUS */
/* ========================= */

leftArrow.addEventListener("click", () => {

    const cardsPerView = getCardsPerView();
    if (currentIndex - cardsPerView >= 0) {
        currentIndex -= cardsPerView;
        displayCards(filteredProducts);
    }
}
);


/* ========================= */
/* SEARCH EVENT */
/* ========================= */

findBtn.addEventListener("click", () => {
    searchProperties();
});

/* ========================= */
/* RESPONSIVE */
/* ========================= */

window.addEventListener("resize", () => {
    currentIndex = 0;
    displayCards(filteredProducts);
});

/* ========================= */
/* INIT */
/* ========================= */

const init = async () => {

    products = await getProducts();
    filteredProducts = products;
    displayCards(products);
};

init();

/* ========================= */
/* ELEMENTS */
/* ========================= */
const form =document.querySelector(".contactForm");
const firstName =document.querySelector(".firstName");
const lastName =document.querySelector(".lastName");
const email =document.querySelector(".email");
const phone =document.querySelector(".phone");
const formLocation  =document.querySelector(".formLocation");
const propertyType =document.querySelector(".propertyType");
const bedrooms =document.querySelector(".bedrooms");
const bathrooms =document.querySelector(".bathrooms");
const budget =document.querySelector(".budget");
const message =document.querySelector(".message");
const terms =document.querySelector(".terms");
const submitBtn =document.querySelector(".submitBtn");

/* ========================= */
/* SUBMIT FORM */
/* ========================= */

const submitForm = async (e) => {

    e.preventDefault();
    /* ========================= */
    /* VALIDATION */
    /* ========================= */

    if (firstName.value === "") {
        alert("Enter first name");
        return;
    }
    if (lastName.value === "") {
        alert("Enter last name");
        return;
    }
    if (email.value === "") {
        alert("Enter email");
        return;
    }
    if (phone.value === "") {
        alert("Enter phone number");
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
        location:formLocation.value,
        propertyType:propertyType.value,
        bedrooms:bedrooms.value,
        bathrooms: bathrooms.value,
        budget: budget.value,
        message:message.value
    };

    console.log(formData);
    /* ========================= */
    /* LOADING */
    /* ========================= */
    submitBtn.disabled = true;
    submitBtn.innerText ="Sending...";
    try {
        /* ========================= */
        /* SEND DATA */
        /* ========================= */

        const response = await axios.post("http://localhost/real-estate-project/api/create-inquiry.php", formData);
        console.log(response.data);

        /* ========================= */
        /* SUCCESS */
        /* ========================= */

        alert("Message sent successfully");
        form.reset();

    } catch (error) {
        console.log(error);
        alert("Something went wrong");

    } finally {

        submitBtn.disabled = false;
        submitBtn.innerText = "Send Your Message";
    }
};

/* ========================= */
/* EVENT */
/* ========================= */

form.addEventListener("submit", submitForm);


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