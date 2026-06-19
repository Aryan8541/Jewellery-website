// ============= ENHANCED PRODUCT DATA =============
const products = [
    {
        id: 1,
        title: "Classic Gold Ring",
        price: "₹24,999",
        originalPrice: "₹34,999",
        image: "images/gold-ring-1.png",
        thumbnails: [
            "images/gold-ring-1.png",
            "images/gold-ring-2.png",
            "images/gold-ring-3.png"
        ],
        category: "Rings",
        description: "A timeless classic gold ring, perfect for any occasion. Handcrafted with 18K gold and polished to perfection.",
        detailedDescription: "This exquisite gold ring is a masterpiece of jewelry craftsmanship. Each piece is individually handcrafted by our master artisans using only the finest 18K gold. The timeless design makes it perfect for everyday wear or special occasions. With its elegant finish and comfortable fit, this ring will become your favorite accessory.",
        features: ["18K Gold", "Timeless Design", "Free Engraving"],
        rating: 4.5,
        reviews: 245,
        specifications: {
            material: "18K Gold",
            weight: "5.2g",
            dimensions: "20mm x 15mm",
            collection: "Classic Collection"
        }
    },
    {
        id: 2,
        title: "Diamond Necklace",
        price: "₹59,999",
        originalPrice: "₹74,999",
        image: "images/diamond-necklace-1.png",
        thumbnails: [
            "images/diamond-necklace-1.png",
            "images/diamond-necklace-2.png",
            "images/diamond-necklace-3.png"
        ],
        category: "Necklaces",
        description: "Elegant diamond necklace featuring a stunning 2-carat diamond. Perfect for special occasions.",
        detailedDescription: "This breathtaking diamond necklace features a 2-carat certified diamond set in a 18K gold pendant. The brilliant sparkle and elegance make it perfect for engagements, anniversaries, or any special moment. Comes with certificate of authenticity and premium gift packaging.",
        features: ["2-Carat Diamond", "18K Gold Chain", "Certificate of Authenticity"],
        rating: 5,
        reviews: 312,
        specifications: {
            material: "18K Gold",
            weight: "8.5g",
            dimensions: "25mm x 30mm",
            collection: "Diamond Collection"
        }
    },
    {
        id: 3,
        title: "Pearl Earrings",
        price: "₹15,999",
        originalPrice: "₹21,999",
        image: "images/pearl_earring_1.png",
        thumbnails: [
            "images/pearl_earring_1.png",
            "images/pearl_earring_2.png",
            "images/pearl_earring_3.png"
        ],
        category: "Earrings",
        description: "Beautiful pearl earrings with a delicate design. Freshwater pearls set in sterling silver.",
        detailedDescription: "Timeless and elegant, these pearl earrings feature premium freshwater pearls set in pure sterling silver. Perfect for both casual and formal occasions, they add a touch of sophistication to any outfit. The hypoallergenic materials make them suitable for sensitive ears.",
        features: ["Freshwater Pearls", "Sterling Silver", "Hypoallergenic"],
        rating: 4.5,
        reviews: 189,
        specifications: {
            material: "Sterling Silver",
            weight: "3.2g",
            dimensions: "12mm x 10mm",
            collection: "Pearl Collection"
        }
    },
    {
        id: 4,
        title: "Silver Bracelet",
        price: "₹12,999",
        originalPrice: "₹18,999",
        image: "images/bracelet-1.png",
        thumbnails: [
            "images/bracelet-1.png",
            "images/bracelet-2.png",
            "images/bracelet-3.png"
        ],
        category: "Bracelets",
        description: "Stunning silver bracelet with intricate detailing. Perfect for everyday wear.",
        detailedDescription: "This stunning silver bracelet features intricate detailing and a secure clasp. The versatile design complements any style, making it perfect for everyday wear or special occasions. Crafted from pure sterling silver for durability and elegance.",
        features: ["Sterling Silver", "Adjustable Fit", "Elegant Design"],
        rating: 4.5,
        reviews: 156,
        specifications: {
            material: "Sterling Silver",
            weight: "4.8g",
            dimensions: "8mm x 20cm",
            collection: "Silver Collection"
        }
    },
    {
        id: 5,
        title: "Emerald Ring",
        price: "₹34,999",
        originalPrice: "₹44,999",
        image: "images/emerald-ring-1.png",
        thumbnails: [
            "images/emerald-ring-1.png",
            "images/emerald-ring-2.png",
            "images/emerald-ring-3.png"
        ],
        category: "Rings",
        description: "Luxurious emerald ring with diamond accents. A true statement piece.",
        detailedDescription: "Make a statement with this luxurious emerald ring. Featuring a stunning natural emerald surrounded by diamond accents and set in 18K gold, this ring is a true work of art. The vibrant green color and brilliant sparkle make it perfect for those who appreciate fine jewelry.",
        features: ["Natural Emerald", "Diamond Accents", "18K Gold"],
        rating: 5,
        reviews: 278,
        specifications: {
            material: "18K Gold",
            weight: "6.7g",
            dimensions: "22mm x 18mm",
            collection: "Emerald Collection"
        }
    },
    {
        id: 6,
        title: "Gold Bracelet",
        price: "₹27,999",
        originalPrice: "₹37,999",
        image: "images/gold_bracelet_1_main.png",
        thumbnails: [
            "images/gold_bracelet_1_main.png",
            "images/gold_bracelet_2.png",
            "images/gold_bracelet_3.png"
        ],
        category: "Bracelets",
        description: "Sophisticated gold bracelet with elegant design. Perfect for both casual and formal wear.",
        detailedDescription: "This sophisticated gold bracelet features an elegant design that works perfectly for both casual and formal occasions. Crafted from 18K gold with a secure clasp, it's a versatile piece that will become a staple in your jewelry collection.",
        features: ["18K Gold", "Secure Clasp", "Timeless Style"],
        rating: 4.5,
        reviews: 204,
        specifications: {
            material: "18K Gold",
            weight: "7.2g",
            dimensions: "8mm x 19cm",
            collection: "Gold Collection"
        }
    },
    {
        id: 7,
        title: "Diamond Nosepin",
        price: "₹8,999",
        originalPrice: "₹11,999",
        image: "images/nosepin-1.png",
        thumbnails: [
            "images/nosepin-2.png",
            "images/nosepin-3.png",
            "images/nosepin-4.png"
        ],
        category: "Nosepins",
        description: "An elegant, sparkling single-stone diamond nosepin set in 18K yellow gold.",
        detailedDescription: "Add a subtle touch of elegance to your daily look with this stunning handcrafted diamond nosepin. Featuring a GH-SI certified natural diamond secured in a classic 18K yellow gold prong setting, it offers the perfect blend of comfort and brilliant sparkle.",
        features: ["Certified Diamond", "18K Yellow Gold", "Screw Back Closure"],
        rating: 4.5,
        reviews: 88,
        specifications: {
            material: "18K Yellow Gold",
            weight: "0.6g",
            dimensions: "3mm x 3mm",
            collection: "Daily Glow Collection"
        }
    },
    {
        id: 8,
        title: "Bridal Gold Necklace",
        price: "₹89,999",
        originalPrice: "₹1,04,999",
        image: "images/gold-necklace-1.png",
        thumbnails: [
            "images/gold-necklace-2.png",
            "images/gold-necklace-3.png",
            "images/gold-necklace-4.png"
        ],
        category: "Necklaces",
        description: "A magnificent handcrafted 22K gold necklace featuring intricate traditional chocker detailing.",
        detailedDescription: "A masterpiece designed for special occasions. This heavy traditional bridal necklace is meticulously handcrafted by master artisans using pure 22K gold. It features breathtaking antique finish textures and an adjustable string loop to fit gracefully.",
        features: ["22K Pure Gold", "BIS Hallmarked", "Antique Finish Texture"],
        rating: 5,
        reviews: 142,
        specifications: {
            material: "22K Yellow Gold",
            weight: "24.5g",
            dimensions: "Adjustable Choker Fit",
            collection: "Royal Heritage Collection"
        }
    }
]; // Closes the products array


