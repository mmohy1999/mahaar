/* ==========================================================================
   Mahaar Digital Seafood Menu - Application Logic
   ========================================================================== */

// 1. Localization Dictionary
const translations = {
    en: {
        "page-title": "Mahaar | Premium Seafood digital Menu",
        "brand-name": "MAHAAR",
        "brand-sub": "SEAFOOD",
        "my-selection": "My Plate",
        "menu-title": "Digital Seafood Menu",
        "hero-subtitle": "From the Deep Ocean to Your Plate",
        "cat-all": "All Dishes",
        "cat-sandwiches": "Sandwiches",
        "cat-tajines": "Tajines",
        "cat-weights": "By Weight",
        "cat-meals": "Meals",
        "cat-soups": "Soups",
        "cat-salads": "Salads",
        "cat-rice-pasta": "Rice & Pasta",
        "add-to-plate": "Add to Plate",
        "my-plate-title": "My Selected Dishes",
        "plate-empty-msg": "Your plate is currently empty. Explore our menu and select your favorite ocean delicacies!",
        "subtotal": "Subtotal",
        "tax-notice": "Prices are inclusive of VAT",
        "order-via-whatsapp": "Send Order via WhatsApp",
        "clear-all": "Clear All Selection",
        "currency": "EGP",
        "daily-price": "Daily Price",
        "added-toast": "Added to your plate!",
        "whatsapp-hello": "Hello Mahaar Seafood! I would like to order the following from your digital menu:",
        "whatsapp-total": "Total",
        "whatsapp-thanks": "Thank you!",
        "footer-copyright": "Mahaar Seafood Restaurant. All Rights Reserved."
    },
    ar: {
        "page-title": "مطعم محار | قائمة المأكولات البحرية الرقمية",
        "brand-name": "محار",
        "brand-sub": "مأكولات بحرية",
        "my-selection": "طبقي الخاص",
        "menu-title": "قائمة المأكولات البحرية",
        "hero-subtitle": "من أعماق المحيط إلى طبقك مباشرة",
        "cat-all": "كل الأطباق",
        "cat-sandwiches": "سندوتشات",
        "cat-tajines": "طواجن",
        "cat-weights": "الاوزان",
        "cat-meals": "وجبات",
        "cat-soups": "شوربه",
        "cat-salads": "سلطات",
        "cat-rice-pasta": "رز ومكرونه",
        "add-to-plate": "إضافة إلى طبقي",
        "my-plate-title": "الأطباق التي اخترتها",
        "plate-empty-msg": "طبقك فارغ حالياً. استكشف القائمة واختر ما تشتهيه من روائع البحر!",
        "subtotal": "المجموع الفرعي",
        "tax-notice": "الأسعار تشمل ضريبة القيمة المضافة",
        "order-via-whatsapp": "إرسال الطلب عبر الواتساب",
        "clear-all": "مسح خياراتي",
        "currency": "ج.م",
        "daily-price": "السعر حسب اليوم",
        "added-toast": "تمت الإضافة لطبقك!",
        "whatsapp-hello": "مرحباً مطعم محار! أود طلب المأكولات التالية من قائمة الطعام الرقمية:",
        "whatsapp-total": "المجموع الكلي",
        "whatsapp-thanks": "شكراً جزيلاً!",
        "footer-copyright": "مطعم محار للمأكولات البحرية. جميع الحقوق محفوظة."
    }
};

