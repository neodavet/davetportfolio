// Sample portfolio data (in a real application, this would come from a backend)
const portfolioData = [
    {
        title: "Be Local - Local Business Platform",
        description: "E-commerce platform for local businesses",
        // image: "https://via.placeholder.com/400x300",
        technologies: ["Woocomerce", "UX Builder", "Dashboard Customization", "WordPress Security", "Siteground", "MySQL"],
        link: "https://be-local.life/"
    },
    {
        title: "Aerofarms - Vertical Farming Corporate Website",
        description: "Aerofarms is a vertical farming company that grows produce in a controlled environment using artificial intelligence and precision agriculture.",
        // image: "https://via.placeholder.com/400x300",
        technologies: ["WordPress", "Beaver Builder", "WP Engine", "MySQL", "WordPress Security", "Web Optimization", "Web Analytics"],
        link: "https://www.aerofarms.com/"
    },
    {
        title: "Phin - Social Good Platform",
        description: "A donation gifting platform that helps companies build trust with employees and customers through social good campaigns. Features include Slack integration, HR system compatibility, and automated donation management.",
        technologies: ["React", "Node.js", "GraphQL", "Contentful", "AWS", "MongoDB", "LoadNinja", "Honeybadger"],
        link: "https://www.phinforgood.com/"
    },
    {
        title: "Praeses - Custom Corporate Website",
        description: "Praeses is a custom corporate website that allows users to share and discover news from around the world.",
        // image: "https://via.placeholder.com/400x300",
        technologies: ["WordPress","Custom Gutenberg Blocks", "Custom Theme", "Custom Plugins", "Web Optimization", "Go Daddy"],
        link: "https://www.praeses.com/"
    },
    {
        title: "Modena Warehouse - Non-profit Community Organization",
        description: "Modena Warehouse is a non-profit community organization that provides support to the community in Gardiner, New York.",
        // image: "https://via.placeholder.com/400x300",
        technologies: ["WordPress", "Gutenberg", "Custom Theme", "Monday.com", "Google Sheet ", "Givebutter", "Klaviyo", "Siteground", "MySQL"],
        link: "https://modenawarehouse.com/"
    },
    {
        title: "Ballet Cuba - Dance National Company",
        description: "Ballet Cuba is a dance company that performs ballet and modern dance.",
        // image: "https://via.placeholder.com/400x300",
        technologies: ["Drupal", "Custom Theme", "Custom Data Structure", "MariaDB"],
        link: "https://balletcuba.cult.cu/"
    },
    {
        title: "Lukac's Pottery - Shopify Local Craft Store",
        description: "A full-featured e-commerce platform with real-time inventory management",
        // image: "https://via.placeholder.com/400x300",
        technologies: ["Shopify", "Liquid", "Custom Theme", "Site Migration"],
        link: "https://lukacspottery.com/"
    },
    {
        title: "IpsCuba - WorldWide News Agency Platform",
        description: "IpsCuba is a social news platform that allows users to share and discover news from around the world.",
        // image: "https://via.placeholder.com/400x300",
        technologies: ["WordPress", "Custom Theme", "MariaDB", "WordPress Security", "Web Optimization", "Netuy"],
        link: "https://www.ipscuba.net/"
    },
    {
        title: "Estudio Figueroa Vives - Art Studio",
        description: "Estudio Figueroa Vives is a art studio that allows users to share and discover art from around the world.",
        // image: "https://via.placeholder.com/400x300",
        technologies: ["WordPress", "WPBakery", "MySQL", "Multiple Languages", "WordPress Security", "Web Optimization", "Host Papa"],
        link: "https://estudiofigueroavives.com/en/home/"
    },
    {
        title: "Madu Tours - Travel Agency",
        description: "Madu Tours is a travel agency that allows users to share and discover travel from around the world.",
        // image: "https://via.placeholder.com/400x300",
        technologies: ["WordPress", "The 7", "MySQL", "Multiple Languages"],
        link: "https://madutours.com/"
    },
    {
        title: "Acosta Danza - Dance Company",
        description: "Acosta Danza is a dance company that allows users to share and discover dance from around the world.",
        // image: "https://via.placeholder.com/400x300",
        technologies: ["Drupal", "Custom Theme", "Custom Data Structure", "MariaDB", "Bluehost"],
        link: "https://acostadanza.com/"
    },
    {
        title: "Blue Ocean Tech - Corporate Website",
        description: "Blue Ocean Tech is a corporate website that allows users to share and discover travel from around the world.",
        // image: "https://via.placeholder.com/400x300",
        technologies: ["WordPress", "Custom Theme", "MySQL", "WordPress Security", "Web Optimization", "Siteground"],
        link: "https://blueoceantech.us/"
    },
    {
        title: "Dador Havana - Fashion Design Studio",
        description: "Dador Havana is a fashion design studio that allows users to share and discover fashion from around the world.",
        // image: "https://via.placeholder.com/400x300",
        technologies: ["WordPress", "WooCommerce", "Custom Theme", "MySQL", "WordPress Security", "Web Optimization"],
        link: "https://www.dadorhavana.com/"
    },
    {
        title: "OHD Partners - Corporate Website",
        description: "OHD Partners is a corporate website that allows users to share and discover travel from around the world.",
        // image: "https://via.placeholder.com/400x300",
        technologies: ["WordPress", "Custom Theme", "MySQL", "Hack Recovery", "Site Migration" ,"WordPress Security", "Web Optimization", "Siteground"],
        link: "https://ohdpartners.com/"
    }
];

