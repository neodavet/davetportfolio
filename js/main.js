// Sample portfolio data (in a real application, this would come from a backend)
const portfolioData = [
    {
        title: "Be Local - Local Business Platform",
        description: "A comprehensive e-commerce platform built with WooCommerce and UX Builder, featuring a custom dashboard and robust WordPress security measures. The platform runs on Siteground with MySQL database integration for optimal performance.",
        // image: "https://via.placeholder.com/400x300",
        technologies: ["Woocomerce", "UX Builder", "Dashboard Customization", "WordPress Security", "Zapier", "Siteground", "MySQL"],
        link: "https://be-local.life/"
    },
    {
        title: "Aerofarms - Vertical Farming Corporate Website",
        description: "A sophisticated corporate website built with WordPress and Beaver Builder, featuring advanced analytics integration and comprehensive security measures. The site is optimized for performance and hosted on WP Engine with MySQL database support.",
        // image: "https://via.placeholder.com/400x300",
        technologies: ["WordPress", "Beaver Builder", "WP Engine", "MySQL", "WordPress Security", "Web Optimization", "Web Analytics"],
        link: "https://www.aerofarms.com/"
    },
    {
        title: "Phin - Social Good Platform",
        description: "A modern web application built with React and Node.js, featuring GraphQL API integration and Contentful CMS. The platform includes Slack integration, HR system compatibility, and is hosted on AWS with MongoDB database. Includes comprehensive monitoring with Honeybadger.",
        technologies: ["React", "Node.js", "GraphQL", "Contentful", "AWS", "MongoDB", "LoadNinja", "Honeybadger"],
        link: "https://www.phinforgood.com/"
    },
    {
        title: "Praeses - Custom Corporate Website",
        description: "A fully customized WordPress website featuring custom Gutenberg blocks and a bespoke theme. The site includes custom plugin development, comprehensive web optimization, and is hosted on GoDaddy with enhanced security measures.",
        // image: "https://via.placeholder.com/400x300",
        technologies: ["WordPress","Custom Gutenberg Blocks", "Custom Theme", "ACF", "Custom Plugins", "Web Optimization", "GoDaddy"],
        link: "https://www.praeses.com/"
    },
    {
        title: "Modena Warehouse - Non-profit Community Organization",
        description: "A comprehensive WordPress website with custom theme development and Gutenberg integration. Features include Monday.com integration, Google Sheets automation, Givebutter donation system, and Klaviyo email marketing. Hosted on Siteground with MySQL database.",
        // image: "https://via.placeholder.com/400x300",
        technologies: ["WordPress", "Gutenberg", "Custom Theme", "Monday.com", "Google Sheet ", "Givebutter", "Klaviyo", "Siteground", "MySQL"],
        link: "https://modenawarehouse.com/"
    },
    {
        title: "Ballet Cuba - Dance National Company",
        description: "A custom Drupal website featuring a bespoke theme and custom data structure. The platform is built with MariaDB database and is hosted on Bluehost, including advanced content management capabilities for dance company information.",
        // image: "https://via.placeholder.com/400x300",
        technologies: ["Drupal", "Custom Theme", "Custom Data Structure", "MariaDB"],
        link: "https://balletcuba.cult.cu/"
    },
    {
        title: "Lukac's Pottery - Shopify Local Craft Store",
        description: "A fully customized Shopify e-commerce platform featuring a custom Liquid theme and real-time inventory management. The project included comprehensive site migration and optimization for a local craft store.",
        // image: "https://via.placeholder.com/400x300",
        technologies: ["Shopify", "Liquid", "Custom Theme", "Site Migration"],
        link: "https://lukacspottery.com/"
    },
    {
        title: "IpsCuba - WorldWide News Agency Platform",
        description: "A robust WordPress news platform featuring a custom theme and MariaDB database integration. The site includes comprehensive security measures, web optimization, and is hosted on Netuy with advanced content management capabilities.",
        // image: "https://via.placeholder.com/400x300",
        technologies: ["WordPress", "Custom Theme", "MariaDB", "WordPress Security", "Web Optimization", "Netuy"],
        link: "https://www.ipscuba.net/"
    },
    {
        title: "Estudio Figueroa Vives - Art Studio",
        description: "A multilingual WordPress website built with WPBakery page builder, featuring comprehensive security measures and web optimization. The site is hosted on HostPapa with MySQL database support and includes advanced content management capabilities.",
        // image: "https://via.placeholder.com/400x300",
        technologies: ["WordPress", "WPBakery", "MySQL", "Multiple Languages", "WordPress Security", "Web Optimization", "Host Papa"],
        link: "https://estudiofigueroavives.com/en/home/"
    },
    {
        title: "Madu Tours - Travel Agency",
        description: "A multilingual WordPress website built with The 7 theme framework, featuring comprehensive content management capabilities. The site is optimized for performance and includes MySQL database integration for travel agency information.",
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
        description: "A custom WordPress corporate website featuring a bespoke theme and comprehensive security measures. The site is optimized for performance and hosted on Siteground with MySQL database integration.",
        // image: "https://via.placeholder.com/400x300",
        technologies: ["WordPress", "Custom Theme", "ACF", "MySQL", "WordPress Security", "Web Optimization", "Siteground"],
        link: "https://blueoceantech.us/"
    },
    {
        title: "Dador Havana - Fashion Design Studio",
        description: "A custom WordPress e-commerce website featuring WooCommerce integration and a bespoke theme. The site includes comprehensive security measures, web optimization, and MySQL database integration for fashion design studio products.",
        // image: "https://via.placeholder.com/400x300",
        technologies: ["WordPress", "WooCommerce", "Custom Theme", "MySQL", "WordPress Security", "Web Optimization"],
        link: "https://www.dadorhavana.com/"
    },
    {
        title: "OHD Partners - Corporate Website",
        description: "A professional WordPress corporate website built with Elementor page builder, featuring comprehensive security measures and responsive design. The project included successful hack recovery, complete site migration, and extensive web optimization. The site is hosted on Siteground with MySQL database integration, ensuring robust performance and security.",
        // image: "https://via.placeholder.com/400x300",
        technologies: ["WordPress", "Elementor", "MySQL", "Hack Recovery", "Site Migration" ,"WordPress Security", "Web Optimization", "Siteground"],
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

// Mobile Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navContainer = document.querySelector('.nav-container');
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section[id]');

    // Function to update active menu item
    function updateActiveMenuItem() {
        const scrollPosition = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100; // Offset for header
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Remove active class from all links
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Add active class to corresponding link
                const activeLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }

    // Toggle menu
    mobileMenuBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        navContainer.classList.toggle('active');
        document.body.style.overflow = navContainer.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            navContainer.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!navContainer.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
            mobileMenuBtn.classList.remove('active');
            navContainer.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Update active menu item on scroll
    window.addEventListener('scroll', updateActiveMenuItem);
    
    // Initial check for active section
    updateActiveMenuItem();
}); 