// 2. Categories Metadata (Images & Taglines)
const categoriesData = {
    sandwiches: {
        image: "images/sandwiches.png",
        en: {
            title: "Sandwiches",
            desc: "Fresh maritime choices in traditional bread."
        },
        ar: {
            title: "سندوتشات",
            desc: "سندوتشات بحرية طازجة بالخلطة المميزة."
        }
    },
    tajines: {
        image: "images/tajines.png",
        en: {
            title: "Tajines",
            desc: "Rich seafood tajines oven-baked to perfection."
        },
        ar: {
            title: "طواجن",
            desc: "طواجن سي فود غنية ومخبوزة في الفرن."
        }
    },
    weights: {
        image: "images/weights.png",
        en: {
            title: "By Weight",
            desc: "Fresh ocean catch cooked to your preference by weight."
        },
        ar: {
            title: "الاوزان",
            desc: "فواكه البحر الطازجة تحضر وتطهى بالوزن حسب اختيارك."
        }
    },
    /*
    meals: {
        image: "images/meals.png",
        en: {
            title: "Meals",
            desc: "Complete seafood meals served with side dishes."
        },
        ar: {
            title: "وجبات",
            desc: "وجبات سي فود كاملة تقدم مع الأرز والسلطات."
        }
    },
    */
    soups: {
        image: "images/soups.png",
        en: {
            title: "Soups",
            desc: "Warm seafood broths and creamy soups."
        },
        ar: {
            title: "شوربه",
            desc: "شوربات سي فود دافئة غنية بالكريمة أو المرق المخفف."
        }
    },
    salads: {
        image: "images/salads.png",
        en: {
            title: "Salads",
            desc: "Premium fresh greens and sea delicacies."
        },
        ar: {
            title: "سلطات",
            desc: "سلطات خضراء طازجة مزينة بثمار البحر الشهية."
        }
    },

    "rice-pasta": {
        image: "images/rice_pasta.png",
        en: {
            title: "Rice & Pasta",
            desc: "Classic Sayadia rice and delicious seafood pastas."
        },
        ar: {
            title: "رز ومكرونه",
            desc: "أرز الصيادية الكلافيكي ومكرونات ثمار البحر الفاخرة."
        }
    }

};