let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

// ============= GET PRODUCT ID FROM URL =============
function getProductIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get('id')) || 1;
}

function loadProductDetails() {

   const productId = getProductIdFromUrl();
   const product = products[productId - 1];

   if (!product) {
      console.log("Product not found");
      return;
   }

   document.getElementById("mainImage").src = product.image;
   document.getElementById("productTitle").textContent = product.title;
   document.getElementById("productPrice").textContent = product.price;

   document.getElementById("productDescription").textContent =
      product.detailedDescription;

   document.getElementById("specMaterial").textContent =
      product.specifications.material;

   document.getElementById("specWeight").textContent =
      product.specifications.weight;

   document.getElementById("specDimensions").textContent =
      product.specifications.dimensions;

   document.getElementById("specCollection").textContent =
      product.specifications.collection;

      loadThumbnails(product.thumbnails);
updateRating(product.rating, product.reviews);

   loadThumbnails(product.thumbnails);
}

// ============= LOAD THUMBNAILS DYNAMICALLY =============
function loadThumbnails(thumbnails) {
    const thumbnailContainer = document.querySelector(".thumbnail-images");
    thumbnailContainer.innerHTML = '';
    
    // Add each thumbnail
    thumbnails.forEach((thumbImg, index) => {
        const img = document.createElement("img");
        img.src = thumbImg;
        img.alt = `View ${index + 1}`;
        img.className = "thumbnail";
        img.onclick = function() {
            changeMainImage(this);
        };
        thumbnailContainer.appendChild(img);
    });
    
    // Add a duplicate of first image as 4th thumbnail
    const img = document.createElement("img");
    img.src = thumbnails[0];
    img.alt = "View 4";
    img.className = "thumbnail";
    img.onclick = function() {
        changeMainImage(this);
    };
    thumbnailContainer.appendChild(img);
}

