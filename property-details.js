/* ============================================================ */
/*  property-details.js                                         */
/*  Fetches property data from PHP API and renders the page     */
/* ============================================================ */

const API_BASE = "http://localhost/real-estate-project/api/property-details.php";

/* ── Gallery state ──────────────────────────────────────────── */
let galleryImages  = [];   // all images for this property
let currentSlide   = 0;    // which pair is shown (0 = images[0]+images[1], etc.)
const IMAGES_PER_SLIDE = 2;

/* ============================================================ */
/*  1. Boot – read ?id= from URL and fetch                      */
/* ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id     = params.get("id");

  if (!id) {
    showError("No property ID provided.");
    return;
  }

  fetchProperty(id);
  initMobileMenu();
  initNavbarClose();
});

/* ============================================================ */
/*  2. Fetch property from API                                   */
/* ============================================================ */
async function fetchProperty(id) {
  try {
    const res  = await fetch(`${API_BASE}?id=${id}`);
    const data = await res.json();

    if (data.message) {
      showError(data.message);
      return;
    }

    renderPage(data);
  } catch (err) {
    showError("Failed to load property. Please try again.");
    console.error(err);
  }
}

/* ============================================================ */
/*  3. Main render – fills every section                        */
/* ============================================================ */
function renderPage(p) {
  galleryImages = p.images || [];
  currentSlide  = 0;

  renderHero(p);
  renderGallery();
  renderDescription(p);
  renderAmenities(p.amenities || []);
  renderInquiryForm(p);
  renderPricing(p.pricing || {});
}

/* ── 3a. Hero (title, location, price) ─────────────────────── */
function renderHero(p) {
  setText("#propertyTitle",    p.title        || "—");
  setText("#propertyLocation", p.location     || "—");
  setHTML("#propertyPrice",    formatPrice(p.pricing?.listingPrice ?? p.price));
}

/* ── 3b. Gallery ────────────────────────────────────────────── */
function renderGallery() {
  renderThumbnails();
  renderMainImages();
  renderDots();

  document.querySelector(".galleryRightArrow")
    ?.addEventListener("click", () => slideGallery(1));
  document.querySelector(".galleryLeftArrow")
    ?.addEventListener("click", () => slideGallery(-1));
}

function renderThumbnails() {
  const wrap = document.getElementById("galleryThumbnails");
  if (!wrap) return;

  wrap.innerHTML = galleryImages.map((src, i) => `
    <img
      src="${src}"
      alt="Property image ${i + 1}"
      class="rounded-lg w-[140px] h-[92px] object-cover cursor-pointer transition-opacity
             ${i < 2 ? '' : 'opacity-50 galleryImage'}"
      data-index="${i}"
    >
  `).join("");

  wrap.querySelectorAll("img").forEach(img => {
    img.addEventListener("click", () => {
      const idx = parseInt(img.dataset.index);
      currentSlide = Math.floor(idx / IMAGES_PER_SLIDE);
      renderMainImages();
      renderDots();
      updateThumbnailHighlight();
    });
  });
}

function renderMainImages() {
  const wrap = document.getElementById("galleryMain");
  if (!wrap) return;

  const start = currentSlide * IMAGES_PER_SLIDE;
  const shown = galleryImages.slice(start, start + IMAGES_PER_SLIDE);

  // Always show 2 slots; second is hidden on mobile via CSS
  wrap.innerHTML = shown.map((src, i) => `
    <img
      src="${src}"
      alt="Main view ${currentSlide * IMAGES_PER_SLIDE + i + 1}"
      class="rounded-xl object-cover w-full h-full ${i === 1 ? 'max-lg:hidden' : ''} galleryImage"
    >
  `).join("");

  updateThumbnailHighlight();
}