// 3. Menu Items Database (No individual images - Category image used in modal)
const menuItems = [
    // --- Sandwiches ---
    {
        id: "sd1",
        category: "sandwiches",
        price: 50,
        en: {
            name: "Shrimp Sandwich",
            desc: ""
        },
        ar: {
            name: "سندوتش جمبري",
            desc: ""
        }
    },
    {
        id: "sd2",
        category: "sandwiches",
        price: 75,
        en: {
            name: "Calamari Sandwich",
            desc: ""
        },
        ar: {
            name: "سندوتش سبيط",
            desc: ""
        }
    },
    {
        id: "sd3",
        category: "sandwiches",
        price: 50,
        en: {
            name: "Fish Fillet Sandwich",
            desc: ""
        },
        ar: {
            name: "سندوتش فيليه",
            desc: ""
        }
    },
    {
        id: "sd4",
        category: "sandwiches",
        price: 120,
        en: {
            name: "Mahaar Mix Sandwich",
            desc: ""
        },
        ar: {
            name: "سندوتش مكس محار",
            desc: ""
        }
    },
    {
        id: "sd5",
        category: "sandwiches",
        price: 135,
        en: {
            name: "Grilled Viagra Sandwich",
            desc: ""
        },
        ar: {
            name: "سندوتش فياجرا مشوي",
            desc: ""
        }
    },

    // --- Tajines ---
    {
        id: "tj1",
        category: "tajines",
        price: 210,
        en: {
            name: "Shrimp Tajine",
            desc: ""
        },
        ar: {
            name: "طاجن جمبري",
            desc: ""
        }
    },
    {
        id: "tj2",
        category: "tajines",
        price: 230,
        en: {
            name: "Calamari Tajine",
            desc: ""
        },
        ar: {
            name: "طاجن سبيط",
            desc: ""
        }
    },
    {
        id: "tj3",
        category: "tajines",
        price: 275,
        en: {
            name: "Mahaar Mix Tajine",
            desc: ""
        },
        ar: {
            name: "طاجن مكس محار",
            desc: ""
        }
    },
    {
        id: "tj4",
        category: "tajines",
        price: 350,
        en: {
            name: "Mix Seafood Tajine",
            desc: ""
        },
        ar: {
            name: "طاجن مكس سي فوود",
            desc: ""
        }
    },
    // --- Soups ---
    {
        id: "sp1",
        category: "soups",
        optionGroups: [
            {
                id: "size",
                en: "Size",
                ar: "الحجم",
                options: [
                    { id: "small", en: "Small", ar: "صغير", price: 100 },
                    { id: "big", en: "Big", ar: "كبير", price: 150 }
                ]
            },
            {
                id: "sauce",
                en: "Sauce",
                ar: "الصوص",
                options: [
                    { id: "white", en: "White Sauce", ar: "وايت صوص" },
                    { id: "red", en: "Red Sauce", ar: "ريد صوص" }
                ]
            }
        ],
        en: {
            name: "Mix Seafood & Mahaar Soup",
            desc: ""
        },
        ar: {
            name: "شوربة مكس سي فود و محار",
            desc: ""
        }
    },

    // --- Salads ---
    {
        id: "sl1",
        category: "salads",
        price: 10,
        en: {
            name: "Tahini Dip",
            desc: ""
        },
        ar: {
            name: "طحينه",
            desc: ""
        }
    },
    {
        id: "sl2",
        category: "salads",
        price: 15,
        en: {
            name: "Baba Ghanoush",
            desc: ""
        },
        ar: {
            name: "بابا غنوج",
            desc: ""
        }
    },
    {
        id: "sl3",
        category: "salads",
        price: 5,
        en: {
            name: "Pickles",
            desc: ""
        },
        ar: {
            name: "مخلل",
            desc: ""
        }
    },
    {
        id: "sl4",
        category: "salads",
        price: 10,
        en: {
            name: "Green Salad",
            desc: ""
        },
        ar: {
            name: "سلطه خضراء",
            desc: ""
        }
    },
    {
        id: "sl5",
        category: "salads",
        price: 20,
        en: {
            name: "Special Sauce",
            desc: ""
        },
        ar: {
            name: "صوص",
            desc: ""
        }
    },


    // --- Rice & Pasta ---
    {
        id: "rp1",
        category: "rice-pasta",
        price: 20,
        en: {
            name: "Plain Sayadia Rice",
            desc: ""
        },
        ar: {
            name: "أرز صياديه ساده",
            desc: ""
        }
    },
    {
        id: "rp2",
        category: "rice-pasta",
        price: 50,
        en: {
            name: "Rice with Shrimp",
            desc: ""
        },
        ar: {
            name: "أرز بالجمبري",
            desc: ""
        }
    },
    {
        id: "rp3",
        category: "rice-pasta",
        price: 70,
        en: {
            name: "Rice with Calamari",
            desc: ""
        },
        ar: {
            name: "أرز بالسبيط",
            desc: ""
        }
    },
    {
        id: "rp4",
        category: "rice-pasta",
        price: 100,
        en: {
            name: "Seafood Mix Rice",
            desc: ""
        },
        ar: {
            name: "أرز مكس سي فوود",
            desc: ""
        }
    },
    {
        id: "rp5",
        category: "rice-pasta",
        price: 150,
        en: {
            name: "White Sauce Pasta with Mix Seafood",
            desc: ""
        },
        ar: {
            name: "باستا وايت صوص مكس سي فوود",
            desc: ""
        }
    },
    {
        id: "rp6",
        category: "rice-pasta",
        price: 130,
        en: {
            name: "White Sauce Pasta with Shrimp",
            desc: ""
        },
        ar: {
            name: "باستا وايت صوص بالجمبري",
            desc: ""
        }
    },
    {
        id: "wt1",
        category: "weights",
        price: null,
        isDailyPrice: true,
        en: {
            name: "Grilled Shrimp",
            desc: ""
        },
        ar: {
            name: "جمبري مشوي",
            desc: ""
        }
    },
    {
        id: "wt2",
        category: "weights",
        price: null,
        isDailyPrice: true,
        en: {
            name: "Grilled Calamari",
            desc: ""
        },
        ar: {
            name: "سبيط مشوي",
            desc: ""
        }
    },
    {
        id: "wt3",
        category: "weights",
        price: null,
        isDailyPrice: true,
        en: {
            name: "Grilled Fillet",
            desc: ""
        },
        ar: {
            name: "فيليه مشوي",
            desc: ""
        }
    },
    {
        id: "wt4",
        category: "weights",
        price: null,
        isDailyPrice: true,
        en: {
            name: "Oysters",
            desc: ""
        },
        ar: {
            name: "محار",
            desc: ""
        }
    }
];

// 4. Application State
let currentLanguage = localStorage.getItem('mahaar_lang') || 'en';
let currentCategory = 'all';
let selectedItems = JSON.parse(localStorage.getItem('mahaar_selected')) || [];

// 5. DOM Elements
const categoriesWrapper = document.getElementById('categories-wrapper');
const langSwitchBtn = document.getElementById('lang-switch-btn');
const trayToggleBtn = document.getElementById('tray-toggle-btn');
const trayCount = document.getElementById('tray-count');
const currentYear = document.getElementById('current-year');
const categoryNav = document.getElementById('category-nav');

