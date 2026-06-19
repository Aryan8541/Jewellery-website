// ============= PRODUCT DATA =============
// This stores all product information
const products = [
    {
        id: 1,
        title: "Classic Gold Ring",
        price: "₹24,999",
        image: "https://via.placeholder.com/250x250?text=Gold+Ring",
        description: "A timeless classic gold ring, perfect for any occasion. Handcrafted with 18K gold and polished to perfection."
    },
    {
        id: 2,
        title: "Diamond Necklace",
        price: "₹59,999",
        image: "https://via.placeholder.com/250x250?text=Diamond+Necklace",
        description: "Elegant diamond necklace featuring a stunning 2-carat diamond. Perfect for special occasions."
    },
    {
        id: 3,
        title: "Pearl Earrings",
        price: "₹15,999",
        image: "https://via.placeholder.com/250x250?text=Pearl+Earrings",
        description: "Beautiful pearl earrings with a delicate design. Freshwater pearls set in sterling silver."
    },
    {
        id: 4,
        title: "Silver Bracelet",
        price: "₹12,999",
        image: "https://via.placeholder.com/250x250?text=Silver+Bracelet",
        description: "Stunning silver bracelet with intricate detailing. Perfect everyday jewelry piece."
    },
    {
        id: 5,
        title: "Emerald Ring",
        price: "₹34,999",
        image: "https://via.placeholder.com/250x250?text=Emerald+Ring",
        description: "Luxurious emerald ring with diamond accents. A true statement piece for any jewelry collection."
    },
    {
        id: 6,
        title: "Gold Bracelet",
        price: "₹27,999",
        image: "https://via.placeholder.com/250x250?text=Gold+Bracelet",
        description: "Sophisticated gold bracelet with elegant design. Perfect for both casual and formal wear."
    }
];

// ============= MODAL FUNCTIONS =============

// Function to open product modal (pop-up)
function openModal(productId) {
    const product = products[productId - 1];  // Get product data
    
    // Update modal with product information
    document.getElementById("modalImage").src = product.image;
    document.getElementById("modalTitle").textContent = product.title;
    document.getElementById("modalPrice").textContent = product.price;
    document.getElementById("modalDescription").textContent = product.description;
    
    // Show the modal
    document.getElementById("productModal").style.display = "block";
    
    // Prevent scrolling when modal is open
    document.body.style.overflow = "hidden";
}

// Function to close modal
function closeModal() {
    document.getElementById("productModal").style.display = "none";
    document.body.style.overflow = "auto";  // Allow scrolling again
}

// Close modal when clicking outside of it
window.addEventListener("click", function(event) {
    const modal = document.getElementById("productModal");
    if (event.target === modal) {
        closeModal();
    }
});

// ============= SMOOTH SCROLLING =============
// When you click navigation links, scroll smoothly to sections

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();  // Stop default behavior
        
        const targetId = this.getAttribute("href");  // Get target id
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // Scroll smoothly to element
            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

// ============= CONTACT FORM SUBMISSION =============
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();  // Prevent page reload
        
        // Get form values
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const subject = this.querySelectorAll('input[type="text"]')[1].value;
        const message = this.querySelector("textarea").value;
        
        // Simple validation
        if (name === "" || email === "" || subject === "" || message === "") {
            alert("Please fill in all fields!");
            return;
        }
        
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email!");
            return;
        }
        
        // If all valid, show success message
        alert(`Thank you ${name}! Your message has been sent successfully.`);
        
        // Clear form fields
        this.reset();
    });
}

// ============= "ADD TO CART" BUTTON =============
const addToCartBtn = document.querySelector(".add-to-cart-btn");

if (addToCartBtn) {
    addToCartBtn.addEventListener("click", function() {
        const productTitle = document.getElementById("modalTitle").textContent;
        const size = document.querySelector(".modal-options select").value;
        
        if (size === "Select Size") {
            alert("Please select a size!");
            return;
        }
        
        alert(`${productTitle} (${size}) added to cart!`);
        closeModal();
    });
}

// ============= NAVIGATION BAR ACTIVE STATE =============
// Highlight current section in navbar

window.addEventListener("scroll", function() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");
    
    let current = "";
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute("id");
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove("active");  // Remove active from all
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");  // Add active to current
        }
    });
});

// ============= SCROLL-TO-TOP BUTTON =============
// Create a button that appears when you scroll down

const scrollTopBtn = document.createElement("button");
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.className = "scroll-top-btn";
document.body.appendChild(scrollTopBtn);