function renderDots() {
  const wrap  = document.getElementById("galleryDots");
  if (!wrap) return;

  const total = Math.ceil(galleryImages.length / IMAGES_PER_SLIDE);
  wrap.innerHTML = Array.from({ length: total }, (_, i) => `
    <div class="${i === currentSlide ? 'bg-btnSecondary' : 'bg-btnTape'}
                 w-2.75 2xl:w-5 h-0.75 xl:h-1.25 rounded-full cursor-pointer"
         data-slide="${i}">
    </div>
  `).join("");

  wrap.querySelectorAll("[data-slide]").forEach(dot => {
    dot.addEventListener("click", () => {
      currentSlide = parseInt(dot.dataset.slide);
      renderMainImages();
      renderDots();
    });
  });
}

function slideGallery(dir) {
  const total = Math.ceil(galleryImages.length / IMAGES_PER_SLIDE);
  currentSlide = (currentSlide + dir + total) % total;
  renderMainImages();
  renderDots();
}

function updateThumbnailHighlight() {
  const start = currentSlide * IMAGES_PER_SLIDE;
  document.querySelectorAll("#galleryThumbnails img").forEach((img, i) => {
    img.classList.toggle("opacity-100", i >= start && i < start + IMAGES_PER_SLIDE);
    img.classList.toggle("opacity-50",  !(i >= start && i < start + IMAGES_PER_SLIDE));
    img.classList.toggle("ring-2",      i >= start && i < start + IMAGES_PER_SLIDE);
    img.classList.toggle("ring-btnSecondary", i >= start && i < start + IMAGES_PER_SLIDE);
  });
}

/* ── 3c. Description + stats ────────────────────────────────── */
function renderDescription(p) {
  setText("#propDescription", p.description || "");
  setText("#propBedrooms",    p.bedrooms ?? p.countBedroom ?? "—");
  setText("#propBathrooms",   p.bathrooms ?? p.countBathroom ?? "—");
  setText("#propArea",        p.area || "—");
}

/* ── 3d. Amenities ──────────────────────────────────────────── */
function renderAmenities(list) {
  const wrap = document.getElementById("amenitiesList");
  if (!wrap) return;

  wrap.innerHTML = list.map(item => `
    <div class="flex gap-2.5 border-l border-btnSecondary px-6 py-4.5
                bg-linear-to-r from-background-secondary to-transparent items-center">
      <img src="./assets/icons/bolt-icon.png" alt="Bolt Icon" class="w-4.5 h-5.25">
      <p class="text-p 2xl:text-lg text-sm md:text-base leading-[150%]">${item}</p>
    </div>
  `).join("");
}

/* ── 3e. Inquiry form – pre-fill Selected Property ─────────── */
function renderInquiryForm(p) {
  const field = document.getElementById("selected-property");
  if (field) {
    field.value = `${p.title || ""}, ${p.location || ""}`;
  }
  setText("#inquiryTitle", `Inquire About ${p.title || "this Property"}`);
}

/* ── 3f. Pricing ────────────────────────────────────────────── */
function renderPricing(pricing) {
  const af  = pricing.additionalFees     || {};
  const mc  = pricing.monthlyCosts       || {};
  const tic = pricing.totalInitialCosts  || {};
  const me  = pricing.monthlyExpenses    || {};

  /* Listing price (big number left side) */
  setText("#listingPriceMain", formatPrice(pricing.listingPrice));

  /* Additional Fees */
  setHTML("#feeTransferTax",
    priceRow(af.propertyTransferTax,  "Based on the sale price and local regulations"));
  setHTML("#feeLegal",
    priceRow(af.legalFees,            "Approximate cost for legal services, including title transfer"));
  setHTML("#feeInspection",
    priceRow(af.homeInspection,       "Recommended for due diligence"));
  setHTML("#feeInsurance",
    priceRow(af.propertyInsurance,    "Annual cost for comprehensive property insurance"));
  setHTML("#feeTransferTax2",
    priceRow(af.propertyTransferTax,  "Based on the sale price and local regulations"));

  /* Monthly Costs */
  setHTML("#mcPropertyTax",  priceRow(mc.propertyTaxes, "Approximate monthly property tax based on the sale price and local rates"));
  setHTML("#mcHoaFee",       priceRow(mc.hoaFee,        "Monthly fee for common area maintenance and security"));

  /* Total Initial Costs */
  setHTML("#ticListingPrice",    singlePrice(tic.listingPrice));
  setHTML("#ticAdditionalFees",  priceRow(tic.additionalFees, "Property transfer tax, legal fees, inspection, insurance"));
  setHTML("#ticDownPayment",     priceRow(tic.downPayment,    "20%"));
  setHTML("#ticMortgage",        priceRow(tic.mortgageAmount, "If applicable"));

  /* Monthly Expenses */
  setText("#mePropTax",    formatPrice(me.propertyTaxes));
  setText("#meHoaFee",     formatPrice(me.hoaFee));
  setHTML("#mePropInsurance", priceRow(me.propertyInsurance, "Approximate monthly cost"));
}