// Modals
const itemModal = document.getElementById('item-modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const selectionDrawerOverlay = document.getElementById('selection-drawer-overlay');
const selectionDrawer = document.getElementById('selection-drawer');
const drawerCloseBtn = document.getElementById('drawer-close-btn');

// Detail Modal Content
const modalImageBg = document.getElementById('modal-image-bg');
const modalItemTitle = document.getElementById('modal-item-title');
const modalItemPrice = document.getElementById('modal-item-price');
const modalItemDesc = document.getElementById('modal-item-desc');
const modalAddToPlateBtn = document.getElementById('modal-add-to-plate-btn');

// Drawer Content
const drawerEmptyState = document.getElementById('drawer-empty-state');
const drawerItemsList = document.getElementById('drawer-items-list');
const drawerTotalPrice = document.getElementById('drawer-total-price');
const drawerFooter = document.getElementById('drawer-footer');
const orderSubmitBtn = document.getElementById('order-submit-btn');
const clearPlateBtn = document.getElementById('clear-plate-btn');

// 6. Mechanics & Functions

// Initialize Application
function init() {
    currentYear.textContent = new Date().getFullYear();
    applyLanguage(currentLanguage);
    setupEventListeners();
    updateTrayUI();
}

// Language Switcher
function applyLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('mahaar_lang', lang);

    // Document layout & lang attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // Translate all static nodes with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Update Language Button Label
    const labelSpan = langSwitchBtn.querySelector('.lang-label');
    if (labelSpan) {
        labelSpan.textContent = lang === 'ar' ? 'English' : 'العربية';
    }

    // Render Menu Items
    renderMenu();
    updateDrawer();
}

// Render Digital Menu Grid (Category cover + Items list format)
function renderMenu() {
    categoriesWrapper.innerHTML = '';

    // Filter categories to render based on current state
    const categoriesToRender = currentCategory === 'all'
        ? Object.keys(categoriesData)
        : [currentCategory];

    categoriesToRender.forEach((catKey, catIndex) => {
        const catMeta = categoriesData[catKey];
        const catLang = catMeta[currentLanguage];

        // Filter items in this category
        const catItems = menuItems.filter(item => item.category === catKey);
        if (catItems.length === 0) return;

        // Create Section Node
        const section = document.createElement('section');
        section.className = 'category-section animate-fade-in';
        section.id = `category-section-${catKey}`;
        section.style.animationDelay = `${catIndex * 100}ms`;

        // Section Title Wrapper
        const titleWrap = document.createElement('div');
        titleWrap.className = 'category-title-wrap';
        titleWrap.innerHTML = `<h2 class="category-title">${catLang.title}</h2>`;
        section.appendChild(titleWrap);

        // Category Grid Layout
        const grid = document.createElement('div');
        grid.className = 'category-grid';

        // 1. LHS: Cover Card Banner
        const coverCard = document.createElement('div');
        coverCard.className = 'category-cover-card';
        coverCard.innerHTML = `
            <img src="${catMeta.image}" alt="${catLang.title}" class="category-cover-img" loading="lazy">
            <div class="category-cover-overlay">
                <h3 class="category-cover-name">${catLang.title}</h3>
                <p class="category-cover-desc">${catLang.desc}</p>
            </div>
        `;
        grid.appendChild(coverCard);

        // 2. RHS: Items List Layout (Classic Leader-dots layout)
        const itemsList = document.createElement('div');
        itemsList.className = 'items-list';

        catItems.forEach(item => {
            const itemLang = item[currentLanguage];

            // Create item row
            const itemRow = document.createElement('article');
            itemRow.className = 'menu-item-row';

            let priceDisplay = '';
            if (item.isDailyPrice) {
                priceDisplay = translations[currentLanguage]['daily-price'];
            } else if (item.optionGroups) {
                const mainGroup = item.optionGroups[0];
                priceDisplay = `${mainGroup.options[0].price} / ${mainGroup.options[1].price} ${translations[currentLanguage]['currency']}`;
            } else {
                priceDisplay = `${item.price} ${translations[currentLanguage]['currency']}`;
            }

            itemRow.innerHTML = `
                <div class="item-header">
                    <div class="item-name-wrap">
                        <h3 class="item-name">${itemLang.name}</h3>
                    </div>
                    <div class="item-dots"></div>
                    <span class="item-price">${priceDisplay}</span>
                </div>
                <div class="item-body">
                    <div class="item-text-area">
                        <p class="item-desc">${itemLang.desc}</p>
                    </div>
                    <button class="btn-item-add" data-id="${item.id}" aria-label="Add to plate">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 5v14M5 12h14"/>
                        </svg>
                    </button>
                </div>
            `;

            // Row Interaction
            itemRow.addEventListener('click', (e) => {
                // If user clicked the button or inside it, add directly to plate
                if (e.target.closest('.btn-item-add')) {
                    const itemId = e.target.closest('.btn-item-add').getAttribute('data-id');
                    const targetItem = menuItems.find(m => m.id === itemId);
                    if (targetItem.optionGroups) {
                        openItemModal(targetItem);
                    } else {
                        addToPlate(itemId);
                    }
                } else {
                    // Otherwise open beautiful detail modal
                    openItemModal(item);
                }
            });

            itemsList.appendChild(itemRow);
        });

        grid.appendChild(itemsList);
        section.appendChild(grid);
        categoriesWrapper.appendChild(section);
    });
}