// ============= UPDATE RATING DISPLAY =============
function updateRating(rating, reviews) {
    const starsHtml = generateStars(rating);
    document.getElementById("productStars").innerHTML = starsHtml;
    document.getElementById("ratingText").textContent = `(${reviews} reviews)`;
    document.getElementById("avgRating").textContent = rating.toFixed(1);
    document.getElementById("totalReviews").textContent = `Based on ${reviews} reviews`;
}

// ============= GENERATE STARS HTML =============
function generateStars(rating) {
    let html = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            html += '<i class="fas fa-star"></i>';
        } else if (i - 0.5 === rating) {
            html += '<i class="fas fa-star-half-alt"></i>';
        } else {
            html += '<i class="far fa-star"></i>';
        }
    }
    return html;
}

// ============= CHANGE MAIN IMAGE =============

function changeMainImage(img) {
    // 1. Update the big main image source to match the clicked thumbnail
    document.getElementById("mainImage").src = img.src;
    
    // 2. Remove the 'active' border from ALL thumbnails first
    document.querySelectorAll('.thumbnail').forEach(thumb => {
        thumb.classList.remove('active');
    });
    
    // 3. Add the 'active' border only to the thumbnail that was just clicked
    img.classList.add('active');
}

// ============= ADD TO CART =============
function addToCart() {
    const productId = getProductIdFromUrl();
    const product = products[productId - 1];
    const material = document.getElementById("materialSelect").value;
    const size = document.getElementById("sizeSelect").value;
    const quantity = parseInt(document.getElementById("quantityInput").value);
    
    if (material === "") {
        alert("Please select a material!");
        return;
    }
    
    if (size === "") {
        alert("Please select a size!");
        return;
    }
    
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    cart.push({
        id: product.id,
        title: product.title,
        price: product.price,
        material: material,
        size: size,
        quantity: quantity,
        image: product.image
    });
    
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${quantity}x ${product.title} added to cart!`);
}


// ============= SWITCH TABS =============
function switchTab(tabIndex) {
    // Hide all tabs
    document.querySelectorAll(".tab-pane").forEach(tab => {
        tab.classList.remove("active");
    });
    
    // Remove active from all buttons
    document.querySelectorAll(".tab-btn").forEach(btn => {
        btn.classList.remove("active");
    });
    
    // Show selected tab
    document.getElementById(`tab${tabIndex}`).classList.add("active");
    document.querySelectorAll(".tab-btn")[tabIndex].classList.add("active");
}

// ============= OPEN PRODUCT =============
function openProduct(productId) {
    window.location.href = `product-detail.html?id=${productId}`;
}

// ============= INITIALIZE PAGE =============
document.addEventListener("DOMContentLoaded", function() {
    loadProductDetails();
});

// ============= SMOOTH SCROLLING =============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

// ============= SCROLL-TO-TOP BUTTON =============
const scrollTopBtn = document.createElement("button");
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.className = "scroll-top-btn";
document.body.appendChild(scrollTopBtn);

window.addEventListener("scroll", function() {
    if (scrollY > 500) {
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

// ============= MOBILE MENU =============
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

if (hamburger) {
    hamburger.addEventListener("click", function() {
        navMenu.classList.toggle("active");
    });
}

document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", function() {
        navMenu.classList.remove("active");
    });;
});;