/* ============================================================ */
/*  4. Helpers                                                   */
/* ============================================================ */
function formatPrice(val) {
  if (val == null) return "—";
  return "$" + Number(val).toLocaleString("en-US");
}

function priceRow(amount, note) {
  return `
    <p class="2xl:text-2xl text-lg lg:text-xl font-semibold leading-[150%]">${formatPrice(amount)}</p>
    <div class="inside-box-shape">
      <p class="text-sm 2xl:text-lg xl:text-base">${note}</p>
    </div>
  `;
}

function singlePrice(amount) {
  return `<p class="2xl:text-2xl lg:text-xl text-lg font-semibold leading-[150%]">${formatPrice(amount)}</p>`;
}

function setText(selector, text) {
  const el = document.querySelector(selector);
  if (el) el.textContent = text;
}

function setHTML(selector, html) {
  const el = document.querySelector(selector);
  if (el) el.innerHTML = html;
}

function showError(msg) {
  document.body.innerHTML = `
    <div class="flex items-center justify-center h-screen">
      <p class="text-red-400 text-xl">${msg}</p>
    </div>`;
}

/* ============================================================ */
/*  5. Mobile menu & navbar close                               */
/* ============================================================ */
function initMobileMenu() {
  const menuBtn   = document.getElementById("menuBtn");
  const closeMenu = document.getElementById("closeMenu");
  const overlay   = document.getElementById("overlay");
  const mobileMenu = document.getElementById("mobileMenu");

  const open  = () => {
    mobileMenu?.classList.remove("translate-x-full");
    overlay?.classList.remove("hidden");
  };
  const close = () => {
    mobileMenu?.classList.add("translate-x-full");
    overlay?.classList.add("hidden");
  };

  menuBtn?.addEventListener("click",   open);
  closeMenu?.addEventListener("click", close);
  overlay?.addEventListener("click",   close);
}

function initNavbarClose() {
  const btn  = document.getElementById("btnClose");
  const note = document.getElementById("note");
  btn?.addEventListener("click", () => note?.remove());
}





const cardJs =
    document.querySelector(".cardJsSection3");

const leftArrow =
    document.querySelector(".leftArrow3");

const rightArrow =
    document.querySelector(".rightArrow3");

const cardCounter =
    document.querySelector(".cardCounter3");



/* ========================= */
/* DATA */
/* ========================= */

const getCards = async () => {

    try {

        const response =await axios.get("http://localhost/real-estate-project/api/faqs.php");
        return response.data;

    } catch (error) {
        console.log(error);
    }
};

/* ========================= */
/* RESPONSIVE */
/* ========================= */

const getCardsPerView = () => {

    if (window.innerWidth >= 1268) {

        return 3;

    } else if(window.innerWidth >= 768){

        return 2;
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
        <div class="faq-card faq-card--pad card-js max-sm:hidden">
                <div class="faq-body">
                    <h3 class="faq-title">${card.question}</h3>
                    <p class="faq-text">${card.answer}</p>
                    <button class="btn-primary faq-btn hover:bg-white/10 hover:text-textHover">
                        Read More
                    </button>
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