// Portfolio loading functionality
let currentPage = 1;
const itemsPerPage = 6;

function createPortfolioItem(item) {
    return `
        <div class="portfolio-item">
            ${item.image ? `<img src="${item.image}" alt="${item.title}">` : ''}
            <div class="portfolio-item-content">
                <h3><a href="${item.link}" target="_blank" rel="noopener noreferrer">${item.title}</a></h3>
                <p>${item.description}</p>
                <div class="technologies">
                    ${item.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
        </div>
    `;
}

function loadPortfolioItems() {
    const portfolioGrid = document.getElementById('portfolio-grid');
    const startIndex = 0;
    const endIndex = currentPage * itemsPerPage;
    const itemsToShow = portfolioData.slice(startIndex, endIndex);

    // Create a temporary container for the new items
    const tempContainer = document.createElement('div');
    tempContainer.innerHTML = itemsToShow.map(createPortfolioItem).join('');
    
    // Clear existing content
    portfolioGrid.innerHTML = '';
    
    // Add new items with animation
    const newItems = tempContainer.children;
    Array.from(newItems).forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        portfolioGrid.appendChild(item);
        
        // Trigger animation after a small delay
        setTimeout(() => {
            item.style.transition = 'opacity 1s ease, transform 1s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 200 * index); // 200ms delay between items
    });

    // Show/hide load more button
    const loadMoreBtn = document.getElementById('load-more');
    if (endIndex >= portfolioData.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'block';
    }

    // Smooth scroll to the first new item when loading more
    if (currentPage > 1) {
        const firstNewItem = portfolioGrid.children[(currentPage - 1) * itemsPerPage];
        if (firstNewItem) {
            const headerOffset = 100; // Adjust based on your header height
            const elementPosition = firstNewItem.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            // Wait for animations to start before scrolling
            setTimeout(() => {
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }, 100); // Small delay to ensure smooth transition
        }
    }
}

// Load more button click handler
document.getElementById('load-more').addEventListener('click', () => {
    currentPage++;
    loadPortfolioItems();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add scroll-based animations
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    } else {
        header.style.backgroundColor = '#fff';
    }
});

// Hero Slider
function initHeroSlider() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    // Preload images
    function preloadImages() {
        slides.forEach(slide => {
            const bgImage = slide.style.backgroundImage;
            const imageUrl = bgImage.replace(/url\(['"](.+)['"]\)/, '$1');
            const img = new Image();
            
            slide.classList.add('loading');
            
            img.onload = () => {
                slide.classList.remove('loading');
            };
            
            img.onerror = () => {
                console.error(`Failed to load image: ${imageUrl}`);
                slide.classList.remove('loading');
            };
            
            img.src = imageUrl;
        });
    }

    // Set first slide as active
    slides[0].classList.add('active');

    function nextSlide() {
        // Remove active class from current slide
        slides[currentSlide].classList.remove('active');
        
        // Update current slide index
        currentSlide = (currentSlide + 1) % slides.length;
        
        // Add active class to new slide
        slides[currentSlide].classList.add('active');
    }

    // Preload images before starting the slider
    preloadImages();

    // Change slide every 5 seconds
    setInterval(nextSlide, 5000);
}

// Initialize everything when the page loads
document.addEventListener('DOMContentLoaded', function() {
    initHeroSlider();
    loadPortfolioItems();
}); 