// Open Detail Modal
function openItemModal(item) {
    const itemLang = item[currentLanguage];
    const catMeta = categoriesData[item.category];
    const isAr = currentLanguage === 'ar';

    // Set category cover photo as the background decoration of the modal pane
    modalImageBg.style.backgroundImage = `url('${catMeta.image}')`;

    modalItemTitle.textContent = itemLang.name;
    modalItemDesc.textContent = itemLang.desc;

    // Remove any existing option sections
    const existingOptions = itemModal.querySelectorAll('.modal-variants-section');
    existingOptions.forEach(sec => sec.remove());

    if (item.optionGroups) {
        // Create an object to track currently selected options
        const selectedOpts = {};

        // We'll calculate total price from selections
        const updateModalPrice = () => {
            let total = 0;
            item.optionGroups.forEach(group => {
                const selectedVal = selectedOpts[group.id];
                const optObj = group.options.find(o => o.id === selectedVal);
                if (optObj && optObj.price) {
                    total += optObj.price;
                }
            });
            modalItemPrice.textContent = `${total} ${translations[currentLanguage]['currency']}`;
        };

        item.optionGroups.forEach(group => {
            // Set initial selection to the first option in group
            selectedOpts[group.id] = group.options[0].id;

            const groupSection = document.createElement('div');
            groupSection.className = 'modal-variants-section';

            const title = document.createElement('h4');
            title.className = 'variants-title';
            const groupTitle = isAr ? group.ar : group.en;
            title.textContent = `${groupTitle}:`;
            groupSection.appendChild(title);

            const optionsDiv = document.createElement('div');
            optionsDiv.className = 'variants-options';

            group.options.forEach((opt, index) => {
                const label = document.createElement('label');
                label.className = `variant-option ${index === 0 ? 'active' : ''}`;

                const radio = document.createElement('input');
                radio.type = 'radio';
                radio.name = `item-option-${group.id}`;
                radio.value = opt.id;
                radio.checked = index === 0;

                radio.addEventListener('change', () => {
                    groupSection.querySelectorAll('.variant-option').forEach(o => o.classList.remove('active'));
                    label.classList.add('active');
                    selectedOpts[group.id] = opt.id;
                    updateModalPrice();
                });

                label.appendChild(radio);

                const spanText = document.createElement('span');
                spanText.className = 'variant-label-text';

                // Show price next to option only if it has a price (like size)
                let optLabel = isAr ? opt.ar : opt.en;
                if (opt.price) {
                    optLabel += isAr ? ` (${opt.price} ج.م)` : ` (${opt.price} EGP)`;
                }
                spanText.textContent = optLabel;
                label.appendChild(spanText);

                optionsDiv.appendChild(label);
            });

            groupSection.appendChild(optionsDiv);

            const actionRow = itemModal.querySelector('.modal-action-row');
            actionRow.parentNode.insertBefore(groupSection, actionRow);
        });

        // Set initial total price
        updateModalPrice();

        // Bind Add to Plate action
        modalAddToPlateBtn.onclick = () => {
            addToPlate(item.id, { ...selectedOpts });
            closeItemModal();
        };

    } else {
        if (item.isDailyPrice) {
            modalItemPrice.textContent = translations[currentLanguage]['daily-price'];
        } else {
            modalItemPrice.textContent = `${item.price} ${translations[currentLanguage]['currency']}`;
        }

        modalAddToPlateBtn.onclick = () => {
            addToPlate(item.id);
            closeItemModal();
        };
    }

    itemModal.classList.add('active');
}