window.addEventListener("scroll", function() {
    if (scrollY > 500) {  // Show when scrolled 500px down
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
});

scrollTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// ============= ADD CLICK ANIMATIONS =============
// Add animation when buttons are clicked

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", function() {
        this.style.transform = "scale(0.95)";
        
        setTimeout(() => {
            this.style.transform = "scale(1)";
        }, 150);
    });
});

// ============= FORM INPUT EFFECTS =============
// Add focus effect to form inputs

const formInputs = document.querySelectorAll("input, textarea");

formInputs.forEach(input => {
    input.addEventListener("focus", function() {
        this.style.boxShadow = "0 0 10px rgba(212, 175, 55, 0.5)";
    });
    
    input.addEventListener("blur", function() {
        this.style.boxShadow = "none";
    });
});

// ============= LOADING ANIMATION =============
// Show a loading message when page loads

window.addEventListener("load", function() {
    console.log("Website loaded successfully!");
    // You can add loading animations here
});

// ============= MOBILE HAMBURGER MENU =============
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

if (hamburger) {
    hamburger.addEventListener("click", function() {
        navMenu.classList.toggle("active");  // Toggle menu visibility
    });
}

// Close menu when clicking a link
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", function() {
        navMenu.classList.remove("active");
    });
});
// ============= DIRECT LIGHTBOX CAROUSEL ENGINE =============
let modalImageIndex = 0;
let modalThumbnailsList = [];

function openLightboxCarousel() {
    const mainImageElement = document.getElementById('mainImage');
    const modalContainer = document.getElementById('imageModal');
    const targetZoomImage = document.getElementById('modalTargetImg');
    const modalCaptionText = document.getElementById('modalCaption');
    const modalCounterText = document.getElementById('modalCounter');

    if (!mainImageElement || !modalContainer || !targetZoomImage) {
        console.error("Modal structural elements missing in HTML layout!");
        return;
    }

    // Get current product details from URL param ID
    const urlQueries = new URLSearchParams(window.location.search);
    const activeId = parseInt(urlQueries.get('id')) || 1;
    const targetProductData = products.find(p => p.id === activeId);

    if (targetProductData && targetProductData.thumbnails) {
        modalThumbnailsList = targetProductData.thumbnails;
        
        // Find which image is currently displayed on the main screen
        const currentSrc = mainImageElement.getAttribute('src');
        const matchIndex = modalThumbnailsList.indexOf(currentSrc);
        modalImageIndex = matchIndex !== -1 ? matchIndex : 0;
        
        // Set titles and image path links
        if (modalCaptionText) modalCaptionText.textContent = targetProductData.title;
        targetZoomImage.src = modalThumbnailsList[modalImageIndex];
        
        if (modalCounterText) {
            modalCounterText.textContent = `${modalImageIndex + 1} / ${modalThumbnailsList.length}`;
        }
        
        // Make the modal visible on screen instantly
        modalContainer.style.display = "block";
    }
}

// Global Event Listeners for Navigating and Closing the modal
document.addEventListener('DOMContentLoaded', () => {
    const modalContainer = document.getElementById('imageModal');
    const prevArrow = document.getElementById('modalPrevBtn');
    const nextArrow = document.getElementById('modalNextBtn');
    const closeOverlayBtn = document.querySelector('.close-modal');
    const targetZoomImage = document.getElementById('modalTargetImg');
    const modalCounterText = document.getElementById('modalCounter');

    if (!modalContainer) return;

    function shiftModalImage(direction) {
        modalImageIndex += direction;
        if (modalImageIndex >= modalThumbnailsList.length) modalImageIndex = 0;
        if (modalImageIndex < 0) modalImageIndex = modalThumbnailsList.length - 1;
        
        if (targetZoomImage) targetZoomImage.src = modalThumbnailsList[modalImageIndex];
        if (modalCounterText) modalCounterText.textContent = `${modalImageIndex + 1} / ${modalThumbnailsList.length}`;
    }

    // Arrow Buttons click handlers
    if (prevArrow) prevArrow.addEventListener('click', (e) => { e.stopPropagation(); shiftModalImage(-1); });
    if (nextArrow) nextArrow.addEventListener('click', (e) => { e.stopPropagation(); shiftModalImage(1); });

    // Keyboard controls shortcuts
    document.addEventListener('keydown', (e) => {
        if (modalContainer.style.display === "block") {
            if (e.key === "ArrowLeft") shiftModalImage(-1);
            if (e.key === "ArrowRight") shiftModalImage(1);
            if (e.key === "Escape") modalContainer.style.display = "none";
        }
    });

    // Close window clicks
    if (closeOverlayBtn) closeOverlayBtn.addEventListener('click', () => modalContainer.style.display = "none");
    modalContainer.addEventListener('click', (e) => {
        if (e.target === modalContainer) modalContainer.style.display = "none";
    });
});
