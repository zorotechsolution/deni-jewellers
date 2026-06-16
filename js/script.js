/* ========================================
   DENI JEWELLERS — Luxury Jewellery Website
   JavaScript — Multi-Page Version
   ======================================== */

// ==================== PRODUCT DATA ====================
var PRODUCTS = [
  // Chain
  {
    id: 1, name: 'Royal Gold Chain', category: 'chain',
    image: 'images/product-chain1.png',
    image2: 'images/product-chain1-b.png',
    image3: 'images/product-chain1-c.png',
    shortDesc: 'A magnificent 22K gold chain with intricate link design',
    description: 'The Royal Gold Chain is a masterpiece of gold craftsmanship, featuring a bold yet elegant link pattern that catches light from every angle. Forged in certified 22K yellow gold, this chain is a statement of prestige and enduring style. Each link has been individually shaped and polished by our master artisans, ensuring seamless fluidity and a luxurious drape around the neck. Whether worn alone or paired with a pendant, this chain commands attention and admiration.',
    material: '22K Yellow Gold, BIS Hallmark Certified',
    weight: '0 grams',
    price: 'Enquire Now'
  },
  {
    id: 2, name: 'Elegance Pendant Chain', category: 'chain',
    image: 'images/product-chain2.png',
    image2: 'images/product-chain2-b.png',
    image3: 'images/product-chain2-c.png',
    shortDesc: 'A delicate gold chain with a minimalist pendant',
    description: 'The Elegance Pendant Chain combines everyday wearability with refined luxury. Crafted in 18K yellow gold, the fine Italian-style box chain supports a dainty circular pendant that catches light with subtle brilliance. The lightweight design makes it perfect for daily wear while maintaining the unmistakable warmth and glow that only real gold can provide. A versatile piece that transitions effortlessly from office to occasion.',
    material: '18K Yellow Gold with BIS Hallmark',
    weight: '0 grams',
    price: 'Enquire Now'
  },
  // Bracelet
  {
    id: 3, name: 'Golden Embrace Bracelet', category: 'bracelet',
    image: 'images/product-bracelet1.png',
    image2: 'images/product-bracelet1-b.png',
    image3: 'images/product-bracelet1-c.png',
    shortDesc: 'An elegant gold bracelet with a secure box clasp',
    description: 'The Golden Embrace Bracelet wraps your wrist in the warmth of 22K gold, featuring a curated design that blends traditional Indian motifs with contemporary sophistication. The bracelet features a smooth polished finish with delicate engraving along the clasp, making it a versatile accessory for both ethnic and western attire. The secure box clasp with safety latch ensures peace of mind while wearing this treasured piece.',
    material: '22K Yellow Gold, BIS Hallmark Certified',
    weight: '0 grams',
    price: 'Enquire Now'
  },
  {
    id: 4, name: 'Diamond Tennis Bracelet', category: 'bracelet',
    image: 'images/product-bracelet2.png',
    image2: 'images/product-bracelet2-b.png',
    image3: 'images/product-bracelet2-c.png',
    shortDesc: 'A stunning diamond tennis bracelet in white gold',
    description: 'The Diamond Tennis Bracelet represents the unbroken circle of timeless elegance, featuring a continuous line of perfectly matched brilliant-cut diamonds set in lustrous 18K white gold. Each diamond is secured in a four-prong setting that maximizes light return, creating a river of brilliance that encircles the wrist. The concealed clasp with dual safety catches ensures both security and seamless beauty, making this bracelet a treasured companion for a lifetime of special moments.',
    material: '18K White Gold with VS Diamonds',
    weight: '0 grams',
    price: 'Enquire Now'
  },
  // Bangle
  {
    id: 5, name: 'Temple Gold Bangle', category: 'bangle',
    image: 'images/product-bangle1.png',
    image2: 'images/product-bangle1-b.png',
    image3: 'images/product-bangle1-c.png',
    shortDesc: 'A traditional 22K gold bangle with temple-inspired carvings',
    description: 'The Temple Gold Bangle pays homage to the rich heritage of South Indian temple jewellery, featuring intricate carvings of divine motifs that wrap around the entire circumference. Crafted in pure 22K yellow gold, each bangle is hand-engraved by artisans who have inherited this craft through generations. The substantial weight and detailed artistry make this bangle a cherished heirloom piece that celebrates the timeless beauty of Indian craftsmanship.',
    material: '22K Yellow Gold, Hand-Engraved',
    weight: '0 grams',
    price: 'Enquire Now'
  },
  {
    id: 6, name: 'Ruby Studded Bangle', category: 'bangle',
    image: 'images/product-bangle2.png',
    image2: 'images/product-bangle2-b.png',
    image3: 'images/product-bangle2-c.png',
    shortDesc: 'An ornate gold bangle adorned with vibrant ruby stones',
    description: 'The Ruby Studded Bangle is a breathtaking fusion of bold design and traditional artistry. Set in 22K yellow gold, this bangle features carefully selected Burmese rubies that are prong-set along the face, creating a striking contrast between the deep red stones and the warm gold. The edges are finished with delicate granulation work, a technique passed down through generations of Indian goldsmiths. This bangle is designed to be the centrepiece of any jewellery collection.',
    material: '22K Yellow Gold with Burmese Rubies',
    weight: '0 grams',
    price: 'Enquire Now'
  },
  // Anklet
  {
    id: 7, name: 'Traditional Gold Anklet', category: 'anklet',
    image: 'images/product-anklet1.png',
    image2: 'images/product-anklet1-b.png',
    image3: 'images/product-anklet1-c.png',
    shortDesc: 'A classic gold anklet pair with delicate bells',
    description: 'The Traditional Gold Anklet is a celebration of Indian femininity and grace, crafted in 22K yellow gold with delicate bells that produce a gentle, musical tinkle with every step. The anklet features a traditional design with intricate filigree work and tiny gold drops that add movement and charm. Whether worn for festive occasions or as an everyday symbol of elegance, this anklet embodies the warmth and beauty of Indian gold craftsmanship.',
    material: '22K Yellow Gold, BIS Hallmark Certified',
    weight: '0 grams (pair)',
    price: 'Enquire Now'
  },
  {
    id: 8, name: 'Silver Bell Anklet', category: 'anklet',
    image: 'images/product-anklet2.png',
    image2: 'images/product-anklet2-b.png',
    image3: 'images/product-anklet2-c.png',
    shortDesc: 'A sterling silver anklet with ornate bell detailing',
    description: 'The Silver Bell Anklet combines the cool luminosity of sterling silver with the charm of traditional Indian design. Crafted in BIS Hallmark certified 925 silver, this anklet features tiny silver bells and delicate oxidized detailing that highlights the craftsmanship. The anklet is lightweight yet durable, making it perfect for everyday wear. Pair it with ethnic or casual attire for a touch of bohemian elegance that celebrates artisanal tradition.',
    material: 'Sterling Silver 925, BIS Hallmark Certified',
    weight: '0 grams (pair)',
    price: 'Enquire Now'
  },
  // Necklace
  {
    id: 9, name: 'Pearl Cascade Necklace', category: 'necklace',
    image: 'images/product-necklace3.png',
    image2: 'images/product-necklace3-b.png',
    image3: 'images/product-necklace3-c.png',
    shortDesc: 'A graceful cascade of pearls with a golden clasp',
    description: 'The Pearl Cascade Necklace is a celebration of organic beauty, featuring hand-selected South Sea pearls that graduate in size along a fluid, body-hugging silhouette. Each pearl exhibits a rare, deep luster that seems to glow from within, creating an ethereal effect against the skin. The 18K gold clasp, adorned with delicate pavé diamonds, adds a touch of contemporary luxury to this classic design. This necklace drapes beautifully and moves with effortless grace.',
    material: 'South Sea Pearls with 18K Gold Clasp',
    weight: '0 grams',
    price: 'Enquire Now'
  },
  {
    id: 10, name: 'Temple Gold Necklace', category: 'necklace',
    image: 'images/product-necklace4.png',
    image2: 'images/product-necklace4-b.png',
    image3: 'images/product-necklace4-c.png',
    shortDesc: 'A traditional gold temple necklace with divine motifs',
    description: 'The Temple Gold Necklace is a magnificent tribute to South Indian heritage, featuring hand-carved depictions of divine figures and sacred symbols in pure 22K gold. The necklace sits beautifully along the collarbone, with each pendant element telling a story of devotion and artistry. Finished with a durable hook clasp and adjustable chain, this piece is designed to be the crowning glory of any festive or bridal ensemble. A true heirloom that carries the blessings of tradition.',
    material: '22K Yellow Gold, Handcrafted',
    weight: '0 grams',
    price: 'Enquire Now'
  },
  // Haram
  {
    id: 11, name: 'Lakshmi Temple Haram', category: 'haram',
    image: 'images/product-haram1.png',
    image2: 'images/product-haram1-b.png',
    image3: 'images/product-haram1-c.png',
    shortDesc: 'A long gold haram necklace with Goddess Lakshmi pendant',
    description: 'The Lakshmi Temple Haram is the quintessential South Indian bridal necklace, featuring a stunning central pendant depicting Goddess Lakshmi seated on a lotus, flanked by two peacocks. The long haram chain is crafted in 22K gold with traditional Lakshmi kasu (coin) motifs, each one hand-stamped and polished to perfection. This piece is the heart of any bridal jewellery collection, representing prosperity, grace, and the divine blessings of the Goddess of Wealth.',
    material: '22K Yellow Gold, Handcrafted Temple Jewellery',
    weight: '0 grams',
    price: 'Enquire Now'
  },
  {
    id: 12, name: 'Ruby Emerald Haram', category: 'haram',
    image: 'images/product-haram2.png',
    image2: 'images/product-haram2-b.png',
    image3: 'images/product-haram2-c.png',
    shortDesc: 'A grand haram necklace adorned with rubies and emeralds',
    description: 'The Ruby Emerald Haram is a show-stopping masterpiece that commands attention with its bold use of precious stones set in the warmth of 22K gold. The central pendant features a floral motif surrounded by cabochon rubies and emeralds, while the chain is interspersed with gold beads and stone-set links. This haram is designed for the most special occasions, where only the grandest expression of luxury will do. Each stone is hand-selected and set by our master craftsmen.',
    material: '22K Yellow Gold with Rubies & Emeralds',
    weight: '0 grams',
    price: 'Enquire Now'
  },
  // Earrings
  {
    id: 13, name: 'Gold Jhumka Earrings', category: 'earrings',
    image: 'images/product-earring3.png',
    image2: 'images/product-earring3-b.png',
    image3: 'images/product-earring3-c.png',
    shortDesc: 'Traditional gold jhumka earrings with intricate bell design',
    description: 'The Gold Jhumka Earrings are a timeless classic that every Indian woman cherishes. Crafted in 22K yellow gold, these jhumkas feature a dome-shaped bell with delicate filigree work and tiny gold drops that sway gently with movement. The top portion is adorned with a floral motif, while the bell itself is finished with a scalloped edge. Lightweight yet impactful, these jhumkas are perfect for festive occasions, weddings, and celebrations.',
    material: '22K Yellow Gold, Filigree Work',
    weight: '0 grams (pair)',
    price: 'Enquire Now'
  },
  {
    id: 14, name: 'Diamond Stud Earrings', category: 'earrings',
    image: 'images/product-earring4.png',
    image2: 'images/product-earring4-b.png',
    image3: 'images/product-earring4-c.png',
    shortDesc: 'Elegant diamond stud earrings in a classic gold setting',
    description: 'The Diamond Stud Earrings are the epitome of understated luxury, featuring brilliant-cut diamonds set in a classic four-prong 18K gold setting. These versatile studs are designed to be worn every day, from boardroom to ballroom, adding a touch of sparkle to every moment. Each diamond is hand-selected for its exceptional fire and clarity, ensuring that these studs radiate with a brilliance that is unmistakable. A timeless addition to any jewellery collection.',
    material: '18K Yellow Gold with VS Diamonds',
    weight: '0 grams (pair)',
    price: 'Enquire Now'
  },
  // Baby Collection
  {
    id: 15, name: 'Baby Gold Bangle', category: 'baby',
    image: 'images/product-baby1.png',
    image2: 'images/product-baby1-b.png',
    image3: 'images/product-baby1-c.png',
    shortDesc: 'A delicate gold bangle crafted for little ones',
    description: 'The Baby Gold Bangle is a precious first piece of jewellery for your little one, crafted in 22K yellow gold with a smooth, baby-safe finish that is gentle on delicate skin. The bangle features a simple yet charming design with a delicate engraving along the exterior, making it a meaningful gift for naming ceremonies, birthdays, and other milestones. The adjustable design ensures a comfortable fit as your child grows, making this a keepsake to treasure for years to come.',
    material: '22K Yellow Gold, BIS Hallmark Certified',
    weight: '0 grams',
    price: 'Enquire Now'
  },
  {
    id: 16, name: 'Baby Anklet & Bracelet Set', category: 'baby',
    image: 'images/product-baby2.png',
    image2: 'images/product-baby2-b.png',
    image3: 'images/product-baby2-c.png',
    shortDesc: 'An adorable gold anklet and bracelet set for babies',
    description: 'The Baby Anklet & Bracelet Set is a delightful matching duo crafted in 22K yellow gold, designed to adorn your little one with the same love and care that goes into all our pieces. The anklet features tiny gold bells that produce a gentle, musical sound, while the bracelet is finished with a delicate heart-shaped charm. Both pieces feature a secure lobster clasp for safety and an extender chain for growing wrists and ankles. A beautiful gift set for newborns and infants.',
    material: '22K Yellow Gold, BIS Hallmark Certified',
    weight: '0 grams (set)',
    price: 'Enquire Now'
  },
  // Nose Pin
  {
    id: 17, name: 'Diamond Nose Pin', category: 'nosepin',
    image: 'images/product-nosepin1.png',
    image2: 'images/product-nosepin1-b.png',
    image3: 'images/product-nosepin1-c.png',
    shortDesc: 'An elegant gold nose pin with a brilliant diamond',
    description: 'The Diamond Nose Pin is a refined expression of tradition and modern elegance, featuring a single brilliant-cut diamond set in a petite 18K gold base. The secure screw-back mechanism ensures comfort and peace of mind, while the minimalist design allows the diamond to take centre stage. This nose pin is perfect for everyday wear and adds a touch of sparkle that beautifully complements Indian and western attire alike. A must-have piece for every woman who celebrates her heritage with style.',
    material: '18K Yellow Gold with VS Diamond',
    weight: '0 grams',
    price: 'Enquire Now'
  },
  {
    id: 18, name: 'Gold Nose Hoop', category: 'nosepin',
    image: 'images/product-nosepin2.png',
    image2: 'images/product-nosepin2-b.png',
    image3: 'images/product-nosepin2-c.png',
    shortDesc: 'A classic gold nose hoop with a smooth finish',
    description: 'The Gold Nose Hoop is a timeless accessory that effortlessly bridges tradition and contemporary style. Crafted in 22K yellow gold, this delicate hoop features a smooth polished finish and a secure click-top closure that makes wearing it easy and comfortable. The hoop sits perfectly along the curve of the nostril, adding a warm golden glow that enhances your natural beauty. Whether paired with ethnic jewellery or worn as a standalone statement, this nose hoop is an essential piece.',
    material: '22K Yellow Gold, BIS Hallmark Certified',
    weight: '0 grams',
    price: 'Enquire Now'
  },
  // Ring
  {
    id: 19, name: 'Classic Gold Ring', category: 'ring',
    image: 'images/gold_ring_angle1_top.png',
    image2: 'images/gold_ring_angle2_side.png',
    image3: 'images/gold_ring_angle3_low.png',
    shortDesc: 'A classic 22K gold ring with a polished, elegant band',
    description: 'The Classic Gold Ring is a timeless testament to simplicity and grace. Expertly fashioned from certified 22K yellow gold, this ring features a sleek, highly polished band designed for daily wear. Its minimalist design is both modern and traditional, offering a comfortable fit and a subtle, warm glow. Perfect as a wedding band or an everyday accessory, it represents the everlasting purity of gold.',
    material: '22K Yellow Gold, BIS Hallmark Certified',
    weight: '0 grams',
    price: 'Enquire Now'
  },
  {
    id: 20, name: 'Floral Heart Elegance Ring', category: 'ring',
    image: 'images/signet_ring_angle1_top.png',
    image2: 'images/signet_ring_angle2_side.png',
    image3: 'images/signet_ring_angle3_tilted.png',
    shortDesc: 'Signet Ring features a heart-shaped bezel with an elegant five-petal floral motif,',
    description: 'The Amora Blossom Signet Ring is a timeless expression of elegance and romance, meticulously crafted in radiant 24K polished gold. Featuring a distinctive heart-shaped bezel adorned with a delicately sculpted five-petal flower, this exquisite design symbolizes love, beauty, and enduring grace. The smooth polished finish and refined craftsmanship create a luxurious statement piece that seamlessly blends modern sophistication with classic charm.',
    material: '18K White Gold',
    weight: '0 grams',
    price: 'Enquire Now'
  },
  // Men's Chain
  {
    id: 21, name: 'Men\'s Solid Curb Chain', category: 'mens-chain',
    image: 'images/mens_chain_angle1_top.png',
    image2: 'images/mens_chain_angle2_side.png',
    image3: 'images/mens_chain_angle3_tilted.png',
    shortDesc: 'A heavy, masculine 22K gold curb chain',
    description: 'Crafted in premium 22K gold, this Men\'s Solid Curb Chain features classic, flat interlocking links that lie comfortably against the skin. Its bold, robust silhouette offers an expression of strength and timeless luxury. Finished with a heavy-duty clasp for secure wear, this chain is perfect for the modern gentleman who appreciates fine craftsmanship and substantial presence.',
    material: '22K Yellow Gold, BIS Hallmark Certified',
    weight: '0 grams',
    price: 'Enquire Now'
  },
  {
    id: 23, name: 'Men\'s Executive Figaro Chain', category: 'mens-chain',
    image: 'images/herringbone_chain_angle1_top.png',
    image2: 'images/herringbone_chain_angle2_side.png',
    image3: 'images/herringbone_chain_angle3_tilted.png',
    shortDesc: 'A premium, high-polished 22K gold Figaro chain',
    description: 'The Men\'s Executive Figaro Chain is a masterclass in modern masculine style, showcasing a classic pattern of alternating short and elongated links. Forged in certified 22K yellow gold with a flawless high-polish finish, it drapes smoothly and offers a striking balance of sophistication and strength. Secured with a custom-engineered lobster clasp, this chain is designed for daily comfort and long-lasting durability.',
    material: '22K Yellow Gold, BIS Hallmark Certified',
    weight: '0 grams',
    price: 'Enquire Now'
  },
  // Thali Gold
  {
    id: 22, name: 'Divine Thali Chain', category: 'Thali',
    image: 'images/thali 1.png',
    image2: 'images/thali 2.png',
    image3: 'images/thali 3.png',
    shortDesc: 'A traditional high-purity Thailand gold chain with S-clasp',
    description: 'Celebrate tradition, devotion, and timeless craftsmanship with the Sri Lakshmi Ganesha Divine Thali Chain. Meticulously crafted in radiant gold, this exquisite design features sacred Lakshmi and Ganesha motifs symbolizing prosperity, wisdom, and divine blessings. The elegant temple-inspired centerpiece, combined with intricately detailed gold elements, reflects the rich heritage of South Indian jewellery artistry',
    material: '23K Yellow Gold, Certified Purity',
    weight: '0 grams',
    price: 'Enquire Now'
  },
  {
    id: 24, name: 'Kemp Kalyani Gold Thali', category: 'Thali',
    image: 'images/thali 4.png',
    image2: 'images/thali 5.png',
    image3: 'images/thali 6.png',
    shortDesc: '"Where tradition meets timeless beauty — crafted for the woman who carries her culture with grace."',
    description: 'Adorn yourself with timeless elegance — the Kemp Kalyani Gold Necklace, a masterpiece of traditional South Indian craftsmanship. Featuring intricately filigree-worked oval beads set with deep crimson Kemp (ruby) stones, this necklace is a celebration of heritage and femininity.',
    material: '23K Yellow Gold, Certified Purity',
    weight: '0 grams',
    price: 'Enquire Now'
  }
];

