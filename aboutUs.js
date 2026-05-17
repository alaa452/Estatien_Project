


/* ========================= */
/* ELEMENTS */
/* ========================= */

const cardJs =
    document.querySelector(".cardJs");

const leftArrow =
    document.querySelector(".leftArrow");

const rightArrow =
    document.querySelector(".rightArrow");

const cardCounter =
    document.querySelector(".cardCounter");



/* ========================= */
/* DATA */
/* ========================= */

const getCards = async () => {

    try {

        const response =await axios.get("http://localhost/real-estate-project/api/clients.php");
        return response.data;

    } catch (error) {
        console.log(error);
    }
};

/* ========================= */
/* RESPONSIVE */
/* ========================= */

const getCardsPerView = () => {

    if (window.innerWidth >= 768) {

        return 2;

    } else {

        return 1;
    }
};



/* ========================= */
/* SLIDER */
/* ========================= */

let currentIndex = 0;


const displayCards = () => {

    const cardsPerView =getCardsPerView();

    const visibleCards =cards.slice(currentIndex,currentIndex + cardsPerView);


    const allCards =
        visibleCards.map((card) => `
        <div class="client-card">
                    <div class="client-head">
                        <div class="client-meta">
                            <p class="client-since">${card.date}</p>
                            <h3 class="client-name">${card.title}</h3>
                        </div>
                        <button class="btn-primary client-visit hover:bg-white/10 hover:text-textHover">
                            Visit Website
                        </button>
                    </div>
                    <div class="client-tags">
                        <div class="client-tag client-tag--divider">
                            <div class="client-tag-label">
                                <img src="./assets/icons/Domain.png" alt="Domain" class="client-tag-icon">
                                <p class="client-tag-name">
                                    Domain</p>
                            </div>
                            <h4 class="client-tag-value">${card.domain}</h4>
                        </div>
                        <div class="client-tag">
                            <div class="client-tag-label">
                                <img src="./assets/icons/Category.png" alt="Category" class="client-tag-icon">
                                <p class="client-tag-name">
                                    Category</p>
                            </div>
                            <h4 class="client-tag-value">${card.category}</h4>
                        </div>
                    </div>
                    <div class="client-quote">
                        <p class="client-quote-title">What They Said 🤗</p>
                        <p class="client-quote-text">${card.description}</p>
                    </div>
                </div>

    `);


    cardJs.innerHTML =allCards.join("");


    updateCounter();
};



/* ========================= */
/* COUNTER */
/* ========================= */

const updateCounter = () => {

    const cardsPerView =getCardsPerView();

    const totalPages =Math.ceil(cards.length / cardsPerView);

    const currentPage =Math.floor(currentIndex / cardsPerView) + 1;


    cardCounter.innerHTML = `<span>${currentPage.toString().padStart(2, "0")}</span> of ${totalPages}`;
};



/* ========================= */
/* NEXT */
/* ========================= */

rightArrow.addEventListener("click",() => {

        const cardsPerView =getCardsPerView();

        if (currentIndex + cardsPerView < cards.length) {
            currentIndex += cardsPerView;
            displayCards();
        }
    }
);

/* ========================= */
/* PREVIOUS */
/* ========================= */

leftArrow.addEventListener("click",() => {

        const cardsPerView = getCardsPerView();

        if (currentIndex - cardsPerView >= 0) {
            currentIndex -= cardsPerView;
            displayCards();
        }
    }
);


window.addEventListener("resize",() => {
        displayCards();
    });



const init = async () => {

    cards = await getCards();
    displayCards();
};

init();
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