// Close Detail Modal
function closeItemModal() {
    itemModal.classList.remove('active');
}

// Add Item to Plate Selection
function addToPlate(itemId, options = null) {
    const existing = selectedItems.find(i => {
        if (i.id !== itemId) return false;
        const keys1 = Object.keys(i.options || {});
        const keys2 = Object.keys(options || {});
        if (keys1.length !== keys2.length) return false;
        return keys1.every(k => i.options[k] === options[k]);
    });

    if (existing) {
        existing.quantity += 1;
    } else {
        selectedItems.push({ id: itemId, options: options, quantity: 1 });
    }

    saveTrayState();
    updateTrayUI();
    showToast(translations[currentLanguage]['added-toast']);
}

// Save Tray Selection to localStorage
function saveTrayState() {
    localStorage.setItem('mahaar_selected', JSON.stringify(selectedItems));
}

// Update Tray Counter & Badge
function updateTrayUI() {
    const totalCount = selectedItems.reduce((acc, curr) => acc + curr.quantity, 0);
    trayCount.textContent = totalCount;

    // Animate badge bump effect
    trayToggleBtn.style.transform = 'scale(1.1)';
    setTimeout(() => {
        trayToggleBtn.style.transform = 'none';
    }, 200);

    updateDrawer();
}

// Render selected items list inside Plate Drawer
function updateDrawer() {
    if (selectedItems.length === 0) {
        drawerEmptyState.style.display = 'flex';
        drawerItemsList.innerHTML = '';
        drawerFooter.style.display = 'none';
    } else {
        drawerEmptyState.style.display = 'none';
        drawerFooter.style.display = 'block';
        drawerItemsList.innerHTML = '';

        let subtotal = 0;
        let hasDailyPriceItems = false;

        selectedItems.forEach(selected => {
            const item = menuItems.find(m => m.id === selected.id);
            if (!item) return;

            const itemLang = item[currentLanguage];
            let itemPrice = item.price;
            let displayName = itemLang.name;
            let isDaily = !!item.isDailyPrice;

            if (isDaily) {
                hasDailyPriceItems = true;
            }

            if (selected.options && item.optionGroups) {
                let calculatedPrice = 0;
                const suffixes = [];
                const sep = currentLanguage === 'ar' ? '، ' : ', ';

                item.optionGroups.forEach(group => {
                    const selectedVal = selected.options[group.id];
                    const optObj = group.options.find(o => o.id === selectedVal);
                    if (optObj) {
                        if (optObj.price) {
                            calculatedPrice += optObj.price;
                        }
                        suffixes.push(currentLanguage === 'ar' ? optObj.ar : optObj.en);
                    }
                });

                itemPrice = calculatedPrice;
                if (suffixes.length > 0) {
                    displayName += ` (${suffixes.join(sep)})`;
                }
            }

            if (!isDaily) {
                const itemCost = itemPrice * selected.quantity;
                subtotal += itemCost;
            }

            // Find category image
            const catMeta = categoriesData[item.category];

            let itemPriceDisplay = '';
            if (isDaily) {
                itemPriceDisplay = translations[currentLanguage]['daily-price'];
            } else {
                itemPriceDisplay = `${itemPrice} ${translations[currentLanguage]['currency']}`;
            }

            const itemRow = document.createElement('div');
            itemRow.className = 'drawer-item';
            itemRow.innerHTML = `
                <img src="${catMeta.image}" alt="${displayName}" class="drawer-item-img">
                <div class="drawer-item-detail">
                    <h4>${displayName}</h4>
                    <span class="drawer-item-price">${itemPriceDisplay}</span>
                </div>
                <div class="drawer-item-quantity-controls">
                    <button class="drawer-qty-btn decrease">-</button>
                    <span class="drawer-qty-num">${selected.quantity}</span>
                    <button class="drawer-qty-btn increase">+</button>
                </div>
                <button class="drawer-item-remove-btn" aria-label="Remove item">&times;</button>
            `;

            // Wire row control actions
            itemRow.querySelector('.decrease').onclick = () => adjustQuantity(item.id, selected.options, -1);
            itemRow.querySelector('.increase').onclick = () => adjustQuantity(item.id, selected.options, 1);
            itemRow.querySelector('.drawer-item-remove-btn').onclick = () => removeSelected(item.id, selected.options);

            drawerItemsList.appendChild(itemRow);
        });

        let subtotalDisplay = '';
        if (subtotal > 0) {
            subtotalDisplay = `${subtotal} ${translations[currentLanguage]['currency']}`;
            if (hasDailyPriceItems) {
                subtotalDisplay += currentLanguage === 'ar' ? ' + السعر حسب اليوم' : ' + Daily Price';
            }
        } else {
            subtotalDisplay = translations[currentLanguage]['daily-price'];
        }
        drawerTotalPrice.textContent = subtotalDisplay;
    }
}

