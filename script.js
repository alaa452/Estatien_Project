

const btnClose = document.getElementById("btnClose");
btnClose.addEventListener("click", function () {
    const note = document.getElementById("note");
    note.classList.add("hidden");
});

const sliders = document.querySelectorAll(".slider");
/* ========================= */
/* ELEMENTS */
/* ========================= */

const cardJs = document.querySelector(".cardJS");
const cardJsSection2 = document.querySelector(".cardJsSection2");
const cardJsSection3 = document.querySelector(".cardJsSection3");



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

const getUsers = async () => {

    try {
        const response = await axios.get("http://localhost/real-estate-project/api/testimonials.php");
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

const getUsers2 = async () => {

    try {
        const response = await axios.get("http://localhost/real-estate-project/api/faqs.php");
        console.log(response.data);
        return response.data;

    } catch (error) {
        console.log(error);
    }
};

/* ========================= */
/* RESPONSIVE */
/* ========================= */

const getCardsPerView1 = () => {
    if (window.innerWidth >= 1280) {
        return 3;

    } else if (window.innerWidth >= 640) {
        return 2;

    } else {
        return 1;
    }
};

const getCardsPerView2 = () => {

    if (window.innerWidth >= 1063) {
        return 2;
    }
    else {
        return 1;
    }
}

/* ========================= */
/* REUSABLE SLIDER */
/* ========================= */

const createSlider = ({ container, leftArrow, rightArrow, counter, data, renderCard, cardsPerViewFunction }) => {

    let currentIndex = 0;

    const displayCards = () => {

        const cardsPerView = cardsPerViewFunction();
        const visibleCards = data.slice(currentIndex, currentIndex + cardsPerView);
        /* DO NOT CHANGE MAP */
        const cards = visibleCards.map(renderCard);
        container.innerHTML = cards.join("");
        updateCounter(counter, data.length, currentIndex, cardsPerView);
    };


    rightArrow.addEventListener("click", () => {
        const cardsPerView = cardsPerViewFunction();

        if (currentIndex + cardsPerView < data.length) {
            currentIndex += cardsPerView;
            displayCards();
        }
    }
    );

    leftArrow.addEventListener("click", () => {
        const cardsPerView =
            cardsPerViewFunction();
        if (currentIndex - cardsPerView >= 0) {
            currentIndex -= cardsPerView;
            displayCards();
        }
    }
    );


    window.addEventListener("resize", () => {
        displayCards();
    });

    displayCards();
};

/* ========================= */
/* COUNTER */
/* ========================= */

const updateCounter = (counter, totalItems, currentIndex, cardsPerView) => {

    const totalPages = Math.ceil(totalItems / cardsPerView);

    const currentPage = Math.floor(currentIndex / cardsPerView) + 1;
    counter.innerHTML = `<span>${currentPage.toString().padStart(2, "0")}</span>of ${totalPages}`;
};

/* ========================= */
/* INIT */
/* ========================= */

const init = async () => {

    const products = await getProducts();
    const users = await getUsers();
    const users2 = await getUsers2();

    /* ========================= */
    /* SECTION 1 */
    /* ========================= */

    createSlider({
        container: cardJs,
        leftArrow: document.querySelector(".leftArrow"),
        rightArrow: document.querySelector(".rightArrow"),
        counter: document.querySelector(".cardCounter"),
        data: products,
        cardsPerViewFunction: getCardsPerView1,

        renderCard: (card) => `
                <div class="property-card property-card--desktop card-js">
                <div>
                    <img src="${card.image}" alt="${card.title}" class="rounded-xl">
                </div>
                <div>
                    <h3 class="property-title">${card.title}</h3>
                    <p class="property-desc">${card.description}
                        <a href="#" class="property-readmore">Read
                            More.</a>
                    </p>
                </div>
                <div class="flex gap-2.5 w-full flex-wrap">
                    <div class="pill">
                        <img src="./assets/icons/Bedroom.png" alt="Bedroom" class="pill-icon">
                        <span class="pill-text"><span>${card.countBedroom}</span>-Bedroom</span>
                    </div>
                    <div class="pill">
                        <img src="./assets/icons/Bathroom.png" alt="Bathroom" class="pill-icon">
                        <span class="pill-text"><span>${card.countBathroom}</span>-Bathroom</span>
                    </div>
                    <div class="pill">
                        <img src="./assets/icons/Villa.png" alt="Villa" class="pill-icon">
                        <span class="pill-text">Villa</span>
                    </div>
                </div>
                <div class="flex gap-7.5 flex-wrap">
                    <div>
                        <span class="price-label font-bold">Price : </span>
                        <span class="price-value">$${card.price}</span>
                    </div>
                    <div class="w-full">
                        <button class="btn-secondary property-btn hover:bg-btnSecondary/60">
                            <a href="property-details.html?id=${card.id}">View Property Details</a></button>
                    </div>
                </div>
            </div>



        `
    });

    /* ========================= */
    /* SECTION 2 */
    /* ========================= */

    createSlider({

        container: cardJsSection2,
        leftArrow: document.querySelector(".leftArrow2"),
        rightArrow: document.querySelector(".rightArrow2"),
        counter: document.querySelector(".cardCounter2"),
        data: users,
        cardsPerViewFunction: getCardsPerView1,

        renderCard: (card) => `

            <div class="testimonial-card testimonial-card--pad testimonial-card--mobile card-js">
                <div class="flex gap-2.5">
                    <img src="./assets/icons/Shape.png" alt="Stars"
                        class="xl:p-2.5 p-1.5 rounded-full bg-background-secondary border border-border">
                    <img src="./assets/icons/Shape.png" alt="Stars"
                        class="xl:p-2.5 p-1.5 rounded-full bg-background-secondary border border-border">
                    <img src="./assets/icons/Shape.png" alt="Stars"
                        class="xl:p-2.5 p-1.5 rounded-full bg-background-secondary border border-border">
                    <img src="./assets/icons/Shape.png" alt="Stars"
                        class="xl:p-2.5 p-1.5 rounded-full bg-background-secondary border border-border">
                    <img src="./assets/icons/Shape.png" alt="Stars"
                        class="xl:p-2.5 p-1.5 rounded-full bg-background-secondary border border-border">
                </div>
                <div class="testimonial-body">
                    <h3 class="3xl:text-2xl sm:max-3xl:text-xl font-semibold">${card.title}</h3>
                    <p class="3xl:text-lg sm:max-3xl:text-base">Our experience with Estatein was outstanding. Their
                        ${card.description}
                    </p>
                </div>
                <div class="testimonial-user">
                    <img src="${card.image}" alt="Wade Warren" class="object-cover shrink-0">
                    <div>
                        <p class="testimonial-name">${card.name}</p>
                        <p class="testimonial-loc">${card.city}</p>
                    </div>
                </div>
            </div>

        `
    });

    createSlider({

        container: document.querySelector(".cardJsSection3"),
        leftArrow: document.querySelector(".leftArrow3"),
        rightArrow: document.querySelector(".rightArrow3"),
        counter: document.querySelector(".cardCounter3"),
        data: users2,
        cardsPerViewFunction: getCardsPerView1,

        renderCard: (card) => `

        <div class="faq-card faq-card--pad card-js max-sm:hidden">
                <div class="faq-body">
                    <h3 class="faq-title">${card.question}</h3>
                    <p class="faq-text">${card.answer}</p>
                    <button class="btn-primary faq-btn hover:bg-white/10 hover:text-textHover">
                        Read More
                    </button>
                </div>
            </div>
    `
    });
};

init();

AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


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