// ==================== COLLECTIONS PAGE ====================
var currentFilter = 'all';

function renderCollections() {
  var grid = document.getElementById('collectionsGrid');
  if (!grid) return;

  var filtered = currentFilter === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(function(p) { return p.category === currentFilter; });

  grid.innerHTML = '';

  filtered.forEach(function(product) {
    var col = document.createElement('div');
    col.className = 'col-sm-6 col-lg-4';
    col.innerHTML =
      '<a href="product.html?id=' + product.id + '" class="text-decoration-none">' +
        '<div class="collections-product-card">' +
          '<div class="product-img-wrap">' +
            '<img src="' + product.image + '" alt="' + product.name + '" class="product-img">' +
          '</div>' +
          '<div class="product-info">' +
            '<p class="product-category-tag">' + product.category.charAt(0).toUpperCase() + product.category.slice(1) + '</p>' +
            '<h3>' + product.name + '</h3>' +
            '<p>' + product.shortDesc + '</p>' +
            '<span class="view-details-link">View Details &rarr;</span>' +
          '</div>' +
        '</div>' +
      '</a>';
    grid.appendChild(col);
  });
}

function filterCollection(category) {
  currentFilter = category;

  document.querySelectorAll('#collectionFilters .btn-filter').forEach(function(btn) {
    btn.classList.remove('active');
    if (btn.getAttribute('data-category') === category) {
      btn.classList.add('active');
    }
  });

  renderCollections();

  // Scroll to products grid
  var grid = document.getElementById('collectionsGrid');
  if (grid) {
    grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// ==================== PRODUCT DETAILS PAGE ====================
function loadProduct() {
  var params = new URLSearchParams(window.location.search);
  var productId = parseInt(params.get('id'));
  var product = PRODUCTS.find(function(p) { return p.id === productId; });

  if (!product) {
    window.location.href = 'collections.html';
    return;
  }

  // Update page title
  document.title = product.name + ' — DENI JEWELLERS Luxury Jewellery';

  // Fill product details
  document.getElementById('productCategory').textContent = product.category;
  document.getElementById('productTitle').textContent = product.name;
  document.getElementById('productDescription').textContent = product.description;
  document.getElementById('productMaterial').textContent = product.material;
  document.getElementById('productWeight').textContent = product.weight;
  document.getElementById('productPrice').textContent = product.price;

  // Images
  document.getElementById('mainProductImage').src = product.image;
  document.getElementById('mainProductImage').alt = product.name;
  document.getElementById('thumb1').src = product.image;
  document.getElementById('thumb2').src = product.image2 || product.image;
  document.getElementById('thumb3').src = product.image3 || product.image;

  // Reset thumbnail active state
  document.querySelectorAll('.thumbnail-btn').forEach(function(btn, i) {
    btn.classList.toggle('active', i === 0);
  });

  // WhatsApp link
  var message = encodeURIComponent('Hi! I\'m interested in the ' + product.name + '. Could you please share more details?');
  document.getElementById('whatsappEnquiry').href = 'https://wa.me/917448844005?text=' + message;
}

// Store current product for thumbnail switching
var currentProductImages = [];

function changeProductImage(index) {
  var product = PRODUCTS.find(function(p) {
    return p.image === document.getElementById('thumb1').src.split('/').pop() ||
           document.getElementById('mainProductImage').src.includes(p.image.replace('images/', ''));
  });

  // Get all images for current product
  var mainImg = document.getElementById('mainProductImage');
  var currentSrc = mainImg.src;
  var thumbs = [
    document.getElementById('thumb1').src,
    document.getElementById('thumb2').src,
    document.getElementById('thumb3').src
  ];

  // Set main image to clicked thumbnail
  mainImg.src = thumbs[index];

  // Update active thumbnail
  document.querySelectorAll('.thumbnail-btn').forEach(function(btn, i) {
    btn.classList.toggle('active', i === index);
  });
}

// ==================== CONTACT FORM ====================
function handleFormSubmit(event) {
event.preventDefault();

// Get form values
var name = document.getElementById('contactName').value;
var email = document.getElementById('contactEmail').value;
var phone = document.getElementById('contactPhone').value;
var message = document.getElementById('contactMessage').value;

// Your WhatsApp Number (replace with actual number)
var whatsappNumber = "917448844005";

// Create WhatsApp message
var whatsappMessage =
`Hello DENI JEWELLERS,

📌 New Contact Form Submission

👤 Name: ${name}
📧 Email: ${email}
📱 Phone: ${phone}
💬 Message: ${message}`;

// Open WhatsApp
var whatsappURL =
`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

window.open(whatsappURL, '_blank');

// Show Success Message
var successMsg = document.getElementById('formSuccess');
successMsg.classList.remove('d-none');

// Reset Form
document.getElementById('contactForm').reset();

setTimeout(function() {
successMsg.classList.add('d-none');
}, 4000);
}


// ==================== SCROLL EFFECTS ====================

// Navbar scroll effect
function handleNavScroll() {
  var nav = document.getElementById('mainNav');
  if (!nav) return;
  if (window.scrollY > 20) {
    nav.classList.add('scrolled');
  } else {
    // Only remove scrolled on home page (hero page)
    if (document.querySelector('.hero-section')) {
      nav.classList.remove('scrolled');
    }
  }
}

// Reveal on scroll (Intersection Observer)
function setupRevealObserver() {
  var reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    reveals.forEach(function(el) {
      observer.observe(el);
    });
  } else {
    reveals.forEach(function(el) {
      el.classList.add('visible');
    });
  }
}

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', function() {
  // Scroll listener for navbar
  window.addEventListener('scroll', handleNavScroll);
  handleNavScroll();

  // Setup reveal animations
  setupRevealObserver();

  // Initialize collections page if on it
  if (document.getElementById('collectionsGrid')) {
    renderCollections();
  }

  // Initialize product page if on it
  if (document.getElementById('mainProductImage')) {
    loadProduct();
  }
});