// Adjust quantity
function adjustQuantity(itemId, options, amount) {
    const item = selectedItems.find(i => {
        if (i.id !== itemId) return false;
        const keys1 = Object.keys(i.options || {});
        const keys2 = Object.keys(options || {});
        if (keys1.length !== keys2.length) return false;
        return keys1.every(k => i.options[k] === options[k]);
    });
    if (!item) return;

    item.quantity += amount;
    if (item.quantity <= 0) {
        removeSelected(itemId, options);
    } else {
        saveTrayState();
        updateTrayUI();
    }
}

// Remove item
function removeSelected(itemId, options) {
    selectedItems = selectedItems.filter(i => {
        if (i.id !== itemId) return true;
        const keys1 = Object.keys(i.options || {});
        const keys2 = Object.keys(options || {});
        if (keys1.length !== keys2.length) return true;
        return !keys1.every(k => i.options[k] === options[k]);
    });
    saveTrayState();
    updateTrayUI();
}

// Show feedback toast notification
function showToast(message) {
    // Remove existing toast if any
    const oldToast = document.querySelector('.toast-notification');
    if (oldToast) oldToast.remove();

    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = message;

    // Style toast in JS
    Object.assign(toast.style, {
        position: 'fixed',
        bottom: '30px',
        left: '50%',
        transform: 'translateX(-50%) translateY(50px)',
        background: 'linear-gradient(135deg, var(--color-silver-light) 0%, var(--color-silver-mid) 100%)',
        color: 'var(--color-bg-darkest)',
        padding: '12px 28px',
        borderRadius: '30px',
        zIndex: '99999',
        fontSize: '0.9rem',
        fontWeight: '700',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
        opacity: '0',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
    });

    document.body.appendChild(toast);

    // Animate in
    setTimeout(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateX(-50%) translateY(0)';
    }, 50);

    // Remove toast after delay
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(-50%) translateY(20px)';
        setTimeout(() => toast.remove(), 400);
    }, 2200);
}

