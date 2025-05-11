// Sample portfolio data (in a real application, this would come from a backend)
const portfolioData = [
    {
        title: "E-commerce Platform",
        description: "A full-featured e-commerce platform with real-time inventory management",
        image: "https://via.placeholder.com/400x300",
        technologies: ["React", "Node.js", "MongoDB"]
    },
    {
        title: "Healthcare Management System",
        description: "Comprehensive healthcare management solution for clinics",
        image: "https://via.placeholder.com/400x300",
        technologies: ["Vue.js", "Python", "PostgreSQL"]
    },
    {
        title: "Financial Dashboard",
        description: "Real-time financial data visualization and analytics platform",
        image: "https://via.placeholder.com/400x300",
        technologies: ["Angular", "Java", "MySQL"]
    },
    {
        title: "Social Media Platform",
        description: "Modern social networking platform with real-time features",
        image: "https://via.placeholder.com/400x300",
        technologies: ["React", "Node.js", "MongoDB"]
    },
    {
        title: "Project Management Tool",
        description: "Collaborative project management solution for teams",
        image: "https://via.placeholder.com/400x300",
        technologies: ["Vue.js", "Python", "PostgreSQL"]
    },
    {
        title: "Educational Platform",
        description: "Online learning management system with video conferencing",
        image: "https://via.placeholder.com/400x300",
        technologies: ["React", "Node.js", "MongoDB"]
    }
];

// Portfolio loading functionality
let currentPage = 1;
const itemsPerPage = 6;

function createPortfolioItem(item) {
    return `
        <div class="col-md-6 col-lg-4">
            <div class="portfolio-item card h-100">
                <img src="${item.image}" class="card-img-top" alt="${item.title}">
                <div class="card-body">
                    <h3 class="card-title h5">${item.title}</h3>
                    <p class="card-text">${item.description}</p>
                    <div class="technologies">
                        ${item.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
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
        portfolioGrid.appendChild(item);
        
        // Trigger animation after a small delay
        setTimeout(() => {
            item.querySelector('.portfolio-item').classList.add('visible');
        }, 200 * index);
    });

    // Show/hide load more button
    const loadMoreBtn = document.getElementById('load-more');
    if (endIndex >= portfolioData.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'block';
    }

    // Smooth scroll to the first new item
    if (currentPage > 1) {
        const firstNewItem = portfolioGrid.children[(currentPage - 1) * itemsPerPage];
        if (firstNewItem) {
            const headerOffset = 76; // Bootstrap navbar height
            const elementPosition = firstNewItem.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
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
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const headerOffset = 76; // Bootstrap navbar height
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Initialize portfolio on page load
document.addEventListener('DOMContentLoaded', function() {
    loadPortfolioItems();
}); 