// Event Listeners setup
function setupEventListeners() {
    // Language Swapper Click
    langSwitchBtn.addEventListener('click', () => {
        const targetLang = currentLanguage === 'en' ? 'ar' : 'en';
        applyLanguage(targetLang);
    });

    // Category Tabs filtering (Fast responsive update)
    const tabs = document.querySelectorAll('.category-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            currentCategory = tab.getAttribute('data-category');
            renderMenu();
        });
    });

    // Tray Toggle (Drawer Open)
    trayToggleBtn.addEventListener('click', () => {
        selectionDrawerOverlay.classList.add('active');
    });

    // Drawer Close
    drawerCloseBtn.addEventListener('click', () => {
        selectionDrawerOverlay.classList.remove('active');
    });

    // Click outside drawers / modals to close
    window.addEventListener('click', (e) => {
        if (e.target === itemModal) {
            closeItemModal();
        }
        if (e.target === selectionDrawerOverlay) {
            selectionDrawerOverlay.classList.remove('active');
        }
    });

    modalCloseBtn.addEventListener('click', closeItemModal);

    // Clear Selected Plate
    clearPlateBtn.addEventListener('click', () => {
        selectedItems = [];
        saveTrayState();
        updateTrayUI();
    });

    // Order Submit via WhatsApp Integration
    orderSubmitBtn.addEventListener('click', () => {
        if (selectedItems.length === 0) return;

        const isAr = currentLanguage === 'ar';
        const separator = '━━━━━━━━━━━━━━━━━━━━━━━━━';

        let orderText = '';
        if (isAr) {
            orderText += `*🌊 مطعم محار للمأكولات البحرية 🌊*\n`;
            orderText += `${separator}\n`;
            orderText += `*📋 طلب جديد من قائمة الطعام الرقمية:*\n\n`;
        } else {
            orderText += `*🌊 MAHAAR SEAFOOD RESTAURANT 🌊*\n`;
            orderText += `${separator}\n`;
            orderText += `*📋 New Order from the Digital Menu:*\n\n`;
        }

        let totalCost = 0;
        let hasDailyPrice = false;

        selectedItems.forEach(selected => {
            const item = menuItems.find(m => m.id === selected.id);
            if (!item) return;

            const itemLang = item[currentLanguage];
            let itemPrice = item.price;
            let displayName = itemLang.name;
            let isDaily = !!item.isDailyPrice;

            if (isDaily) {
                hasDailyPrice = true;
            }

            if (selected.options && item.optionGroups) {
                let calculatedPrice = 0;
                const suffixes = [];
                const sep = currentLanguage === 'ar' ? '، ' : ', ';

                item.optionGroups.forEach(group => {
                    const selectedVal = selected.options[group.id];
                    const optObj = group.options.find(o => o.id === selectedVal);
                    if (optObj) {
                        if (optObj.price) {
                            calculatedPrice += optObj.price;
                        }
                        suffixes.push(currentLanguage === 'ar' ? optObj.ar : optObj.en);
                    }
                });

                itemPrice = calculatedPrice;
                if (suffixes.length > 0) {
                    displayName += ` (${suffixes.join(sep)})`;
                }
            }

            if (isDaily) {
                if (isAr) {
                    orderText += `🔹 *${displayName}*\n`;
                    orderText += `   *الكمية:* ${selected.quantity}\n`;
                    orderText += `   *السعر:* ${translations[currentLanguage]['daily-price']}\n\n`;
                } else {
                    orderText += `🔹 *${displayName}*\n`;
                    orderText += `   *Qty:* ${selected.quantity}\n`;
                    orderText += `   *Price:* ${translations[currentLanguage]['daily-price']}\n\n`;
                }
            } else {
                const cost = itemPrice * selected.quantity;
                totalCost += cost;

                if (isAr) {
                    orderText += `🔹 *${displayName}*\n`;
                    orderText += `   *الكمية:* ${selected.quantity} ✖️ ${itemPrice} ج.م\n`;
                    orderText += `   *الحساب:* ${cost} ج.م\n\n`;
                } else {
                    orderText += `🔹 *${displayName}*\n`;
                    orderText += `   *Qty:* ${selected.quantity} ✖️ ${itemPrice} EGP\n`;
                    orderText += `   *Price:* ${cost} EGP\n\n`;
                }
            }
        });

        orderText += `${separator}\n`;
        let totalDisplay = '';
        if (totalCost > 0) {
            totalDisplay = `${totalCost} ${translations[currentLanguage]['currency']}`;
            if (hasDailyPrice) {
                totalDisplay += currentLanguage === 'ar' ? ' + السعر حسب اليوم' : ' + Daily Price';
            }
        } else {
            totalDisplay = translations[currentLanguage]['daily-price'];
        }

        if (isAr) {
            orderText += `💰 *المجموع الكلي: ${totalDisplay}*\n`;
            orderText += `${separator}\n\n`;
            orderText += `*🙏 شكراً جزيلاً لاختياركم مطعم محار!*`;
        } else {
            orderText += `💰 *Total Amount: ${totalDisplay}*\n`;
            orderText += `${separator}\n\n`;
            orderText += `*🙏 Thank you for choosing Mahaar Seafood!*`;
        }

        // Encode and dispatch to wa.me link
        const encodedText = encodeURIComponent(orderText);
        // Restaurant WhatsApp placeholder number
        const whatsappUrl = `https://wa.me/+201028346855?text=${encodedText}`;
        window.open(whatsappUrl, '_blank');
    });
}

// Start Application on Load
document.addEventListener('DOMContentLoaded', init);
